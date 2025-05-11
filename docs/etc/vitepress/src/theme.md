---
url: /etc\vitepress\src/theme.md
---
# 默认主题

主题的配置都在 vitepress.config.js 的themeConfig中

```js
export default {
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',

  // 主题相关配置
  themeConfig: {
    logo: '/logo.svg',
    nav: [...],
    sidebar: { ... }
  }
}
```

## i18nRouting[​](https://vitepress.dev/zh/reference/default-theme-config#i18nrouting)

* 类型：`boolean`

将本地语言更改为 `zh` 会将 URL 从 `/foo`（或 `/en/foo/`）更改为 `/zh/foo`。可以通过将 `themeConfig.i18nRouting` 设置为 `false` 来禁用此行为。

## logo

导航栏上显示的 Logo，位于站点标题前。可以接受一个路径字符串，或者一个对象来设置在浅色/深色模式下不同的 Logo。

```ts
export default {
  themeConfig: {
    logo: '/logo.svg'
  }
}
```

```ts
type ThemeableImage =
  | string
  | { src: string; alt?: string }
  | { light: string; dark: string; alt?: string }
```

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/8e079877d5dd4bf9a117b8a866458b9c~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5a6J5Yip5ZCbX0FuTGlqdW4=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjUwMjk2MDY4NjA0MDI4NiJ9\&rk3s=f64ab15b\&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018\&x-orig-expires=1738661916\&x-orig-sign=e7yQnnueyfwVysRyTK3awFCBYNQ%3D)

## siteTitle[​](https://vitepress.dev/zh/reference/default-theme-config#sitetitle)

* 类型：`string | false`

可以自定义此项以替换导航中的默认站点标题 (应用配置中的 `title`)。当设置为 `false` 时，导航中的标题将被禁用。这在当 `logo` 已经包含站点标题文本时很有用。

```ts
export default {
  themeConfig: {
    siteTitle: 'Hello World'
  }
}
```

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/6dbf40820869415db3f008c83403b291~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5a6J5Yip5ZCbX0FuTGlqdW4=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjUwMjk2MDY4NjA0MDI4NiJ9\&rk3s=f64ab15b\&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018\&x-orig-expires=1738661916\&x-orig-sign=5OmS2CNdySCpw7wBWIitRP1b3%2FI%3D)

## nav 导航

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/d7e4b159f05043dd80625777854bf865~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5a6J5Yip5ZCbX0FuTGlqdW4=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjUwMjk2MDY4NjA0MDI4NiJ9\&rk3s=f64ab15b\&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018\&x-orig-expires=1738661916\&x-orig-sign=WV4%2B0ImkNoEdXFunTCj8pall2x8%3D)

`text` 是 nav 中显示的实际文本，而 `link` 是单击文本时将导航到的链接。对于链接，将路径设置为不带 `.md` 后缀的实际文件，并且始终以 `/` 开头。

导航链接也可以是下拉菜单。为此，请替换 `link` 选项，设置 `items` 数组。

```js

    export default {
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/guide' },
          {
            text: 'Dropdown Menu',
            items: [
              { text: 'Item A', link: '/item-1' },
              { text: 'Item B', link: '/item-2' },
              { text: 'Item C', link: '/item-3' }
              {
                  // 该部分的标题 
                  text: 'Section A Title', 
                  items: [ 
                      { text: 'Section A Item A', link: '...' }, 
                      { text: 'Section B Item B', link: '...' } 
                  ]
              }
            ]
          }
        ]
      }
    }
```

### 自定义链接的路由匹配状态[​](https://vitepress.dev/zh/reference/default-theme-nav#customize-link-s-active-state)

当前页面位于匹配路径下时，导航菜单项将突出显示。如果想自定义要匹配的路径，请将 `activeMatch` 属性和正则表达式定义为字符串值。

```js

    export default {
      themeConfig: {
        nav: [
          // 当用户位于 `/config/` 路径时，该链接处于激活状态
          {
            text: 'Guide',
            link: '/guide',
            activeMatch: '/config/'
          }
        ]
      }
    }
```

### 自定义链接的“target”和“rel”属性[​](https://vitepress.dev/zh/reference/default-theme-nav#customize-link-s-target-and-rel-attributes)

默认情况下，VitePress 会根据链接是否为外部链接自动判断 `target` 和 `rel` 属性。但如果愿意，也可以自定义它们。

```js

    export default {
      themeConfig: {
        nav: [
          {
            text: 'Merchandise',
            link: 'https://www.thegithubshop.com/',
            target: '_self',
            rel: 'sponsored'
          }
        ]
      }
    }
```

在 HTML 中，`rel`属性是一个用于定义当前文档与链接目标之间关系的属性，它主要用于`<a>`、`<link>`等标签中，以下是其常见用法和取值介绍：

* **在`<a>`标签中的使用**

  * **`rel="noopener"`** ：当链接指向一个新的页面时，使用`noopener`可以防止新页面通过`window.opener`访问当前页面的`window`对象，增强安全性，减少潜在的安全风险。例如：`<a href="https://example.com" rel="noopener">链接文本</a>`。
  * **`rel="noreferrer"`** ：使用`noreferrer`时，浏览器在加载目标页面时不会发送`Referer`头部信息，这可以保护用户的隐私，避免泄露当前页面的来源信息。比如：`<a href="https://another-site.com" rel="noreferrer">另一个链接</a>`。
  * **`rel="nofollow"`** ：告知搜索引擎不要追踪该链接，通常用于防止垃圾链接或者用户生成内容中的链接影响网站的权重和排名。如：`<a href="https://spammy-site.com" rel="nofollow">垃圾链接示例</a>`。
  * **`rel="external"`** ：表示链接指向外部网站，用于向用户和搜索引擎明确链接的目标是在当前网站之外。例如：`<a href="https://outsidesite.com" rel="external">外部链接</a>`。

* **在`<link>`标签中的使用**

  * **`rel="stylesheet"`** ：用于链接外部样式表，告诉浏览器该链接指向的是一个 CSS 文件，用于为当前页面设置样式。例如：`<link rel="stylesheet" href="styles.css">`。
  * **`rel="icon"`** ：用于指定网站的图标，通常是一个小的图像文件，显示在浏览器的标签页、收藏夹等位置。比如：`<link rel="icon" href="favicon.ico">`。
  * **`rel="canonical"`** ：用于指定页面的规范版本，帮助搜索引擎确定页面的主要版本，避免重复内容问题。例如：`<link rel="canonical" href="https://www.example.com/correct-page">`。
  * **`rel="alternate"`** ：用于指定页面的替代版本，比如不同语言版本或不同格式的页面。例如：`<link rel="alternate" hreflang="en-US" href="https://example.com/en-us/page">`表示英语（美国）版本的页面。

* **其他可能的取值和用途**

  * **`rel="prev"`和`rel="next"`** ：用于表示页面之间的导航关系，`prev`表示上一页，`next`表示下一页，常用于分页导航。
  * **`rel="license"`** ：用于链接到网站或文档的版权声明或使用许可页面。
  * **`rel="tag"`** ：用于将当前文档与一个或多个标签相关联，类似于关键词，有助于分类和搜索。

你可以通过使用 `component` 选项在导航栏中包含自定义组件。`component` 键对应的值应为 Vue 组件名，并且必须使用 [Theme.enhanceApp](https://vitepress.dev/zh/guide/custom-theme#theme-interface) 全局注册。

### 自定义组件

```js
export default {
  themeConfig: {
    nav: [
      {
        text: 'My Menu',
        items: [
          {
            component: 'MyCustomComponent',
            // 可选的 props 传递给组件
            props: {
              title: 'My Custom Component'
            }
          }
        ]
      },
      {
        component: 'AnotherCustomComponent'
      }
    ]
  }
}
```

## sidebar

```js
export type Sidebar = SidebarItem[] | SidebarMulti

export interface SidebarMulti {
  [path: string]: SidebarItem[]
}

export type SidebarItem = {
  text?: string //侧边栏项的文本标签
  link?: string //侧边栏项的链接
  items?: SidebarItem[] //侧边栏项的子项
  collapsed?: boolean // 默认不可折叠  `true`，则侧边栏组可折叠并且默认折叠 `false`，则侧边栏组可折叠但默认展开
}

```

## `useSidebar` composable[​](https://vitepress.dev/zh/reference/default-theme-sidebar#usesidebar)

返回侧边栏相关数据。返回的对象具有以下类型：

```ts

    export interface DocSidebar {
      isOpen: Ref<boolean>
      sidebar: ComputedRef<DefaultTheme.SidebarItem[]>
      sidebarGroups: ComputedRef<DefaultTheme.SidebarItem[]>
      hasSidebar: ComputedRef<boolean>
      hasAside: ComputedRef<boolean>
      leftAside: ComputedRef<boolean>
      isSidebarEnabled: ComputedRef<boolean>
      open: () => void
      close: () => void
      toggle: () => void
    }
```

**示例：**

```vue

    <script setup>
    import { useSidebar } from 'vitepress/theme'

    const { hasSidebar } = useSidebar()
    </script>

    <template>
      <div v-if="hasSidebar">Only show when sidebar exists</div>
    </template>
```

## aside[​](https://vitepress.dev/zh/reference/default-theme-config#aside)

* 类型：`boolean | 'left'`
* 默认值：`true`
* 每个页面可以通过 [frontmatter](https://vitepress.dev/zh/reference/frontmatter-config#aside) 覆盖

将此值设置为 `false` 可禁用 aside 容器。\
将此值设置为 `true` 将在页面右侧渲染。\
将此值设置为 `left` 将在页面左侧渲染。

如果想对所有页面禁用它，应该使用 `outline: false`。

## outline[​](https://vitepress.dev/zh/reference/default-theme-config#outline)

* 类型：`Outline | Outline['level'] | false`
* 每个页面可以通过 [frontmatter](https://vitepress.dev/zh/reference/frontmatter-config#outline) 覆盖层级

是否禁用aside

将此值设置为 `false` 可禁止渲染大纲容器。更多详情请参考该接口：

```ts

    interface Outline {
      /**
       * outline 中要显示的标题级别。
       * 单个数字表示只显示该级别的标题。
       * 如果传递的是一个元组，第一个数字是最小级别，第二个数字是最大级别。
       * `'deep'` 与 `[2, 6]` 相同，将显示从 `<h2>` 到 `<h6>` 的所有标题。
       *
       * @default 2
       */
      level?: number | [number, number] | 'deep'

      /**
       * 显示在 outline 上的标题。
       *
       * @default 'On this page'
       */
      label?: string
    }
```

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/a8da03c946f24c3e92872ac9169c15d0~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5a6J5Yip5ZCbX0FuTGlqdW4=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjUwMjk2MDY4NjA0MDI4NiJ9\&rk3s=f64ab15b\&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018\&x-orig-expires=1738661916\&x-orig-sign=XzJASuTc98CF%2FHpuTWAAGqcK%2BNs%3D)

## socialLinks[​](https://vitepress.dev/zh/reference/default-theme-config#sociallinks)

* 类型：`SocialLink[]`

可以定义此选项以在导航栏中展示带有图标的社交帐户链接。

```ts

    export default {
      themeConfig: {
        socialLinks: [
          { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
          { icon: 'twitter', link: '...' },
          // 可以通过将 SVG 作为字符串传递来添加自定义图标：
          {
            icon: {
              svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
            },
            link: '...',
            // 也可以为无障碍添加一个自定义标签 (可选但推荐):
            ariaLabel: 'cool link'
          }
        ]
      }
    }
```

```ts

    interface SocialLink {
      icon: string | { svg: string }
      link: string
      ariaLabel?: string
    }
```

## footer[​](https://vitepress.dev/zh/reference/default-theme-config#footer)

* 类型：`Footer`
* 可以通过 [frontmatter](https://vitepress.dev/zh/reference/frontmatter-config#footer) 进行覆盖。

页脚配置。可以添加 message 和 copyright。由于设计原因，仅当页面不包含侧边栏时才会显示页脚。

```ts

    export default {
      themeConfig: {
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2019-present Evan You'
        }
      }
    }
```

```ts

    export interface Footer {
      message?: string
      copyright?: string
    }
```

## footer

```js
    export interface Footer {
      // 版权前显示的信息
      message?: string

      // 实际的版权文本
      copyright?: string
    }
```

上面的配置也支持 HTML 字符串。所以，例如，如果想配置页脚文本有一些链接，可以调整配置如下：

```ts

    export default {
      themeConfig: {
        footer: {
          message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
          copyright: 'Copyright © 2019-present <a href="https://github.com/yyx990803">Evan You</a>'
        }
      }
    }
```

WARNING

只有内联元素可以在 `message` 和 `copyright` 中使用，因为它们渲染在 `<p>` 元素中。如果想添加块元素，请考虑使用 [`layout-bottom`](https://vitepress.dev/zh/guide/extending-default-theme#layout-slots) 插槽。

请注意，当[侧边栏](https://vitepress.dev/zh/reference/default-theme-sidebar)可见时，不会显示页脚。

## frontmatter 配置[​](https://vitepress.dev/zh/reference/default-theme-footer#frontmatter-config)

可以使用 frontmatter 上的 `footer` 选项在单独页面上禁用此功能：

```yaml

    ---
    footer: false
    ---
```

## editLink[​](https://vitepress.dev/zh/reference/default-theme-config#editlink)

* 类型：`EditLink`
* 每个页面可以通过 [frontmatter](https://vitepress.dev/zh/reference/frontmatter-config#editlink) 覆盖

编辑链接可让显示链接以编辑 Git 管理服务 (例如 GitHub 或 GitLab) 上的页面。有关详细信息，请参阅[默认主题：编辑链接](https://vitepress.dev/zh/reference/default-theme-edit-link)。

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/5fb475daedad4909b7077c905370de48~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5a6J5Yip5ZCbX0FuTGlqdW4=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMjUwMjk2MDY4NjA0MDI4NiJ9\&rk3s=f64ab15b\&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018\&x-orig-expires=1738661916\&x-orig-sign=1c31WTxUD0ntI11iLocpOhjyGCQ%3D)

```ts

    export default {
      themeConfig: {
        editLink: {
          pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        }
      }
    }
```

```ts

    export interface EditLink {
      pattern: string
      text?: string
    }
```

## lastUpdated[​](https://vitepress.dev/zh/reference/default-theme-config#lastupdated)

* 类型：`LastUpdatedOptions`

允许自定义上次更新的文本和日期格式。

```ts

    export default {
      themeConfig: {
        lastUpdated: {
          text: 'Updated at',
          formatOptions: {
            dateStyle: 'full',
            timeStyle: 'medium'
          }
        }
      }
    }
```

```ts

    export interface LastUpdatedOptions {
      /**
       * @default 'Last updated'
       */
      text?: string

      /**
       * @default
       * { dateStyle: 'short',  timeStyle: 'short' }
       */
      formatOptions?: Intl.DateTimeFormatOptions & { forceLocale?: boolean }
    }
```

## algolia[​](https://vitepress.dev/zh/reference/default-theme-config#algolia)

* 类型：`AlgoliaSearch`

支持使用 [Algolia DocSearch](https://docsearch.algolia.com/docs/what-is-docsearch) 搜索站点文档。在[默认主题：搜索](https://vitepress.dev/zh/reference/default-theme-search) 中了解更多信息。

```ts

    export interface AlgoliaSearchOptions extends DocSearchProps {
      locales?: Record<string, Partial<DocSearchProps>>
    }
```

在[这里](https://github.com/vuejs/vitepress/blob/main/types/docsearch.d.ts)查看完整配置。

## carbonAds[​](https://vitepress.dev/zh/reference/default-theme-config#carbon-ads)

[开源项目广告 |碳广告](https://www.carbonads.net/open-source)

* 类型：`CarbonAdsOptions`

一个配置即可展示 [Carbon Ads](https://www.carbonads.net/)。

```ts

    export default {
      themeConfig: {
        carbonAds: {
          code: 'your-carbon-code',
          placement: 'your-carbon-placement'
        }
      }
    }
```

```ts

    export interface CarbonAdsOptions {
      code: string
      placement: string
    }
```

在 [Default Theme: Carbon Ads](https://vitepress.dev/zh/reference/default-theme-carbon-ads) 中了解更多信息。

## docFooter[​](https://vitepress.dev/zh/reference/default-theme-config#docfooter)

* 类型：`DocFooter`

可用于自定义出现在上一页和下一页链接上方的文本。如果不是用英语编写文档，这很有帮助。也可用于全局禁用上一页/下一页链接。如果想有选择地启用/禁用上一个/下一个链接，可以使用 [frontmatter](https://vitepress.dev/zh/reference/default-theme-prev-next-links)。

```ts

    export default {
      themeConfig: {
        docFooter: {
          prev: '上一页',
          next: '下一页'
        }
      }
    }
```

```ts

    export interface DocFooter {
      prev?: string | false
      next?: string | false
    }
```

## darkModeSwitchLabel[​](https://vitepress.dev/zh/reference/default-theme-config#darkmodeswitchlabel)

* 类型：`string`
* 默认值：`Appearance`

用于自定义深色模式开关标签，该标签仅在移动端视图中显示。

## lightModeSwitchTitle[​](https://vitepress.dev/zh/reference/default-theme-config#lightmodeswitchtitle)

* 类型：`string`
* 默认值：`Switch to light theme`

用于自定义悬停时显示的浅色模式开关标题。

## darkModeSwitchTitle[​](https://vitepress.dev/zh/reference/default-theme-config#darkmodeswitchtitle)

* 类型：`string`
* 默认值：`Switch to dark theme`

用于自定义悬停时显示的深色模式开关标题。

## sidebarMenuLabel[​](https://vitepress.dev/zh/reference/default-theme-config#sidebarmenulabel)

* 类型：`string`
* 默认值：`Menu`

用于自定义侧边栏菜单标签，该标签仅在移动端视图中显示。

## sidebarMenuLabel[​](https://vitepress.dev/zh/reference/default-theme-config#sidebarmenulabel)

* 类型：`string`
* 默认值：`Menu`

用于自定义侧边栏菜单标签，该标签仅在移动端视图中显示。

## returnToTopLabel[​](https://vitepress.dev/zh/reference/default-theme-config#returntotoplabel)

* 类型：`string`
* 默认值：`Return to top`

用于自定义返回顶部按钮的标签，该标签仅在移动端视图中显示。

## langMenuLabel[​](https://vitepress.dev/zh/reference/default-theme-config#langmenulabel)

* 类型：`string`
* 默认值：`Change language`

用于自定义导航栏中语言切换按钮的 aria-label，仅当使用 [i18n](https://vitepress.dev/zh/guide/i18n) 时才使用此选项。

## externalLinkIcon[​](https://vitepress.dev/zh/reference/default-theme-config#externallinkicon)

* 类型：`boolean`
* 默认值：`false`

是否在 markdown 中的外部链接旁显示外部链接图标。

## 主页

### Hero 部分[​](https://vitepress.dev/zh/reference/default-theme-home-page#hero-section)

Hero 部分位于主页顶部。以下是配置 Hero 的方法。

```yaml
---
layout: home

hero:
  name: VitePress
  text: Vite & Vue powered static site generator.
  tagline: Lorem ipsum...
  image:
    src: /logo.png
    alt: VitePress
  actions:
    - theme: brand
      text: Get Started
      link: /guide/what-is-vitepress
    - theme: alt
      text: View on GitHub
      link: https://github.com/vuejs/vitepress
---
```

```ts

    interface Hero {
      // `text` 上方的字符，带有品牌颜色
      // 预计简短，例如产品名称
      name?: string

      // hero 部分的主要文字，
      // 被定义为 `h1` 标签
      text: string

      // `text` 下方的标语
      tagline?: string

      // text 和 tagline 区域旁的图片
      image?: ThemeableImage

      // 主页 hero 部分的操作按钮
      actions?: HeroAction[]
    }

    type ThemeableImage =
      | string
      | { src: string; alt?: string }
      | { light: string; dark: string; alt?: string }

    interface HeroAction {
      // 按钮的颜色主题，默认为 `brand`
      theme?: 'brand' | 'alt'

      // 按钮的标签
      text: string

      // 按钮的目标链接
      link: string

      // 链接的 target 属性
      target?: string

      // 链接的 rel 属性
      rel?: string
    }
```

### 自定义 name 的颜色[​](https://vitepress.dev/zh/reference/default-theme-home-page#customizing-the-name-color)

VitePress 通过 (`--vp-c-brand-1`) 设置 `name` 的颜色。但是，可以通过覆盖 `--vp-home-hero-name-color` 变量来自定义此颜色。

```css

    :root {
      --vp-home-hero-name-color: blue;
    }
```

也可以通过组合 `--vp-home-hero-name-background` 来进一步自定义 `name` 为渐变色。

```css

    :root {
      --vp-home-hero-name-color: transparent;
      --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
    }
```

## Features 部分[​](https://vitepress.dev/zh/reference/default-theme-home-page#features-section)

在 Features 部分，可以在 Hero 部分之后列出任意数量的 Feature。可以在 frontmatter 中配置 `features`。

可以为每个 feature 提供一个图标，可以是表情符号或任何类型的图像。当配置的图标是图片（svg, png, jpeg...）时，必须提供合适的宽度和高度的图标；还可以在需要时配置其描述、固有大小以及深色和浅色主题下的不同表现。

```yaml

    ---
    layout: home

    features:
      - icon: 🛠️
        title: Simple and minimal, always
        details: Lorem ipsum...
      - icon:
          src: /cool-feature-icon.svg
        title: Another cool feature
        details: Lorem ipsum...
      - icon:
          dark: /dark-feature-icon.svg
          light: /light-feature-icon.svg
        title: Another cool feature
        details: Lorem ipsum...
    ---
```

```ts

    interface Feature {
      // 在每个 feature 框中显示图标
      icon?: FeatureIcon

      // feature 的标题
      title: string

      // feature 的详情
      details: string

      // 点击 feature 组件时的链接，可以是内部链接，也可以是外部链接。
      //
      //
      // 例如 `guide/reference/default-theme-home-page` 或 `https://example.com`
      link?: string

      // feature 组件内显示的链接文本，最好与 `link` 选项一起使用
      //
      //
      // 例如 `Learn more`, `Visit page` 等
      linkText?: string

      // `link` 选项的链接 rel 属性
      //
      // 例如 `external`
      rel?: string

      // `link` 选项的链接 target 属性
      target?: string
    }

    type FeatureIcon =
      | string
      | { src: string; alt?: string; width?: string; height: string }
      | {
          light: string
          dark: string
          alt?: string
          width?: string
          height: string
        }
```

## 布局[​](https://vitepress.dev/zh/reference/default-theme-layout#layout)

可以通过设置页面 [frontmatter](https://vitepress.dev/zh/reference/frontmatter-config) 选项来选择页面布局。有 3 种布局选项 `doc`、`page` 和 `home`。如果未指定任何内容，则该页面将被视为 `doc` 页面。

`doc` 是默认布局，它将整个 Markdown 内容设置为“documentation”外观。它的工作原理是将整个内容包装在 css `vp-doc` 类中，并将样式应用于它下面的元素。

几乎所有通用元素，例如 `p`, 或 `h2` 都有特殊的样式。因此，请记住，如果在 Markdown 内容中添加任何自定义 HTML，这些内容也会受到这些样式的影响。

它还提供下面列出的文档特定功能。这些功能仅在此布局中启用。

* [编辑链接](https://vitepress.dev/zh/reference/default-theme-edit-link)
* [上下页链接](https://vitepress.dev/zh/reference/default-theme-prev-next-links)
* [大纲](https://vitepress.dev/zh/reference/default-theme-config#outline)
* [Carbon Ads](https://vitepress.dev/zh/reference/default-theme-carbon-ads)

## page 布局[​](https://vitepress.dev/zh/reference/default-theme-layout#page-layout)

`page` 被视为“空白页”。Markdown 仍然会被解析，所有的 [Markdown 扩展](https://vitepress.dev/zh/guide/markdown) 都和 `doc` 布局一样运行，但它没有任何默认样式。

`page` 布局将使可以自行设计所有内容，而不会受 VitePress 主题影响。当想要创建自己的自定义页面时，这很有用。

请注意，即使在此布局中，如果页面具有匹配的侧边栏配置，侧边栏仍会显示。

## home 布局[​](https://vitepress.dev/zh/reference/default-theme-layout#home-layout)

`home` 将生成模板化的“主页”。在此布局中，可以设置额外的选项，例如 `hero` 和 `features` 以进一步自定义内容。请访问[默认主题: 主页](https://vitepress.dev/zh/reference/default-theme-home-page)了解更多详情。

## 无布局[​](https://vitepress.dev/zh/reference/default-theme-layout#no-layout)

如果不想要任何布局，可以通过 frontmatter 传递 `layout: false`。如果想要一个完全可自定义的登录页面（默认情况下没有任何侧边栏、导航栏或页脚），此选项很有用。

## 自定义布局[​](https://vitepress.dev/zh/reference/default-theme-layout#custom-layout)

也可以使用自定义布局：

```md

    ---
    layout: foo
    ---
```

这将在上下文中查找注册名为 `foo` 的组件。例如，可以在 `.vitepress/theme/index.ts`中全局注册组件：

```ts

    import DefaultTheme from 'vitepress/theme'
    import Foo from './Foo.vue'

    export default {
      extends: DefaultTheme,
      enhanceApp({ app }) {
        app.component('foo', Foo)
      }
    }
```

## 徽标

## 用法[​](https://vitepress.dev/zh/reference/default-theme-badge#usage)

可以使用全局组件 `Badge` 。

html

```
### Title <Badge type="info" text="default" />
### Title <Badge type="tip" text="^1.9.0" />
### Title <Badge type="warning" text="beta" />
### Title <Badge type="danger" text="caution" />
```

## 自定义不同类型徽标的背景色[​](https://vitepress.dev/zh/reference/default-theme-badge#customize-type-color)

可以通过覆盖 css 来自定义不同类型 `<Badge />` 的样式。以下是默认值。

```css

    :root {
      --vp-badge-info-border: transparent;
      --vp-badge-info-text: var(--vp-c-text-2);
      --vp-badge-info-bg: var(--vp-c-default-soft);

      --vp-badge-tip-border: transparent;
      --vp-badge-tip-text: var(--vp-c-brand-1);
      --vp-badge-tip-bg: var(--vp-c-brand-soft);

      --vp-badge-warning-border: transparent;
      --vp-badge-warning-text: var(--vp-c-warning-1);
      --vp-badge-warning-bg: var(--vp-c-warning-soft);

      --vp-badge-danger-border: transparent;
      --vp-badge-danger-text: var(--vp-c-danger-1);
      --vp-badge-danger-bg: var(--vp-c-danger-soft);
    }
```

## `<Badge>`[​](https://vitepress.dev/zh/reference/default-theme-badge#badge-1)

`<Badge>` 组件接受以下属性：

```ts

    interface Props {
      // 当传递 `<slot>` 时，该值将被忽略
      text?: string

      // 默认为 `tip`.
      type?: 'info' | 'tip' | 'warning' | 'danger'
    }
```

## 团队页

## 在页面中显示团队成员[​](https://vitepress.dev/zh/reference/default-theme-team-page#show-team-members-in-a-page)

你可以在任何页面上使用从 `vitepress/theme` 暴露出的公共组件 `<VPTeamMembers>` 显示团队成员。

html

```
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  ...
]
</script>

# Our Team

Say hello to our awesome team.

<VPTeamMembers size="small" :members="members" />
```

## 最后更新于[​](https://vitepress.dev/zh/reference/default-theme-last-updated#site-level-config)

```js

    export default {
      lastUpdated: true
    }
```
