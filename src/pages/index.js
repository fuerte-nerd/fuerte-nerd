import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Grid, Container, Box, Toolbar, Typography } from "@material-ui/core"

import Navbar from "../components/Navbar"
import NavMenu from "../components/NavMenu"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar />
    <NavMenu />
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={4}>
            Image
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" variantMapping={{ h4: "h1" }}>
              Hi!
            </Typography>
            <Typography>
              My name is David and I make apps, websites and cups of tea* with
              code.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </Layout>
)

export default IndexPage
