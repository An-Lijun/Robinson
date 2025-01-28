const root = '/etc/jest/src/';

export default { 'etc/jest/src': [
  { text: 'rollup',
    items: [
      {
        text: '引言',
        link: `${root}introduction.md` 
      },
      {
        text: '介绍',
        link: `${root}introduce.md` 
      },
      {
        text: '安装与环境配置',
        link: `${root}install.md` 
      },
      {
        text: '断言',
        link: `${root}average.md` 
      },
      {
        text: '测试异步函数',
        link: `${root}testAsync.md` 
      },
      {
        text: '模拟函数',
        link: `${root}mockFun.md` 
      },
      {
        text: '快照',
        link: `${root}quick.md` 
      },
      {
        text: '测试覆盖率',
        link: `${root}report.md` 
      },
      {
        text: '不同场景的使用',
        link: `${root}use.md` 
      }
    ] 
  }
] };