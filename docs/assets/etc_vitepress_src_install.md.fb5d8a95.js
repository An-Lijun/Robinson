import{_ as e,o as s,c as a,Q as n}from"./chunks/framework.a333c6fb.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"etc/vitepress/src/install.md","filePath":"etc/vitepress/src/install.md","lastUpdated":1738076829000}'),t={name:"etc/vitepress/src/install.md"},r=n(`<h2 id="安装​" tabindex="-1">安装<a href="https://vitepress.dev/zh/guide/getting-started#installation" target="_blank" rel="noreferrer">​</a> <a class="header-anchor" href="#安装​" aria-label="Permalink to &quot;安装[​](https://vitepress.dev/zh/guide/getting-started#installation)&quot;">​</a></h2><h3 id="前置准备​" tabindex="-1">前置准备<a href="https://vitepress.dev/zh/guide/getting-started#prerequisites" target="_blank" rel="noreferrer">​</a> <a class="header-anchor" href="#前置准备​" aria-label="Permalink to &quot;前置准备[​](https://vitepress.dev/zh/guide/getting-started#prerequisites)&quot;">​</a></h3><ul><li><p><a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a> 18 及以上版本。</p></li><li><p>通过命令行界面 (CLI) 访问 VitePress 的终端。</p></li><li><p>支持 <a href="https://en.wikipedia.org/wiki/Markdown" target="_blank" rel="noreferrer">Markdown</a> 语法的编辑器。</p></li><li><p>推荐 <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VSCode</a> 及其<a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar" target="_blank" rel="noreferrer">官方 Vue 扩展</a>。</p></li></ul><h3 id="安装并初始化" tabindex="-1">安装并初始化 <a class="header-anchor" href="#安装并初始化" aria-label="Permalink to &quot;安装并初始化&quot;">​</a></h3><pre><code>  npm i vitepress
  
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
</code></pre><h3 id="文档结构" tabindex="-1">文档结构 <a class="header-anchor" href="#文档结构" aria-label="Permalink to &quot;文档结构&quot;">​</a></h3><div class="language-tree vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">tree</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">├─ docs  </span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ .vitepress  </span></span>
<span class="line"><span style="color:#e1e4e8;">│  │  └─ config.js  </span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ api-examples.md  </span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ markdown-examples.md  </span></span>
<span class="line"><span style="color:#e1e4e8;">│  └─ index.md  </span></span>
<span class="line"><span style="color:#e1e4e8;">└─ package.json</span></span></code></pre><pre class="shiki light-plus vp-code-light"><code><span class="line"><span style="color:#000000;">├─ docs  </span></span>
<span class="line"><span style="color:#000000;">│  ├─ .vitepress  </span></span>
<span class="line"><span style="color:#000000;">│  │  └─ config.js  </span></span>
<span class="line"><span style="color:#000000;">│  ├─ api-examples.md  </span></span>
<span class="line"><span style="color:#000000;">│  ├─ markdown-examples.md  </span></span>
<span class="line"><span style="color:#000000;">│  └─ index.md  </span></span>
<span class="line"><span style="color:#000000;">└─ package.json</span></span></code></pre></div>`,7),l=[r];function i(o,p,c,d,h,m){return s(),a("div",null,l)}const _=e(t,[["render",i]]);export{g as __pageData,_ as default};
