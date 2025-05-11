---
url: /etc\vitepress\src/mdLang.md
---
# Markdown语法与扩展

## markdown

### 标题

| Markdown语法               | HTML                       | 预览效果                   |
| ------------------------ | -------------------------- | ---------------------- |
| `# Heading level 1`      | `<h1>Heading level 1</h1>` | # Heading level 1      |
| `## Heading level 2`     | `<h2>Heading level 2</h2>` | ## Heading level 2     |
| `### Heading level 3`    | `<h3>Heading level 3</h3>` | ### Heading level 3    |
| `#### Heading level 4`   | `<h4>Heading level 4</h4>` | #### Heading level 4   |
| `##### Heading level 5`  | `<h5>Heading level 5</h5>` | ##### Heading level 5  |
| `###### Heading level 6` | `<h6>Heading level 6</h6>` | ###### Heading level 6 |

### 换行

在一行的末尾添加两个或多个空格，然后按回车键,即可创建一个换行html br 标签。

### 强调语法

#### 粗体

| Markdown语法                   | HTML                                      | 预览效果                   |
| ---------------------------- | ----------------------------------------- | -------------------------- |
| `I just love **bold text**.` | `I just love <strong>bold text</strong>.` | I just love **bold text**. |
| `I just love __bold text__.` | `I just love <strong>bold text</strong>.` | I just love **bold text**. |
| `Love**is**bold`             | `Love<strong>is</strong>bold`             | Love**is**bold             |

#### 斜体

| Markdown语法                             | HTML                                          | 预览效果                                 |
| -------------------------------------- | --------------------------------------------- | ------------------------------------ |
| `Italicized text is the *cat's meow*.` | `Italicized text is the <em>cat's meow</em>.` | Italicized text is the *cat’s meow*. |
| `Italicized text is the _cat's meow_.` | `Italicized text is the <em>cat's meow</em>.` | Italicized text is the *cat’s meow*. |
| `A*cat*meow`                           | `A<em>cat</em>meow`                           | A*cat*meow                           |

### 引用语法

:::v-pre
\> 这是一段引用
:::

> 这是一段引用

### 列表语法

#### 有序列表

| Markdown语法                                                  | HTML                                                                                           | 预览效果                                                                           |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 1. First item 2. Second item 3. Third item 4. Fourth item |  First item Second item Third item Fourth item  | 1.  First item 2.  Second item 3.  Third item 4.  Fourth item |

#### 无序列表

| Markdown语法                                              | HTML                                                                                           |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| - First item - Second item - Third item - Fourth item |  First item Second item Third item Fourth item  |

```
First item
Second item
Third item
Fourth item
```

注意 有序无序列表可以相互之间嵌套

### 代码语法

| Markdown语法                                    | HTML                                               | 预览效果                                  |
| --------------------------------------------- | -------------------------------------------------- | ------------------------------------- |
| Use code in your Markdown file. | Use code in your Markdown file. | Use code in your Markdown file. |

### 分隔线

:::v-pre
\--- 或 \*\*\*
:::

***

***

### 链接语法

:::v-pre
[文字](url)
[link](https://www.example.com/my%20great%20page)
:::

### 图片语法

:::v-pre
[![沙漠中的岩石图片](https://www.example.com/assets/img/shiprock.jpg "Shiprock")](https://markdown.com.cn)
:::

### 其他

如 html 标签

## 扩展

### frontmatter语法

任何包含YAMLfront matter 块的文件都将是 由 Jekyll 作为特殊文件处理。前言必须是第一件事 ，并且必须采用在三短划线 线。下面是一个基本示例

```yaml
    --- 
      layout: post 
      title: Blogging Like a Hacker 
    ---
```

可以通过 Vue 表达式中的 `$frontmatter` 全局变量访问 frontmatter 数据：

:::v-pre
{{ $frontmatter.title }}
:::

#### title

类型: `string`

页面的标题。它与config.title 相同，并且覆盖站点级配置。

```yaml
  ---
      title: VitePress
  ---
```

#### titleTemplate

类型：string / boolean
标题的后缀。它与 [config.titleTemplate](https://vitepress.dev/zh/reference/site-config#titletemplate) 相同，它会覆盖站点级别的配置。

```yaml
  ---
      title: VitePress
      titleTemplate: Vite & Vue powered static site generator
  ---
```

#### description[​](https://vitepress.dev/zh/reference/frontmatter-config#description)

类型：`string`

页面的描述。它与 [config.description](https://vitepress.dev/zh/reference/site-config#description) 相同，它会覆盖站点级别的配置。

```yaml
  ---
  description: VitePress
  ---
```

#### head[​](https://vitepress.dev/zh/reference/frontmatter-config#head)

类型：`HeadConfig[]`

指定要为当前页面注入的额外 head 标签。将附加在站点级配置注入的头部标签之后。

```yaml
---
head:
  - - meta
    - name: description
      content: hello
  - - meta
    - name: keywords
      content: super duper SEO
---
```

```ts
type HeadConfig =
  | [string, Record<string, string>]
  | [string, Record<string, string>, string]
```

#### 仅默认主题[​](https://vitepress.dev/zh/reference/frontmatter-config#default-theme-only)

以下 frontmatter 选项仅在使用默认主题时适用。

##### layout[​](https://vitepress.dev/zh/reference/frontmatter-config#layout)

类型：`doc | home | page`
默认值：`doc`

指定页面的布局。

`doc`——它将默认文档样式应用于 markdown 内容。
`home`——“主页”的特殊布局。可以添加额外的选项，例如 `hero` 和 `features`，以快速创建漂亮的落地页。
`page`——表现类似于 `doc`，但它不对内容应用任何样式。当想创建一个完全自定义的页面时很有用。

yaml

```
---
layout: doc
---
```

##### hero home page only[​](https://vitepress.dev/zh/reference/frontmatter-config#hero)

当 `layout` 设置为 `home` 时，定义主页 hero 部分的内容。更多详细信息：[默认主题：主页](https://vitepress.dev/zh/reference/default-theme-home-page)。

##### features home page only[​](https://vitepress.dev/zh/reference/frontmatter-config#features)

定义当`layout` 设置为 `home` 时要在 features 部分中显示的项目。更多详细信息：[默认主题：主页](https://vitepress.dev/zh/reference/default-theme-home-page)。

#### navbar[​](https://vitepress.dev/zh/reference/frontmatter-config#navbar)

类型：`boolean`
默认值：`true`

是否显示[导航栏](https://vitepress.dev/zh/reference/default-theme-nav)。

yaml

```
---
navbar: false
---
```

#### sidebar[​](https://vitepress.dev/zh/reference/frontmatter-config#sidebar)

类型：`boolean`
默认值：`true`

是否显示 [侧边栏](https://vitepress.dev/zh/reference/default-theme-sidebar).

yaml

```
---
sidebar: false
---
```

#### aside[​](https://vitepress.dev/zh/reference/frontmatter-config#aside)

类型：`boolean | 'left'`
默认值：`true`

定义侧边栏组件在 `doc` 布局中的位置。

将此值设置为 `false` 可禁用侧边栏容器。\
将此值设置为 `true` 会将侧边栏渲染到右侧。\
将此值设置为 `left` 会将侧边栏渲染到左侧。

yaml

```
---
aside: false
---
```

#### outline[​](https://vitepress.dev/zh/reference/frontmatter-config#outline)

类型：`number | [number, number] | 'deep' | false`
默认值：`2`

大纲中显示的标题级别。它与 [config.themeConfig.outline.level](https://vitepress.dev/zh/reference/default-theme-config#outline) 相同，它会覆盖站点级的配置。

#### lastUpdated[​](https://vitepress.dev/zh/reference/frontmatter-config#lastupdated)

类型：`boolean | Date`
默认值：`true`

是否在当前页面的页脚中显示[最后更新时间](https://vitepress.dev/zh/reference/default-theme-last-updated)的文本。如果指定了日期时间，则会显示该日期时间而不是上次 git 修改的时间戳。

```yaml
---
lastUpdated: false
---
```

#### editLink[​](https://vitepress.dev/zh/reference/frontmatter-config#editlink)

类型：`boolean`
默认值：`true`

是否在当前页的页脚显示[编辑链接](https://vitepress.dev/zh/reference/default-theme-edit-link)。

```yaml
---
editLink: false
---
```

#### footer[​](https://vitepress.dev/zh/reference/frontmatter-config#footer)

类型：`boolean`
默认值：`true`

是否显示[页脚](https://vitepress.dev/zh/reference/default-theme-footer)。

```yaml
---
footer: false
---
```

#### pageClass[​](https://vitepress.dev/zh/reference/frontmatter-config#pageclass)

类型：`string`

将额外的类名称添加到特定页面。

```yaml
---
pageClass: custom-page-class
---
```

然后可以在 `.vitepress/theme/custom.css` 文件中自定义该特定页面的样式：

```css
.custom-page-class {
  /* 特定页面的样式 */
}
```

VitePress 也支持 JSON 格式的 frontmatter，以花括号开始和结束：

json

```
---
{
  "title": "Blogging Like a Hacker",
  "editLink": true
}
---
```

### GitHub 风格的表格[​](https://vitejs.cn/vitepress/guide/markdown#github-style-tables)

**输入**

```
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```

**输出**

| Tables        | Are           | Cool   |
| ------------- | ------------- | ------ |
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      | $12   |
| zebra stripes | are neat      | $1    |

### Emoji

```
:tada: :100:
```

🎉 💯
[emoji列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs)

### 目录

\[\[toc]]
可以使用 `markdown.toc` 选项配置 TOC 的呈现效果。

### 自定义容器

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

此外，可以通过在站点配置中添加以下内容来全局设置自定义标题，如果不是用英语书写，这会很有帮助：

```ts
// config.ts
export default defineConfig({
  // ...
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  }
  // ...
})
```

### `raw`[​](https://vitepress.dev/zh/guide/markdown#raw)

这是一个特殊的容器，可以用来防止与 VitePress 的样式和路由冲突。这在记录组件库时特别有用。可能还想查看 [whyframe](https://whyframe.dev/docs/integrations/vitepress) 以获得更好的隔离。

```
::: raw
Wraps in a <div class="vp-raw">
:::
```

### GitHub 风格的警报

```
> [!NOTE]
> 强调用户在快速浏览文档时也不应忽略的重要信息。

> [!TIP]
> 有助于用户更顺利达成目标的建议性信息。

> [!IMPORTANT]
> 对用户达成目标至关重要的信息。

> [!WARNING]
> 因为可能存在风险，所以需要用户立即关注的关键内容。

> [!CAUTION]
> 行为可能带来的负面影响。
```

### 代码高亮

这里可以配置 高亮主题在主题会详细说

//这里第四行会高亮

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

除了单行之外，还可以指定多个单行、多行，或两者均指定：

多行：例如 `{5-8}`、`{3-10}`、`{10-17}`
多个单行：例如 `{4,7,9}`
多行与单行：例如 `{4,7-13,16,23-27,40}`

也可以使用 `// [!code highlight]` 注释实现行高亮。

```js
export default {
  data () {
    return {
      msg: 'Highlighted!' // [!code highlight]
    }
  }
}
```

### 代码聚焦

```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```

### 代码块颜色差异

在某一行添加 `// [!code --]` 或 `// [!code ++]` 注释将会为该行创建 diff，同时保留代码块的颜色。

```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

### 高亮“错误”和“警告”[​](https://vitepress.dev/zh/guide/markdown#errors-and-warnings-in-code-blocks)

在某一行添加 `// [!code warning]` 或 `// [!code error]` 注释将会为该行相应的着色。

```js
export default {
  data () {
    return {
      msg: 'Error', // [!code error]
      msg: 'Warning' // [!code warning]
    }
  }
}
```

### 行号

这里可以全局配置

```ts:line-numbers {1}
// 启用行号
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

### 导入代码片段[​](https://vitepress.dev/zh/guide/markdown#import-code-snippets)

可以通过下面的语法来从现有文件中导入代码片段：

```
<<< @/filepath
```

此语法同时支持[行高亮](https://vitepress.dev/zh/guide/markdown#line-highlighting-in-code-blocks)：
可以像这样在大括号内(`{}`)指定语言：
md

```
<<< @/filepath{highlightLines}
<<< @/snippets/snippet.cs{c#}
```

### 代码组

````md
::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
````

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::

````

### 嵌套md
```md
# Docs

## Basics

<!--@include: ./parts/basics.md{3,}-->
````

### 数学公式

现在这是可选的。要启用它，需要安装 `markdown-it-mathjax3`，在配置文件中设置`markdown.math` 为 `true`：

sh

```
npm add -D markdown-it-mathjax3
```

```.vitepress/config.ts ts
export default {
  markdown: {
    math: true
  }
}
```

### 高级配置[​](https://vitepress.dev/zh/guide/markdown#advanced-configuration)

VitePress 使用 [markdown-it](https://github.com/markdown-it/markdown-it) 作为 Markdown 渲染器。上面提到的很多扩展功能都是通过自定义插件实现的。可以使用 `.vitepress/config.js` 中的 `markdown` 选项来进一步自定义 `markdown-it` 实例。

```js
import { defineConfig } from 'vitepress'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItFoo from 'markdown-it-foo'

export default defineConfig({
  markdown: {
    // markdown-it-anchor 的选项
    // https://github.com/valeriangalliat/markdown-it-anchor#usage
    anchor: {
      permalink: markdownItAnchor.permalink.headerLink()
    },
    // @mdit-vue/plugin-toc 的选项
    // https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
    toc: { level: [1, 2] },
    config: (md) => {
      // 使用更多的 Markdown-it 插件！
      md.use(markdownItFoo)
    }
  }
})
```

# 在md使用vue

## 模板语法

```
{{ 1 + 1 }}
```

## `<script>` 和 `<style>`[​](https://vitepress.dev/zh/guide/using-vue#script-and-style)

Markdown 文件中的根级 `<script>` 和 `<style>` 标签与 Vue SFC 中的一样，包括 `<script setup>`、`<style module>` 等。这里的主要区别是没有 `<template>` 标签：所有其他根级内容都是 Markdown。另请注意，所有标签都应放在 frontmatter **之后**：

```vue

---
hello: world
---

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

## Markdown Content

The count is: {{ count }}

<button :class="$style.button" @click="count++">Increment</button>

<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>

```

可以通过使用 `v-pre` 指令将它们包裹在 `<span>` 或其他元素中来转义 Vue 插值

This {{ will be displayed as-is }}

也可以将整个段落包装在 `v-pre` 自定义容器中：

::: v-pre
{{ This will be displayed as-is }}
:::

## 使用 CSS 预处理器

VitePress 内部支持 CSS 预处理器：`.scss`、`.sass`、.`less`、`.styl` 和 `.stylus` 文件。无需为它们安装 Vite 专用插件，但必须安装相应的预处理器

```sh
    npm install -D sass
    npm install -D less
    npm install -D stylus
```

然后可以在 Markdown 和主题组件中使用以下内容：

```vue
    <style lang="sass">
    .title{
      font-size: 20px
    }
    </style>
```
