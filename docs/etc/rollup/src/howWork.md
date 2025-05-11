---
url: /etc\rollup\src/howWork.md
---
# rollup 插件是怎样工作的

Rollup 的插件机制通过钩子函数（Hooks）实现，插件可以在 Rollup 构建过程的不同阶段注入自定义逻辑。Rollup 提供了丰富的生命周期钩子，插件可以通过实现这些钩子来扩展 Rollup 的功能。

注意

* 如果你需要在 SCSS 文件中使用 `@import` 导入其他 SCSS 文件，确保路径正确。
* 如果你需要处理 CSS 中的图片或字体等资源，可以结合 `rollup-plugin-url` 或 `rollup-plugin-copy` 插件使用。

## 插件的基本结构

一个 Rollup 插件通常是一个 JavaScript 对象，包含一个 `name` 属性和多个钩子函数。例如：

```javascript
  export default function myPlugin() {
    return {
      name: 'my-plugin',
      transform(code, id) {
        // 自定义转换逻辑
        return code.replace(/foo/g, 'bar');
      }
    };
  }
```

## 钩子函数

## 构建阶段钩子 (Build Hooks)

* **`options`**: 这个钩子允许插件在 Rollup 初始化配置时修改或扩展配置选项。例如，可以在这里添加自定义的输入选项或输出选项。
* **`buildStart`**: 当 Rollup 开始构建时，这个钩子会被触发。通常用于初始化一些资源或状态。
* **`resolveId`**: 这个钩子用于解析模块的 ID。插件可以在这里自定义模块的解析逻辑，例如将某些模块重定向到其他路径。
* **`load`**: 这个钩子用于加载模块的内容。插件可以在这里返回模块的源代码，或者从其他地方加载模块内容。
* **`transform`**: 这个钩子用于转换模块的内容。插件可以在这里对模块的源代码进行转换，例如将 TypeScript 转换为 JavaScript。
* **`moduleParsed`**: 当模块解析完成后，这个钩子会被触发。插件可以在这里获取模块的解析结果，并进行进一步处理。
* **`buildEnd`**: 当 Rollup 构建结束时，这个钩子会被触发。通常用于清理资源或生成构建报告。

## 输出生成阶段钩子 (Output Generation Hooks)

* **`outputOptions`**: 这个钩子允许插件在生成输出之前修改或扩展输出配置选项。例如，可以在这里添加自定义的输出格式或文件名。
* **`renderStart`**: 当 Rollup 开始生成输出时，这个钩子会被触发。通常用于初始化一些输出相关的资源。
* **`banner` / `footer`**: 这些钩子允许插件在生成的 bundle 的顶部或底部添加内容。例如，可以在这里添加版权声明或版本信息。
* **`intro` / `outro`**: 这些钩子允许插件在生成的 bundle 的内部添加内容。例如，可以在这里添加一些全局变量或初始化代码。
* **`renderChunk`**: 这个钩子允许插件修改生成的 chunk 内容。例如，可以在这里对 chunk 进行压缩或添加额外的代码。
* **`generateBundle`**: 当 Rollup 生成 bundle 时，这个钩子会被触发。插件可以在这里修改或添加文件到最终的输出中。
* **`writeBundle`**: 当 bundle 写入磁盘之前，这个钩子会被触发。通常用于在文件写入之前进行最后的修改或验证。

## 其他钩子 (Miscellaneous Hooks)

* **`watchChange`**: 在监视模式下，当文件发生变化时，这个钩子会被触发。插件可以在这里响应文件变化，例如重新加载模块。
* **`closeWatcher`**: 当监视模式关闭时，这个钩子会被触发。通常用于清理与监视模式相关的资源。

## 插件间的交互

插件之间可以通过共享上下文（如 `this`）或修改 Rollup 的配置选项进行交互。例如，一个插件可以在 `options` 钩子中修改配置，另一个插件可以在 `buildStart` 钩子中读取这些配置。
