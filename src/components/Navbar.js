import React from "react"
import { connect } from "react-redux"
import { toggleMenu } from "../redux/actions"
import {
  AppBar,
  Toolbar,
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
        <Typography variant="subtitle1" style={{ flex: 1, minWidth: "8rem" }}>
          fuerte nerd
        </Typography>
        {/* menu for larger screens */}
        <Hidden smDown>
          <Grid container>
            <Grid item>
              <Button color="inherit" fullWidth>
                Home
              </Button>
            </Grid>
            <Grid item></Grid>
            <Grid item></Grid>
            <Grid item></Grid>
          </Grid>
        </Hidden>
        <Hidden smDown>
          <IconButton color="inherit">
            <GitHub />
          </IconButton>
        </Hidden>
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

const mapStateToProps = state => ({
  isOpen: state.navOpen,
})

export default connect(mapStateToProps)(Navbar)
