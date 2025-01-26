---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Robinson"
  text: "A Simple Web Utils to implement functionality "
  tagline: '一个简单的web工具库'
  actions:
    - theme: brand
      text: 开始使用
      link: /etc/doc/index.html
    - theme: alt
      text: 在 GitHub 上查看
      link: https://github.com/An-Lijun/Robinson
  image:
    src: /assets/robinson.png
    alt: 网页的logo图标

features:
  - icon: ✨
    title: easy to use
    details: npm i robinson...
    link: /guide/start
    linkText: more
  - icon: ⚡️
    title: fast to download
    details: 34kb
  - icon: 🛠️
    title: unitive api 
    details: isXXX...
    linkText: more

  - icon: 💎
    title: powerful
    details: more funtion then lodash
    
footer: MIT Licensed | Copyright © 2019-present Evan You
---
<style >
/* 设置流光 */
@keyframes sun{
    100%{
        background-position: -400% 0;
    }
}

 .box .title{
    background: linear-gradient(90deg,#03a9f4,#fff,#f441a5,#ffeb3b,#03a9f4,#fff);
    background-size: 400%;position: relative;
      /* 将背景裁剪到文本 */
      -webkit-background-clip: text;
      /* 让文本填充色透明，这样才能显示出背景的渐变效果 */
      -webkit-text-fill-color: transparent;
      color: red; 
    animation: sun 10s linear  infinite;

  }
</style>