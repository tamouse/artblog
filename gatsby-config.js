module.exports = {
  siteMetadata: {
    title: "Tamouse's Art Blog",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 600,
            },
          },
        ],
      },
    },
  ],
}
