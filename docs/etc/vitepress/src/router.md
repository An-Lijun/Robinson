---
url: /etc\vitepress\src/router.md
---
# 路由

## 根目录和源目录

### 根目录

项目根目录是 VitePress 将尝试寻找 `.vitepress` 特殊目录的地方。`.vitepress` 目录是 VitePress 配置文件、开发服务器缓存、构建输出和可选主题自定义代码的预留位置。

当从命令行运行 `vitepress dev` 或 `vitepress build` 时，VitePress 将使用当前工作目录作为项目根目录。要将子目录指定为根目录，需要将相对路径传递给命令。例如，如果 VitePress 项目位于 `./docs`，应该运行 `vitepress dev docs`：

```
    .
    ├─ docs                    # 项目根目录
    │  ├─ .vitepress           # 配置目录
    │  ├─ getting-started.md
    │  └─ index.md
    └─ ...
```

```sh
vitepress dev docs
```

这将导致以下源代码到 HTML 的映射：

```
docs/index.md            -->  /index.html (可以通过 / 访问)
docs/getting-started.md  -->  /getting-started.html
```

这通常用于项目中集成一个vitepress 文档

### 源目录

源目录是 Markdown 源文件所在的位置。默认情况下，它与项目根目录相同。但是，可以通过 [`srcDir`](https://vitepress.dev/zh/reference/site-config#srcdir) 配置选项对其进行配置。

`srcDir` 选项是相对于项目根目录解析的。例如，对于 `srcDir: 'src'`，文件结构将如下所示：

```
    .                          # 项目根目录
    ├─ .vitepress              # 配置目录
    └─ src                     # 源目录
       ├─ getting-started.md
       └─ index.md

```

生成的源代码到 HTML 的映射：

```javascript
    src/index.md            -->  //index.html (可以通过 / 访问)
    src/getting-started.md  -->  //getting-started.html
```

## 链接页面

在页面之间链接时，可以使用绝对路径和相对路径。请注意，虽然 `.md` 和 `.html` 扩展名都可以使用，但最佳做法是省略文件扩展名，以便 VitePress 可以根据配置生成最终的 URL。

```
[显示内容](./路径) 
```

### 链接到非 VitePress 页面

如果想链接到站点中不是由 VitePress 生成的页面，需要使用完整的 URL（在新选项卡中打开）或明确指定 target：

```
[Link to pure.html](/pure.html){target="_self"}
```

## 生成简洁的 URL

某些服务器或托管平台 (例如 Netlify、Vercel 或 GitHub Pages) 提供将 `/foo` 之类的 URL 映射到 `/foo.html` (如果存在) 的功能，而无需重定向：

* Netlify 和 GitHub Pages 是默认支持的。
* Vercel 需要在 [vercel.json 中启用 cleanUrls 选项](https://vercel.com/docs/concepts/projects/project-configuration#cleanurls)。

如果可以使用此功能，还可以启用 VitePress 自己的 [`cleanUrls`](https://vitepress.dev/zh/reference/site-config#cleanurls) 配置选项，以便：

* 页面之间的入站链接是在没有 `.html` 扩展名的情况下生成的。
* 如果当前路径以 `.html` 结尾，路由器将执行客户端重定向到无扩展路径。

## 路由重写

可以自定义源目录结构和生成页面之间的映射。当有一个复杂的项目结构时，它很有用。例如，假设有一个包含多个包的 monorepo，并且希望将文档与源文件一起放置，如下所示：

```javascript
    export default {
      rewrites: {
        'packages/pkg-a/src/pkg-a-docs.md': 'pkg-a/index.md',
        'packages/pkg-b/src/pkg-b-docs.md': 'pkg-b/index.md',
        'packages/:pkg/src/(.*)': ':pkg/index.md'
      }
    }
```

重写路径是使用 `path-to-regexp` 包编译的——请参阅其[文档](https://github.com/pillarjs/path-to-regexp#parameters)以获取更多语法。

例如

```JavaScript

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Runtime API Examples', link: '/dex.md' },
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  rewrites: {
    'docs/aaa/i.md': 'dex.md'
  },
```

// 其实就是让路由看起来一致

## 路由参数

比如区分不同版本的文档(没看懂官网暂时省略)
