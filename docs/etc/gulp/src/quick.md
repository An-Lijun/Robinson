---
url: /etc\gulp\src/quick.md
---
# 快速上手

```
npm install --global gulp-cli
npm install --save-dev gulp
```

## 创建 gulpfile 文件[​](https://www.gulpjs.com.cn/docs/getting-started/quick-start#%E5%88%9B%E5%BB%BA-gulpfile-%E6%96%87%E4%BB%B6 "Direct link to 创建 gulpfile 文件")

利用任何文本编辑器在项目大的根目录下创建一个名为 gulpfile.js 的文件，并在文件中输入以下内容：

```javascript
function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask
```

## 测试

在项目根目录下执行 gulp 命令：

```
gulp
```

如需运行多个任务（task），可以执行 `gulp <task> <othertask>`。

## 输出结果

默认任务（task）将执行，因为任务为空，因此没有实际动作。
