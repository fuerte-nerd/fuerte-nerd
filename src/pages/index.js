import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { AppBar, Toolbar, Typography, IconButton, Box } from "@material-ui/core"

import { Menu, Phone, Email, WhatsApp } from "@material-ui/icons"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AppBar>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          style={{ marginRight: ".25rem" }}
        >
          <Menu />
        </IconButton>
        <Box display="inline">
          <Typography>David Andrews</Typography>
          {` `}
          <Typography style={{ flex: 1 }} variant="subtitle1">
            (Web Developer)
          </Typography>
        </Box>
        <IconButton color="inherit">
          <Phone />
        </IconButton>
        <IconButton color="inherit">
          <Email />
        </IconButton>
        <IconButton edge="end" color="inherit">
          <WhatsApp />
        </IconButton>
      </Toolbar>
    </AppBar>
  </Layout>
)

export default IndexPage
