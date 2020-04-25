/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { CssBaseline } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/core/styles"

import theme from "./theme"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          titleSuffix
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Pontano+Sans&display=swap"
          rel="stylesheet"
        />
        <title>
          {data.site.siteMetadata.title} | {data.site.siteMetadata.titleSuffix}
        </title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline>{children}</CssBaseline>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
