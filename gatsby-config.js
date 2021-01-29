/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` })
module.exports = {
  siteMetadata: {
    title: "The Ivy Coworking",
    titleTemplate: "%s · The Ivy Coworking",
    description:
      "For those looking for a cozy but functional workspace to be productive, meet people and drink good coffee!",
    url: "https://www.theivycoworking.com", // No trailing slash allowed!
    image: "/images/image.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@PaoroCatarano",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `w14h13xgb84i`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
