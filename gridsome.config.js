module.exports = {
  siteName: 'PlanarAlly',
  templates: {
    BlogPost: '/blog/:year/:month/:day/:title',
  },
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-151236968-1'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './blog/*/index.md',
        typeName: 'BlogPost',
        refs: {
          author: 'Contributor'
        }
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        index: ['README'],
        baseDir: './docs',
        pathPrefix: '/docs',
        typeName: 'DocPage',
        template: './src/templates/DocPage.vue',
        plugins: [
          '@gridsome/remark-prismjs'
        ],
        remark: {
          autolinkHeadings: {
            content: {
              type: 'text',
              value: '#'
            }
          }
        }
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        index: ['README'],
        baseDir: './tutorial',
        pathPrefix: '/tutorial',
        typeName: 'TutorialPage',
        template: './src/templates/TutorialPage.vue',
        plugins: [
          '@gridsome/remark-prismjs'
        ],
        remark: {
          autolinkHeadings: {
            content: {
              type: 'text',
              value: '#'
            }
          }
        }
      }
    },
  ],
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
