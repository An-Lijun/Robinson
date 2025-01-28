

# Apis

## src()

创建一个流，用于从文件系统读取 [Vinyl](https://www.gulpjs.com.cn/docs/api/concepts#vinyl) 对象。

**注：**BOMs(字节顺序标记)在 UTF-8 中没有任何作用，除非使用 `removeBOM` 选项禁用，否则 `src()` 将从读取的 UTF-8 文件中删除BOMs。

### 用法[​](https://www.gulpjs.com.cn/docs/api/src#%E7%94%A8%E6%B3%95 "Direct link to 用法")

```
const { src, dest } = require('gulp');

function copy() {
  return src('input/*.js')
    .pipe(dest('output/'));
}

exports.copy = copy;
```

### 函数原型[​](https://www.gulpjs.com.cn/docs/api/src#%E5%87%BD%E6%95%B0%E5%8E%9F%E5%9E%8B "Direct link to 函数原型")

```
src(globs, [options])
```

#### 参数[​](https://www.gulpjs.com.cn/docs/api/src#%E5%8F%82%E6%95%B0 "Direct link to 参数")

| 参数      | 类型           | 描述                                                                          |
| ------- | ------------ | --------------------------------------------------------------------------- |
| globs   | string array | 用于监视文件系统中匹配文件的 [Globs](https://www.gulpjs.com.cn/docs/api/concepts#globs) 。 |
| options | object       | 在下面的 [选项](https://www.gulpjs.com.cn/docs/api/src#options) 中详细说明。            |

#### 返回值[​](https://www.gulpjs.com.cn/docs/api/src#%E8%BF%94%E5%9B%9E%E5%80%BC "Direct link to 返回值")

返回一个可以在管道的开始或中间使用的流，用于根据给定的 globs 添加文件。

#### 可能出现的错误[​](https://www.gulpjs.com.cn/docs/api/src#%E5%8F%AF%E8%83%BD%E5%87%BA%E7%8E%B0%E7%9A%84%E9%94%99%E8%AF%AF "Direct link to 可能出现的错误")

当 `globs` 参数只能匹配一个文件(如 `foo/bar.js`)而且没有找到匹配时，会抛出一个错误，提示 "File not found with singular glob"。若要抑制此错误，请将 `allowEmpty` 选项设置为 `true`。

当在 `globs` 中给出一个无效的 glob 时，抛出一个错误，并显示 "Invalid glob argument"。

#### 选项[​](https://www.gulpjs.com.cn/docs/api/src#%E9%80%89%E9%A1%B9 "Direct link to 选项")

**对于接受函数的选项，传递的函数将与每个 Vinyl 对象一起调用，并且必须返回另一个列出类型的值。**

| 名称              | 类型                      | 默认值             | 描述                                                                                                                                                                                                                                                                  |
| --------------- | ----------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| encoding        | string boolean          | "utf8"          | 当为假时，文件内容将被视为二进制数据。当为字符串时，该字符串将用作文本编码。                                                                                                                                                                  |
| buffer          | boolean function        | true            | 如果为 true，文件内容将被缓冲到内存中。如果为 false，Vinyl 对象的`contents`属性将是一个暂停的流。对于大文件，可能无法缓冲其内容。**注意**：插件可能不支持对流式内容的处理。     |
| read            | boolean function        | true            | 如果为 false，文件将不会被读取，并且其对应的 Vinyl 对象也无法通过 `.dest()` 方法写入磁盘。.                                                                                                                                                                |
| since           | date timestamp function |                 | 设置此值后，仅为自指定时间以来修改过的文件创建 Vinyl 对象。                                                                                                                                                                           |
| removeBOM       | boolean function        | true            | 若为 true，则从 UTF - 8 编码的文件中移除字节顺序标记（BOM）。若为 false，则忽略字节顺序标记。                                                                                                                                                                       |
| sourcemaps      | boolean function        | false           | 如果为 true，会在创建的 Vinyl 对象上启用源映射支持。加载内联源映射并解析外部源映射链接。                                          |
| resolveSymlinks | boolean function        | true            | 若为 `true`，则会递归地将符号链接解析为其目标文件。若为 `false`，则会保留符号链接，并将 Vinyl 对象的 `symlink` 属性设置为原始文件的路径。                                                                                 |
| cwd             | string                  | `process.cwd()` | 该目录将与任何相对路径相结合，以形成绝对路径。对于绝对路径，此设置会被忽略。使用此选项可避免使用 `path.join()` 来组合通配符模式。该选项会直接传递给 `glob-stream`。    |
| base            | string                  |                 | 显式设置所创建的 Vinyl 对象上的 `base` 属性。具体细节见 “API 概念” 部分。此选项会直接传递给 `glob-stream`。                           |
| cwdbase         | boolean                 | false           |如果为 `true`，则 `cwd`（当前工作目录）和 `base` 选项应保持一致。此选项会直接传递给 `glob-stream`。                                                                                                                      |
| root            | string                  |                 | 通配符模式所基于的根路径。此选项会直接传递给 `glob-stream`。                                                                                                                       |
| allowEmpty      | boolean                 | false           | 若为 `false`，对于那些只能匹配单个文件的通配符模式（例如 `foo/bar.js`），如果未找到匹配文件，将会抛出错误。若为 `true`，则会抑制通配符匹配失败的情况。此选项会直接传递给 `glob-stream`。     |
| uniqueBy        | string function         | `'path'`        | 通过比较字符串属性名或函数的返回结果，从流中移除重复项。注意：使用函数时，该函数会接收流中的数据（包含 `cwd`、`base`、`path` 属性的对象）。                             |
| dot             | boolean                 | false           | 如果为 `true`，则会将通配符模式与点文件（如 `.gitignore`）进行匹配。此选项会直接传递给 `anymatch`。                                                                                                               |
| nounique        | boolean                 | false           | 若为 `false`，则会防止结果集中出现重复文件。此选项会直接传递给 `anymatch`。                                                                                                             |
| debug           | boolean                 | false           |如果为 `true`，调试信息将被记录到命令行。此选项会直接传递给 `anymatch`。                                                                                                          |
| nobrace         | boolean                 | false           | 如果为 `true`，则避免展开花括号集合，例如 `{a,b}` 或 `{1..3}`。此选项会直接传递给 `anymatch`。                                                                                                            |
| noglobstar      | boolean                 | false           | 如果为 `true`，则将双星号通配符字符（`**`）视为单星号通配符字符（`*`）。此选项会直接传递给 `anymatch`。                                                                                               |
| noext           | boolean                 | false           | 如果为 `true`，则避免匹配扩展通配符模式，例如 `+(ab)`。此选项会直接传递给 `anymatch`。                                                         |
| nocase          | boolean                 | false           | 如果为 `true`，则进行不区分大小写的匹配。注意：在不区分大小写的文件系统中，非通配符模式默认会进行不区分大小写的匹配。此选项会直接传递给 `anymatch`。                                          |
| matchBase       | boolean                 | false           | 如果为 `true` 且通配符模式中不包含任何 `/` 字符，则会遍历所有目录并匹配该通配符模式。例如，`*.js` 会被视为等同于 `**/*.js`。此选项会直接传递给 `anymatch`。             |
| ignore          | string array            |                 | 用于从匹配结果中排除的通配符模式。此选项会与取反后的 `globs` 相结合。**注意**：无论其他设置如何，这些通配符模式始终会针对点文件（以点开头的文件）进行匹配。*此选项会直接传递给 [anymatch](https://github.com/micromatch/anymatch)。* |

### 资源映射（Sourcemaps）[​](https://www.gulpjs.com.cn/docs/api/src#%E8%B5%84%E6%BA%90%E6%98%A0%E5%B0%84sourcemaps "Direct link to 资源映射（Sourcemaps）")

对资源映射（Sourcemap ）的支持已内置到 `src()` 和 `dest()` 中了，但是默认情况下是禁用的。开启此功能能够生成内联或外联的资源映射（Sourcemap）。

内联资源映射（sourcemaps）：

```
const { src, dest } = require('gulp');
const uglify = require('gulp-uglify');

src('input/**/*.js', { sourcemaps: true })
  .pipe(uglify())
  .pipe(dest('output/', { sourcemaps: true }));
```

外部资源映射：

```
const { src, dest } = require('gulp');
const uglify = require('gulp-uglify');

src('input/**/*.js', { sourcemaps: true })
  .pipe(uglify())
  .pipe(dest('output/', { sourcemaps: '.' }));
```


# dest()

创建一个用于将 [Vinyl](https://www.gulpjs.com.cn/docs/api/concepts#vinyl) 对象写入到文件系统的流。

## 用法[​](https://www.gulpjs.com.cn/docs/api/dest#%E7%94%A8%E6%B3%95 "Direct link to 用法")

```
const { src, dest } = require('gulp');

function copy() {
  return src('input/*.js')
    .pipe(dest('output/'));
}

exports.copy = copy;
```

## 函数原型[​](https://www.gulpjs.com.cn/docs/api/dest#%E5%87%BD%E6%95%B0%E5%8E%9F%E5%9E%8B "Direct link to 函数原型")

```
dest(directory, [options])
```

### 参数[​](https://www.gulpjs.com.cn/docs/api/dest#%E5%8F%82%E6%95%B0 "Direct link to 参数")

| 参数                 | 类型              | 描述                                                                      |
| ------------------ | --------------- | ----------------------------------------------------------------------- |
| directory **（必须）** | string function | 文件将被写入的输出目录的路径。如果使用了函数，则每个 Vinyl 对象都会调用该函数，并且必须返回字符串形式的目录路径。            |
| options            | object          | 详情见下文 [选项](https://www.gulpjs.com.cn/docs/api/dest#%E9%80%89%E9%A1%B9)。 |

### 返回值[​](https://www.gulpjs.com.cn/docs/api/dest#%E8%BF%94%E5%9B%9E%E5%80%BC "Direct link to 返回值")

返回一个可以在管道的中间或末尾使用的流，用于在文件系统上创建文件。

每当 Vinyl 对象通过流被传递时，它将内容和其他细节写到给定目录下的文件系统。如果 Vinyl 对象具有 `symlink` 属性，将创建符号链接（symbolic link）而不是写入内容。创建文件后，将[更新其元数据](https://www.gulpjs.com.cn/docs/api/dest#metadata-updates)以匹配 Vinyl 对象。

在文件系统上创建文件时，Vinyl 对象将被修改。

-   `cwd`、`base` 和 `path` 属性将被更新以匹配创建的文件。
-   `stat` 属性将被更新，以匹配文件系统上的文件。
-   如果 `contents` 属性是一个流，它将被重置，以便可以再次读取。

### 可能出现的错误[​](https://www.gulpjs.com.cn/docs/api/dest#%E5%8F%AF%E8%83%BD%E5%87%BA%E7%8E%B0%E7%9A%84%E9%94%99%E8%AF%AF "Direct link to 可能出现的错误")

当目录为空字符串时，将抛出一个错误，并提示 "Invalid dest() folder argument. Please specify a non-empty string or a function."（无效的 dest() 文件夹参数。请指定非空字符串或函数。）

当目录不是字符串或函数时，将抛出一个错误，并提示 "Invalid dest() folder argument. Please specify a non-empty string or a function."

当 `directory` 是一个返回空字符串或 `undefined` 的函数时，将发出一条错误消息 “Invalid output folder”。

### 选项[​](https://www.gulpjs.com.cn/docs/api/dest#%E9%80%89%E9%A1%B9 "Direct link to 选项")

**对于接受函数的选项，传递的函数将与每个 Vinyl 对象一起调用，并且必须返回另一个列出类型的值。**

| 名称               | 类型                      | 默认值                      | 注解                                                                                                                                                            |
| ---------------- | ----------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cwd              | string function         | `process.cwd()`          | 此目录可以与任何相对路径合并为绝对路径。如果是绝对路径，则忽略。该参数旨在避免通过 `directory` 和 `path.join()` 生成输出目录的路径的麻烦。                                                                           |
| mode             | number function         | Vinyl 对象的 `stat.mode` 属性 | 创建文件时使用的模式。如果没有设置，并且缺少 `stat.mode`，则使用 process' 模式。                                                                                                           |
| dirMode          | number function         |                          | 创建目录时使用的模式。如果没有设置，将使用当前进程的模式。                                                                                                                                 |
| overwrite        | boolean function        | true                     | 如果为 true，则覆盖相同路径的现有文件。                                                                                                                                        |
| append           | boolean function        | false                    | 如果为 true，则将内容添加到文件末尾，而不是替换现有内容。                                                                                                                               |
| sourcemaps       | boolean string function | false                    | 如果为 true，则将内联 sourcemaps 写入输出文件。 如果指定一个 `string` 类型的路径，则在给定的路径出写入外部 [sourcemaps](https://www.gulpjs.com.cn/docs/api/dest#sourcemaps) 。                        |
| relativeSymlinks | boolean function        | false                    | 如果为 false，则创建的任何符号链接都将是绝对路径的。 **注意**：如果正在创建的是 junction，则将被忽略，因为他们必须是绝对路径。                                                                                     |
| useJunctions     | boolean function        | true                     | 此选项仅用适用于 Windows，在其他操作系统中将被忽略。当设置为 true 时，则将目录符号链接创建为 junction。详情请参见下面的 [Windows 上的符号链接](https://www.gulpjs.com.cn/docs/api/dest#symbolic-links-on-windows) 。 |

## 元数据更新[​](https://www.gulpjs.com.cn/docs/api/dest#%E5%85%83%E6%95%B0%E6%8D%AE%E6%9B%B4%E6%96%B0 "Direct link to 元数据更新")

每当 `dest()` 流创建一个文件时，就会将 Vinyl 对象的 `mode`、`mtime` 和 `atime` 与创建的文件进行比较。如果它们不同，创建的文件将被更新以反映 Vinyl 对象的元数据。如果这些属性相同，或者 gulp 没有更改的权限，则会跳过该尝试。

在不支持 Node 的 `process.getuid()`或 `process.geteuid()` 方法的 Windows 或其他操作系统上禁用此功能。这是因为Windows通过使用 `fs.fchmod()` 和 `fs.futimes() 会产生意想不到的结果。

**注意**: `fs.futimes()` 在内部将 `mtime` 和 `atime` 时间戳转换为秒。这种除以 1000 的方法可能会导致 32 位操作系统的精度有所下降。

## Sourcemaps[​](https://www.gulpjs.com.cn/docs/api/dest#sourcemaps "Direct link to Sourcemaps")

Sourcemap 支持直接构建到 `src()` 和 `dest()` 中，但默认情况下是禁用的。使其能够生成内联或外部 sourcemaps。

内联 sourcemaps:

```
const { src, dest } = require('gulp');
const uglify = require('gulp-uglify');

src('input/**/*.js', { sourcemaps: true })
  .pipe(uglify())
  .pipe(dest('output/', { sourcemaps: true }));
```

外部 sourcemaps:

```
const { src, dest } = require('gulp');
const uglify = require('gulp-uglify');

src('input/**/*.js', { sourcemaps: true })
  .pipe(uglify())
  .pipe(dest('output/', { sourcemaps: '.' }));
```

## Windows 上的符号链接[​](https://www.gulpjs.com.cn/docs/api/dest#windows-%E4%B8%8A%E7%9A%84%E7%AC%A6%E5%8F%B7%E9%93%BE%E6%8E%A5 "Direct link to Windows 上的符号链接")

在 Windows 上创建符号链接时，`type` 参数被传递给 Node 的 `fs.symlink()` 方法，该方法指定被链接的目标的类型。链接类型设置为:

-   `'file'`，当目标是一个常规文件时
-   `'junction'`， 当目标是一个目录时
-   `'dir'`， 当目标是一个目录并且用户禁用了 `useJunctions` 选项时

如果试图创建 dangling (指向不存在的目标)链接，则无法自动确定链接类型。在这些情况下，根据 dangling 链接是通过 `symlink()` 创建的还是通过 `dest()` 创建的，行为会有所不同。

对于通过 `symlink()` 创建的 dangling 链接，传入的 Vinyl 对象表示目标，因此其 stats 将确定所需的链接类型。如果 `isDirectory()` 返回 false，则创建一个 `'file'` 链接，否则根据 `useJunctions` 选项的值创建一个 `'junction'` 或 `'dir'` 链接。

对于通过 `dest()` 创建的 dangling 链接，传入的 Vinyl 对象表示链接——通常通过 `src(..., { resolveSymlinks: false })` 从磁盘加载。在这种情况下，无法合理地确定链接类型，默认使用 `'file'`。如果正在创建指向目录的 dangling 链接，这可能会导致意外行为。**避免这种情况。**

# symlink()

创建一个流（stream），用于连接 [Vinyl](https://www.gulpjs.com.cn/docs/api/concepts#vinyl) 对象到文件系统。

## 用法[​](https://www.gulpjs.com.cn/docs/api/symlink#%E7%94%A8%E6%B3%95 "Direct link to 用法")

```
const { src, symlink } = require('gulp');

function link() {
  return src('input/*.js')
    .pipe(symlink('output/'));
}

exports.link = link;
```

## 函数原型[​](https://www.gulpjs.com.cn/docs/api/symlink#%E5%87%BD%E6%95%B0%E5%8E%9F%E5%9E%8B "Direct link to 函数原型")

```
symlink(directory, [options])
```

### 参数[​](https://www.gulpjs.com.cn/docs/api/symlink#%E5%8F%82%E6%95%B0 "Direct link to 参数")

| 参数                       | 类型              | 描述                                                                                                                                                                                        |
| ------------------------ | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| directory **(required)** | string function | The path of the output directory where symbolic links will be created. If a function is used, the function will be called with each Vinyl object and must return a string directory path. |
| options                  | object          | Detailed in [Options](https://www.gulpjs.com.cn/docs/api/symlink#options) below.                                                                                                          |

### 返回值[​](https://www.gulpjs.com.cn/docs/api/symlink#%E8%BF%94%E5%9B%9E%E5%80%BC "Direct link to 返回值")

A stream that can be used in the middle or at the end of a pipeline to create symbolic links on the file system. Whenever a Vinyl object is passed through the stream, it creates a symbolic link to the original file on the file system at the given directory.

Whenever a symbolic link is created on the file system, the Vinyl object will be modified.

-   The `cwd`, `base`, and `path` properties will be updated to match the created symbolic link.
-   The `stat` property will be updated to match the symbolic link on the file system.
-   The `contents` property will be set to `null`.
-   The `symlink` property will be added or replaced with original path.

**Note:**  On Windows, directory links are created using junctions by default. The `useJunctions` option disables this behavior.

### 可能出现的错误[​](https://www.gulpjs.com.cn/docs/api/symlink#%E5%8F%AF%E8%83%BD%E5%87%BA%E7%8E%B0%E7%9A%84%E9%94%99%E8%AF%AF "Direct link to 可能出现的错误")

When `directory` is an empty string, throws an error with the message, "Invalid symlink() folder argument. Please specify a non-empty string or a function."

When `directory` is not a string or function, throws an error with the message, "Invalid symlink() folder argument. Please specify a non-empty string or a function."

When `directory` is a function that returns an empty string or `undefined`, emits an error with the message, "Invalid output folder".

### 选项[​](https://www.gulpjs.com.cn/docs/api/symlink#%E9%80%89%E9%A1%B9 "Direct link to 选项")

**对于接受函数的选项，传递的函数将与每个 Vinyl 对象一起调用，并且必须返回另一个列出类型的值。**

| name             | type             | default         | note                                                                                                                                                                                                                                          |
| ---------------- | ---------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cwd              | string function  | `process.cwd()` | The directory that will be combined with any relative path to form an absolute path. Is ignored for absolute paths. Use to avoid combining `directory` with `path.join()`.                                                                    |
| dirMode          | number function  |                 | The mode used when creating directories. If not set, the process' mode will be used.                                                                                                                                                          |
| overwrite        | boolean function | true            | When true, overwrites existing files with the same path.                                                                                                                                                                                      |
| relativeSymlinks | boolean function | false           | When false, any symbolic links created will be absolute. **Note**: Ignored if a junction is being created, as they must be absolute.                                                                                                          |
| useJunctions     | boolean function | true            | This option is only relevant on Windows and ignored elsewhere. When true, creates directory symbolic link as a junction. Detailed in [Symbolic links on Windows](https://www.gulpjs.com.cn/docs/api/symlink#symbolic-links-on-windows) below. |

## Symbolic links on Windows[​](https://www.gulpjs.com.cn/docs/api/symlink#symbolic-links-on-windows "Direct link to Symbolic links on Windows")

When creating symbolic links on Windows, a `type` argument is passed to Node's `fs.symlink()` method which specifies the type of target being linked. The link type is set to:

-   `'file'` when the target is a regular file
-   `'junction'` when the target is a directory
-   `'dir'` when the target is a directory and the user disables the `useJunctions` option

If you try to create a dangling (pointing to a non-existent target) link, the link type can't be determined automatically. In these cases, behavior will vary depending on whether the dangling link is being created via `symlink()` or via `dest()`.

For dangling links created via `symlink()`, the incoming Vinyl object represents the target, so its stats will determine the desired link type. If `isDirectory()` returns false then a `'file'` link is created, otherwise a `'junction'` or `'dir'` link is created depending on the value of the `useJunctions` option.

For dangling links created via `dest()`, the incoming Vinyl object represents the link - typically loaded from disk via `src(..., { resolveSymlinks: false })`. In this case, the link type can't be reasonably determined and defaults to using `'file'`. This may cause unexpected behavior when creating a dangling link to a directory. **Avoid this scenario.**



# lastRun()

检索在当前运行进程中成功完成任务的最后一次时间。最有用的后续任务运行时，监视程序正在运行。当监视程序正在运行时，对于后续的任务运行最有用。

当与 `src()` 组合时，通过跳过自上次成功完成任务以来没有更 改的文件，使增量构建能够加快执行时间。

## 用法[​](https://www.gulpjs.com.cn/docs/api/lastrun#%E7%94%A8%E6%B3%95 "Direct link to 用法")

```
const { src, dest, lastRun, watch } = require('gulp');
const imagemin = require('gulp-imagemin');

function images() {
  return src('src/images/**/*.jpg', { since: lastRun(images) })
    .pipe(imagemin())
    .pipe(dest('build/img/'));
}

exports.default = function() {
  watch('src/images/**/*.jpg', images);
};
```

## 函数原型[​](https://www.gulpjs.com.cn/docs/api/lastrun#%E5%87%BD%E6%95%B0%E5%8E%9F%E5%9E%8B "Direct link to 函数原型")

```
lastRun(task, [precision])
```

### 参数[​](https://www.gulpjs.com.cn/docs/api/lastrun#%E5%8F%82%E6%95%B0 "Direct link to 参数")

| 参数                  | 类型              | 描述                                                                                                                                        |
| ------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| task **(required)** | function string | 已注册任务的任务函数或字符串别名。                                                                                                                         |
| precision           | number          | 默认值： Node v0.10 版本中是 `1000`，在 Node v0.12+ 版本中是 `0` 。在下面的 [时间戳精度](https://www.gulpjs.com.cn/docs/api/lastrun#timestamp-precision) 章中有详细说明。 |

### 返回值[​](https://www.gulpjs.com.cn/docs/api/lastrun#%E8%BF%94%E5%9B%9E%E5%80%BC "Direct link to 返回值")

返回一个时间戳（以毫秒为单位），表示任务的最后完成时间。如果任务尚未运行或已经失败，则返回 `undefined`。

为了避免缓存无效状态（invalid state），因此，如果任务出错，则返回值为 `undefined`。

### 可能出现的错误[​](https://www.gulpjs.com.cn/docs/api/lastrun#%E5%8F%AF%E8%83%BD%E5%87%BA%E7%8E%B0%E7%9A%84%E9%94%99%E8%AF%AF "Direct link to 可能出现的错误")

当传入的参数值不是字符串或函数时，会抛出一个错误，并显示错误信息 "Only functions can check lastRun"。

当对不可扩展的函进行数调或 Node 不支持 WeakMap 时，会抛出一个错误，并显示错误信息 "Only extensible functions can check lastRun"。

## 时间戳精度[​](https://www.gulpjs.com.cn/docs/api/lastrun#%E6%97%B6%E9%97%B4%E6%88%B3%E7%B2%BE%E5%BA%A6 "Direct link to 时间戳精度")

虽然时间戳的精度有合理的默认值，但仍然可以通过 `precision` 参数对其进行舍入。如果你所使用文件系统或 Node 版本对文件的时间属性精度不高的话，则很有用。

-   `lastRun(someTask)` 返回 1426000001111
-   `lastRun(someTask, 100)` 返回 1426000001100
-   `lastRun(someTask, 1000)` 返回 1426000001000

文件的 [mtime stat](https://www.gulpjs.com.cn/docs/api/concepts#file-system-stats) 精度会由于 node 版本和/或所用的文件系统而出现误差。

| 平台                        | 精度     |
| ------------------------- | ------ |
| Node v0.10                | 1000ms |
| Node v0.12+               | 1ms    |
| FAT32 file system         | 2000ms |
| HFS+ or Ext3 file systems | 1000ms |
| NTFS using Node v0.10     | 1s     |
| NTFS using Node 0.12+     | 100ms  |
| Ext4 using Node v0.10     | 1000ms |
| Ext4 using Node 0.12+     | 1ms |

# series()

将任务函数和/或组合操作组合成更大的操作，这些操作将按顺序依次执行。对于使用 `series()` 和 `parallel()` 组合操作的嵌套深度没有强制限制。

## 用法[​](https://www.gulpjs.com.cn/docs/api/series#%E7%94%A8%E6%B3%95 "Direct link to 用法")

```
const { series } = require('gulp');

function javascript(cb) {
  // body omitted
  cb();
}

function css(cb) {
  // body omitted
  cb();
}

exports.build = series(javascript, css);
```

## 函数原型[​](https://www.gulpjs.com.cn/docs/api/series#%E5%87%BD%E6%95%B0%E5%8E%9F%E5%9E%8B "Direct link to 函数原型")

```
series(...tasks)
```

### 参数[​](https://www.gulpjs.com.cn/docs/api/series#%E5%8F%82%E6%95%B0 "Direct link to 参数")

| 参数                   | 类型              | 描述                                                |
| -------------------- | --------------- | ------------------------------------------------- |
| tasks **(required)** | function string | 任意数量的任务函数都可以作为单独的参数传递。如果您以前注册过任务，可以使用字符串，但不建议这样做。 |

### 返回值[​](https://www.gulpjs.com.cn/docs/api/series#%E8%BF%94%E5%9B%9E%E5%80%BC "Direct link to 返回值")

返回一个组合操作，它将注册为任务或嵌套在其他 `series` 和/或 `parallel` 组合中。

当执行组合操作时，所有任务将按顺序运行。如果一个任务中发生错误，则不会运行后续任务。

### 可能出现的错误[​](https://www.gulpjs.com.cn/docs/api/series#%E5%8F%AF%E8%83%BD%E5%87%BA%E7%8E%B0%E7%9A%84%E9%94%99%E8%AF%AF "Direct link to 可能出现的错误")

当没有传递任何任务时，抛出一个错误，并提示 "One or more tasks should be combined using series or parallel"。（一个或多个应该使用 series 或 parallel 组合的任务”。）

当传递无效的任务或未注册的任务时，将抛出一个错误，显示 "Task never defined"（任务从未定义）。

## 向前引用（Forward references）[​](https://www.gulpjs.com.cn/docs/api/series#%E5%90%91%E5%89%8D%E5%BC%95%E7%94%A8forward-references "Direct link to 向前引用（Forward references）")

向前引用是指使用尚未注册的字符串引用组合任务。在旧版本中，这是一种常见的实践，但是为了实现更快的任务运行时间和促进使用命名函数，删除了该特性。

在较新的版本中，如果尝试使用向前引用，将会得到一个错误，消息为 “Task never defined”。当您尝试为您的任务注册*和*按字符串组合任务使用 `exports` 时，可能会遇到这种情况。在这种情况下，使用命名函数而不是字符串引用。

在迁移期间，您可能需要使用 [forward reference registry](https://github.com/gulpjs/undertaker-forward-reference)。这将为每个任务引用添加一个额外的闭包，并显著降低构建速度。**不要太长时间依赖这个修复程序**。

## 避免重复任务[​](https://www.gulpjs.com.cn/docs/api/series#%E9%81%BF%E5%85%8D%E9%87%8D%E5%A4%8D%E4%BB%BB%E5%8A%A1 "Direct link to 避免重复任务")

当运行组合操作时，每个任务将在每次提供时执行。

在两个不同的组合中引用的 `clean` 任务将运行两次，将导致不期望的结果。因此，建议在最终组合中指定 `clean` 任务。

If you have code like this:

```
// This is INCORRECT
const { series, parallel } = require('gulp');

const clean = function(cb) {
  // body omitted
  cb();
};

const css = series(clean, function(cb) {
  // body omitted
  cb();
});

const javascript = series(clean, function(cb) {
  // body omitted
  cb();
});

exports.build = parallel(css, javascript);
```

可转换为：

```
const { series, parallel } = require('gulp');

function clean(cb) {
  // body omitted
  cb();
}

function css(cb) {
  // body omitted
  cb();
}

function javascript(cb) {
  // body omitted
  cb();
}

exports.build = series(clean, parallel(css, javascript));
```
# parallel()

将任务功能和/或组合操作组合成同时执行的较大操作。对于使用 `series()` 和 `parallel()` 进行嵌套组合的深度没有强制限制。

## 用法[​](https://www.gulpjs.com.cn/docs/api/parallel#%E7%94%A8%E6%B3%95 "Direct link to 用法")

```
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

## 函数原型[​](https://www.gulpjs.com.cn/docs/api/parallel#%E5%87%BD%E6%95%B0%E5%8E%9F%E5%9E%8B "Direct link to 函数原型")

```
parallel(...tasks)
```

### 参数[​](https://www.gulpjs.com.cn/docs/api/parallel#%E5%8F%82%E6%95%B0 "Direct link to 参数")

| 参数                   | 类型              | 注解                                                |
| -------------------- | --------------- | ------------------------------------------------- |
| tasks **(required)** | function string | 任意数量的任务函数都可以作为单独的参数传递。如果您以前注册过任务，可以使用字符串，但不建议这样做。 |

### 返回值[​](https://www.gulpjs.com.cn/docs/api/parallel#%E8%BF%94%E5%9B%9E%E5%80%BC "Direct link to 返回值")

返回一个组合操作，它将注册为任务或嵌套在其他 `series` 和/或 `parallel` 组合中。

当执行组合操作时，所有任务将以最大并发性运行。如果一个任务发生错误，其他任务可能不确定地完成，也可能不完成。

### 可能出现的错误[​](https://www.gulpjs.com.cn/docs/api/parallel#%E5%8F%AF%E8%83%BD%E5%87%BA%E7%8E%B0%E7%9A%84%E9%94%99%E8%AF%AF "Direct link to 可能出现的错误")

当没有传递任何任务时，抛出一个错误，并提示 "One or more tasks should be combined using series or parallel"。（一个或多个应该使用 series 或 parallel 组合的任务”。）

当传递无效的任务或未注册的任务时，将抛出一个错误，显示 "Task never defined"（任务从未定义）。

## 向前引用（Forward references）[​](https://www.gulpjs.com.cn/docs/api/parallel#%E5%90%91%E5%89%8D%E5%BC%95%E7%94%A8forward-references "Direct link to 向前引用（Forward references）")

向前引用是指使用尚未注册的字符串引用组合任务。在旧版本中，这是一种常见的实践，但是为了实现更快的任务运行时间和促进使用命名函数，删除了该特性。

在较新的版本中，如果尝试使用向前引用，将会得到一个错误，消息为 “Task never defined”。当您尝试为您的任务注册*和*按字符串组合任务使用 `exports` 时，可能会遇到这种情况。在这种情况下，使用命名函数而不是字符串引用。

在迁移期间，您可能需要使用 [forward reference registry](https://github.com/gulpjs/undertaker-forward-reference)。这将为每个任务引用添加一个额外的闭包，并显著降低构建速度。**不要太长时间依赖这个修复程序**。

## 避免重复任务[​](https://www.gulpjs.com.cn/docs/api/parallel#%E9%81%BF%E5%85%8D%E9%87%8D%E5%A4%8D%E4%BB%BB%E5%8A%A1 "Direct link to 避免重复任务")

当一个组合操作执行时，每个任务（task）的每次调用都将被执行。

在两个不同的组合中引用的 `clean` 任务将运行两次，将导致不期望的结果。因此，建议在最终的组合中指定 `clean` 任务。

如果你有如下代码：

```
// This is INCORRECT
const { series, parallel } = require('gulp');

const clean = function(cb) {
  // body omitted
  cb();
};

const css = series(clean, function(cb) {
  // body omitted
  cb();
});

const javascript = series(clean, function(cb) {
  // body omitted
  cb();
});

exports.build = parallel(css, javascript);
```

可转换为：

```
const { series, parallel } = require('gulp');

function clean(cb) {
  // body omitted
  cb();
}

function css(cb) {
  // body omitted
  cb();
}

function javascript(cb) {
  // body omitted
  cb();
}

exports.build = series(clean, parallel(css, javascript));
```



# watch()

监听 globs 并在发生更改时运行任务。任务与任务系统的其余部分被统一处理。

## 用法[​](https://www.gulpjs.com.cn/docs/api/watch#%E7%94%A8%E6%B3%95 "Direct link to 用法")

```
const { watch } = require('gulp');

watch(['input/*.js', '!input/something.js'], function(cb) {
  // body omitted
  cb();
});
```

## 函数原型[​](https://www.gulpjs.com.cn/docs/api/watch#%E5%87%BD%E6%95%B0%E5%8E%9F%E5%9E%8B "Direct link to 函数原型")

```
watch(globs, [options], [task])
```

### 参数[​](https://www.gulpjs.com.cn/docs/api/watch#%E5%8F%82%E6%95%B0 "Direct link to 参数")

| 参数                   | 类型              | 描述                                                                                                 |
| -------------------- | --------------- | -------------------------------------------------------------------------------------------------- |
| globs **(required)** | string array    | 监听文件系统中匹配 [Globs](https://www.gulpjs.com.cn/docs/api/concepts#globs) 的文件。                          |
| options              | object          | 详情参见下文 [选项](https://www.gulpjs.com.cn/docs/api/watch#options) 。                                    |
| task                 | function string | 一个 [任务函数](https://www.gulpjs.com.cn/docs/api/concepts#tasks) 或由 `series()` 和 `parallel()` 生成的组合任务。 |

### 返回值[​](https://www.gulpjs.com.cn/docs/api/watch#%E8%BF%94%E5%9B%9E%E5%80%BC "Direct link to 返回值")

[chokidar](https://www.gulpjs.com.cn/docs/api/watch#chokidar-instance) 的一个实例，用于对监听设置进行细粒度控制。

### 可能出现的错误[​](https://www.gulpjs.com.cn/docs/api/watch#%E5%8F%AF%E8%83%BD%E5%87%BA%E7%8E%B0%E7%9A%84%E9%94%99%E8%AF%AF "Direct link to 可能出现的错误")

当以 `globs` 形式传递非字符串或带有任何非字符串的数组时，将抛出一个错误，并提示 "Non-string provided as watch path"。

当字符串或数组作为 `task` 传递时，会抛出一个错误，提示 "watch task has to be a function (optionally generated by using gulp.parallel or gulp.series)"（ watch 任务必须是一个函数(可以选择使用 gulp.parallel 或 gulp.series 生成))。

### 选项[​](https://www.gulpjs.com.cn/docs/api/watch#%E9%80%89%E9%A1%B9 "Direct link to 选项")

| 名称                     | 类型                           | 默认值                           | 描述                                                                                                                                                                                                                                                                                                     |
| ---------------------- | ---------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ignoreInitial          | boolean                      | true                          | false，则在实例化过程中调用该任务，以发现文件路径。用于在启动期间触发任务。 **注意:**  这个选项被传递给 [chokidar](https://github.com/paulmillr/chokidar)，但默认为 `true` 而不是 `false`。                                                                                                                                                                  |
| delay                  | number                       | 200                           | 文件更改和任务执行之间的毫秒延迟。允许在执行任务之前等待许多更改，例如查找和替换许多文件。                                                                                                                                                                                                                                                          |
| queue                  | boolean                      | true                          | 当为 true 且任务已经运行时，任何文件更改都将对单个任务执行进行排队。避免长时间运行的任务重叠。                                                                                                                                                                                                                                                     |
| events                 | string array                 | [ 'add', 'change', 'unlink' ] | 正在监听的事件，以触发任务执行。可以是 `'add'`、`'addDir'`、`'change'`、`'unlink'`、`'unlinkDir'`, `'ready'`、和/或 `'error'`。 另外 `'all'` 也是可用的，它表示除 `'ready'` 和 `'error'` 之外的所有事件。 *此选项被直接传递给 [chokidar](https://github.com/paulmillr/chokidar).*                                                                               |
| persistent             | boolean                      | true                          | 如果为 false，监听器将不会保持 Node 进程的运行。不建议禁用此选项。 *此选项被直接传递给 [chokidar](https://github.com/paulmillr/chokidar).*                                                                                                                                                                                                 |
| ignored                | array string RegExp function |                               | Defines globs to be ignored. If a function is provided, it will be called twice per path - once with just the path, then with the path and the `fs.Stats` object of that file. *此选项被直接传递给 [chokidar](https://github.com/paulmillr/chokidar).*                                                          |
| followSymlinks         | boolean                      | true                          | 如果为 true，对符号链接和链接的文件的更改都将触发事件。如果为 false，则只有对符号链接的更改才触发事件。 *此选项被直接传递给 [chokidar](https://github.com/paulmillr/chokidar).*                                                                                                                                                                               |
| cwd                    | string                       |                               | 将与任何相对路径相结合以形成绝对路径的目录。对于绝对路径忽略。用于避免将 `globs` 与 `path.join()` 组合使用。 *此选项被直接传递给 [chokidar](https://github.com/paulmillr/chokidar).*                                                                                                                                                                      |
| disableGlobbing        | boolean                      | false                         | 如果为 true，所有 `globs` 都被视为字面路径名称，即使它们具有特殊字符。 *此选项被直接传递给 [chokidar](https://github.com/paulmillr/chokidar).*                                                                                                                                                                                              |
| usePolling             | boolean                      | false                         | 当为 false 时，监听器将使用 `fs.watch()`（或 Mac 上的 [fsevents](https://github.com/strongloop/fsevents)）(或[fsevents](https://github.com/strongloop/fsevents))进行监听。如果为 true，则使用 `fs.watchFile()` 轮询代替——这是通过网络或其他非标准情况成功监听文件所必需的。覆盖 `useFsEvents` 默认值。 *此选项被直接传递给 [chokidar](https://github.com/paulmillr/chokidar).* |
| interval               | number                       | 100                           | 与 `usePolling: true` 配套使用。表示文件系统轮询的间隔。 *此选项被直接传递给 [chokidar](https://github.com/paulmillr/chokidar).*                                                                                                                                                                                                  |
| binaryInterval         | number                       | 300                           | 与 `usePolling: true` 配套使用。表示文件系统轮询二进制文件的间隔。 *此选项被直接传递给 [chokidar](https://github.com/paulmillr/chokidar).*                                                                                                                                                                                             |
| useFsEvents            | boolean                      | true                          | 如果为 true 且 fsevents 可用， 则使用 fsevents 进行监听。如果显式设置为 true，则替代 `usePolling` 选项。如果设置为 false，则自动将 `usePolling` 设置为 true。 *此选项被直接传递给 [chokidar](https://github.com/paulmillr/chokidar).*                                                                                                                      |
| alwaysStat             | boolean                      | false                         | 如果为 true，总是调用 `fs.stat()` 对已更改的文件——将减慢文件监听器。只有在直接使用chokidar 实例时，`fs.Stat` 的对象才可用。 *此选项被直接传递给 [chokidar](https://github.com/paulmillr/chokidar).*                                                                                                                                                       |
| depth                  | number                       |                               | 指示将监听多少级嵌套目录。 *此选项被直接传递给 [chokidar](https://github.com/paulmillr/chokidar).*                                                                                                                                                                                                                           |
| awaitWriteFinish       | boolean                      | false                         | 不要使用这个选项，而是使用 `delay`。 *此选项被直接传递给 [chokidar](https://github.com/paulmillr/chokidar).*                                                                                                                                                                                                                  |
| ignorePermissionErrors | boolean                      | false                         | 设置为 true 以监听没有读取权限的文件。然而，如果由于 EPERM 或 EACCES 错误导致监听失败，则会自动跳过。 *此选项被直接传递给 [chokidar](https://github.com/paulmillr/chokidar).*                                                                                                                                                                           |
| atomic                 | number                       | 100                           | 只有在 `useFsEvents` 和 `usePolling` 为 false 时才激活。自动过滤掉一些编辑器从 "atomic writes" 中产生的工件。如果文件在删除后的指定毫秒内重新添加，则会发出一个更改事件(而不是取消链接然后添加)。 *此选项被直接传递给 [chokidar](https://github.com/paulmillr/chokidar).*                                                                                                            |

## Chokidar 实例[​](https://www.gulpjs.com.cn/docs/api/watch#chokidar-%E5%AE%9E%E4%BE%8B "Direct link to Chokidar 实例")

`watch()` 方法返回 [chokidar](https://github.com/paulmillr/chokidar) 的底层实例，提供对监听设置的细粒度控制。最常用来注册提供更改文件的 `path` 或 `stats` 的单个事件处理程序。

**当直接使用 chokidar 实例时，您将无法访问任务系统集成，包括异步完成、队列和延迟**

```
const { watch } = require('gulp');

const watcher = watch(['input/*.js']);

watcher.on('change', function(path, stats) {
  console.log(`File ${path} was changed`);
});

watcher.on('add', function(path, stats) {
  console.log(`File ${path} was added`);
});

watcher.on('unlink', function(path, stats) {
  console.log(`File ${path} was removed`);
});

watcher.close();
```

`watcher.on(eventName, eventHandler)`

注册 `eventHandler` 函数，当指定的事件发生时调用该函数。

| 参数           | 类型       | 描述                                                                                               |
| ------------ | -------- | ------------------------------------------------------------------------------------------------ |
| eventName    | string   | 可以观察到的事件有 `'add'`、`'addDir'`、`'change'`、`'unlink'`、`'unlinkDir'`、`'ready'`、`'error'`、 或 `'all'`. |
| eventHandler | function | 当指定的事件发生时调用的函数。参数详见下表。                                                                           |

| 参数    | 类型     | 描述                                                                                                                                            |
| ----- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| path  | string | 已更改的文件的路径。如果设置了 `cwd` 选项，则是通过删除 `cwd` 的相对路径。                                                                                                  |
| stats | object | 一个 [fs.Stat](https://www.gulpjs.com.cn/docs/api/concepts#file-system-stats) 对象，但可以是 `undefined`。如果 `alwaysStat` 选项被设置为 `true`，`stats` 将始终被提供。 |

`watcher.close()`

关闭文件监听器。一旦关闭，就不会再发出任何事件。

`watcher.add(globs)`

向已经运行的监听器实例添加额外的 globs。

| 参数    | 类型           | 描述            |
| ----- | ------------ | ------------- |
| globs | string array | 额外需要监听的 glob。 |

`watcher.unwatch(globs)`

删除正在被监听的 globs，而监视程序继续使用剩余的路径。

| 参数    | 类型           | 描述         |
| ----- | ------------ | ---------- |
| globs | string array | 要删除的 glob。|

# task()

**提醒**: 这个API不再是推荐的模式了 - [export your tasks](https://www.gulpjs.com.cn/docs/getting-started/creating-tasks)。因此就不翻译了！

在任务系统中定义任务。然后可以从命令行和 `series()`、`parallel()` 和 `lastRun()` api 访问该任务。

## Usage[​](https://www.gulpjs.com.cn/docs/api/task#usage "Direct link to Usage")

Register a named function as a task:

```
const { task } = require('gulp');

function build(cb) {
  // body omitted
  cb();
}

task(build);
```

Register an anonymous function as a task:

```
const { task } = require('gulp');

task('build', function(cb) {
  // body omitted
  cb();
});
```

Retrieve a task that has been registered previously:

```
const { task } = require('gulp');

task('build', function(cb) {
  // body omitted
  cb();
});

const build = task('build');
```

## Signature[​](https://www.gulpjs.com.cn/docs/api/task#signature "Direct link to Signature")

```
task([taskName], taskFunction)
```

### Parameters[​](https://www.gulpjs.com.cn/docs/api/task#parameters "Direct link to Parameters")

If the `taskName` is not provided, the task will be referenced by the `name` property of a named function or a user-defined `displayName` property. The `taskName` parameter must be used for anonymous functions missing a `displayName` property.

Since any registered task can be run from the command line, avoid using spaces in task names.

| parameter                   | type     | note                                                                                                                                                                                                                                                                                                 |
| --------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| taskName                    | string   | An alias for the task function within the task system. Not needed when using named functions for `taskFunction`.                                                                                                                                                                                     |
| taskFunction **(required)** | function | A [task function](https://www.gulpjs.com.cn/docs/api/concepts#tasks) or composed task - generated by `series()` and `parallel()`. Ideally a named function. [Task metadata](https://www.gulpjs.com.cn/docs/api/task#task-metadata) can be attached to provide extra information to the command line. |

### Returns[​](https://www.gulpjs.com.cn/docs/api/task#returns "Direct link to Returns")

When registering a task, nothing is returned.

When retrieving a task, a wrapped task (not the original function) registered as `taskName` will be returned. The wrapped task has an `unwrap()` method that will return the original function.

### Errors[​](https://www.gulpjs.com.cn/docs/api/task#errors "Direct link to Errors")

When registering a task where `taskName` is missing and `taskFunction` is anonymous, will throw an error with the message, "Task name must be specified".

## Task metadata[​](https://www.gulpjs.com.cn/docs/api/task#task-metadata "Direct link to Task metadata")

| property    | type   | note                                                                                                                                                                                                                                |
| ----------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name        | string | A special property of named functions. Used to register the task. **Note:**  [`name`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name) is not writable; it cannot be set or changed. |
| displayName | string | When attached to a `taskFunction` creates an alias for the task. If using characters that aren't allowed in function names, use this property.                                                                                      |
| description | string | When attached to a `taskFunction` provides a description to be printed by the command line when listing tasks.                                                                                                                      |
| flags       | object | When attached to a `taskFunction` provides flags to be printed by the command line when listing tasks. The keys of the object represent the flags and the values are their descriptions.                                            |

```
const { task } = require('gulp');

const clean = function(cb) {
  // body omitted
  cb();
};
clean.displayName = 'clean:all';

task(clean);

function build(cb) {
  // body omitted
  cb();
}
build.description = 'Build the project';
build.flags = { '-e': 'An example flag' };

task(build);
```


# registry()

允许将自定义的注册表插入到任务系统中，以便提供共享任务或增强功能。

**注意：**  只有用 `task()` 方法注册的任务才会进入自定义注册表中。直接传递给 `series()` 或 `parallel()` 的任务函数（task functions）不会进入自定义任务注册表 - 如果你需要自定义注册表的行为，请通过字符串引用的方式将任务（task）组合在一起。

分配新注册表时，将传输当前注册表中的每个任务，并将用新注册表替换当前注册表。这允许按顺序添加多个自定义注册表。

有关详细信息，请参考 [创建自定义注册表](https://www.gulpjs.com.cn/docs/advanced/creating-custom-registries) 。

## 用法[​](https://www.gulpjs.com.cn/docs/api/registry#%E7%94%A8%E6%B3%95 "Direct link to 用法")

```
const { registry, task, series } = require('gulp');
const FwdRef = require('undertaker-forward-reference');

registry(FwdRef());

task('default', series('forward-ref'));

task('forward-ref', function(cb) {
  // body omitted
  cb();
});
```

## 函数原型[​](https://www.gulpjs.com.cn/docs/api/registry#%E5%87%BD%E6%95%B0%E5%8E%9F%E5%9E%8B "Direct link to 函数原型")

```
registry([registryInstance])
```

### 参数[​](https://www.gulpjs.com.cn/docs/api/registry#%E5%8F%82%E6%95%B0 "Direct link to 参数")

| 参数               | 类型     | 注解               |
| ---------------- | ------ | ---------------- |
| registryInstance | object | 自定义注册表的实例(而不是类)。 |

### 返回值[​](https://www.gulpjs.com.cn/docs/api/registry#%E8%BF%94%E5%9B%9E%E5%80%BC "Direct link to 返回值")

如果传递了 `registryInstance`，则不会返回任何内容。如果没有传递参数，则返回当前注册表实例。

### 可能出现的错误[​](https://www.gulpjs.com.cn/docs/api/registry#%E5%8F%AF%E8%83%BD%E5%87%BA%E7%8E%B0%E7%9A%84%E9%94%99%E8%AF%AF "Direct link to 可能出现的错误")

#### 参数错误[​](https://www.gulpjs.com.cn/docs/api/registry#%E5%8F%82%E6%95%B0%E9%94%99%E8%AF%AF "Direct link to 参数错误")

当构造函数（而不是实例）作为 `registryInstance` 传递时，将抛出一个错误（error），并且提示信息如下：

> Custom registries must be instantiated, but it looks like you passed a constructor.（自定义注册表必须实例化，但看起来你传递的是一个构造函数啊，亲！）

#### 缺少 `get` 方法[​](https://www.gulpjs.com.cn/docs/api/registry#%E7%BC%BA%E5%B0%91-get-%E6%96%B9%E6%B3%95 "Direct link to 缺少-get-方法")

当一个没有 `get` 方法的注册表作为 `registryInstance` 传递时，将抛出一个错误（error），并且提示信息如下：

> Custom registry must have `get` function.（自定义注册表必须具备 `get` 函数。）

#### 缺少 `set` 方法[​](https://www.gulpjs.com.cn/docs/api/registry#%E7%BC%BA%E5%B0%91-set-%E6%96%B9%E6%B3%95 "Direct link to 缺少-set-方法")

当一个没有 `set` 方法的注册表作为 `registryInstance` 传递时，将抛出一个错误（error），并且提示信息如下：

> Custom registry must have `set` function.（自定义注册表必须具有 `set` 函数。）

#### 缺少 `init` 方法[​](https://www.gulpjs.com.cn/docs/api/registry#%E7%BC%BA%E5%B0%91-init-%E6%96%B9%E6%B3%95 "Direct link to 缺少-init-方法")

当一个没有 `init` 方法的注册表作为 `registryInstance` 传递时，将抛出一个错误（error），并且提示信息如下：

> Custom registry must have `init` function"（自定义注册表必须具有 `init` 函数。）

#### 缺少 `tasks` 方法[​](https://www.gulpjs.com.cn/docs/api/registry#%E7%BC%BA%E5%B0%91-tasks-%E6%96%B9%E6%B3%95 "Direct link to 缺少-tasks-方法")

当一个没有 `tasks` 方法的注册表作为 `registryInstance` 传递时，将抛出一个错误（error），并且提示信息如下：

> Custom registry must have `tasks` function.（自定义注册表必须具有 `tasks` 函数。）


# tree()

获取当前任务依赖关系树——在极少数情况下需要它。

通常，gulp 使用者不会使用 `tree()`，但它是公开的，因此 CLI 可以显示在 gulpfile 中定义的任务的依赖关系图。

## 用法[​](https://www.gulpjs.com.cn/docs/api/tree#%E7%94%A8%E6%B3%95 "Direct link to 用法")

Example gulpfile:

```

const { series, parallel } = require('gulp');

function one(cb) {
  // body omitted
  cb();
}

function two(cb) {
  // body omitted
  cb();
}

function three(cb) {
  // body omitted
  cb();
}

const four = series(one, two);

const five = series(four,
  parallel(three, function(cb) {
    // Body omitted
    cb();
  })
);

module.exports = { one, two, three, four, five };
```

`tree()` 的输出:

```
{
  label: 'Tasks',
  nodes: [ 'one', 'two', 'three', 'four', 'five' ]
}
```

`tree({ deep: true })` 的输出:

```
{
  label: "Tasks",
  nodes: [
    {
      label: "one",
      type: "task",
      nodes: []
    },
    {
      label: "two",
      type: "task",
      nodes: []
    },
    {
      label: "three",
      type: "task",
      nodes: []
    },
    {
      label: "four",
      type: "task",
      nodes: [
        {
          label: "<series>",
          type: "function",
          branch: true,
          nodes: [
            {
              label: "one",
              type: "function",
              nodes: []
            },
            {
              label: "two",
              type: "function",
              nodes: []
            }
          ]
        }
      ]
    },
    {
      label: "five",
      type: "task",
      nodes: [
        {
          label: "<series>",
          type: "function",
          branch: true,
          nodes: [
            {
              label: "<series>",
              type: "function",
              branch: true,
              nodes: [
                {
                  label: "one",
                  type: "function",
                  nodes: []
                },
                {
                  label: "two",
                  type: "function",
                  nodes: []
                }
              ]
            },
            {
              label: "<parallel>",
              type: "function",
              branch: true,
              nodes: [
                {
                  label: "three",
                  type: "function",
                  nodes: []
                },
                {
                  label: "<anonymous>",
                  type: "function",
                  nodes: []
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

## 函数原型[​](https://www.gulpjs.com.cn/docs/api/tree#%E5%87%BD%E6%95%B0%E5%8E%9F%E5%9E%8B "Direct link to 函数原型")

```
tree([options])
```

### 参数[​](https://www.gulpjs.com.cn/docs/api/tree#%E5%8F%82%E6%95%B0 "Direct link to 参数")

| 参数      | 类型     | 描述                                                             |
| ------- | ------ | -------------------------------------------------------------- |
| options | object | 详情请见下文 [选项](https://www.gulpjs.com.cn/docs/api/tree#options) 。 |

### 返回值[​](https://www.gulpjs.com.cn/docs/api/tree#%E8%BF%94%E5%9B%9E%E5%80%BC "Direct link to 返回值")

返回一个详细描述已注册的任务树的对象——包含具有 `'label'` 和 `'nodes'` 属性的嵌套对象(与 [archy](https://www.npmjs.com/package/archy) 兼容)。

每个对象可能有一个 `type` 属性，用于确定节点是 `task` 还是 `function`。

每个对象可能有一个 `branch` 属性，当 `true` 时，该属性指示节点是使用 `series()` 还是 `parallel()` 创建的。

### 选项[​](https://www.gulpjs.com.cn/docs/api/tree#%E9%80%89%E9%A1%B9 "Direct link to 选项")

| name | type    | default | note                                |
| ---- | ------- | ------- | ----------------------------------- |
| deep | boolean | false   | 如果为 true，则返回整个树。如果为 false，则只返回顶级任务。



# Vinyl

虚拟的文件格式。当 `src()` 读取文件时，将生成一个 Vinyl 对象来表示文件——包括路径、内容和其他元数据。

Vinyl 对象可以使用[插件](https://www.gulpjs.com.cn/docs/getting-started/using-plugins)进行转换。还可以使用 `dest()` 将它们持久化到文件系统。

当创建您自己的 Vinyl 对象时——而不是使用 `src()` 生成——使用外部 `vinyl` 模块，如下面的用法所示。

## 用法[​](https://www.gulpjs.com.cn/docs/api/vinyl#%E7%94%A8%E6%B3%95 "Direct link to 用法")

```
const Vinyl = require('vinyl');

const file = new Vinyl({
  cwd: '/',
  base: '/test/',
  path: '/test/file.js',
  contents: new Buffer('var x = 123')
});

file.relative === 'file.js';

file.dirname === '/test';
file.dirname = '/specs';
file.path === '/specs/file.js';

file.basename === 'file.js';
file.basename = 'file.txt';
file.path === '/specs/file.txt';

file.stem === 'file';
file.stem = 'foo';
file.path === '/specs/foo.txt';
file.extname === '.txt';
file.extname = '.js';
file.path === '/specs/foo.js';
```

## 函数原型[​](https://www.gulpjs.com.cn/docs/api/vinyl#%E5%87%BD%E6%95%B0%E5%8E%9F%E5%9E%8B "Direct link to 函数原型")

```
new Vinyl([options])
```

### 参数[​](https://www.gulpjs.com.cn/docs/api/vinyl#%E5%8F%82%E6%95%B0 "Direct link to 参数")

| 参数      | 类型     | 描述                                                              |
| ------- | ------ | --------------------------------------------------------------- |
| options | object | 详情请参加下文 [选项](https://www.gulpjs.com.cn/docs/api/vinyl#options)。 |

### 返回值[​](https://www.gulpjs.com.cn/docs/api/vinyl#%E8%BF%94%E5%9B%9E%E5%80%BC "Direct link to 返回值")

返回一个 Vinyl 类的实例，表示一个单独的虚拟文件，详见下面的 [Vinyl 实例](https://www.gulpjs.com.cn/docs/api/vinyl#vinyl-instance)。

### 可能出现的错误[​](https://www.gulpjs.com.cn/docs/api/vinyl#%E5%8F%AF%E8%83%BD%E5%87%BA%E7%8E%B0%E7%9A%84%E9%94%99%E8%AF%AF "Direct link to 可能出现的错误")

当传递的任何选项都不符合表中定义的[实例属性定义](https://www.gulpjs.com.cn/docs/api/vinyl#instance-properties)(如 `path` 被设置为一个数字)时抛出错误。

### 选项[​](https://www.gulpjs.com.cn/docs/api/vinyl#%E9%80%89%E9%A1%B9 "Direct link to 选项")

| 名称       | 类型                           | 默认住             | 注                                                                                                                                                                                                                                              |
| -------- | ---------------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cwd      | string                       | `process.cwd()` | 此目录用于推导相对路径。该目录路径将被 [规范化（normalized）](https://www.gulpjs.com.cn/docs/api/vinyl#normalization-and-concatenation) 并删除结尾的目录分隔符。                                                                                                                   |
| base     | string                       |                 | 用于计算 `relative` 实例属性。 如果没有设置，则回退到 `cwd` 的值。通常设置为 [glob base](https://www.gulpjs.com.cn/docs/api/concepts#glob-base)。该路径将被 [规范化（normalized）](https://www.gulpjs.com.cn/docs/api/vinyl#normalization-and-concatenation) 并删除结尾的目录分隔符。             |
| path     | string                       |                 | 完整的绝对文件路径。该路径将被 [规范化（normalized）](https://www.gulpjs.com.cn/docs/api/vinyl#normalization-and-concatenation) 并删除结尾的目录分隔符。                                                                                                                       |
| history  | array                        | `[ ]`           | 此路径数组用于预先填充 Vinyl 实例的 `history` 属性。通常是从先前的 Vinyl 对象衍生处新的 Vinyl 对象。通过同时传递了 `path` 和 `history` 参数，则将`path` 附加到 `history` 后面。数组中的每个条目都将被 [规范化（normalized）](https://www.gulpjs.com.cn/docs/api/vinyl#normalization-and-concatenation) 并删除结尾的目录分隔符。 |
| stat     | object                       |                 | 一个 `fs.Stats` 实例，通常是对文件调用 `fs.stat()` 的结果。用于确定 Vinyl 对象是否表示一个目录或符号链接。                                                                                                                                                                          |
| contents | ReadableStream Buffer `null` | `null`          | 文件的内容。如果 `contents` 是一个 ReadableStream，它将被包装进一个 [cloneable-readable](https://github.com/mcollina/cloneable-readable) 流(stream                                                                                                                  |
| )中。      |                              |                 |                                                                                                                                                                                                                                                |

`options` 上的任何其他属性都将直接分配给 Vinyl 实例。

```
const Vinyl = require('vinyl');

const file = new Vinyl({ foo: 'bar' });
file.foo === 'bar';
```

## Vinyl 实例[​](https://www.gulpjs.com.cn/docs/api/vinyl#vinyl-%E5%AE%9E%E4%BE%8B "Direct link to Vinyl 实例")

每个 Vinyl 对象实例都具有访问和/或修改虚拟文件信息的属性和方法。

### 实例属性[​](https://www.gulpjs.com.cn/docs/api/vinyl#%E5%AE%9E%E4%BE%8B%E5%B1%9E%E6%80%A7 "Direct link to 实例属性")

所有内部管理的路径——除了 `contents` 和 `stat` 之外的任何实例属性——都被规范化，并删除了末尾分隔符。有关更多信息，请参见[规范化和连接](https://www.gulpjs.com.cn/docs/api/vinyl#normalization-and-concatenation)。

| 属性       | 类型                           | 描述                                                                                                                                                                                               | 抛出错误                                         |
| -------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| contents | ReadableStream Buffer `null` | 获取和设置虚拟文件的内容。如果将其设置为 ReadableStream，它将被包装在一个 [cloneable-readable](https://github.com/mcollina/cloneable-readable) 流（stream）中。                                                                    | 如果设置为 ReadableStream、Buffer 或 `null` 之外的任何值。 |
| stat     | object                       | 获取或设置 [`fs.Stats`](https://www.gulpjs.com.cn/docs/api/concepts#file-system-stats) 的实例。当确定 Vinyl 对象是否表示目录或符号链接时使用。                                                                                |                                              |
| cwd      | string                       | 获取并设置当前工作目录。用于推导相对路径。                                                                                                                                                                            | 如果设置为空字符串或任何非字符串值。                           |
| base     | string                       | 获取和设置起始目录（base directory）。用于计算实例的 `relative` 属性。在由 `src()` 生成的 Vinyl 对象上，将设置为 [glob base](https://www.gulpjs.com.cn/docs/api/concepts#glob-base)。如果设置为 `null` 或 `undefined`，则会用实例属性 `cwd` 的值来代替。 | 如果设置为空字符串或任何非字符串值(`null` 或 `undefined` 除外)。  |
| path     | string                       | 获取和设置完整的绝对文件路径。设置为与当前 `path` 不同的值会将新路径附加到 `history` 实例属性中。                                                                                                                                       | 如果设置为任何非字符串值。                                |
| history  | array                        | 已分配的 Vinyl 对象的所有 `path` 值的数组。第一个元素是原始路径，最后一个元素是当前路径。此属性及其包含元素应被视为只读，仅通过设置 `path` 实例属性间接更改。                                                                                                       |                                              |
| relative | string                       | 获取 `base` 和 `path` 实例属性之间的相对路径段。                                                                                                                                                                 | 如果设置为任何值。如果在 `path` 不可用时访问。                  |
| dirname  | string                       | 获取和设置 `path` 实例属性的目录。                                                                                                                                                                            | 如果在 `path` 不可用时访问。                           |
| stem     | string                       | 获取和设置 `path` 实例属性的不带扩展名的文件名。                                                                                                                                                                     | 如果在 `path` 不可用时访问。                           |
| extname  | string                       | 获取和设置 `path` 实例属性的扩展名。                                                                                                                                                                           | 如果在 `path` 不可用时访问。                           |
| basename | string                       | 获取和设置 `path` 实例属性的文件名(`stem + extname`)。                                                                                                                                                         | 如果在 `path` 不可用时访问。                           |
| symlink  | string                       | 获取和设置符号链接的引用路径。                                                                                                                                                                                  | 如果设置为任何非字符串值。                                |

### 实例方法[​](https://www.gulpjs.com.cn/docs/api/vinyl#%E5%AE%9E%E4%BE%8B%E6%96%B9%E6%B3%95 "Direct link to 实例方法")

| 方法                 | 返回值类型   | 返回值                                                                                                                                                                                                 |
| ------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isBuffer()`       | boolean | 如果 `contents` 实例属性是一个 Buffer，则返回 true。                                                                                                                                                              |
| `isStream()`       | boolean | 如果 `contents` 实例属性是一个 Stream，则返回 true。                                                                                                                                                              |
| `isNull()`         | boolean | 如果 `contents` 实例属性为 `null`，则返回 true。                                                                                                                                                                |
| `isDirectory()`    | boolean | 如果实例表示一个目录，则返回 true。当 `isNull()` 返回 true，`stat` 实例属性是一个对象，并且 `stat.isDirectory()` 返回 true 时，实例被认为是一个目录。这假设 Vinyl 对象是用一个有效的（或适当模拟的） `fs.Stats` 对象构造的。                                                |
| `isSymbolic()`     | boolean | 如果实例表示符号链接，则返回 true。 当 `isNull()` 返回 true，`stat` 实例属性是一个对象，并且 `stat.isSymbolicLink()` 返回 true 时， 实例被认为是 symbolic。 这假设 Vinyl 对象是用一个有效的（或适当模拟的） `fs.Stats` 对象构造的。                                     |
| `clone([options])` | object  | A new Vinyl object with all properties cloned. 一个使用所有属性克隆出的新的 Vinyl 对象。 默认情况下，自定义属性是深拷贝。如果 `deep` 选项为 false，自定义属性将被浅拷贝。如果 `contents` 选项设置为 fasle 并且 `contents` 属性是一个 Buffer，那么这个 Buffer 将被复用，而不是克隆。 |
| `inspect()`        | string  | 返回 Vinyl 对象的格式化说明。由 Node 的 console.log 自动调用。                                                                                                                                                        |

## 路径规范化和连接[​](https://www.gulpjs.com.cn/docs/api/vinyl#%E8%B7%AF%E5%BE%84%E8%A7%84%E8%8C%83%E5%8C%96%E5%92%8C%E8%BF%9E%E6%8E%A5 "Direct link to 路径规范化和连接")

所有路径属性都由它们的 setter 进行规范化。使用 `/` 连接路径，而不是使用 `path.join()`，这样就可以在所有平台上正确地进行规范化。永远不要使用 `` 连接。（ `` 是 POSIX 系统上的一个有效文件名字符。）

```
const file = new File();
file.path = '/' + 'test' + '/' + 'foo.bar';

console.log(file.path);
// posix => /test/foo.bar
// win32 => \test\foo.bar
```


# Vinyl.isVinyl()

检测一个对象（object）是否是一个 Vinyl 实例。不要使用 `instanceof` 方法。

**注意**：此方法使用了 Vinyl 的一个内部属性，而这个属性在老版本的 Vinyl 中是不存在的，如果你使用的恰好时老版本，则会得到一个 fasle 结果。

## 用法[​](https://www.gulpjs.com.cn/docs/api/vinyl-isvinyl#%E7%94%A8%E6%B3%95 "Direct link to 用法")

```
const Vinyl = require('vinyl');

const file = new Vinyl();
const notAFile = {};

Vinyl.isVinyl(file) === true;
Vinyl.isVinyl(notAFile) === false;
```

## 函数原型[​](https://www.gulpjs.com.cn/docs/api/vinyl-isvinyl#%E5%87%BD%E6%95%B0%E5%8E%9F%E5%9E%8B "Direct link to 函数原型")

```
Vinyl.isVinyl(file);
```

### 参数[​](https://www.gulpjs.com.cn/docs/api/vinyl-isvinyl#%E5%8F%82%E6%95%B0 "Direct link to 参数")

| 参数   | 类型     | 注解      |
| ---- | ------ | ------- |
| file | object | 需要检查的对象 |

### 返回值[​](https://www.gulpjs.com.cn/docs/api/vinyl-isvinyl#%E8%BF%94%E5%9B%9E%E5%80%BC "Direct link to 返回值")

如果 `file` 对象是 Vinyl 实例则返回 true。


# Vinyl.isCustomProp()

确定一个属性是否由 Vinyl 在内部进行管理。Vinyl 在构造函数中设置值或在 `clone()` 实例方法中复制属性时使用。

这种方法在扩展 Vinyl 类时很有用。详情参见下文：[扩展 Vinyl](https://www.gulpjs.com.cn/docs/api/vinyl-iscustomprop#extending-vinyl)。

## 用法[​](https://www.gulpjs.com.cn/docs/api/vinyl-iscustomprop#%E7%94%A8%E6%B3%95 "Direct link to 用法")

```
const Vinyl = require('vinyl');

Vinyl.isCustomProp('sourceMap') === true;
Vinyl.isCustomProp('path') === false;
```

## 函数原型[​](https://www.gulpjs.com.cn/docs/api/vinyl-iscustomprop#%E5%87%BD%E6%95%B0%E5%8E%9F%E5%9E%8B "Direct link to 函数原型")

```
Vinyl.isCustomProp(property)
```

### 参数[​](https://www.gulpjs.com.cn/docs/api/vinyl-iscustomprop#%E5%8F%82%E6%95%B0 "Direct link to 参数")

| 参数       | 类型     | 注解       |
| -------- | ------ | -------- |
| property | string | 要检查的属性名。 |

### 返回值[​](https://www.gulpjs.com.cn/docs/api/vinyl-iscustomprop#%E8%BF%94%E5%9B%9E%E5%80%BC "Direct link to 返回值")

如果属性不是内部管理的，则为 True。

## 扩展 Vinyl[​](https://www.gulpjs.com.cn/docs/api/vinyl-iscustomprop#%E6%89%A9%E5%B1%95-vinyl "Direct link to 扩展 Vinyl")

当在内部管理自定义属性时，必须扩展静态 `isCustomProp` 方法，并在查询其中一个自定义属性时返回 false。

```
const Vinyl = require('vinyl');

const builtInProps = ['foo', '_foo'];

class SuperFile extends Vinyl {
  constructor(options) {
    super(options);
    this._foo = 'example internal read-only value';
  }

  get foo() {
    return this._foo;
  }

  static isCustomProp(name) {
    return super.isCustomProp(name) && builtInProps.indexOf(name) === -1;
  }
}
```

在上面的例子中，`foo` 和 `_foo` 在克隆或将 `options` 传递给 `new SuperFile(options)` 时不会分配给新对象。

如果您的自定义属性或逻辑在克隆期间需要特殊处理，请在扩展 Vinyl 时覆盖 `clone` 方法。
