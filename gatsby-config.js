module.exports = {
  siteMetadata: {
    title: 'elainechan.github.io',
    description: 'Software Engineering'
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    }
  ]
}
