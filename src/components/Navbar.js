import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import {
  toggleMenu,
  setCallMenuAnchor,
  setTextMenuAnchor,
} from "../redux/actions"
import { Link } from "react-scroll"
import {
  AppBar,
  Tooltip,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
} from "@material-ui/core"

import MenuComponent from "@material-ui/core/Menu"

import { Menu, Instagram, GitHub, Phone, Email } from "@material-ui/icons"

import CallMenu from "./CallMenu"
import TextMenu from "./TextMenu"

const Navbar = props => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          links {
            github
            instagram
          }
        }
      }
    }
  `)

  const { title, links } = data.site.siteMetadata

  const handleClick = e => {
    const f = e.currentTarget
    switch (f.id) {
      case "menu":
        return props.dispatch(toggleMenu(!props.isOpen))
      case "phone":
        return props.dispatch(setCallMenuAnchor(f))
      case "text":
        return props.dispatch(setTextMenuAnchor(f))
      case "instagram":
        return window.open(`https://instagram.com/${links.instagram}`, "_blank")
      case "github":
        return window.open(`https://github.com/${links.github}`, "_blank")
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
            <Typography
              variant="h6"
              variantMapping={{ h6: "h1" }}
              style={{ cursor: "pointer" }}
            >
              {title}
            </Typography>
          </Link>
          <span style={{ flex: 1 }} />
          <Hidden smDown>
            <Tooltip title="Instagram">
              <IconButton color="inherit" onClick={handleClick} id="instagram">
                <Instagram />
              </IconButton>
            </Tooltip>
          </Hidden>
          <Hidden smDown>
            <Tooltip title="GitHub">
              <IconButton color="inherit" onClick={handleClick} id="github">
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
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClick}
              id="text"
            >
              <Email />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <CallMenu />
      <TextMenu />
    </>
  )
}

const mapStateToProps = state => ({
  isOpen: state.navOpen,
})

export default connect(mapStateToProps)(Navbar)
