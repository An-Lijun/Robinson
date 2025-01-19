import { defineConfig } from 'vitepress'

import docs from './script'
import sliderbarRollup from '../selfDocs/index'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Robinson',
    description: 'Documentations of @taiyuuki/utils',
    base: '/',
    outDir: "./docs",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '主页', link: '/index.html' },
            { text: 'Rollup', link: '/selfDocs/src/introduce' },
            { text: 'API', link: '/etc/doc/index.html' },
        ],

        sidebar: {
            "etc/doc": [
                {
                    text: 'API',
                    items: docs,
                },
            ],
            ...sliderbarRollup

        },

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

