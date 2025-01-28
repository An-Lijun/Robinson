# 在md使用vue

## 模板语法

:::v-pre
    {{ 1 + 1 }}
:::

## `<script>` 和 `<style>`[​](https://vitepress.dev/zh/guide/using-vue#script-and-style)

Markdown 文件中的根级 `<script>` 和 `<style>` 标签与 Vue SFC 中的一样，包括 `<script setup>`、`<style module>` 等。这里的主要区别是没有 `<template>` 标签：所有其他根级内容都是 Markdown。另请注意，所有标签都应放在 frontmatter **之后**:

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

This <span v-pre>{{ will be displayed as-is }}</span>

也可以将整个段落包装在 `v-pre` 自定义容器中：

```md
    ::: v-pre
        {{ This will be displayed as-is }}
    :::
```
## 使用 CSS 预处理器[​](https://vitepress.dev/zh/guide/using-vue#using-css-pre-processors)

VitePress [内置支持](https://cn.vitejs.dev/guide/features.html#css-pre-processors) CSS 预处理器：`.scss`、`.sass`、.`less`、`.styl` 和 `.stylus` 文件。无需为它们安装 Vite 专用插件，但必须安装相应的预处理器：

```sh
    npm install -D sass
    npm install -D less
    npm install -D stylus
```

然后可以在 Markdown 和主题组件中使用以下内容：


```vue
    <style lang="sass">
    .title  
      font-size: 20px
    </style>
```
