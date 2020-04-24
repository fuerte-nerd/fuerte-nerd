import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import { toggleMenu } from "../redux/actions"
import { Link } from "react-scroll"
import {
  AppBar,
  Tooltip,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
  MenuItem,
} from "@material-ui/core"

import MenuComponent from "@material-ui/core/Menu"

import { Menu, Instagram, GitHub, Phone, Email } from "@material-ui/icons"

const Navbar = props => {
  const [anchorEl, setAnchorEl] = useState(null)
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
      case "phone":
        return setAnchorEl(e.currentTarget)
      default:
        return
    }
  }
  return (
    <>
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
          <Link to="home" smooth={true}>
            <Typography variant="h6" variantMapping={{ h6: "h1" }}>
              {data.site.siteMetadata.title}
            </Typography>
          </Link>
          <span style={{ flex: 1 }} />
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
            <IconButton color="inherit" onClick={handleClick} id="phone">
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
      <MenuComponent anchorEl={anchorEl} open={Boolean(anchorEl)}>
        <MenuItem>Call on phone</MenuItem>
        <MenuItem>Call on WhatsApp</MenuItem>
      </MenuComponent>
    </>
  )
}

const mapStateToProps = state => ({
  isOpen: state.navOpen,
})

export default connect(mapStateToProps)(Navbar)
