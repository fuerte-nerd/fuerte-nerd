import React from "react"
import { connect } from "react-redux"
import { toggleMenu } from "../redux/actions"
import NavMenuItem from "./NavMenuItem"
import { Link } from "react-scroll"

import {
  Dialog,
  Box,
  List,
  Fab,
  Divider,
  Grid,
  Container,
} from "@material-ui/core"

import { Close } from "@material-ui/icons"

const NavMenu = props => {
  const handleClick = e => {
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
      >
        <Box width="100%" mb={2}>
          <List style={{ flex: 1 }}>
            <NavMenuItem link="home" label="Home" />
            <NavMenuItem link="about" label="About" offset />
            <NavMenuItem link="projects" label="Projects" offset />
            <NavMenuItem link="contact" label="Contact" offset />
          </List>
        </Box>
        <Box width="75%">
          <Divider variant="middle" />
        </Box>
      </Box>

      <Fab
        color="primary"
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
