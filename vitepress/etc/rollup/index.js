const root = '/etc/rollup/src/';

export default { 'etc/rollup/src': [
  { text: 'rollup',
    items: [
      { text: '介绍',
        link: `${root}introduce.md` },
      { text: '快速上手',
        link: `${root}quick.md` },
      { text: '核心概念',
        link: `${root}core.md` },
      { text: '进阶',
        link: `${root}advance.md` },
      { text: '作用域提升',
        link: `${root}scope.md` },
      { text: '处理循环依赖',
        link: `${root}circularDev.md` },
      { text: '集成TS',
        link: `${root}withTs.md` },
      { text: '集成Vue',
        link: `${root}withVue.md` },
      { text: '怎样工作的',
        link: `${root}howWork.md` },
      { text: '使用缓存',
        link: `${root}use.md` },
      { text: 'treeShaking',
        link: `${root}treeshaking.md` },
      { text: '优化',
        link: `${root}more.md` },
      { text: '开发插件',
        link: `${root}dev.md` }
    ] }
] };