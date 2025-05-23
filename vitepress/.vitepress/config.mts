import { defineConfig } from 'vitepress'

import getDosc from './script'
import sliderbarRollup from '../etc/rollup/index'
import sliderbarJest from '../etc/jest/index'
import sliderbarVitepress from '../etc/vitepress/index'
import sliderbarApiExtractor from '../etc/apiExtractor/index'
import sliderbarGulp from '../etc/gulp/index'
import llmstxt from 'vitepress-plugin-llms'



// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Robinson',
    description: 'Documentations of @taiyuuki/utils',
    base: '/Robinson/',
    outDir: "../docs/",
    lastUpdated: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '主页', link: '/index.html' },

            { text: 'API', items:[
                {   
                    text: '1.x 文档',
                    link: '/etc/doc/index'
                }
            ] },
            { text: '测试报告', link: '/etc/report' },
            { text: '更新日志', link: '/etc/changelog' },
            {
                text:'工程化',
                items:[
                    { text: 'Rollup文档', link: '/etc/rollup/src/introduce' },
                    { text: 'Jest文档', link: '/etc/jest/src/introduction' },
                    { text: 'vitepress文档', link: '/etc/vitepress/src/introduce' },
                    { text: 'apiExtractor文档', link: '/etc/apiExtractor/src/introduce' },
                    { text: 'gulp文档', link: '/etc/gulp/src/introduce' },


                ]
            }
        ],
        sidebar: {
            "etc/doc": [
                {
                    text: 'API',
                    items: getDosc('./vitepress/etc/doc/*.md','/etc/doc/'),
                },
            ],
            ...sliderbarRollup,
            ...sliderbarJest,
            ...sliderbarVitepress,
            ...sliderbarApiExtractor,
            ...sliderbarGulp

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
    vite:{
        plugins: [
            llmstxt()
        ]
    }
})

