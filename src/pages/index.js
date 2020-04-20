import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Box, Toolbar, Typography } from "@material-ui/core"

import Navbar from "../components/Navbar"
import NavMenu from "../components/NavMenu"

const handleClick = e => {
  console.log(e.currentTarget.id)
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar />
    <NavMenu />
    <Box>
      <Toolbar />
      <Typography variant="h1">My site</Typography>
    </Box>
  </Layout>
)

export default IndexPage
