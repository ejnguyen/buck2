"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2228],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>m,MDXProvider:()=>u,mdx:()=>h,useMDXComponents:()=>d,withMDXComponents:()=>o});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),o=function(e){return function(t){var r=d(t.components);return n.createElement(e,i({},t,{components:r}))}},d=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(m.Provider,{value:t},e.children)},x="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),o=d(r),u=a,x=o["".concat(s,".").concat(u)]||o[u]||g[u]||i;return r?n.createElement(x,l(l({ref:t},m),{},{components:r})):n.createElement(x,l({ref:t},m))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[x]="string"==typeof e?e:a,s[1]=l;for(var m=2;m<i;m++)s[m]=r[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},72327:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const i={id:"uquery",title:"Uquery Environment"},s="Uquery Environment",l={unversionedId:"users/query/uquery",id:"users/query/uquery",title:"Uquery Environment",description:"Query Value Types",source:"@site/../docs/users/query/uquery.generated.md",sourceDirName:"users/query",slug:"/users/query/uquery",permalink:"/docs/users/query/uquery",draft:!1,tags:[],version:"current",frontMatter:{id:"uquery",title:"Uquery Environment"},sidebar:"manualSidebar",previous:{title:"Cquery Environment",permalink:"/docs/users/query/cquery"},next:{title:"Deferred Materialization",permalink:"/docs/users/advanced/deferred_materialization"}},p={},m=[{value:"Query Value Types",id:"query-value-types",level:2},{value:"Common query functions",id:"common-query-functions",level:2},{value:"allpaths(from: <em>target expression</em>, to: <em>target expression</em>)",id:"allpathsfrom-target-expression-to-target-expression",level:3},{value:"somepath(from: <em>target expression</em>, to: <em>target expression</em>)",id:"somepathfrom-target-expression-to-target-expression",level:3},{value:"attrfilter(attr: <em>string</em>, value: <em>string</em>, targets: <em>target expression</em>)",id:"attrfilterattr-string-value-string-targets-target-expression",level:3},{value:"nattrfilter(attr: <em>string</em>, value: <em>string</em>, targets: <em>target expression</em>)",id:"nattrfilterattr-string-value-string-targets-target-expression",level:3},{value:"attrregexfilter(attr: <em>string</em>, value: <em>string</em>, targets: <em>target expression</em>)",id:"attrregexfilterattr-string-value-string-targets-target-expression",level:3},{value:"buildfile(targets: <em>target expression</em>)",id:"buildfiletargets-target-expression",level:3},{value:"rbuildfiles(universe: <em>file expression</em>, argset: <em>file expression</em>)",id:"rbuildfilesuniverse-file-expression-argset-file-expression",level:3},{value:"allbuildfiles(universe: <em>target expression</em>)",id:"allbuildfilesuniverse-target-expression",level:3},{value:"deps(targets: <em>target expression</em>, depth: ?<em>integer</em>, captured_expr: ?<em>query expression</em>)",id:"depstargets-target-expression-depth-integer-captured_expr-query-expression",level:3},{value:"filter(regex: <em>string</em>, set: <em>target or file expression</em>)",id:"filterregex-string-set-target-or-file-expression",level:3},{value:"inputs(targets: <em>target expression</em>)",id:"inputstargets-target-expression",level:3},{value:"kind(regex: <em>string</em>, targets: <em>target expression</em>)",id:"kindregex-string-targets-target-expression",level:3},{value:"labels(attr: <em>string</em>, targets: <em>target expression</em>)",id:"labelsattr-string-targets-target-expression",level:3},{value:"owner(files: <em>file expression</em>)",id:"ownerfiles-file-expression",level:3},{value:"targets_in_buildfile(files: <em>file expression</em>)",id:"targets_in_buildfilefiles-file-expression",level:3},{value:"rdeps(universe: <em>target expression</em>, targets: <em>target expression</em>, depth: ?<em>integer</em>)",id:"rdepsuniverse-target-expression-targets-target-expression-depth-integer",level:3},{value:"testsof(targets: <em>target expression</em>)",id:"testsoftargets-target-expression",level:3},{value:"first_order_deps()",id:"first_order_deps",level:3},{value:"target_deps()",id:"target_deps",level:3},{value:"exec_deps()",id:"exec_deps",level:3},{value:"configuration_deps()",id:"configuration_deps",level:3},{value:"toolchain_deps()",id:"toolchain_deps",level:3},{value:"intersect(left: <em>any value</em>, right: <em>any value</em>)",id:"intersectleft-any-value-right-any-value",level:3},{value:"except(left: <em>any value</em>, right: <em>any value</em>)",id:"exceptleft-any-value-right-any-value",level:3},{value:"union(left: <em>any value</em>, right: <em>any value</em>)",id:"unionleft-any-value-right-any-value",level:3}],o={toc:m};function d(e){let{components:t,...r}=e;return(0,a.mdx)("wrapper",(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"uquery-environment"},"Uquery Environment"),(0,a.mdx)("h2",{id:"query-value-types"},"Query Value Types"),(0,a.mdx)("p",null,"*","[string]",": a string. For example ",(0,a.mdx)("inlineCode",{parentName:"p"},"non_quoted_string")," or ",(0,a.mdx)("inlineCode",{parentName:"p"},'"quoted string"')),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("em",{parentName:"li"},"string"),": a string. For example ",(0,a.mdx)("inlineCode",{parentName:"li"},"non_quoted_string")," or ",(0,a.mdx)("inlineCode",{parentName:"li"},'"quoted string"'))),(0,a.mdx)("p",null,"*","[integer]",": an integer. query integers must be positive and fit in a ",(0,a.mdx)("inlineCode",{parentName:"p"},"u32")),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("em",{parentName:"li"},"integer"),": an integer. query integers must be positive and fit in a ",(0,a.mdx)("inlineCode",{parentName:"li"},"u32"))),(0,a.mdx)("p",null,"*","[target expression]",": a target expression, either a literal or the return value of a function"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("em",{parentName:"li"},"target expression"),": A target set expression. This could be a literal build target (",(0,a.mdx)("inlineCode",{parentName:"li"},'"cell//some:target"'),"), a literal build target pattern (",(0,a.mdx)("inlineCode",{parentName:"li"},'"cell//package:"')," or ",(0,a.mdx)("inlineCode",{parentName:"li"},'"cell//recursive/..."'),") or the result of another function that returns a target set. For queries in cli commands (like ",(0,a.mdx)("inlineCode",{parentName:"li"},"buck2 query"),"), literals can be relative to the current working dir (like ",(0,a.mdx)("inlineCode",{parentName:"li"},"some:target")," or ",(0,a.mdx)("inlineCode",{parentName:"li"},"..."),").")),(0,a.mdx)("p",null,"*","[file expression]",": a file expression, either a literal or the return value of a function"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("em",{parentName:"li"},"file expression"),": A file set expression. This could be a file literal like ",(0,a.mdx)("inlineCode",{parentName:"li"},"path/to/a.file")," or the return value of a function that returns files (for example, the ",(0,a.mdx)("inlineCode",{parentName:"li"},"buildfile()")," function).")),(0,a.mdx)("p",null,"*","[target or file expression]",": a file or target expression, either a literal or the return value of a function"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("em",{parentName:"li"},"target or file expression"),": A file set or target set expression. This could be a literal like ",(0,a.mdx)("inlineCode",{parentName:"li"},"path/to/a.file")," or ",(0,a.mdx)("inlineCode",{parentName:"li"},'"cell//some:target"'),",\nor the return value of a function that returns files or targets.")),(0,a.mdx)("p",null,"*","[query expression]",": a valid query expression, evaluated in a function-specific context"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("em",{parentName:"li"},"query expression"),": A query expression. This is used for functions that capture an expression and evaluate it in another context. For example, the ",(0,a.mdx)("inlineCode",{parentName:"li"},"deps()")," function can accept an expression that it uses to find the children of a node to customize the deps traversal.")),(0,a.mdx)("p",null,"*","[any value]",": Any query value."),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("em",{parentName:"li"},"any value"),": Any query value.")),(0,a.mdx)("h2",{id:"common-query-functions"},"Common query functions"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"allpaths(from: ",(0,a.mdx)("em",{parentName:"p"},"target expression"),", to: ",(0,a.mdx)("em",{parentName:"p"},"target expression"),"): Computes all dependency paths.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"somepath(from: ",(0,a.mdx)("em",{parentName:"p"},"target expression"),", to: ",(0,a.mdx)("em",{parentName:"p"},"target expression"),")")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"attrfilter(attr: ",(0,a.mdx)("em",{parentName:"p"},"string"),", value: ",(0,a.mdx)("em",{parentName:"p"},"string"),", targets: ",(0,a.mdx)("em",{parentName:"p"},"target expression"),"): The ",(0,a.mdx)("inlineCode",{parentName:"p"},"attrfilter(attribute, value, targets)")," operator evaluates the given target expression and filters the resulting build targets to those where the specified attribute contains the specified value.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"nattrfilter(attr: ",(0,a.mdx)("em",{parentName:"p"},"string"),", value: ",(0,a.mdx)("em",{parentName:"p"},"string"),", targets: ",(0,a.mdx)("em",{parentName:"p"},"target expression"),")")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"attrregexfilter(attr: ",(0,a.mdx)("em",{parentName:"p"},"string"),", value: ",(0,a.mdx)("em",{parentName:"p"},"string"),", targets: ",(0,a.mdx)("em",{parentName:"p"},"target expression"),")")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"buildfile(targets: ",(0,a.mdx)("em",{parentName:"p"},"target expression"),")")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"rbuildfiles(universe: ",(0,a.mdx)("em",{parentName:"p"},"file expression"),", argset: ",(0,a.mdx)("em",{parentName:"p"},"file expression"),")")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"allbuildfiles(universe: ",(0,a.mdx)("em",{parentName:"p"},"target expression"),")")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"deps(targets: ",(0,a.mdx)("em",{parentName:"p"},"target expression"),", depth: ?",(0,a.mdx)("em",{parentName:"p"},"integer"),", captured_expr: ?",(0,a.mdx)("em",{parentName:"p"},"query expression"),")")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"filter(regex: ",(0,a.mdx)("em",{parentName:"p"},"string"),", set: ",(0,a.mdx)("em",{parentName:"p"},"target or file expression"),"): Filter using regex partial match.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"inputs(targets: ",(0,a.mdx)("em",{parentName:"p"},"target expression"),")")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"kind(regex: ",(0,a.mdx)("em",{parentName:"p"},"string"),", targets: ",(0,a.mdx)("em",{parentName:"p"},"target expression"),"): The ",(0,a.mdx)("inlineCode",{parentName:"p"},"kind(regex, targets)")," operator evaluates the specified target expression, ",(0,a.mdx)("inlineCode",{parentName:"p"},"targets"),", and returns the targets where the rule type matches the specified ",(0,a.mdx)("inlineCode",{parentName:"p"},"regex"),".")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"labels(attr: ",(0,a.mdx)("em",{parentName:"p"},"string"),", targets: ",(0,a.mdx)("em",{parentName:"p"},"target expression"),"): This function is not implemented, and won't be, because buck2 query core does not support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"owner(files: ",(0,a.mdx)("em",{parentName:"p"},"file expression"),"): The ",(0,a.mdx)("inlineCode",{parentName:"p"},"owner(inputfile)")," operator returns the targets that own the specified inputfile.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"targets_in_buildfile(files: ",(0,a.mdx)("em",{parentName:"p"},"file expression"),")")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"rdeps(universe: ",(0,a.mdx)("em",{parentName:"p"},"target expression"),", targets: ",(0,a.mdx)("em",{parentName:"p"},"target expression"),", depth: ?",(0,a.mdx)("em",{parentName:"p"},"integer"),")")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"testsof(targets: ",(0,a.mdx)("em",{parentName:"p"},"target expression"),")")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"first_order_deps(): A filter function that can be used in the query expression of ",(0,a.mdx)("inlineCode",{parentName:"p"},"deps")," query function.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"target_deps(): A filter function that can be used in the query expression of ",(0,a.mdx)("inlineCode",{parentName:"p"},"deps")," query function.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"exec_deps(): A filter function that can be used in the query expression of ",(0,a.mdx)("inlineCode",{parentName:"p"},"deps")," query function.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"configuration_deps(): A filter function that can be used in the query expression of ",(0,a.mdx)("inlineCode",{parentName:"p"},"deps")," query function.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"toolchain_deps(): A filter function that can be used in the query expression of ",(0,a.mdx)("inlineCode",{parentName:"p"},"deps")," query function.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"intersect(left: ",(0,a.mdx)("em",{parentName:"p"},"any value"),", right: ",(0,a.mdx)("em",{parentName:"p"},"any value"),"): Computes the set intersection over the given arguments.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"except(left: ",(0,a.mdx)("em",{parentName:"p"},"any value"),", right: ",(0,a.mdx)("em",{parentName:"p"},"any value"),"): Computes the arguments that are in argument A but not in argument B.")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"union(left: ",(0,a.mdx)("em",{parentName:"p"},"any value"),", right: ",(0,a.mdx)("em",{parentName:"p"},"any value"),"): Computes the set union over the given arguments."))),(0,a.mdx)("h3",{id:"allpathsfrom-target-expression-to-target-expression"},"allpaths(from: ",(0,a.mdx)("em",{parentName:"h3"},"target expression"),", to: ",(0,a.mdx)("em",{parentName:"h3"},"target expression"),")"),(0,a.mdx)("p",null,"Computes all dependency paths."),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"allpaths(from, to)")," function evaluates to the graph formed by paths between the target expressions from and to, following the dependencies between nodes. For example, the value of\n",(0,a.mdx)("inlineCode",{parentName:"p"},"buck query \"allpaths('//foo:bar', '//foo/bar/lib:baz')\""),"\nis the dependency graph rooted at the single target node ",(0,a.mdx)("inlineCode",{parentName:"p"},"//foo:bar"),", that includes all target nodes that depend (transitively) on ",(0,a.mdx)("inlineCode",{parentName:"p"},"//foo/bar/lib:baz"),"."),(0,a.mdx)("p",null,"The two arguments to ",(0,a.mdx)("inlineCode",{parentName:"p"},"allpaths()")," can themselves be expressions. For example, the command:\n",(0,a.mdx)("inlineCode",{parentName:"p"},"buck query \"allpaths(kind(java_library, '//...'), '//foo:bar')\""),"\nshows all the paths between any java_library in the repository and the target ",(0,a.mdx)("inlineCode",{parentName:"p"},"//foo:bar"),"."),(0,a.mdx)("p",null,"We recommend using ",(0,a.mdx)("inlineCode",{parentName:"p"},"allpaths()")," with the ",(0,a.mdx)("inlineCode",{parentName:"p"},"--output-format=dot")," parameter to generate a graphviz file that can then be rendered as an image. For example:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-ignore"},"$ buck query \"allpaths('//foo:bar', '//foo/bar/lib:baz')\" --output-format=dot --output-file=result.dot\n$ dot -Tpng result.dot -o image.png\n")),(0,a.mdx)("p",null,"Graphviz is an open-source graph-visualization software tool. Graphviz uses the dot language to describe graphs."),(0,a.mdx)("h3",{id:"somepathfrom-target-expression-to-target-expression"},"somepath(from: ",(0,a.mdx)("em",{parentName:"h3"},"target expression"),", to: ",(0,a.mdx)("em",{parentName:"h3"},"target expression"),")"),(0,a.mdx)("h3",{id:"attrfilterattr-string-value-string-targets-target-expression"},"attrfilter(attr: ",(0,a.mdx)("em",{parentName:"h3"},"string"),", value: ",(0,a.mdx)("em",{parentName:"h3"},"string"),", targets: ",(0,a.mdx)("em",{parentName:"h3"},"target expression"),")"),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"attrfilter(attribute, value, targets)")," operator evaluates the given target expression and filters the resulting build targets to those where the specified attribute contains the specified value."),(0,a.mdx)("p",null,"In this context, the term attribute refers to an argument in a build rule, such as name, headers, srcs, or deps."),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"If the attribute is a single value, say ",(0,a.mdx)("inlineCode",{parentName:"li"},"name"),", it is compared to the specified value, and the target is returned if they match."),(0,a.mdx)("li",{parentName:"ul"},"If the attribute is a list, the target is returned if that list contains the specified value."),(0,a.mdx)("li",{parentName:"ul"},"If the attribute is a dictionary, the target is returned if the value exists in either the keys or the values of the dictionary.")),(0,a.mdx)("p",null,"For example:\n",(0,a.mdx)("inlineCode",{parentName:"p"},"buck2 query \"attrfilter(deps, '//foo:bar', '//...')\"")," returns the build targets in the repository that depend on ",(0,a.mdx)("inlineCode",{parentName:"p"},"//foo:bar"),", or more precisely: those build targets that include ",(0,a.mdx)("inlineCode",{parentName:"p"},"//foo:bar")," in their deps argument list."),(0,a.mdx)("h3",{id:"nattrfilterattr-string-value-string-targets-target-expression"},"nattrfilter(attr: ",(0,a.mdx)("em",{parentName:"h3"},"string"),", value: ",(0,a.mdx)("em",{parentName:"h3"},"string"),", targets: ",(0,a.mdx)("em",{parentName:"h3"},"target expression"),")"),(0,a.mdx)("h3",{id:"attrregexfilterattr-string-value-string-targets-target-expression"},"attrregexfilter(attr: ",(0,a.mdx)("em",{parentName:"h3"},"string"),", value: ",(0,a.mdx)("em",{parentName:"h3"},"string"),", targets: ",(0,a.mdx)("em",{parentName:"h3"},"target expression"),")"),(0,a.mdx)("h3",{id:"buildfiletargets-target-expression"},"buildfile(targets: ",(0,a.mdx)("em",{parentName:"h3"},"target expression"),")"),(0,a.mdx)("h3",{id:"rbuildfilesuniverse-file-expression-argset-file-expression"},"rbuildfiles(universe: ",(0,a.mdx)("em",{parentName:"h3"},"file expression"),", argset: ",(0,a.mdx)("em",{parentName:"h3"},"file expression"),")"),(0,a.mdx)("h3",{id:"allbuildfilesuniverse-target-expression"},"allbuildfiles(universe: ",(0,a.mdx)("em",{parentName:"h3"},"target expression"),")"),(0,a.mdx)("h3",{id:"depstargets-target-expression-depth-integer-captured_expr-query-expression"},"deps(targets: ",(0,a.mdx)("em",{parentName:"h3"},"target expression"),", depth: ?",(0,a.mdx)("em",{parentName:"h3"},"integer"),", captured_expr: ?",(0,a.mdx)("em",{parentName:"h3"},"query expression"),")"),(0,a.mdx)("h3",{id:"filterregex-string-set-target-or-file-expression"},"filter(regex: ",(0,a.mdx)("em",{parentName:"h3"},"string"),", set: ",(0,a.mdx)("em",{parentName:"h3"},"target or file expression"),")"),(0,a.mdx)("p",null,"Filter using regex partial match."),(0,a.mdx)("p",null,"Target are matched against their fully qualified name.\nFiles are matched against their repo path like ",(0,a.mdx)("inlineCode",{parentName:"p"},"repo//foo/bar/baz.py"),"."),(0,a.mdx)("h3",{id:"inputstargets-target-expression"},"inputs(targets: ",(0,a.mdx)("em",{parentName:"h3"},"target expression"),")"),(0,a.mdx)("h3",{id:"kindregex-string-targets-target-expression"},"kind(regex: ",(0,a.mdx)("em",{parentName:"h3"},"string"),", targets: ",(0,a.mdx)("em",{parentName:"h3"},"target expression"),")"),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"kind(regex, targets)")," operator evaluates the specified target expression, ",(0,a.mdx)("inlineCode",{parentName:"p"},"targets"),", and returns the targets where the rule type matches the specified ",(0,a.mdx)("inlineCode",{parentName:"p"},"regex"),"."),(0,a.mdx)("p",null,"The specified pattern can be a regular expression. For example,\n",(0,a.mdx)("inlineCode",{parentName:"p"},"buck2 query \"kind('java.*', deps('//foo:bar'))\"")," returns the targets that match the rule type ",(0,a.mdx)("inlineCode",{parentName:"p"},"java.*")," (",(0,a.mdx)("inlineCode",{parentName:"p"},"java_library"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"java_binary"),", etc.) in the transitive dependencies of ",(0,a.mdx)("inlineCode",{parentName:"p"},"//foo:bar"),"."),(0,a.mdx)("h3",{id:"labelsattr-string-targets-target-expression"},"labels(attr: ",(0,a.mdx)("em",{parentName:"h3"},"string"),", targets: ",(0,a.mdx)("em",{parentName:"h3"},"target expression"),")"),(0,a.mdx)("p",null,"This function is not implemented, and won't be, because buck2 query core does not support"),(0,a.mdx)("p",null,"returning both files and targets from a single function."),(0,a.mdx)("p",null,"In buck1 it returns targets and files referenced by the given attribute\nin the given targets."),(0,a.mdx)("p",null,"Some discussion in ",(0,a.mdx)("a",{parentName:"p",href:"https://internalfb.com/T126638795"},"T126638795"),"."),(0,a.mdx)("h3",{id:"ownerfiles-file-expression"},"owner(files: ",(0,a.mdx)("em",{parentName:"h3"},"file expression"),")"),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"owner(inputfile)")," operator returns the targets that own the specified inputfile."),(0,a.mdx)("p",null,"In this context, own means that the target has the specified file as an input. You could consider the ",(0,a.mdx)("inlineCode",{parentName:"p"},"owner()")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"inputs()")," operators to be inverses of each other."),(0,a.mdx)("p",null,"Example: ",(0,a.mdx)("inlineCode",{parentName:"p"},"buck2 query \"owner('examples/1.txt')\"")," returns the targets that owns the file ",(0,a.mdx)("inlineCode",{parentName:"p"},"examples/1.txt"),", which could be a value such as ",(0,a.mdx)("inlineCode",{parentName:"p"},"//examples:one"),"."),(0,a.mdx)("p",null,"It is possible for the specified file to have multiple owners, in which case, owner() returns a set of targets."),(0,a.mdx)("p",null,"If no owner for the file is found, owner() outputs the message: ",(0,a.mdx)("inlineCode",{parentName:"p"},"No owner was found for <file>")),(0,a.mdx)("h3",{id:"targets_in_buildfilefiles-file-expression"},"targets_in_buildfile(files: ",(0,a.mdx)("em",{parentName:"h3"},"file expression"),")"),(0,a.mdx)("h3",{id:"rdepsuniverse-target-expression-targets-target-expression-depth-integer"},"rdeps(universe: ",(0,a.mdx)("em",{parentName:"h3"},"target expression"),", targets: ",(0,a.mdx)("em",{parentName:"h3"},"target expression"),", depth: ?",(0,a.mdx)("em",{parentName:"h3"},"integer"),")"),(0,a.mdx)("h3",{id:"testsoftargets-target-expression"},"testsof(targets: ",(0,a.mdx)("em",{parentName:"h3"},"target expression"),")"),(0,a.mdx)("h3",{id:"first_order_deps"},"first_order_deps()"),(0,a.mdx)("p",null,"A filter function that can be used in the query expression of ",(0,a.mdx)("inlineCode",{parentName:"p"},"deps")," query function."),(0,a.mdx)("p",null,"Returns the output of deps function for the immediate dependencies of the given targets. Output is equivalent to ",(0,a.mdx)("inlineCode",{parentName:"p"},"deps(<targets>, 1)"),"."),(0,a.mdx)("p",null,"Example:\n",(0,a.mdx)("inlineCode",{parentName:"p"},"buck2 cquery \"deps('//foo:bar', 1, first_order_deps())\"`` is equivalent to "),"buck2 cquery \"deps('//foo:bar', 1)\"`"),(0,a.mdx)("h3",{id:"target_deps"},"target_deps()"),(0,a.mdx)("p",null,"A filter function that can be used in the query expression of ",(0,a.mdx)("inlineCode",{parentName:"p"},"deps")," query function."),(0,a.mdx)("p",null,"Returns the target dependencies of each dependency of the given targets, excluding any configuration, toolchain and execution dependencies (build time dependencies)\nlike compiler used as a part of the build."),(0,a.mdx)("p",null,"Example:\n`buck2 cquery \"deps('//foo:bar', 1, target_deps())\"``"),(0,a.mdx)("h3",{id:"exec_deps"},"exec_deps()"),(0,a.mdx)("p",null,"A filter function that can be used in the query expression of ",(0,a.mdx)("inlineCode",{parentName:"p"},"deps")," query function."),(0,a.mdx)("p",null,"Returns the output of deps function for execution dependencies (build time dependencies), ex. compiler used as a part of the build."),(0,a.mdx)("p",null,"Example:\n`buck2 cquery \"deps('//foo:bar', 1, exec_deps())\"``"),(0,a.mdx)("h3",{id:"configuration_deps"},"configuration_deps()"),(0,a.mdx)("p",null,"A filter function that can be used in the query expression of ",(0,a.mdx)("inlineCode",{parentName:"p"},"deps")," query function."),(0,a.mdx)("p",null,"Returns the output of deps function for configuration dependencies (that appear as conditions in selects)."),(0,a.mdx)("p",null,"Example:\n`buck2 cquery \"deps('//foo:bar', 1, configuration_deps())\"``"),(0,a.mdx)("h3",{id:"toolchain_deps"},"toolchain_deps()"),(0,a.mdx)("p",null,"A filter function that can be used in the query expression of ",(0,a.mdx)("inlineCode",{parentName:"p"},"deps")," query function."),(0,a.mdx)("p",null,"Returns the output of deps function for toolchain dependencies."),(0,a.mdx)("p",null,"Example:\n`buck2 cquery \"deps('//foo:bar', 1, toolchain_deps())\"``"),(0,a.mdx)("h3",{id:"intersectleft-any-value-right-any-value"},"intersect(left: ",(0,a.mdx)("em",{parentName:"h3"},"any value"),", right: ",(0,a.mdx)("em",{parentName:"h3"},"any value"),")"),(0,a.mdx)("p",null,"Computes the set intersection over the given arguments."),(0,a.mdx)("p",null,"Can be used with the ",(0,a.mdx)("inlineCode",{parentName:"p"},"^")," symbol. This operator is commutative."),(0,a.mdx)("p",null,"The parser treats this operator as left-associative and of equal precedence, so we recommend\nthat you use parentheses if you need to ensure a specific order of evaluation. A parenthesized expression\nresolves to the value of the expression it encloses."),(0,a.mdx)("p",null,"Example:\n",(0,a.mdx)("inlineCode",{parentName:"p"},"buck2 aquery \"deps('//foo:bar') intersect deps('//baz:lib')\"")," is the same as\n",(0,a.mdx)("inlineCode",{parentName:"p"},"buck2 aquery \"deps('//foo:bar') ^ deps('//baz:lib')\""),"\nBoth return the targets that appear in the transitive closure of ",(0,a.mdx)("inlineCode",{parentName:"p"},"//foo:bar")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"//baz:lib"),"."),(0,a.mdx)("h3",{id:"exceptleft-any-value-right-any-value"},"except(left: ",(0,a.mdx)("em",{parentName:"h3"},"any value"),", right: ",(0,a.mdx)("em",{parentName:"h3"},"any value"),")"),(0,a.mdx)("p",null,"Computes the arguments that are in argument A but not in argument B."),(0,a.mdx)("p",null,"Can be used with the ",(0,a.mdx)("inlineCode",{parentName:"p"},"-")," symbol. This operator is NOT commutative."),(0,a.mdx)("p",null,"The parser treats this operator as left-associative and of equal precedence, so we recommend\nthat you use parentheses if you need to ensure a specific order of evaluation. A parenthesized expression\nresolves to the value of the expression it encloses."),(0,a.mdx)("p",null,"Example:\n",(0,a.mdx)("inlineCode",{parentName:"p"},"buck2 aquery \"deps('//foo:bar') except deps('//baz:lib')\"")," is the same as\n",(0,a.mdx)("inlineCode",{parentName:"p"},"buck2 aquery \"deps('//foo:bar') - deps('//baz:lib')\""),"\nBoth return the targets that ",(0,a.mdx)("inlineCode",{parentName:"p"},"//foo:bar")," depends on and that ",(0,a.mdx)("inlineCode",{parentName:"p"},"//baz:lib")," does NOT depend on."),(0,a.mdx)("h3",{id:"unionleft-any-value-right-any-value"},"union(left: ",(0,a.mdx)("em",{parentName:"h3"},"any value"),", right: ",(0,a.mdx)("em",{parentName:"h3"},"any value"),")"),(0,a.mdx)("p",null,"Computes the set union over the given arguments."),(0,a.mdx)("p",null,"Can be used with the ",(0,a.mdx)("inlineCode",{parentName:"p"},"+")," symbol. This operator is commutative."),(0,a.mdx)("p",null,"The parser treats all this operator as left-associative and of equal precedence, so we recommend\nthat you use parentheses if you need to ensure a specific order of evaluation. A parenthesized expression\nresolves to the value of the expression it encloses."),(0,a.mdx)("p",null,"Example:\n",(0,a.mdx)("inlineCode",{parentName:"p"},"buck2 aquery \"deps('//foo:bar') union deps('//baz:lib')\"")," is the same as\n",(0,a.mdx)("inlineCode",{parentName:"p"},"buck2 aquery \"deps('//foo:bar') + deps('//baz:lib')\""),"\nBoth return the aggregation of the targets that ",(0,a.mdx)("inlineCode",{parentName:"p"},"//foo:bar")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"//baz:lib")," depend on."))}d.isMDXComponent=!0}}]);