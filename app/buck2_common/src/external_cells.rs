/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under both the MIT license found in the
 * LICENSE-MIT file in the root directory of this source tree and the Apache
 * License, Version 2.0 found in the LICENSE-APACHE file in the root directory
 * of this source tree.
 */

use std::sync::Arc;

use async_trait::async_trait;
use buck2_core::cells::external::ExternalCellOrigin;
use buck2_core::cells::name::CellName;
use buck2_util::late_binding::LateBinding;
use dice::DiceComputations;

use crate::dice::file_ops::delegate::FileOpsDelegate;

#[async_trait]
pub trait ExternalCellsImpl: Send + Sync + 'static {
    async fn get_file_ops_delegate(
        &self,
        ctx: &mut DiceComputations<'_>,
        cell_name: CellName,
        origin: ExternalCellOrigin,
    ) -> anyhow::Result<Arc<dyn FileOpsDelegate>>;

    fn check_bundled_cell_exists(&self, cell_name: CellName) -> anyhow::Result<()>;
}

pub static EXTERNAL_CELLS_IMPL: LateBinding<&'static dyn ExternalCellsImpl> =
    LateBinding::new("EXTERNAL_CELLS_IMPL");
