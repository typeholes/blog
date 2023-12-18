module.exports = {
   title: 'TypeHoles Blog',
   description: 'A DevBlog for my developtment tools',
   theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
   themeConfig: {
      /**
       * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
       */
      modifyBlogPluginOptions(blogPluginOptions) {
         return blogPluginOptions;
      },

      nav: [
         {
            text: 'Blog',
            link: '/',
         },
         {
            text: 'Tags',
            link: '/tag/',
         },
      ],

      footer: {
         contact: [
            {
               type: 'github',
               link: 'https://github.com/typeholes',
            },
            {
               type: 'twitter',
               link: 'https://twitter.com/typeholes',
            },
         ],
         copyright: [
            {
               text: 'Privacy Policy',
               link: 'https://policies.google.com/privacy?hl=en-US',
            },
            {
               text: 'MIT Licensed | Copyright © 2023-present typeholes',
               link: '',
            },
         ],
      },
   },
};
