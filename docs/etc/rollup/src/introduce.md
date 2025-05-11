---
url: /etc\rollup\src/introduce.md
---
![image.png](/assets/rollup.png)

# 介绍

## 什么是Rollup

Rollup 是一个 JavaScript 模块打包器，它可以将多个小的 JavaScript 模块打包成一个大的模块，用于在浏览器或者 Node.js 环境中使用。它的主要目标是尽可能高效地构建 JavaScript 库。

## webpack与rollup的区别

与`Webpack`偏向于应用打包的定位不同，`rollup.js`更专注于`Javascript`类库打包。
我们熟知的`Vue`、`React`等诸多知名框架或类库都是通过`rollup.js`进行打包的。所以说学习rollup不是一件重复的类库学习,不仅可以学习怎么搭建自己的函数/组件库,也可能更好的学会[vite](https://cn.vitejs.dev/guide/)可见学好这一个库能达到一箭双雕的目的。

## rollup的优点

1. **Tree Shaking**：Rollup 通过静态分析代码，自动移除未使用的代码（dead code），从而生成更小的打包文件。
2. **ES Module 支持**：Rollup 默认支持 ES Module 语法，能够将多个 ES Module 打包成一个文件。
3. **代码分割**：Rollup 支持代码分割，允许将代码拆分成多个 chunk，按需加载。
4. **插件系统**：Rollup 拥有丰富的插件生态系统，可以通过插件扩展其功能，如处理 CSS、TypeScript 等。
5. **输出格式多样**：Rollup 支持多种输出格式，包括 ES Module、CommonJS、UMD 等，适用于不同的使用场景。
6. **高性能**：Rollup 的打包速度较快，尤其是在处理大型项目时，性能表现优异。
