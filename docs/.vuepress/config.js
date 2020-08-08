module.exports = {
  title: '高级前端进阶',
  description: 'advanced-front-end',
  base: '/advanced-front-end/',
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: 'Vue', link: '/vue/'},
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: '函数式编程',
          collapsable: false, 
          children: [
            '',
            '/guide/1',
            '/guide/2'
            // { title: 'bar default', path: '/guide/'},
            // { title: 'Three', path: '/guide/three'},
            // { title: 'Four', path: '/guide/four'}
          ]
        }
      ],
      '/vue/': [
        {
          title: 'Vue源码',
          collapsable: false,
          children: [
            '',
            '/vue/virtualDOM',
            '/vue/handwritingVue',
            '/vue/ssr',
            '/vue/vue-i18n'
          ]
        }
      ]
    },
    sidebarDepth: 2,
    displayAllHeaders: true,

    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    smoothScroll: true,

    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'hefeng6500/advanced-front-end',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码'
  }
}