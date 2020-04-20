import React from "react"
import { connect } from "react-redux"
import { toggleMenu } from "actions"
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core"

import { Menu, GitHub, Phone, Email, WhatsApp } from "@material-ui/icons"

const Navbar = props => {
  const handleClick = e => {
    const f = e.currentTarget
    switch (f.id) {
      case "menu":
        return props.dispatch(toggleMenu())
      default:
        return
    }
  }
  return (
    <AppBar>
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
        <Typography variant="subtitle1" style={{ marginRight: ".25rem" }}>
          David Andrews
        </Typography>

        <Typography style={{ flex: 1 }} variant="subtitle2">
          (Web Developer)
        </Typography>
        <IconButton color="inherit">
          <GitHub />
        </IconButton>
        <IconButton color="inherit">
          <Phone />
        </IconButton>
        <IconButton color="inherit">
          <Email />
        </IconButton>
        <IconButton edge="end" color="inherit">
          <WhatsApp />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default connect()(Navbar)
