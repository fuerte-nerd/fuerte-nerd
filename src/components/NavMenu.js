import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import { toggleMenu, setConfirmDialog } from "../redux/actions"
import NavMenuItem from "./NavMenuItem"
import { Link } from "react-scroll"

import {
  Dialog,
  Box,
  List,
  Fab,
  Divider,
  IconButton,
  Grid,
  Typography,
  Tooltip,
} from "@material-ui/core"

import { Close, GitHub, Instagram, Twitter } from "@material-ui/icons"

const NavMenu = props => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          links {
            github
            instagram
            twitter
          }
        }
      }
    }
  `)
  const handleClick = e => {
    const f = e.currentTarget
    switch (f.id) {
      case "github":
        return props.dispatch(
          setConfirmDialog({
            title: "Open GitHub?",
            text: "Would you like to check out my GitHub profile?",
            y: "Yes",
            n: "No",
            action: () => {
              window.open(
                `https://github.com/${data.site.siteMetadata.links.github}`,
                "_blank"
              )
              props.dispatch(setConfirmDialog({ isOpen: false }))
              return props.dispatch(toggleMenu(false))
            },
            isOpen: true,
          })
        )
      case "twitter":
        return props.dispatch(
          setConfirmDialog({
            title: "Open Twitter?",
            text: "Would you like to check out my Twitter profile?",
            y: "Yes",
            n: "No",
            action: () => {
              window.open(
                `https://twitter.com/${data.site.siteMetadata.links.twitter}`,
                "_blank"
              )
              props.dispatch(setConfirmDialog({ isOpen: false }))
              return props.dispatch(toggleMenu(false))
            },
            isOpen: true,
          })
        )
    }
    return props.dispatch(toggleMenu(!props.isOpen))
  }

  return (
    <Dialog
      fullScreen
      open={props.isOpen}
      onClose={() => props.dispatch(toggleMenu(!props.isOpen))}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        width="100vw"
        align="center"
      >
        <Box width="100%" mb={2}>
          <List style={{ flex: 1 }}>
            <NavMenuItem link="home" label="Home" />
            <NavMenuItem link="about" label="About" />
            <NavMenuItem link="projects" label="Projects" />
            <NavMenuItem link="contact" label="Contact" />
          </List>
        </Box>
        <Box width="75%">
          <Divider variant="middle" />
          <Box pt={2} align="center">
            <Typography variant="overline">External Links</Typography>
          </Box>
          <Box maxWidth={500}>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={4}>
                <Box align="center">
                  <Tooltip title="GitHub">
                    <IconButton
                      color="primary"
                      onClick={handleClick}
                      id="github"
                    >
                      <GitHub />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box align="center">
                  <Tooltip title="Twitter">
                    <IconButton
                      color="primary"
                      onClick={handleClick}
                      id="twitter"
                    >
                      <Twitter />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box align="center">
                  <Tooltip title="Instagram">
                    <IconButton
                      color="primary"
                      onClick={handleClick}
                      id="instagram"
                    >
                      <Instagram />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>

      <Fab
        color="primary"
        onClick={handleClick}
        id="close"
        style={{ position: "fixed", top: "1.5rem", right: "1.5rem" }}
      >
        <Close />
      </Fab>
    </Dialog>
  )
}

const mapStateToProps = state => ({
  isOpen: state.navOpen,
})

export default connect(mapStateToProps)(NavMenu)
