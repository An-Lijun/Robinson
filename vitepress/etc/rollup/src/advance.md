# 进阶

一些打包插件列表
[GitHub - rollup/awesome: ⚡️ Delightful Rollup Plugins, Packages, and Resources](https://github.com/rollup/awesome)

## 导入Json (@rollup/plugin-json)

默认情况下rollup.js不支持导入json模块,但是实际上可能我们又需要怎么办。

这里我们可以用插件进行处理。

1.  首先搭建一个基础rollup工程
2.  安装插件 **npm i @rollup/plugin-json -D**
3.  配置插件

```js
export default {
    input:'src/index.js', //函数入口文件地址
    output:{
        file:'./dist/bundle.js', //打包地址
        format:'cjs', //格式化方式(模块化)
    },
    plugins: [json()] // 可以导入使用json数据
}

```

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/f81f9d2722d34069ac9096afecf2a858~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5a6J5Yip5ZCbX0FuTGlqdW4=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjUwMjk2MDY4NjA0MDI4NiJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1737871278&x-orig-sign=pY9qsPPyjsozZS7pw72AVYtd%2Be4%3D)
4\. 打包并检查打包产物

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/47e0b4cc09414069afd2a9472bb07e53~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5a6J5Yip5ZCbX0FuTGlqdW4=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjUwMjk2MDY4NjA0MDI4NiJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1737871278&x-orig-sign=lNi71CKMdJ3MF5ygKzKvMexBtzs%3D)
这里可以看到构建出来的产物中并没有把整个package.json打包进来而是直接打包了version 这一个变量,这就是Rollup 默认支持 的[Tree-Shaking](https://juejin.cn/post/7030727223602905119)。
注意 如果使用的如果是CommonJs规范。由于 CommonJS 模块是动态加载的，Rollup 无法在编译时确定哪些代码会被使用，因此无法对 CommonJS 模块进行 Tree Shaking 优化。

## 代码压缩 (@rollup/plugin-terser)

前面我们把代码已经打包出来了但是这样的代码上面的产物还不够好,一方面额外的空格换行可能引起网络传输量变大,另一方面明文的代码也不够安全。
这里我们可以用插件进行压缩处理。

1.  首先搭建一个基础rollup工程
2.  安装插件 **npm i @rollup/plugin-terser -D**
3.  配置插件

```js
export default {
    input:'src/index.js', //函数入口文件地址
    output:{
        file:'./dist/bundle.js', //打包地址
        format:'cjs', //格式化方式(模块化)
        plugins: [terser()] //对产物进行压缩
    },
    plugins: [json()] // 可以导入使用json数据
}

```

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/efec65cb19fc4a5686774fb235cb1843~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5a6J5Yip5ZCbX0FuTGlqdW4=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjUwMjk2MDY4NjA0MDI4NiJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1737871278&x-orig-sign=2K24khEKA035pYGNL9Ak8oKH7rQ%3D)
4\. 打包并检查打包产物

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/e4e534ab53a54540a6c82b3d5bc41f51~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5a6J5Yip5ZCbX0FuTGlqdW4=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjUwMjk2MDY4NjA0MDI4NiJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1737871278&x-orig-sign=JA%2BI5qAAGs%2BrBk6jY9T05VjLYWU%3D)
可以看到这里我们的产物基本上与我们经常看到的npm 库类似了。

terser 的配置项
[GitCode - 全球开发者的开源社区,开源代码托管平台](https://gitcode.com/gh_mirrors/te/terser?utm_source=csdn_github_accelerator)

## 分析打包结果 rollup-plugin-visualizer

`rollup-plugin-visualizer` 是一个用于分析 Rollup 打包结果的插件。它能够生成一个可视化的报告，帮助开发者了解打包后文件的体积分布、模块依赖关系等信息。这对于优化打包体积和性能非常有帮助。
npm i rollup-plugin-visualizer

```JavaScript
import { visualizer } from 'rollup-plugin-visualizer';
export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [
    visualizer({
      filename: 'stats.html', // 生成的分析文件名称
      open: true, // 是否在生成后自动打开浏览器
      template: 'treemap', // 可视化模板，可选 'sunburst', 'network', 'treemap', 'raw-data'
      gzipSize: true, // 是否显示 gzip 压缩后的大小
      brotliSize: true // 是否显示 brotli 压缩后的大小
    })
  ]
};
```

配置项

*   `filename`: 生成的分析文件名称，默认为 `stats.html`。
*   `open`: 是否在生成后自动打开浏览器，默认为 `false`。
*   `template`: 可视化模板，可选 `'sunburst'`, `'network'`, `'treemap'`, `'raw-data'`，默认为 `'treemap'`。
*   `gzipSize`: 是否显示 gzip 压缩后的大小，默认为 `false`。
*   `brotliSize`: 是否显示 brotli 压缩后的大小，默认为 `false`。

使用场景

*   **优化打包体积**：通过分析打包结果，找出体积较大的模块，进行优化或拆分。
*   **模块依赖分析**：了解模块之间的依赖关系，优化模块结构。
*   **性能优化**：通过分析 gzip 和 brotli 压缩后的体积，进一步优化加载性能。

注意事项

*   生成的 `stats.html` 文件通常较大，建议在开发环境中使用，避免在生产环境中生成。
*   如果项目使用了代码分割（Code Splitting），插件可以很好地展示各个 chunk 的体积和依赖关系。

## 打包css **rollup-plugin-postcss**

1.  首先搭建一个基础rollup工程
2.  安装插件 **npm i rollup-plugin-postcss -D**
3.  添加配置,并在文件中使用css

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/537bdb01cb124f4b927b8f5c29857ff0~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5a6J5Yip5ZCbX0FuTGlqdW4=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjUwMjk2MDY4NjA0MDI4NiJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1737871278&x-orig-sign=XOn1efwzAwxiqQdIYb2Ed6t%2BTJk%3D)
4\. 查看构建产物

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/d888f14101ab4fc394dab52aa9ea4578~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5a6J5Yip5ZCbX0FuTGlqdW4=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjUwMjk2MDY4NjA0MDI4NiJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1737871278&x-orig-sign=JHXaOPQ9n%2BGt756oADyhcMSQBbM%3D)

*   `extract: true`：将 CSS 提取到单独的文件中。如果设置为 `false`，CSS 将被嵌入到 JavaScript 文件中。
*   `minimize: true`：压缩 CSS 文件。
*   `plugins: []`：指定要使用的 PostCSS 插件。

## 代码分割

*   Rollup 默认情况下不会自动分割代码。它主要是将项目中的所有模块打包成一个单一的文件。这种方式在构建小型项目或者库时非常有用，因为它可以保持模块的依赖关系简单，并且生成的文件易于管理和部署。

### 使用import 函数分割代码

1.  首先搭建一个基础rollup工程
2.  增加一个util.js 并使用

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/e0bbf7ba8a7b42cfb81a3ce12afe4437~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5a6J5Yip5ZCbX0FuTGlqdW4=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjUwMjk2MDY4NjA0MDI4NiJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1737871278&x-orig-sign=gNSIPeVMTPV%2Fs8EhKXEtroNmwcQ%3D)
3\. 修改配置文件

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/033d8042c7fa4544b13717586c9379b2~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5a6J5Yip5ZCbX0FuTGlqdW4=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjUwMjk2MDY4NjA0MDI4NiJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1737871278&x-orig-sign=hlh%2BikCWV%2BZokUt556eA1q%2BtjGU%3D)
4\. build并查看产物
这里其实就已经分割成两个js了
![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/da950aa35e7d445d841d3d7afe2e7f8a~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5a6J5Yip5ZCbX0FuTGlqdW4=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjUwMjk2MDY4NjA0MDI4NiJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1737871278&x-orig-sign=OFS2gJHL6PgZaaQUPn9VsGBeZAU%3D)
注意 确保 Rollup 的输出格式设置为 `es` 或 `system`，因为这些格式支持代码分割。

**`@rollup/plugin-commonjs` 和 `@rollup/plugin-node-resolve`**：如果项目中使用了 CommonJS 模块或 Node.js 模块，需要安装并配置这些插件。

## 解析第三方路径以及配置文件扩展名

npm i  @rollup/plugin-node-resolve
rollup 解析第三方模块的路径。它能够自动查找并解析 node\_modules 中的模块，确保 Rollup 能够正确打包这些依赖。

    import commonjs from '@rollup/plugin-commonjs';
    import resolve from '@rollup/plugin-node-resolve';

    export default {
      input: 'src/main.js',
      output: {
        dir: 'dist',
        format: 'es',
      },
      plugins: [resolve(), commonjs()],
    };

```JavaScript
import { nodeResolve } from '@rollup/plugin-node-resolve';

  ...
  plugins: [
    nodeResolve({
      // 配置选项
      moduleDirectories: ['node_modules'], // 指定模块目录
      extensions: ['.js', '.json'], // 解析的文件扩展名
      preferBuiltins: true, // 优先使用Node.js内置模块
      browser: false, // 是否在浏览器环境中使用
      dedupe: ['lodash'], // 去重特定模块
      mainFields: ['module', 'main'], // 指定package.json中的字段顺序
      jail: '/my/project', // 限制模块解析的根目录
      only: ['some-module'], // 只解析指定的模块
      customResolveOptions: {
        // 自定义解析选项
        moduleDirectory: 'my_modules'
      }
    })
  ]
};
```

*   当项目依赖第三方模块时，使用该插件可以确保 Rollup 能够正确解析这些模块的路径。
*   在构建浏览器端应用时，可以通过 `browser` 选项优先使用浏览器兼容的模块版本。
*   在需要去重模块或限制模块解析范围时，可以使用 `dedupe` 和 `jail` 选项。

> **moduleDirectories**: 指定模块查找的目录，默认是 `['node_modules']`。\
> **extensions**: 指定解析的文件扩展名，默认是 `['.js', '.json', '.node']`。\
> **preferBuiltins**: 如果设置为 `true`，插件会优先使用 Node.js 内置模块而不是 `node_modules` 中的模块。\
> **browser**: 如果设置为 `true`，插件会优先使用 `browser` 字段指定的模块版本。\
> **dedupe**: 去重特定模块，避免重复打包。\
> **mainFields**: 指定 `package.json` 中的字段顺序，默认是 `['module', 'main']`。\
> **jail**: 限制模块解析的根目录，防止解析到项目外的模块。\
> **only**: 只解析指定的模块，其他模块将被忽略。\
> **customResolveOptions**: 自定义解析选项，可以指定模块目录等。

注意

*   如果项目中使用了 ES 模块和 CommonJS 模块混合的情况，确保 `mainFields` 配置正确。
*   在浏览器环境中使用时，注意 `browser` 选项的设置，以避免使用不兼容的模块版本。

## babel插件(语法降级)  @rollup/plugin-babel @babel/core @babel/preset-env

1.  安装依赖

<!---->

    npm install  @rollup/plugin-babel @babel/core @babel/preset-env -D

2.  添加babel配置文件
    在项目根目录下创建一个 `.babelrc` 文件，配置 Babel 的预设：

<!---->

    {
      "presets": ["@babel/preset-env"]
    }

3.  使用插件

在 `rollup.config.js` 中引入 `@rollup/plugin-babel` 插件，并将其添加到 `plugins` 数组中。`babelHelpers` 选项用于指定 Babel 辅助函数的处理方式，`bundled` 表示将辅助函数打包到输出文件中。`exclude` 选项用于排除 `node_modules` 目录下的文件，避免对第三方库进行不必要的转译。

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/b02abd815126485888a99b13f00cb304~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5a6J5Yip5ZCbX0FuTGlqdW4=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjUwMjk2MDY4NjA0MDI4NiJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1737871278&x-orig-sign=u2SYlr6luTJg5pZb%2BlwcCa7GAOw%3D)

> **babelHelpers** |string | 定如何处理 Babel 辅助函数，可选项有 `'bundled'`、`'runtime'`、`'inline'`、`'external'`

当设置为 `'runtime'` 时，会使用 `@babel/plugin-transform-runtime` 来避免重复的辅助函数代码

```javascript
import babel from '@rollup/plugin-babel';
export default {
    plugins: [
        babel({
            babelHelpers: 'runtime'
        })
    ]
};
```

> **include**  | `string | string[] | RegExp | RegExp[]`。| 指定要包含在 Babel 处理范围内的文件，可使用文件路径、文件路径数组、正则表达式或正则表达式数组。

```javascript
import babel from '@rollup/plugin-babel';
export default {
    plugins: [
        babel({
            include: 'src/**/*.js'
        })
    ]
};
```

> **exclude** | string | string\[] | RegExp | RegExp\[] | 指定要排除在 Babel 处理范围外的文件，可使用文件路径、文件路径数组、正则表达式或正则表达式数组。

```javascript
import babel from '@rollup/plugin-babel';
export default {
    plugins: [
        babel({ // 这样可以防止 Babel 处理 `node_modules` 中的文件，避免不必要的处理和潜在的问题。
            exclude: 'node_modules/**'
        })
    ]
};
```

> **extensions** | \[ ]string |  描述：指定要处理的文件扩展名，默认为 `['.js', '.jsx', '.es6', '.es', '.mjs']`。

```javascript
import babel from '@rollup/plugin-babel';
export default {
    plugins: [
        babel({
            extensions: ['.js', '.jsx', '.ts', '.tsx']
        })
    ]
};
```

注意 可将 `.ts` 和 `.tsx` 等扩展名添加到 Babel 的处理范围中

> **presets** | Array<> | Babel 预设，可使用 `@babel/preset-env` 等预设进行不同的转译。

```javascript
import babel from '@rollup/plugin-babel';
export default {
    plugins: [
        babel({
            presets: [['@babel/preset-env', { targets: { node: 'current' } }]]
        })
    ]
};
```

> **plugins** | Array | Babel 插件，可使用 `@babel/plugin-proposal-class-properties` 等插件进行特定的语言特性转译。

```javascript
import babel from '@rollup/plugin-babel';
export default {
    plugins: [
        babel({
            plugins: ['@babel/plugin-proposal-class-properties']
        })
    ]
};
```

> sourceMap |Boolean | 是否生成源映射，默认为 `false`。

```javascript
import babel from '@rollup/plugin-babel';
export default {
    plugins: [
        babel({
            sourceMap: true //源映射可方便在开发过程中进行调试。
        })
    ]
};
```

> **compact** | boolean | 是否压缩输出代码，默认为 `false`。

```javascript
import babel from '@rollup/plugin-babel';
export default {
    plugins: [
        babel({
            compact: true
        })
    ]
};
```

## Cjs 转ESM @rollup/plugin-commonjs

npm i  @rollup/plugin-commonjs

```JavaScript
export default {
  ...
  plugins: [
    commonjs(),
  ],
};
```

**结合其他插件**：通常，`@rollup/plugin-commonjs` 会与其他插件一起使用，例如 `@rollup/plugin-node-resolve` 和 `@rollup/plugin-babel`。`@rollup/plugin-node-resolve` 用于解析 node\_modules 中的模块，而 `@rollup/plugin-babel` 用于使用 Babel 转换代码。

```javascript
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  plugins: [
    nodeResolve(), //路径解析
    commonjs(),    // cjs 转esm
    babel({ babelHelpers: 'bundled' }),// es6+ =>ES5
  ],
};
```

注意

*   **顺序问题**：在配置 Rollup 插件时，插件的顺序非常重要。通常，`@rollup/plugin-node-resolve` 应该放在 `@rollup/plugin-commonjs` 之前，因为需要先解析模块路径，然后再进行 CommonJS 转换。
*   **动态导入**：如果你在项目中使用动态导入（`import()`），`@rollup/plugin-commonjs` 可能无法正确处理这些动态导入的模块。在这种情况下，你可能需要手动调整配置或使用其他插件来处理这些模块。

## 结合ts @rollup/plugin-typescript

1.  安装依赖
    npm install @rollup/plugin-typescript typescript -D
2.  配置

```JavaScript
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts', // 指定入口文件
  output: {
    file: 'dist/bundle.js', // 输出文件路径
    format: 'cjs' // 输出格式
  },
  plugins: [
    typescript() // 使用 TypeScript 插件
  ]
};
```

3.  配置tsOptions

```JavaScript
typescript({
  tsconfig: './tsconfig.json', // 指定 tsconfig 文件路径
  include: ['src/**/*.ts'], // 包含的文件
  exclude: ['node_modules/**'] // 排除的文件
})
```

## 构建Dts rollup-plugin-dts

1.  安装依赖 npm i rollup-plugin-dts
2.  使用

```JavaScript
// rollup.config.js
import dts from 'rollup-plugin-dts';

export default {
  input: './src/index.d.ts',
  output: [{
    file: './dist/index.d.ts',
    format: 'es'
  }],
  plugins: [dts()]
};
```

## 替换代码  @rollup/plugin-replace

1.  安装依赖 npm i @rollup/plugin-replace
2.  使用

```JavaScript
import replace from '@rollup/plugin-replace';

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      __buildDate__: () => JSON.stringify(new Date()),
      __buildVersion__: '1.0.0'
    })
  ]
};

```

在 Rollup 配置文件中，通过 `replace` 函数来配置插件。`replace` 函数接受一个对象作为参数，对象的键值对表示需要替换的内容。

*   **键**：表示需要替换的字符串或正则表达式。
*   **值**：表示替换后的内容。可以是字符串、函数或对象。

注意

*   **字符串替换**：如果替换的内容是字符串，确保使用 `JSON.stringify` 来避免语法错误。
*   **函数替换**：如果替换的内容是函数，函数会在打包时执行，返回的值将作为替换内容。
*   **正则表达式**：可以使用正则表达式来匹配更复杂的字符串模式。

```JavaScript
import filesize from 'rollup-plugin-filesize';
export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    filesize()
  ]
};
```

配置项

*   `showMinifiedSize`: 是否显示压缩后的大小，默认为 `true`。
*   `showGzippedSize`: 是否显示 Gzip 压缩后的大小，默认为 `true`。
*   `showBrotliSize`: 是否显示 Brotli 压缩后的大小，默认为 `false`。
*

当你运行 Rollup 打包时，`rollup-plugin-filesize` 插件会在终端输出类似以下的信息：

    dist/bundle.js: 1.23 KB (gzipped: 456 B)

## 打包大小 `rollup-plugin-filesize`

`rollup-plugin-filesize` 是一个 Rollup 插件，用于在打包过程中显示生成的文件大小信息。它可以帮助开发者了解打包后的文件大小，从而优化代码和资源。

1.  安装依赖 npm install rollup-plugin-filesize --save-dev

## copy文件插件  `rollup-plugin-copy`

可以在打包时候将文件进行copy

1.  安装 npm install rollup-plugin-copy -D
2.  配置

```javascript
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    copy({
      targets: [
        { src: 'src/assets/*', dest: 'dist/assets' },
        { src: 'src/fonts/*', dest: 'dist/fonts' }
      ]
    })
  ]
};
```

`targets`，它是一个数组，每个元素都是一个对象，包含 `src` 和 `dest` 属性。

*   `src`: 指定要复制的文件或文件夹路径，支持 glob 模式。
*   `dest`: 指定文件或文件夹复制到的目标路径。

## scss  rollup-plugin-scss

1.  安装依赖 npm install rollup-plugin-scss -D
2.  配置

```javascript
import scss from 'rollup-plugin-scss';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    scss({
      output: 'dist/bundle.css',
      failOnError: true,
      outputStyle: 'compressed'
    })
  ]
};
```

配置项

*   **output**: 指定生成的 CSS 文件的输出路径和文件名。例如，`output: 'dist/bundle.css'` 会将生成的 CSS 文件输出到 `dist` 目录下，并命名为 `bundle.css`。
*   **failOnError**: 设置为 `true` 时，如果 SCSS 编译过程中出现错误，Rollup 构建会失败。默认为 `false`。
*   **outputStyle**: 控制生成的 CSS 文件的压缩方式。例如，`outputStyle: 'compressed'` 会生成压缩后的 CSS 文件。其他可选值包括 `expanded`、`nested` 和 `compact`。

## postCss rollup-plugin-postcs  autoprefixer

rollup-plugin-postcs 可以优雅降级css
autoprefixer 可以帮助我们自动加浏览器前缀

1.  安装依赖 npm install rollup-plugin-postcss autoprefixer -D

```JavaScript
import postcss from 'rollup-plugin-postcss';
export default {
    input: 'src/index.js',
    output: {
        file: 'dist/bundle.js'
    },
    plugins: [
        postcss({
            // 配置选项
            plugins: [
                autoprefixer()
            ]
        })
    ]
};
```

*   **extract**：
    *   类型：`boolean | string`。
    *   描述：是否提取 CSS 文件，若为 `true` 会根据输入文件名生成，也可以指定文件名。
    *   示例：
    ```javascript
    postcss({ extract: 'styles.css' })
    ```
*   **plugins**：
    *   类型：`Array<Function>`。
    *   描述：PostCSS 插件数组，可添加 `autoprefixer`、`cssnano` 等。
*   **modules**：
    *   类型：`boolean`。
    *   描述：是否启用 CSS 模块。
*   **process**：
    *   类型：`Function`。
    *   描述：自定义处理函数，接收 `(css, map) => ({ code, map })` 作为参数，用于自定义 CSS 处理。
*   **minimize**：
    *   类型：`boolean`。
    *   描述：是否压缩 CSS。
*   **sourceMap**：
    *   类型：`boolean`。
    *   描述：是否生成源映射。
*   **include**：
    *   类型：`string | RegExp | (string | RegExp)[]`。
    *   描述：包含哪些文件，可使用文件路径、正则表达式或数组。
*   **exclude**：
    *   类型：`string | RegExp | (string | RegExp)[]`。
    *   描述：排除哪些文件，可使用文件路径、正则表达式或数组。
*   **`plugins`**: 这是一个数组，用于指定要使用的 PostCSS 插件。例如，`autoprefixer` 可以自动为 CSS 添加浏览器前缀。
*   **`extract`**: 如果设置为 `true`，插件会将 CSS 提取到一个单独的文件中，而不是将其内联到 JavaScript 文件中。
*   **`minimize`**: 如果设置为 `true`，插件会压缩生成的 CSS 文件。

## 处理图片 @rollup/plugin-image

1.  安装依赖  npm i  @rollup/plugin-image -D
2.  进行配置

```javascript
import image from '@rollup/plugin-image';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  plugins: [
    image(),
    nodeResolve(),
    commonjs(),
  ],
};
```

配置项

*   **`image()`** : 这是 `@rollup/plugin-image` 插件的调用，它会自动处理项目中的图片文件。
*   **`nodeResolve()`** : 这个插件用于解析模块路径，确保 Rollup 能够正确找到依赖的模块。
*   **`commonjs()`** : 这个插件用于将 CommonJS 模块转换为 ES6 模块，以便 Rollup 能够处理。

使用场景

*   **小图片**: 对于较小的图片，直接将其转换为 Base64 编码并嵌入到 JavaScript 文件中可以减少 HTTP 请求，提升页面加载速度。
*   **大图片**: 对于较大的图片，建议使用 `@rollup/plugin-url` 插件，将图片文件输出到指定目录，并在代码中引用其路径。

npm i @rollup/plugin-url

    import url from '@rollup/plugin-url';

    export default {
      input: 'src/main.js',
      output: {
        file: 'dist/bundle.js',
        format: 'cjs',
      },
      plugins: [
        url({
          limit: 10 * 1024, // 10KB 以下的文件转换为 Base64
          include: ['**/*.png', '**/*.jpg'], // 只处理 PNG 和 JPG 文件
          emitFiles: true, // 将文件输出到指定目录
        }),
        nodeResolve(),
        commonjs(),
      ],
    };