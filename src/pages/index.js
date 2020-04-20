import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core"

import { Menu, Phone, Email, WhatsApp } from "@material-ui/icons"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AppBar>
      <Toolbar>
        <IconButton color="inherit">
          <Menu />
        </IconButton>
        <Typography style={{ flex: 1 }}>David Andrews</Typography>
        <IconButton color="inherit">
          <Phone />
        </IconButton>
        <IconButton color="inherit">
          <Email />
        </IconButton>
        <IconButton color="inherit">
          <WhatsApp />
        </IconButton>
      </Toolbar>
    </AppBar>
  </Layout>
)

export default IndexPage
