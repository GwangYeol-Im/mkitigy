module.exports = {
  siteMetadata: {
    title: 'Make It IGY',
    titleTemplate: '%s | Mkitigy.com',
    description: 'Personal blog posting about frontend develop.',
    url: 'https://www.mkitigy.com',
    image: '/profile.jpg',
    author: `mkitigy`,
    introduction: 'Love Music & Development',
    social: {
      github: 'https://github.com/GwangYeol-Im',
      gmail: 'mailto:mkitigy@gmail.com',
    },
    twitterUsername: '',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'contents',
        path: `${__dirname}/src/contents`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 600,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['UA-213337077-1'],
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
};
