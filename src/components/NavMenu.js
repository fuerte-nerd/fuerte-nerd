import React from "react"
import { connect } from "react-redux"
import { toggleMenu } from "../redux/actions"

import { Dialog, Box, List, ListItem, Typography, Fab } from "@material-ui/core"

import { Close } from "@material-ui/icons"

const NavMenu = props => {
  const handleClick = e => {
    const f = e.currentTarget
    switch (f.id) {
      case "close":
        return props.dispatch(toggleMenu(!props.isOpen))
      default:
        return
    }
  }

  return (
    <Dialog fullScreen open={props.isOpen}>
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
          <ListItem button alignItems="center" id="about" onClick={handleClick}>
            <Box width="100%" py={1}>
              <Typography variant="button" align="center" display="block">
                About
              </Typography>
            </Box>
          </ListItem>
          <ListItem
            button
            alignItems="center"
            id="projects"
            onClick={handleClick}
          >
            <Box width="100%" py={1}>
              <Typography variant="button" align="center" display="block">
                Projects
              </Typography>
            </Box>
          </ListItem>
          <ListItem
            button
            alignItems="center"
            id="contact"
            onClick={handleClick}
          >
            <Box width="100%" py={1}>
              <Typography variant="button" align="center" display="block">
                Contact
              </Typography>
            </Box>
          </ListItem>
        </List>
      </Box>
      <Fab
        onClick={handleClick}
        id="close"
        style={{ position: "fixed", top: "2.5rem", right: "2.5rem" }}
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
