import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import {
  Fab,
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

import { Close } from "@material-ui/icons"

import Navbar from "../components/Navbar"

const handleClick = e => {
  console.log(e.currentTarget.id)
}

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
          <ListItem button alignItems="center" id="home" onClick={handleClick}>
            <Box width="100%" py={1}>
              <Typography variant="button" align="center" display="block">
                Home
              </Typography>
            </Box>
          </ListItem>
          <ListItem button alignItems="center" id="home" onClick={handleClick}>
            <Box width="100%" py={1}>
              <Typography variant="button" align="center" display="block">
                About
              </Typography>
            </Box>
          </ListItem>
          <ListItem button alignItems="center" id="home" onClick={handleClick}>
            <Box width="100%" py={1}>
              <Typography variant="button" align="center" display="block">
                Projects
              </Typography>
            </Box>
          </ListItem>
          <ListItem button alignItems="center" id="home" onClick={handleClick}>
            <Box width="100%" py={1}>
              <Typography variant="button" align="center" display="block">
                Contact
              </Typography>
            </Box>
          </ListItem>
        </List>
      </Box>
      <Fab />
    </Dialog>

    <Box>
      <Toolbar />
      <Typography variant="h1">My site</Typography>
    </Box>
  </Layout>
)

export default IndexPage
