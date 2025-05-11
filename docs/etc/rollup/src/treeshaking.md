---
url: /etc\rollup\src/treeshaking.md
---
# treeshaking

* **动态导入**：Rollup 的 Tree Shaking 主要针对静态导入和导出。对于动态导入（如 `import()`），Rollup 无法在打包时确定哪些代码会被使用，因此 Tree Shaking 的效果可能会受到影响。
* **副作用代码**：如果代码中包含副作用（如修改全局变量、执行某些操作等），Rollup 可能会保留这些代码，即使它们看起来没有被使用。开发者可以通过 `/*#__PURE__*/` 注释来标记没有副作用的代码，帮助 Rollup 更好地进行 Tree Shaking。
  Rollup 的 Tree Shaking 依赖于 ES6 模块的静态结构。ES6 模块的导入和导出语句是静态的，这意味着它们在代码执行之前就已经确定了。Rollup 利用这一点，通过解析这些静态语句来构建模块之间的依赖关系图去清除未使用过的代码。
