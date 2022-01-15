/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-image", // for providing Img tag
    "gatsby-transformer-sharp", // these two are used to expose images in src folder as an graphql api
    "gatsby-plugin-sharp", // if we put the image in static folder then it will only available to browser not to graphql api
    'gatsby-transformer-remark', // helps us reading and transforming the static content in below mentioned files
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
  siteMetadata: {
    title: 'Web Warior',
    description: 'portfolio',
    copyright: 'copyright in 2021',
    contact: 'me@web.com'
  }
}
