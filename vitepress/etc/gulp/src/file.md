# 处理文件
gulp 暴露了 `src()` 和 `dest()` 方法用于处理计算机上存放的文件。

`src()` 接受参数，并从文件系统中读取文件然后生成一个 [Node 流（stream）](https://nodejs.org/api/stream.html)。它将所有匹配的文件读取到内存中并通过流（stream）进行处理。

由 `src()` 产生的流（stream）应当从任务（task）中返回并发出异步完成的信号。

```
const { src, dest } = require('gulp');

exports.default = function() {
  return src('src/*.js')
    .pipe(dest('output/'));
}
```

流（stream）所提供的主要的 API 是 `.pipe()` 方法，用于连接转换流（Transform streams）或可写流（Writable streams）。

```
const { src, dest } = require('gulp');
const babel = require('gulp-babel');

exports.default = function() {
  return src('src/*.js')
    .pipe(babel())
    .pipe(dest('output/'));
}
```

`dest()` 接受一个输出目录作为参数，并且它还会产生一个 [Node 流（stream）](https://nodejs.org/api/stream.html)，通常作为终止流（terminator stream）。当它接收到通过管道（pipeline）传输的文件时，它会将文件内容及文件属性写入到指定的目录中。gulp 还提供了 `symlink()` 方法，其操作方式类似 `dest()`，但是创建的是链接而不是文件（ 详情请参阅 [`symlink()`](https://www.gulpjs.com.cn/docs/api/symlink) ）。

大多数情况下，利用 `.pipe()` 方法将插件放置在 `src()` 和 `dest()` 之间，并转换流（stream）中的文件。

## 向流（stream）中添加文件[​](https://www.gulpjs.com.cn/docs/getting-started/working-with-files#%E5%90%91%E6%B5%81stream%E4%B8%AD%E6%B7%BB%E5%8A%A0%E6%96%87%E4%BB%B6 "Direct link to 向流（stream）中添加文件")

`src()` 也可以放在管道（pipeline）的中间，以根据给定的 glob 向流（stream）中添加文件。新加入的文件只对后续的转换可用。如果 [glob 匹配的文件与之前的有重复](https://www.gulpjs.com.cn/docs/getting-started/explaining-globs#overlapping-globs)，仍然会再次添加文件。

这对于在添加普通的 JavaScript 文件之前先转换部分文件的场景很有用，添加新的文件后可以对所有文件统一进行压缩并混淆（uglifying）。

```
const { src, dest } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

exports.default = function() {
  return src('src/*.js')
    .pipe(babel())
    .pipe(src('vendor/*.js'))
    .pipe(uglify())
    .pipe(dest('output/'));
}
```

## 分阶段输出[​](https://www.gulpjs.com.cn/docs/getting-started/working-with-files#%E5%88%86%E9%98%B6%E6%AE%B5%E8%BE%93%E5%87%BA "Direct link to 分阶段输出")

`dest()` 可以用在管道（pipeline）中间用于将文件的中间状态写入文件系统。当接收到一个文件时，当前状态的文件将被写入文件系统，文件路径也将被修改以反映输出文件的新位置，然后该文件继续沿着管道（pipeline）传输。

此功能可用于在同一个管道（pipeline）中创建未压缩（unminified）和已压缩（minified）的文件。

```
const { src, dest } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

exports.default = function() {
  return src('src/*.js')
    .pipe(babel())
    .pipe(src('vendor/*.js'))
    .pipe(dest('output/'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('output/'));
}
```

## 模式：流动（streaming）、缓冲（buffered）和空（empty）模式[​](https://www.gulpjs.com.cn/docs/getting-started/working-with-files#%E6%A8%A1%E5%BC%8F%E6%B5%81%E5%8A%A8streaming%E7%BC%93%E5%86%B2buffered%E5%92%8C%E7%A9%BAempty%E6%A8%A1%E5%BC%8F "Direct link to 模式：流动（streaming）、缓冲（buffered）和空（empty）模式")

`src()` 可以工作在三种模式下：缓冲（buffering）、流动（streaming）和空（empty）模式。这些模式可以通过对 `src()` 的 `buffer` 和 `read` [参数](https://www.gulpjs.com.cn/docs/api/src#options) 进行设置。

-   缓冲（Buffering）模式是默认模式，将文件内容加载内存中。插件通常运行在缓冲（buffering）模式下，并且许多插件不支持流动（streaming）模式。
-   流动（Streaming）模式的存在主要用于操作无法放入内存中的大文件，例如巨幅图像或电影。文件内容从文件系统中以小块的方式流式传输，而不是一次性全部加载。如果需要流动（streaming）模式，请查找支持此模式的插件或自己编写。
-   空（Empty）模式不包含任何内容，仅在处理文件元数据时有用。

# glob字符串
glob 是由普通字符和/或通配字符组成的字符串，用于匹配文件路径。可以利用一个或多个 glob 在文件系统中定位文件。

---

字符串片段（segment）是指两个分隔符之间的所有字符组成的字符串。在 glob 中，分隔符永远是 `/` 字符 - 不区分操作系统 - 即便是在采用 `\` 作为分隔符的 Windows 操作系统中。在 glob 中，`\` 字符被保留作为转义符使用。

如下， * 被转义了，因此，* 将被作为一个普通字符使用，而不再是通配符了。

避免使用 Node 的 `path` 类方法来创建 glob，例如 `path.join`。在 Windows 中，由于 Node 使用 `\` 作为路径分隔符，因此将会产生一个无效的 glob。还要避免使用 `__dirname` 和 `__filename` 全局变量，由于同样的原因，`process.cwd()` 方法也要避免使用。


## 特殊字符： * (一个星号)[​](https://www.gulpjs.com.cn/docs/getting-started/explaining-globs#%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6--%E4%B8%80%E4%B8%AA%E6%98%9F%E5%8F%B7 "Direct link to 特殊字符： * (一个星号)")

在一个字符串片段中匹配任意数量的字符，包括零个匹配。对于匹配单级目录下的文件很有用。

下面这个 glob 能够匹配类似 `index.js` 的文件，但是不能匹配类似 `scripts/index.js` 或 `scripts/nested/index.js` 的文件。

```
'*.js'
```

## 特殊字符： ** (两个星号)[​](https://www.gulpjs.com.cn/docs/getting-started/explaining-globs#%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6--%E4%B8%A4%E4%B8%AA%E6%98%9F%E5%8F%B7 "Direct link to 特殊字符： ** (两个星号)")

在多个字符串片段中匹配任意数量的字符，包括零个匹配。 对于匹配嵌套目录下的文件很有用。请确保适当地限制带有两个星号的 glob 的使用，以避免匹配大量不必要的目录。

下面这个 glob 被适当地限制在 `scripts/` 目录下。它将匹配类似 `scripts/index.js`、`scripts/nested/index.js` 和 `scripts/nested/twice/index.js` 的文件。

```
'scripts/**/*.js'
```

在上面的示例中，如果没有 `scripts/` 这个前缀做限制，`node_modules` 目录下的所有目录或其他目录也都将被匹配。

## 特殊字符： ! (取反)[​](https://www.gulpjs.com.cn/docs/getting-started/explaining-globs#%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6--%E5%8F%96%E5%8F%8D "Direct link to 特殊字符： ! (取反)")

以 `!` 字符开头的通配符会对该通配符进行 “取反” 操作，即完全排除匹配到的内容。所有取反的通配符都会应用到每个正向通配符上，这与 Gulp 5 之前的版本有所不同。

在这里，会遍历 `scripts/` 目录以查找所有以 `.js` 结尾的文件，但 `scripts/vendor/` 目录下的所有文件都会被排除在外。

```
['scripts/**/*.js', '!scripts/vendor/**']
```

取反通配符可以作为一种限制双星号通配符匹配范围的替代方法。
```
['**/*.js', '!node_modules/**']
```
### 有序通配符

  


Gulp 5 之前的版本支持 “有序通配符”；不过，为了与生态系统中的大多数通配符匹配库保持一致，该功能已被移除。
  ```
  const order = require("ordered-read-streams");
    exports.default = function () {
      return order([
        gulp.src("input/jquery/dist/jquery.js"),
        gulp.src("input/detect_swipe/jquery.detect_swipe.js"),
      ]).pipe(gulp.dest('output/'));
    }
  
  ```


如果你需要 “有序通配符” 功能，可以使用 `ordered - read - streams` 库来合并流：

## 匹配重叠（Overlapping globs）

两个或多个 glob 故意或无意匹配了相同的文件就被认为是匹配重叠（overlapping）了。如果在同一个 `src()` 中使用了会产生匹配重叠的 glob，gulp 将尽力去除重叠部分，但是在多个 `src()` 调用时产生的匹配重叠是不会被去重的。
