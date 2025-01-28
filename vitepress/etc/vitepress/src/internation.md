# 国际化

要使用内置的 i18n (国际化) 功能，需要创建类似于下面的目录结构：

    docs/
    ├─ es/
    │  ├─ foo.md
    ├─ fr/
    │  ├─ foo.md
    ├─ foo.md

在viteptess/config.ts中

```javascript
  import { defineConfig } from 'vitepress'

  export default defineConfig({
    // 共享属性和其他顶层内容...

    locales: {
      root: {
        label: 'English',
        lang: 'en'
      },
      fr: {
        label: 'French',
        lang: 'fr', // 可选，将作为 `lang` 属性添加到 `html` 标签中
        link: '/fr/guide' // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的

        // 其余 locale 特定属性...
      }
    }
  })

```

下面的属性能够被每个 locale 覆盖 (包括 root)：

```javascript

    interface LocaleSpecificConfig<ThemeConfig = any> {
      lang?: string
      dir?: string
      title?: string
      titleTemplate?: string | boolean
      description?: string
      head?: HeadConfig[] // 将与现有的头部条目合并，重复的元标签将自动删除
      themeConfig?: ThemeConfig // 会进行浅层合并，常见内容可放在顶层的 themeConfig 属性中
    }
```