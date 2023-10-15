import { basename } from 'path'
import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'

import fg from 'fast-glob'

interface IndexTree {
  [index: string]: {
      link: string
      items?: IndexTree
  }
}

// 目录标题去除utils.前缀
function resolveTitle(title: string) {
   title === 'doc' ? title : title.replace('doc.', '')
   title === 'etc' ? title : title.replace('etc.', '')

   return title
}

// 将md文档列表转为树结构
function getTree(file: string, prefix: string, tree = {}) {
  const [ cur, ...rest ] = file.replace('.md', '').split('.')
  const curPath = prefix + cur
  if (!tree[curPath]) {
      tree[curPath] = {
          link: '/etc/doc/' + curPath + '.md',
        // link:  curPath + '.md',
      }
  }
  if (rest.length > 0) {
      if (!tree[curPath].items) {
          tree[curPath].items = {}
      }
      getTree(rest.join('.'), curPath + '.', tree[curPath].items)
  }
}

// 将树结构转为目录数组
function treeToItems(tree: IndexTree) {
  const items: DefaultTheme.SidebarItem[] = []
  Object.keys(tree).forEach((key) => {
      const item: DefaultTheme.SidebarItem = {
          text: resolveTitle(key),
          link: tree[key].link,
      }
      if (tree[key].items) {
          if (!item.items) {
              item.items = []
          }
          item.items.push(...treeToItems(tree[key].items!))
      }
      items.push(item)
  })
  return items
}

const tree
= fg.sync(['./etc/doc/**/*.md'])
  .map((path) => basename(path))
  .reduce((tree, file) => {
      getTree(file, '', tree)
      return tree
  }, {})
  

const docs: DefaultTheme.SidebarItem[] = treeToItems(tree)

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Robinson',
  description: 'Documentations of @taiyuuki/utils',
  base:'/Robinson/',
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
          { icon: 'github', link: 'https://github.com/An-Lijun/Robinson' },// 这里要替换成你自己的仓库地址
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

