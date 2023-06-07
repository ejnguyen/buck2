/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

//! Cross-platform process killing.

pub fn process_exists(pid: u32) -> anyhow::Result<bool> {
    os_specific::process_exists(pid)
}

/// Send `KILL` or call `TerminateProcess` on the given process.
///
/// Returns a KilledProcessHandle that can be used to observe the termination of the killed process.
pub fn kill(pid: u32) -> anyhow::Result<Box<dyn KilledProcessHandle>> {
    match os_specific::kill(pid)? {
        Some(handle) => Ok(Box::new(handle) as _),
        None => Ok(Box::new(NoProcess) as _),
    }
}

pub trait KilledProcessHandle {
    fn has_exited(&self) -> anyhow::Result<bool>;
}

/// Returned when os_specific::kill reports that nothing was killed because the process wasn't even
/// running.
struct NoProcess;

impl KilledProcessHandle for NoProcess {
    fn has_exited(&self) -> anyhow::Result<bool> {
        Ok(true)
    }
}

#[cfg(unix)]
mod os_specific {
    use anyhow::Context;
    use nix::sys::signal::Signal;

    use crate::kill::KilledProcessHandle;

    pub(crate) fn process_exists(pid: u32) -> anyhow::Result<bool> {
        let pid = nix::unistd::Pid::from_raw(
            pid.try_into()
                .with_context(|| format!("Integer overflow converting pid {} to pid_t", pid))?,
        );
        match nix::sys::signal::kill(pid, None) {
            Ok(_) => Ok(true),
            Err(nix::errno::Errno::ESRCH) => Ok(false),
            Err(e) => Err(e)
                .with_context(|| format!("unexpected error checking if process {} exists", pid)),
        }
    }

    fn process_exists_impl(pid: nix::unistd::Pid) -> anyhow::Result<bool> {
        match nix::sys::signal::kill(pid, None) {
            Ok(_) => Ok(true),
            Err(nix::errno::Errno::ESRCH) => Ok(false),
            Err(e) => Err(e)
                .with_context(|| format!("unexpected error checking if process {} exists", pid)),
        }
    }

    pub(super) fn kill(pid: u32) -> anyhow::Result<Option<impl KilledProcessHandle>> {
        let pid = nix::unistd::Pid::from_raw(
            pid.try_into()
                .with_context(|| format!("Integer overflow converting pid {} to pid_t", pid))?,
        );

        match nix::sys::signal::kill(pid, Signal::SIGKILL) {
            Ok(()) => Ok(Some(UnixKilledProcessHandle { pid })),
            Err(nix::errno::Errno::ESRCH) => Ok(None),
            Err(e) => Err(e).with_context(|| format!("Failed to kill pid {}", pid)),
        }
    }

    struct UnixKilledProcessHandle {
        pid: nix::unistd::Pid,
    }

    impl KilledProcessHandle for UnixKilledProcessHandle {
        fn has_exited(&self) -> anyhow::Result<bool> {
            Ok(!process_exists_impl(self.pid)?)
        }
    }
}

#[cfg(windows)]
pub mod os_specific {
    use std::io;
    use std::time::Duration;

    use anyhow::Context;
    use winapi::shared::minwindef::FILETIME;
    use winapi::um::minwinbase::STILL_ACTIVE;
    use winapi::um::processthreadsapi::GetExitCodeProcess;
    use winapi::um::processthreadsapi::GetProcessTimes;
    use winapi::um::processthreadsapi::OpenProcess;
    use winapi::um::processthreadsapi::TerminateProcess;
    use winapi::um::winnt::PROCESS_QUERY_INFORMATION;
    use winapi::um::winnt::PROCESS_TERMINATE;

    use crate::kill::KilledProcessHandle;
    use crate::winapi_handle::WinapiHandle;

    fn open_process(desired_access: u32, pid: u32) -> Option<WinapiHandle> {
        let proc_handle = unsafe { OpenProcess(desired_access, 0, pid) };
        if proc_handle.is_null() {
            // If proc_handle is null, process died already, or other error like access denied.
            // TODO(nga): handle error properly.
            return None;
        }
        Some(unsafe { WinapiHandle::new(proc_handle) })
    }

    pub(crate) fn process_exists(pid: u32) -> anyhow::Result<bool> {
        Ok(open_process(PROCESS_QUERY_INFORMATION, pid).is_some())
    }

    pub(super) fn kill(pid: u32) -> anyhow::Result<Option<impl KilledProcessHandle>> {
        let proc_handle = match open_process(PROCESS_TERMINATE | PROCESS_QUERY_INFORMATION, pid) {
            Some(proc_handle) => proc_handle,
            None => return Ok(None),
        };

        unsafe {
            if TerminateProcess(proc_handle.handle(), 1) == 0 {
                // Stash the error before calling `process_exists` to avoid overwriting it.
                let os_error = io::Error::last_os_error();

                // From WinAPI doc:
                // After a process has terminated, call to `TerminateProcess` with open handles
                // to the process fails with `ERROR_ACCESS_DENIED` (5) error code.
                let mut exit_code = 0;
                if GetExitCodeProcess(proc_handle.handle(), &mut exit_code) != 0 {
                    if exit_code != STILL_ACTIVE {
                        return Ok(None);
                    }
                }

                return Err(os_error).with_context(|| format!("Failed to kill pid {}", pid));
            }

            Ok(Some(WindowsKilledProcessHandle {
                pid,
                handle: proc_handle,
            }))
        }
    }

    /// Windows reuses PIDs more aggressively than UNIX, so there we add an extra guard in the form
    /// of the process creation time.
    struct WindowsKilledProcessHandle {
        pid: u32,
        handle: WinapiHandle,
    }

    impl KilledProcessHandle for WindowsKilledProcessHandle {
        fn has_exited(&self) -> anyhow::Result<bool> {
            let mut exit_code = 0;

            if unsafe { GetExitCodeProcess(self.handle.handle(), &mut exit_code) } != 0 {
                return Ok(exit_code != STILL_ACTIVE);
            }

            Err(io::Error::last_os_error())
                .with_context(|| format!("Failed to call GetExitCodeProcess for pid {}", self.pid))
        }
    }

    /// Returns process creation time with 100 ns precision.
    pub fn process_creation_time(pid: u32) -> Option<Duration> {
        let proc_handle = open_process(PROCESS_QUERY_INFORMATION, pid)?;
        process_creation_time_impl(&proc_handle, pid).ok()
    }

    fn process_creation_time_impl(proc: &WinapiHandle, pid: u32) -> anyhow::Result<Duration> {
        let mut creation_time: FILETIME = unsafe { std::mem::zeroed() };
        let mut exit_time: FILETIME = unsafe { std::mem::zeroed() };
        let mut kernel_time: FILETIME = unsafe { std::mem::zeroed() };
        let mut user_time: FILETIME = unsafe { std::mem::zeroed() };

        let result = unsafe {
            GetProcessTimes(
                proc.handle(),
                &mut creation_time,
                &mut exit_time,
                &mut kernel_time,
                &mut user_time,
            )
        };

        if result == 0 {
            return Err(io::Error::last_os_error())
                .with_context(|| format!("Failed to call GetProcessTimes for pid {}", pid));
        }

        // `creation_time` stores intervals of 100 ns, so multiply by 100 to obtain
        // proper nanoseconds. The u64 type will overflow around the year 2185.
        let intervals =
            ((creation_time.dwHighDateTime as u64) << 32) | (creation_time.dwLowDateTime as u64);
        Ok(Duration::from_nanos(intervals * 100))
    }
}

#[cfg(test)]
mod tests {
    use std::time::Duration;
    use std::time::Instant;

    use buck2_util::process::background_command;

    use crate::kill::kill;
    use crate::kill::process_exists;

    #[test]
    fn test_process_exists_kill() {
        let mut command = if !cfg!(windows) {
            let mut command = background_command("sh");
            command.args(["-c", "sleep 10000"]);
            command
        } else {
            let mut command = background_command("powershell");
            command.args(["-c", "Start-Sleep -Seconds 10000"]);
            command
        };
        let mut child = command.spawn().unwrap();
        let pid = child.id().try_into().unwrap();
        for _ in 0..5 {
            assert!(process_exists(pid).unwrap());
        }

        let handle = kill(pid).unwrap();

        child.wait().unwrap();
        // Drop child to ensure the Windows handle is closed.
        drop(child);

        if !cfg!(windows) {
            assert!(handle.has_exited().unwrap());
        } else {
            let start = Instant::now();
            loop {
                if handle.has_exited().unwrap() {
                    break;
                }
                assert!(
                    start.elapsed() < Duration::from_secs(20),
                    "Timed out waiting for process to die"
                );
                std::thread::sleep(Duration::from_millis(100));
            }
        }
    }
}
