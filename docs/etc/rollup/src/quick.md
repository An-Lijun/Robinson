---
url: /etc\rollup\src/quick.md
---
# 快速上手

## 开发环境与安装

node使用 **v16.14.0**\
rollup 版本 **v4.30.1**

首先全局安装rollup
npm install rollup --global
安装完毕后,这里可以在控制台执行rollup命令
注意: 因为没有传入参数，Rollup 会打印出使用说明。这和运行 `rollup --help`，或者 `rollup -h` 相同。

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/b84dd89495234e7c92ea7a7de56526bd~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5a6J5Yip5ZCbX0FuTGlqdW4=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjUwMjk2MDY4NjA0MDI4NiJ9\&rk3s=f64ab15b\&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018\&x-orig-expires=1737859432\&x-orig-sign=p0OMnMJYRMN4qXIkooht2ffF7nE%3D)

## rollup基础工程需要的目录结构

注意rollup 支持命令行界面（CLI）操作,但是这样命令会复杂到很难读懂,这里我更推荐使用配置文件式操作,所以这里关于命令的除了必要的都会一笔带过。

```
├── dist # 编译结果
├── package.json
└── src # 源码
    └── index.js
└── rollup.config.mjs # rollup配置文件
```

实际代码关系如下

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/c19ddfbe338049db8858eed453270ada~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5a6J5Yip5ZCbX0FuTGlqdW4=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjUwMjk2MDY4NjA0MDI4NiJ9\&rk3s=f64ab15b\&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018\&x-orig-expires=1737859432\&x-orig-sign=y9Y7Wa7v%2BMm2PLwK9IJPTVYhhKE%3D)

## 打包

此时我们就已经搭建好了一个简单的rollup工程\
使用命令 **rollup -c** 即可对函数进行打包\
怎么样是不是很简单
![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/07586ac7e191489ba62f2d933501f58d~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5a6J5Yip5ZCbX0FuTGlqdW4=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjUwMjk2MDY4NjA0MDI4NiJ9\&rk3s=f64ab15b\&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018\&x-orig-expires=1737859432\&x-orig-sign=sLxYfitt0%2F3T6qpFzMqS2Yr%2BduY%3D)

## 修改打包命令

由于我们习惯了webpack 或者其它构建工具的打包方式,这里也是推荐使用package添加一个单一的构建脚本
如

```json
{
	"scripts": {
		"build": "rollup --config"
	}
}
```

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/82be9f7b38ca4c7ca89580bd41a3e41f~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5a6J5Yip5ZCbX0FuTGlqdW4=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjUwMjk2MDY4NjA0MDI4NiJ9\&rk3s=f64ab15b\&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018\&x-orig-expires=1737859432\&x-orig-sign=6jgAR1eY3OaIcSUZd3cbTg%2BZaaY%3D)
这样你和你的小伙伴就可以使用 npm run build进行打包了
