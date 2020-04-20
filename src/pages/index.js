import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import {
  Box,
  Toolbar,
  Typography,
  Dialog,
  List,
  ListItem,
  ListItemText,
  Link,
  Button,
} from "@material-ui/core"

import Navbar from "../components/Navbar"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar />
    <Dialog fullScreen open={true}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        width="100vw"
      >
        <List dense style={{ flex: 1 }}>
          <ListItem button alignItems="center">
            <Box display="block">
              <Typography variant="button" align="center" display="block">
                Home
              </Typography>
            </Box>
          </ListItem>
          <ListItem dense disableGutters>
            <Button color="inherit" fullWidth>
              About
            </Button>
          </ListItem>
          <ListItem dense disableGutters>
            <Button color="inherit" fullWidth>
              Projects
            </Button>
          </ListItem>
          <ListItem dense disableGutters>
            <Button color="inherit" fullWidth>
              Contact
            </Button>
          </ListItem>
        </List>
      </Box>
    </Dialog>
    <Box>
      <Toolbar />
      <Typography variant="h1">My site</Typography>
    </Box>
  </Layout>
)

export default IndexPage
