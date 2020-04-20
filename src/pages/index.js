import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Box, AppBar, Toolbar, Typography, IconButton } from "@material-ui/core"

import { Menu, Phone, Email, WhatsApp, GitHub } from "@material-ui/icons"

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
        <Typography variant="subtitle1" style={{ marginRight: ".25rem" }}>
          David Andrews
        </Typography>

        <Typography style={{ flex: 1 }} variant="subtitle2">
          (Web Developer)
        </Typography>
        <IconButton color="inherit">
          <GitHub />
        </IconButton>
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
    <Box>
      <Toolbar />
      <Typography variant="h1">My site</Typography>
    </Box>
  </Layout>
)

export default IndexPage
