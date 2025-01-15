import { defineConfig } from 'vitepress'

import docs from './script'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Robinson',
  description: 'Documentations of @taiyuuki/utils',
  base:'/',
  outDir: "./docs",
  themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      nav: [
          { text: '主页', link: '/index.html' },
          { text: 'API', link: '/etc/doc/index.html' },
      ],
      sidebar: [
          {
              text: 'API',
              items: docs,
          },
      ],
      socialLinks: [
          { icon: 'github', link: 'https://github.com/An-Lijun/Robinson' },
      ],
      search: {
          provider: 'local'
      },
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2023-present Anlijun'
      }
  },
  markdown: {
      theme: {
          light: 'light-plus',
          dark: 'github-dark',
      },
  },
})

