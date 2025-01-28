const root = '/etc/gulp/src/';

export default { 'etc/gulp/src': [
  { text: 'gulp',
    items: [
      { 
        text: '介绍',
        link: `${root}introduce.md` 
      },
      { 
        text: '快速上手',
        link: `${root}quick.md` 
      },
      { 
        text: '核心概念',
        link: `${root}core.md` 
      },
      { 
        text: '使用插件',
        link: `${root}usePlugin.md` 
      },
      { 
        text: '其他',
        link: `${root}other.md` 
      }
    ] 
  }
] };