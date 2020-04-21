import React from "react"
import { connect } from "react-redux"
import { toggleMenu } from "../redux/actions"

import { Link } from "react-scroll"

import {
  ListItemText,
  Divider,
  Dialog,
  Box,
  List,
  ListItem,
  Typography,
  Fab,
} from "@material-ui/core"

import { Close } from "@material-ui/icons"

const NavMenu = props => {
  const handleClick = e => {
    const f = e.currentTarget
    switch (f.id) {
      case "close":
        return props.dispatch(toggleMenu(!props.isOpen))
      default:
        return props.dispatch(toggleMenu(!props.isOpen))
    }
  }

  return (
    <Dialog
      fullScreen
      open={props.isOpen}
      onClose={() => props.dispatch(toggleMenu(!props.isOpen))}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        width="100vw"
      >
        <List style={{ flex: 1 }}>
          <Link to="home" smooth={true} offset={0}>
            <ListItem
              button
              alignItems="center"
              id="homeLink"
              onClick={handleClick}
            >
              <ListItemText
                primaryTypographyProps={{ variant: "button", align: "center" }}
              >
                Home
              </ListItemText>
            </ListItem>
          </Link>
          <Link to="about" smooth={true} offset={0}>
            <ListItem
              button
              alignItems="center"
              id="aboutLink"
              onClick={handleClick}
            >
              <ListItemText
                primaryTypographyProps={{ variant: "button", align: "center" }}
              >
                About
              </ListItemText>
            </ListItem>
          </Link>
          <Link to="projects" smooth={true} offset={0}>
            <ListItem
              button
              alignItems="center"
              id="projectsLink"
              onClick={handleClick}
            >
              <ListItemText
                primaryTypographyProps={{ variant: "button", align: "center" }}
              >
                Projects
              </ListItemText>
            </ListItem>
          </Link>
          <Link to="contact" smooth={true} offset={0}>
            <ListItem
              button
              alignItems="center"
              id="contactLink"
              onClick={handleClick}
            >
              <ListItemText
                primaryTypographyProps={{ variant: "button", align: "center" }}
              >
                Contact
              </ListItemText>
            </ListItem>
          </Link>
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
