const { blueGrey } = require("@material-ui/core/colors")

const siteName = "dandroos"
const phone = "658 353 232"

module.exports = {
  siteMetadata: {
    title: siteName,
    titleSuffix: "professional web developer",
    description: `A web developer specializing in React, Gatsby, vanilla JavaScript and Node.`,
    author: siteName,
    links: {
      github: "dandroos",
      twitter: "dandroos",
      instagram: "dandroos",
    },
    contact: {
      phoneStr: `+34 ${phone}`,
      phone: `34${phone.replace(" ", "")}`,
      email: "fuertenerd@gmail.com",
    },
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteName,
        short_name: siteName,
        start_url: `/`,
        background_color: blueGrey[400],
        theme_color: blueGrey[400],
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
