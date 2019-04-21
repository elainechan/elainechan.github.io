module.exports = {
  siteMetadata: {
    title: 'Elaine Chan',
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