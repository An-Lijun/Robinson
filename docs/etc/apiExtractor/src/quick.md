---
url: /etc\apiExtractor\src/quick.md
---
# 快速上手

注意这里默认已经配置好一个ts项目，这里我会使用tsc用于测试

1. 安装依赖

```
npm install  @microsoft/api-extractor -D
```

2. 创建模板配置文件
   以下命令将创建一个模板文件，其中显示所有设置及其默认值：`api-extractor.json`

```
 npx api-extractor init 
```

然后会多一个api-extractor.json, 这里由于给的json携带注释所以报错了。

如果觉得红色影响阅读
可以在vscode上方搜索 json with Comments,找到检索项后点击红色就消失了

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/088314a4f4fa40378fb9c96585989335~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5a6J5Yip5ZCbX0FuTGlqdW4=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjUwMjk2MDY4NjA0MDI4NiJ9\&rk3s=f64ab15b\&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018\&x-orig-expires=1738676231\&x-orig-sign=FtieBfgMmLIxMZqATPG3XEKxSjM%3D)

这里需要将 mainEntryPointFilePath 改为自己的入口dts

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/a9389513480a41539b99d6da0667a7d8~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5a6J5Yip5ZCbX0FuTGlqdW4=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjUwMjk2MDY4NjA0MDI4NiJ9\&rk3s=f64ab15b\&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018\&x-orig-expires=1738676231\&x-orig-sign=KKF3TorHxHUkVm8dQH%2FSHD5%2Ffkc%3D)

将 tsconfigFilePath 设置为tsconfig.json

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/d33be8841b764b2999b190ee9b40c244~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5a6J5Yip5ZCbX0FuTGlqdW4=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjUwMjk2MDY4NjA0MDI4NiJ9\&rk3s=f64ab15b\&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018\&x-orig-expires=1738676231\&x-orig-sign=cemuKI96XgifW2wWg%2BIDwCI0uLU%3D)

创建一个ect文件夹
3\. 执行打包命令

```
   npx api-extractor run --local --verbose
```

这样就可以使用这个生成的json文件去生成api文档了，这篇不会教学怎么使用这个json生成md文件

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/9c075ad4d0264da192acbfa19c9a5fd2~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5a6J5Yip5ZCbX0FuTGlqdW4=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjUwMjk2MDY4NjA0MDI4NiJ9\&rk3s=f64ab15b\&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018\&x-orig-expires=1738676231\&x-orig-sign=tfU%2BqHkqnnFJiptUxs9HzEKy2jA%3D)
