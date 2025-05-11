---
url: /etc\apiExtractor\src/config.md
---
## 安装[​](https://vitepress.dev/zh/guide/getting-started#installation)

### 前置准备[​](https://vitepress.dev/zh/guide/getting-started#prerequisites)

* [Node.js](https://nodejs.org/) 18 及以上版本。

* 通过命令行界面 (CLI) 访问 VitePress 的终端。

* 支持 [Markdown](https://en.wikipedia.org/wiki/Markdown) 语法的编辑器。

* 推荐 [VSCode](https://code.visualstudio.com/) 及其[官方 Vue 扩展](https://marketplace.visualstudio.com/items?itemName=Vue.volar)。

### 安装并初始化

```
  npm i vitepress
  
  $ npx vitepress init
  将需要回答几个简单的问题：
  
  ┌  Welcome to VitePress!
 │
 ◇  Where should VitePress initialize the config? //VitePress 应该在哪里初始化配置
 │  ./docs
 │
 ◇  Site title: //标题
 │  My Awesome Project
 │
 ◇  Site description: //描述
 │  A VitePress Site
 │
 ◆  Theme: //主题
 │  ● Default Theme (Out of the box, good-looking docs)
 │  ○ Default Theme + Customization
 │  ○ Custom Theme
 └
```

### 文档结构

```tree
├─ docs  
│  ├─ .vitepress  
│  │  └─ config.js  
│  ├─ api-examples.md  
│  ├─ markdown-examples.md  
│  └─ index.md  
└─ package.json

```
