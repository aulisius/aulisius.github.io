const path = require('path')
module.exports = {
  siteMetadata: {
    title: 'aulisius',
    author: 'Md Faizaan',
    description: 'A place for my thoughts',
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
  ],
}
