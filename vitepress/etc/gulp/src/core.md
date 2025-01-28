 # 核心概念
## Gulpfile.js
可以理解为入口文件当执行`gulp`命令时会被自动加载

Node 的模块的解析功能允许你将 `gulpfile.js`' 文件替换为同样命名为 `gulpfile.js` 的文件夹，该文件夹中包含了一个名为 `index.js` 的文件，该 `index.js` 文件将被当作 `gulpfile.js` 使用。

## task

task（任务）是一个异步的 JavaScript 函数，此函数是一个可以接收 callback 作为参数的函数，或者是一个返回 stream、promise、event emitter、child process 或 observable 类型值的函数。

### 任务类型
任务（tasks）可以是 **public（公开）**  或 **private（私有）**  类型的。

-   **公开任务（Public tasks）**  从 gulpfile 中被导出（export），可以通过 `gulp` 命令直接调用。
-   **私有任务（Private tasks）**  被设计为在内部使用，通常作为 `series()` 或 `parallel()` 组合的组成部分。

### 组合任务
Gulp 提供了两个强大的组合方法： `series()` 和 `parallel()`，允许将多个独立的任务组合为一个更大的操作。这两个方法都可以接受任意数目的任务（task）函数或已经组合的操作。`series()` 和 `parallel()` 可以互相嵌套至任意深度。

如果需要让任务（task）按顺序执行，请使用 `series()` 方法。

```javascript
// series 顺序执行函数
const { series } = require('gulp');  
  
function transpile(cb) {  
// body omitted  
cb();  
}  
  
function bundle(cb) {  
// body omitted  
cb();  
}  

exports.build = series(transpile, bundle);
```
对于希望以最大并发来运行的任务（tasks），可以使用 `parallel()` 方法将它们组合起来。

```javascript
// 同时执行
const { parallel } = require('gulp');  
  
function javascript(cb) {  
// body omitted  
cb();  
}  
  
function css(cb) {  
// body omitted  
cb();  
}  
  
exports.build = parallel(javascript, css);
```
## 任务（task）完成通知
当从任务（task）中返回 stream、promise、event emitter、child process 或 observable 时，成功或错误值将通知 gulp 是否继续执行或结束。如果任务（task）出错，gulp 将立即结束执行并显示该错误。

当使用 `series()` 组合多个任务（task）时，任何一个任务（task）的错误将导致整个任务组合结束，并且不会进一步执行其他任务。当使用 `parallel()` 组合多个任务（task）时，一个任务的错误将结束整个任务组合的结束，但是其他并行的任务（task）可能会执行完，也可能没有执行完。

### 返回 stream[​](https://www.gulpjs.com.cn/docs/getting-started/async-completion#%E8%BF%94%E5%9B%9E-stream "Direct link to 返回 stream")

```JavaScript
const { src, dest } = require('gulp');

function streamTask() {
  return src('*.js')
    .pipe(dest('output'));
}

exports.default = streamTask;
```

### 返回 promise[​](https://www.gulpjs.com.cn/docs/getting-started/async-completion#%E8%BF%94%E5%9B%9E-promise "Direct link to 返回 promise")

```JavaScript
function promiseTask() {
  return Promise.resolve('the value is ignored');
}

exports.default = promiseTask;
```

### 返回 event emitter[​](https://www.gulpjs.com.cn/docs/getting-started/async-completion#%E8%BF%94%E5%9B%9E-event-emitter "Direct link to 返回 event emitter")

```JavaScript
const { EventEmitter } = require('events');

function eventEmitterTask() {
  const emitter = new EventEmitter();
  // Emit has to happen async otherwise gulp isn't listening yet
  setTimeout(() => emitter.emit('finish'), 250);
  return emitter;
}

exports.default = eventEmitterTask;
```

### 返回 child process[​](https://www.gulpjs.com.cn/docs/getting-started/async-completion#%E8%BF%94%E5%9B%9E-child-process "Direct link to 返回 child process")

```JavaScript
const { exec } = require('child_process');

function childProcessTask() {
  return exec('date');
}

exports.default = childProcessTask;
```

### 返回 observable[​](https://www.gulpjs.com.cn/docs/getting-started/async-completion#%E8%BF%94%E5%9B%9E-observable "Direct link to 返回 observable")

```JavaScript
const { Observable } = require('rxjs');

function observableTask() {
  return Observable.of(1, 2, 3);
}

exports.default = observableTask;
```

### 使用 callback[​](https://www.gulpjs.com.cn/docs/getting-started/async-completion#%E4%BD%BF%E7%94%A8-callback "Direct link to 使用 callback")

如果任务（task）不返回任何内容，则必须使用 callback 来指示任务已完成。在如下示例中，callback 将作为唯一一个名为 `cb()` 的参数传递给你的任务（task）。

```JavaScript
function callbackTask(cb) {
  // `cb()` should be called by some async work
  cb();
}

exports.default = callbackTask;
```

如需通过 callback 把任务（task）中的错误告知 gulp，请将 `Error` 作为 callback 的唯一参数。

```JavaScript
function callbackError(cb) {
  // `cb()` should be called by some async work
  cb(new Error('kaboom'));
}

exports.default = callbackError;
```

然而，你通常会将此 callback 函数传递给另一个 API ，而不是自己调用它。

```JavaScript
const fs = require('fs');

function passingCallback(cb) {
  fs.access('gulpfile.js', cb);
}

exports.default = passingCallback;
```
## 使用 async/await解决异步

如果不使用前面提供到几种方式，你还可以将任务（task）定义为一个 ，它将利用 promise 对你的任务（task）进行包装。这将允许你使用 `await` 处理 promise，并使用其他同步代码。

```
const fs = require('fs');

async function asyncAwaitTask() {
  const { version } = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  console.log(version);
  await Promise.resolve('some result');
}

exports.default = asyncAwaitTask;