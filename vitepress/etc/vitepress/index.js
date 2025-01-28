const root = '/etc/vitepress/src/';

export default { 'etc/vitepress/src': [
  { text: 'vitepress',
    items: [
      { 
        text: '介绍',
        link: `${root}introduce.md` 
      },
      { 
        text: '安装',
        link: `${root}install.md` 
      },
      { 
        text: '路由',
        link: `${root}router.md` 
      },
      { 
        text: '部署',
        link: `${root}build.md` 
      },
      { 
        text: 'markDown语法与扩展',
        link: `${root}mdLang.md` 
      },
      { 
        text: '使用vue',
        link: `${root}withVue.md` 
      },

      { 
        text: '国际化',
        link: `${root}internation.md` 
      },  

      { 
        text: '默认主题',
        link: `${root}theme.md` 
      },  
      { 
        text: '搜索',
        link: `${root}search.md` 
      }
    ] 
  }
] };