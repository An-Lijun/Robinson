---
url: /etc\rollup\src/core.md
---
# 核心概念

前面我们快速体验了一下rollup的打包流程,这里我们详细讲解一下rollup的核心概念

### input

* input：这是 Rollup 的入口文件路径，通常是一个 JavaScript 文件。Rollup 会从这个文件开始分析依赖关系并打包。

#### 单入口input配置

```JavaScript
export default {
  input: 'src/main.js', // 单个入口文件
  output: {
    file: 'bundle.js',
    format: 'cjs'
  }
};
```

#### 多入口input 配置

```JavaScript
export default {
  input: {
    main: 'src/main.js',
    vendor: 'src/vendor.js'
  },
  output: {
    dir: 'dist',
    format: 'cjs'
  }
};
```

**注意:**

* 路径问题：input 选项中的路径是相对于配置文件所在目录的。如果入口文件位于其他目录，需要正确指定相对路径或绝对路径。

* 动态导入：如果入口文件中使用了动态导入（如 import()），Rollup 会自动处理这些动态导入，并将它们作为单独的块进行打包。注意必须通过 output.dir 选项指定输出目录，而不是使用 out否则也会打成一个js文件

* 多入口打包：当配置多个入口文件时，Rollup 会为每个入口文件生成一个独立的输出文件。注意必须通过 output.dir 选项指定输出目录，而不是使用 out

### output

output：这个选项用于配置输出文件的路径、格式等。file 指定输出文件的路径，format 指定输出模块的格式，如 es（ES 模块）、cjs（CommonJS 模块）、iife（立即执行函数表达式）等。

```JavaScript
export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'iife',
    name: 'MyBundle',
    sourcemap: true,
    globals: {
      jquery: '$'
    }
  }
};
```

#### `file`

选项用于指定输出文件的路径和名称。\
例如，file: 'dist/bundle.js' 会将打包后的文件输出到 `dist` 目录下，并命名为 bundle.js。

#### `format`

选项决定了输出模块的格式。常见的格式包括：

iife: 立即执行函数表达式，适用于浏览器环境。\
cjs: CommonJS 格式，适用于 Node.js 环境。\
es: ES 模块格式，适用于现代 JavaScript 环境。\
umd: 通用模块定义，兼容 AMD、CommonJS 和全局变量。

当 format 为 iife 或 umd 时，`name` 选项用于指定全局变量的名称。例如，name: 'MyBundle' 会将打包后的代码挂载到 `window.MyBundle` 上。

#### `sourcemap`

选项用于控制是否生成 sourcemap 文件。sourcemap 文件可以帮助开发者在调试时映射回原始源代码。设置为 `true` 时，Rollup 会生成一个 `.map` 文件。

除了 `output.sourcemap`，Rollup 还提供了其他一些与 Source Map 相关的选项，例如：

* `output.sourcemapFile`：指定生成的 Source Map 文件的名称。
* `output.sourcemapExcludeSources`：是否在 Source Map 中包含源代码内容。

#### `globals`

选项用于指定外部依赖的全局变量名称。例如，如果你在代码中使用了 jquery，并且希望它通过全局变量 `$` 来引用 。

举个例子
假设你正在开发一个浏览器端的 JavaScript 应用，并且你使用了 `lodash` 和 `jquery` 这两个库。你通过 `<script>` 标签在 HTML 文件中引入了这两个库，因此它们在全局环境中已经存在。在这种情况下，你可以使用 `globals` 选项来告诉 Rollup 如何引用这些全局变量。

```JavaScript
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'iife',
    name: 'MyBundle',
    globals: {
      lodash: '_',
      jquery: '$'
    }
  },
  external: ['lodash', 'jquery'],
  plugins: [
    resolve(),
    commonjs()
  ]
};
```

#### `dir`

当输出多个文件时，指定输出目录。这个在分包时候是必须要使用的。
注意,dir和file不能同时出现,会报错的。
在输出文件的开头或结尾添加自定义内容。

```JavaScript
export default {
    input: 'src/main.js',
    output: {
        dir: 'dist',
        format: 'umd',
        name: 'MyBundle',
    }
};
```

#### `exports`

指定模块的导出方式，如 auto、default、named 等。

#### `banner/footer`

在输出文件的开头或结尾添加自定义内容。
这里需要注意@rollup/plugin-terser会把注释删掉,学习这个功能的时候注意要关闭terser

```JavaScript
export default {
    input: 'src/main.js',
    output: {
        file: 'dist/bundle.js',
        format: 'umd',
        name: 'MyBundle',
        banner: "/* AnLijun, Copyright (c) 2025. */"
    }
};
```

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/0939d99b06e646cfb96d4695bc5e812e~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5a6J5Yip5ZCbX0FuTGlqdW4=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjUwMjk2MDY4NjA0MDI4NiJ9\&rk3s=f64ab15b\&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018\&x-orig-expires=1737859432\&x-orig-sign=%2Fcq%2BE3xjLzmCy2MV0rk0pLPfiXM%3D)

#### `plugins`

Rollup 的插件系统非常强大，可以通过插件扩展 Rollup 的功能。常见的插件包括 resolve（解析模块路径）、commonjs（转换 CommonJS 模块）、babel（使用 Babel 进行代码转换）等。

这个后面重点说

#### `external`

这个选项用于指定哪些模块是外部依赖，不打包进输出文件。通常用于排除第三方库或 Node.js 内置模块。

`external` 选项用于告诉 Rollup 哪些模块不应该被打包到最终的输出文件中。这些模块通常是一些第三方库或 Node.js 内置模块，它们在运行时环境中已经存在，因此不需要被打包。

可以直接字符串数组配置

```
external: ['lodash', 'react']
```

在使用字符串数组时，模块名称必须与 `import` 或 `require` 语句中的名称完全匹配。
也可以使用函数配置

```
external: id => /lodash|react/.test(id)
```

使用函数可以更灵活地控制哪些模块被视为外部依赖，特别是当你需要根据模块路径或名称进行动态判断时。

### `watch`

这个选项用于配置 Rollup 的监听模式，当文件发生变化时自动重新打包。
注意:如果想要启动监听的话 命令为 rollup -c --watch
rollup 配置文件修改的时候不用重启

```JavaScript
export default {
    input: 'src/main.js',
    output: {
        file: 'dist/bundle.js',
        format: 'umd',
        name: 'MyBundle'
    },
    watch: {
        clearScreen: false
    }
};
```

在 Rollup 配置文件中，可以通过 `watch` 选项来启用和配置 watch 模式。以下是一些常用的配置选项：

* `include`：指定要监听的文件或目录，支持 glob 模式。
* `exclude`：指定要排除的文件或目录，支持 glob 模式。
* `chokidar`：如果设置为 `true`，Rollup 会使用 `chokidar` 库来监听文件变化，而不是 Node.js 自带的 `fs.watch`。

***

### 使用场景

Watch 模式非常适合在开发过程中使用，尤其是在以下场景中：

* **快速迭代**：当你在开发过程中频繁修改代码时，watch 模式可以自动重新构建项目，无需手动运行构建命令。
* **调试**：在调试过程中，watch 模式可以确保每次代码修改后都能立即看到效果，从而加快调试速度。
* **热更新**：结合一些开发服务器（如 `rollup-plugin-serve`），watch 模式可以实现热更新功能，即在代码修改后自动刷新浏览器页面。

### 注意事项

* **性能开销**：watch 模式会持续监听文件变化，因此会占用一定的系统资源。在大型项目中，可能会对性能产生一定影响。
* **文件锁定**：在某些操作系统上，文件监听可能会导致文件被锁定，从而影响其他进程对文件的访问。
* **兼容性**：不同操作系统对文件监听的实现方式不同，可能会导致一些兼容性问题。使用 `chokidar` 库可以提高跨平台的兼容性。

通过合理配置和使用 watch 模式，可以显著提高开发效率，减少手动操作，使开发过程更加流畅。

### 插件选项

* **`resolve`**：这个插件用于解析模块路径，确保 Rollup 能够正确找到依赖模块。
* **`commonjs`**：这个插件用于将 CommonJS 模块转换为 ES6 模块，以便 Rollup 能够正确处理。
* **`babel`**：这个插件用于使用 Babel 进行代码转换，通常用于将 ES6+ 代码转换为 ES5 代码。
* **`terser`**：这个插件用于代码压缩，通常用于生产环境。

```JavaScript
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),  // 解析 node_modules 中的模块
    commonjs(), // 将 CommonJS 模块转换为 ES6 模块
    babel({     // 使用 Babel 转换代码
      exclude: 'node_modules/**', // 排除 node_modules 目录
      presets: ['@babel/preset-env']
    })
  ]
};
```

#### 插件的配置

每个插件都可以接受一个配置对象作为参数。例如，`@rollup/plugin-babel` 插件可以配置 `exclude` 选项来排除某些文件或目录，以及 `presets` 选项来指定 Babel 的预设。

#### 插件的顺序

插件的顺序非常重要，因为它们会按照数组中的顺序依次执行。例如，通常需要先使用 `@rollup/plugin-node-resolve` 解析模块，然后再使用 `@rollup/plugin-commonjs` 转换模块格式。

### 高级选项

* **`treeshake`**：这个选项用于配置 Tree-shaking 的行为。Tree-shaking 是 Rollup 的一个重要特性，用于删除未使用的代码。
* **`context`**：这个选项用于指定模块的上下文，通常用于避免全局变量污染。
* **`moduleContext`**：这个选项用于为特定模块指定上下文，通常用于处理模块中的 `this` 指向问题。
* **`onwarn`**：这个选项用于自定义警告处理函数，可以用于过滤或处理 Rollup 发出的警告。
