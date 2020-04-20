import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core"

import { MenuOutlined } from "@material-ui/icons"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AppBar>
      <Toolbar>
        <IconButton>
          <MenuOutlined />
        </IconButton>
        <Typography>David Andrews</Typography>
      </Toolbar>
    </AppBar>
  </Layout>
)

export default IndexPage
