import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import { toggleMenu } from "../redux/actions"
import {
  AppBar,
  Tooltip,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
} from "@material-ui/core"

import { Menu, Instagram, GitHub, Phone, Email } from "@material-ui/icons"

const Navbar = props => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
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
        <Typography
          variant="h6"
          variantMapping={{ h6: "h1" }}
          style={{ flex: 1 }}
        >
          {data.site.siteMetadata.title}
        </Typography>
        <Hidden smDown>
          <Tooltip title="Instagram">
            <IconButton color="inherit">
              <Instagram />
            </IconButton>
          </Tooltip>
        </Hidden>
        <Hidden smDown>
          <Tooltip title="GitHub">
            <IconButton color="inherit">
              <GitHub />
            </IconButton>
          </Tooltip>
        </Hidden>
        <Tooltip title="Call me">
          <IconButton color="inherit">
            <Phone />
          </IconButton>
        </Tooltip>
        <Tooltip title="Message me">
          <IconButton edge="end" color="inherit">
            <Email />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = state => ({
  isOpen: state.navOpen,
})

export default connect(mapStateToProps)(Navbar)
