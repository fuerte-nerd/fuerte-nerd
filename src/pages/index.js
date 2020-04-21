import React from "react"

import Layout from "../components/layout"
import { HeroImage } from "../components/image"
import SEO from "../components/seo"

import {
  Grid,
  Container,
  Box,
  Hidden,
  Toolbar,
  Typography,
} from "@material-ui/core"

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
        <Grid container alignItems="center" justify="center">
          <Grid item xs={12} md={4}>
            <Box width="100%" align="center">
              <HeroImage />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h2"
              variantMapping={{ h2: "h1" }}
              align="center"
            >
              Hello!
            </Typography>
            <Typography variant="subtitle1" align="center" paragraph>
              My name is David and I make apps, websites and cups of coffee*
              with code.
            </Typography>
            <Box width="100%" display="block" textAlign="center">
              <Typography variant="caption" align="center">
                *work in progress
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </Layout>
)

export default IndexPage
