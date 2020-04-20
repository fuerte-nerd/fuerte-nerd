import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Box, Toolbar, Typography, Dialog } from "@material-ui/core"

import Navbar from "../components/Navbar"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar />
    <Dialog fullScreen open={true}></Dialog>
    <Box>
      <Toolbar />
      <Typography variant="h1">My site</Typography>
    </Box>
  </Layout>
)

export default IndexPage
