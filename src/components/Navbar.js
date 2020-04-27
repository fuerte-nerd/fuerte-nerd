import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import {
  setConfirmDialog,
  toggleMenu,
  setCallMenuAnchor,
  setTextMenuAnchor,
} from "../redux/actions"
import { Link } from "react-scroll"
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core"

import { Menu, Instagram, GitHub, Phone, Email } from "@material-ui/icons"
import { Fade } from "react-reveal"

import NavbarIconButton from "./NavbarIconButton"
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
        return props.dispatch(
          setConfirmDialog({
            title: "Open Instagram?",
            text: "Would you like to continue to my Instagram profile?",
            y: "Yes",
            n: "No",
            action: () => {
              window.open(`https://instagram.com/${links.instagram}`, "_blank")
              props.dispatch(setConfirmDialog({ isOpen: false }))
            },
            isOpen: true,
          })
        )

      case "github":
        return props.dispatch(
          setConfirmDialog({
            title: "Open GitHub?",
            text: "Would you like to continue to my GitHub profile?",
            y: "Yes",
            n: "No",
            action: () => {
              window.open(`https://github.com/${links.github}`, "_blank")
              props.dispatch(setConfirmDialog({ isOpen: false }))
            },
            isOpen: true,
          })
        )
      default:
        return
    }
  }

  return (
    <>
      <AppBar position="fixed">
        <Fade down>
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
            <NavbarIconButton
              hideOnSmallDevices={true}
              clickHandler={handleClick}
              tooltip="Instagram"
              id="instagram"
            >
              <Instagram />
            </NavbarIconButton>
            <NavbarIconButton
              hideOnSmallDevices={true}
              clickHandler={handleClick}
              tooltip="GitHub"
              id="github"
            >
              <GitHub />
            </NavbarIconButton>
            <NavbarIconButton
              hideOnSmallDevices={false}
              clickHandler={handleClick}
              tooltip="Call me"
              id="phone"
            >
              <Phone />
            </NavbarIconButton>
            <NavbarIconButton
              hideOnSmallDevices={false}
              clickHandler={handleClick}
              tooltip="Message me"
              id="text"
            >
              <Email />
            </NavbarIconButton>
          </Toolbar>
        </Fade>
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
