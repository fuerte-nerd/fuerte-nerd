import React from "react"
import { connect } from "react-redux"
import { toggleMenu } from "../redux/actions"

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
        return
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
          <ListItem
            button
            alignItems="center"
            id="contact"
            onClick={handleClick}
          >
            <ListItemText
              primaryTypographyProps={{ variant: "button", align: "center" }}
            >
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            button
            alignItems="center"
            id="contact"
            onClick={handleClick}
          >
            <ListItemText
              primaryTypographyProps={{ variant: "button", align: "center" }}
            >
              About
            </ListItemText>
          </ListItem>
          <ListItem
            button
            alignItems="center"
            id="contact"
            onClick={handleClick}
          >
            <ListItemText
              primaryTypographyProps={{ variant: "button", align: "center" }}
            >
              Projects
            </ListItemText>
          </ListItem>
          <ListItem
            button
            alignItems="center"
            id="contact"
            onClick={handleClick}
          >
            <ListItemText
              primaryTypographyProps={{ variant: "button", align: "center" }}
            >
              Contact
            </ListItemText>
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
