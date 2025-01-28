# 使用插件

Gulp 插件实质上是 [Node 转换流（Transform Streams）](https://github.com/rvagg/through2)，它封装了通过管道（pipeline）转换文件的常见功能，通常是使用 `.pipe()` 方法并放在 `src()` 和 `dest()` 之间。他们可以更改经过流（stream）的每个文件的文件名、元数据或文件内容。

托管在 npm 上的插件 - 标记有 "gulpplugin" 和 "gulpfriendly" 关键词 - 可以在 [插件搜索页面](https://gulpjs.com/plugins/) 上浏览和搜索。

每个插件应当只完成必要的工作，因此你可以把它们像构建块一样连接在一起。获得想要的结果可能需要把一组插件组合在一起使用。

```
const { src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

exports.default = function() {
  return src('src/*.js')
    // gulp-uglify 插件并不改变文件名
    .pipe(uglify())
    // 因此使用 gulp-rename 插件修改文件的扩展名
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('output/'));
}
```

## 是否需要插件？[​](https://www.gulpjs.com.cn/docs/getting-started/using-plugins#%E6%98%AF%E5%90%A6%E9%9C%80%E8%A6%81%E6%8F%92%E4%BB%B6 "Direct link to 是否需要插件？")

并非 gulp 中的一切都需要用插件来完成。虽然它们是一种快速上手的方法，但许多操作都应当通过使用独立的功能模块或库来实现。

``` JavaScript
const { rollup } = require('rollup');

// Rollup 提供了基于 promise 的 API，在 `async` 任务（task）中工作的很好
exports.default = async function() {
  const bundle = await rollup({
    input: 'src/index.js'
  });

  return bundle.write({
    file: 'output/bundle.js',
    format: 'iife'
  });
}
```

插件应当总是用来转换文件的。其他操作都应该使用（非插件的） Node 模块或库来实现。

``` JavaScript
const del = require('delete');

exports.default = function(cb) {
  // 直接使用 `delete` 模块，避免使用 gulp-rimraf 插件
  del(['output/*.js'], cb);
}
```

## 条件插件[​](https://www.gulpjs.com.cn/docs/getting-started/using-plugins#%E6%9D%A1%E4%BB%B6%E6%8F%92%E4%BB%B6 "Direct link to 条件插件")

因为插件的操作不应该针对特定文件类型，因此你可能需要使用像 [gulp-if](https://www.npmjs.com/package/gulp-if) 之类的插件来完成转换某些文件的操作。

``` JavaScript
const { src, dest } = require('gulp');
const gulpif = require('gulp-if');
const uglify = require('gulp-uglify');

function isJavaScript(file) {
  // 判断文件的扩展名是否是 '.js'
  return file.extname === '.js';
}

exports.default = function() {
  // 在同一个管道（pipeline）上处理 JavaScript 和 CSS 文件
  return src(['src/*.js', 'src/*.css'])
    // 只对 JavaScript 文件应用 gulp-uglify 插件
    .pipe(gulpif(isJavaScript, uglify()))
    .pipe(dest('output/'));
}
```

## 内联插件（Inline plugins）[​](https://www.gulpjs.com.cn/docs/getting-started/using-plugins#%E5%86%85%E8%81%94%E6%8F%92%E4%BB%B6inline-plugins "Direct link to 内联插件（Inline plugins）")

内联插件是一次性的转换流（Transform Streams），你可以通过在 gulpfile 文件直接书写需要的功能。

在两种情况下，创建内联插件很有用：

-   避免自己创建并维护插件。
-   避免 fork 一个已经存在的插件并添加自己所需的功能。

``` JavaScript
const { src, dest } = require('gulp');
const uglify = require('uglify-js');
const through2 = require('through2');

exports.default = function() {
  return src('src/*.js')
    // 创建一个内联插件，从而避免使用 gulp-uglify 插件
    .pipe(through2.obj(function(file, _, cb) {
      if (file.isBuffer()) {
        const code = uglify.minify(file.contents.toString())
        file.contents = Buffer.from(code.code)
      }
      cb(null, file);
    }))
    .pipe(dest('output/'));
}
```





# 文件监控

gulp api 中的 `watch()` 方法利用文件系统的监控程序（file system watcher）将 [globs](https://www.gulpjs.com.cn/docs/getting-started/explaining-globs) 与 [任务（task）](https://www.gulpjs.com.cn/docs/getting-started/creating-tasks) 进行关联。它对匹配 glob 的文件进行监控，如果有文件被修改了就执行关联的任务（task）。如果被执行的任务（task）没有触发 [异步完成](https://www.gulpjs.com.cn/docs/getting-started/async-completion) 信号，它将永远不会再次运行了。

此 API 的默认设置是基于通常的使用场景的，而且提供了内置的延迟和排队机制。

```
const { watch, series } = require('gulp');

function clean(cb) {
  // body omitted
  cb();
}

function javascript(cb) {
  // body omitted
  cb();
}

function css(cb) {
  // body omitted
  cb();
}

exports.default = function() {
  // 你可以使用单个任务
  watch('src/*.css', css);
  // 也可以组合多个任务
  watch('src/*.js', series(clean, javascript));
};
```

## 警告：避免同步任务[​](https://www.gulpjs.com.cn/docs/getting-started/watching-files#%E8%AD%A6%E5%91%8A%E9%81%BF%E5%85%8D%E5%90%8C%E6%AD%A5%E4%BB%BB%E5%8A%A1 "Direct link to 警告：避免同步任务")

就像注册到任务系统中的任务（task）一样，与文件监控程序关联的任务（task）不能是同步任务（synchronous taks）。如果你将同步任务（task）关联到监控程序，则无法确定任务（task）的完成情况，任务（task）将不会再次运行（假定当前正在运行）。

由于文件监控程序会让你的 Node 进程保持持续运行，因此不会有错误或警告产生。由于进程没有退出，因此无法确定任务（task）是否已经完成还是运行了很久很久了。

## 可监控的事件[​](https://www.gulpjs.com.cn/docs/getting-started/watching-files#%E5%8F%AF%E7%9B%91%E6%8E%A7%E7%9A%84%E4%BA%8B%E4%BB%B6 "Direct link to 可监控的事件")

默认情况下，只要创建、更改或删除文件，文件监控程序就会执行关联的任务（task）。 如果你需要使用不同的事件，你可以在调用 `watch()` 方法时通过 `events` 参数进行指定。可用的事件有 `'add'`、`'addDir'`、`'change'`、`'unlink'`、`'unlinkDir'`、`'ready'`、`'error'`。此外，还有一个 `'all'` 事件，它表示除 `'ready'` 和 `'error'` 之外的所有事件。

```
const { watch } = require('gulp');

exports.default = function() {
  // 所有事件都将被监控
  watch('src/*.js', { events: 'all' }, function(cb) {
    // body omitted
    cb();
  });
};
```

## 初次执行[​](https://www.gulpjs.com.cn/docs/getting-started/watching-files#%E5%88%9D%E6%AC%A1%E6%89%A7%E8%A1%8C "Direct link to 初次执行")

调用 `watch()` 之后，关联的任务（task）是不会被立即执行的，而是要等到第一次文件修之后才执行。

如需在第一次文件修改之前执行，也就是调用 `watch()` 之后立即执行，请将 `ignoreInitial` 参数设置为 `false`。

```
const { watch } = require('gulp');

exports.default = function() {
  // 任务将在启动时执行
  watch('src/*.js', { ignoreInitial: false }, function(cb) {
    // body omitted
    cb();
  });
};
```

## 队列[​](https://www.gulpjs.com.cn/docs/getting-started/watching-files#%E9%98%9F%E5%88%97 "Direct link to 队列")

`watch()` 方法能够保证当前执行的任务（task）不会再次并发执行。当文件监控程序关联的任务（task）正在运行时又有文件被修改了，那么所关联任务的这次新的执行将被放到执行队列中等待，直到上一次关联任务执行完之后才能运行。每一次文件修改只产生一次关联任务的执行并放入队列中。

如需禁止队列，请将 `queue` 参数设置为 `false`。

```
const { watch } = require('gulp');

exports.default = function() {
  // 每次文件修改之后关联任务都将（并发）执行
  watch('src/*.js', { queue: false }, function(cb) {
    // body omitted
    cb();
  });
};
```

## 延迟[​](https://www.gulpjs.com.cn/docs/getting-started/watching-files#%E5%BB%B6%E8%BF%9F "Direct link to 延迟")

文件更改之后，只有经过 200 毫秒的延迟之后，文件监控程序所关联的任务（task）才会被执行。这是为了避免在同使更改许多文件时（例如查找和替换操作）过早启动任务（taks）的执行。

如需调整延迟时间，请为 `delay` 参数设置一个正整数。

```
const { watch } = require('gulp');

exports.default = function() {
  // 文件第一次修改之后要等待 500 毫秒才执行关联的任务
  watch('src/*.js', { delay: 500 }, function(cb) {
    // body omitted
    cb();
  });
};
```

## 使用监控程序实例[​](https://www.gulpjs.com.cn/docs/getting-started/watching-files#%E4%BD%BF%E7%94%A8%E7%9B%91%E6%8E%A7%E7%A8%8B%E5%BA%8F%E5%AE%9E%E4%BE%8B "Direct link to 使用监控程序实例")

你可能不会使用到此功能，但是如果你需要对被修改的文件进行完全的掌控 （例如访问文件路径或元数据）请使用从 `watch()` 返回的 [chokidar](https://www.npmjs.com/package/chokidar) 实例。

**注意：**  返回的 chokidar 实例没有队列、延迟和异步完成（async completion）这些功能。

## 可选的依赖项[​](https://www.gulpjs.com.cn/docs/getting-started/watching-files#%E5%8F%AF%E9%80%89%E7%9A%84%E4%BE%9D%E8%B5%96%E9%A1%B9 "Direct link to 可选的依赖项")

Gulp 有一个名为 [fsevents](https://www.npmjs.com/package/fsevents) 的可选依赖项，他是一个特定于 Mac 系统的文件监控程序。如果你看到安装 fsevents 时出现的警告信息 -  *"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents"*  - 这并不是什么问题，忽略即可。 如果跳过 fsevents 的安装，将使用一个备用文件监控程序，后续在 gulpfile 中产生的任何错误都将与此警告无关。







