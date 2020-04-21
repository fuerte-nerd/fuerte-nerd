import React from "react"
import { connect } from "react-redux"
import { toggleMenu } from "../redux/actions"
import {
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Hidden,
  Grid,
  Button,
} from "@material-ui/core"

import { Menu, GitHub, Phone, Email, WhatsApp } from "@material-ui/icons"

const Navbar = props => {
  const handleClick = e => {
    const f = e.currentTarget
    switch (f.id) {
      case "menu":
        return props.dispatch(toggleMenu(!props.isOpen))
      default:
        return
    }
  }
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          style={{ marginRight: ".25rem" }}
          onClick={handleClick}
          id="menu"
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" style={{ flex: 1 }}>
          d_andrews
        </Typography>
        <Hidden smDown>
          <IconButton color="inherit">
            <GitHub />
          </IconButton>
        </Hidden>
        <IconButton color="inherit">
          <Phone />
        </IconButton>
        <IconButton edge="end" color="inherit">
          <Email />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = state => ({
  isOpen: state.navOpen,
})

export default connect(mapStateToProps)(Navbar)
