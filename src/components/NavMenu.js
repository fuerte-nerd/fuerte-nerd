import React from "react"
import { connect } from "react-redux"
import { Dialog, Box, List, ListItem, Typography, Fab } from "@material-ui/core"

import { Close } from "@material-ui/icons"

const NavMenu = () => {
  return (
    <Dialog fullScreen open={true}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        width="100vw"
      >
        <List dense style={{ flex: 1 }}>
          <ListItem button alignItems="center" id="home" onClick={handleClick}>
            <Box width="100%" py={1}>
              <Typography variant="button" align="center" display="block">
                Home
              </Typography>
            </Box>
          </ListItem>
          <ListItem button alignItems="center" id="about" onClick={handleClick}>
            <Box width="100%" py={1}>
              <Typography variant="button" align="center" display="block">
                About
              </Typography>
            </Box>
          </ListItem>
          <ListItem
            button
            alignItems="center"
            id="projects"
            onClick={handleClick}
          >
            <Box width="100%" py={1}>
              <Typography variant="button" align="center" display="block">
                Projects
              </Typography>
            </Box>
          </ListItem>
          <ListItem
            button
            alignItems="center"
            id="contact"
            onClick={handleClick}
          >
            <Box width="100%" py={1}>
              <Typography variant="button" align="center" display="block">
                Contact
              </Typography>
            </Box>
          </ListItem>
        </List>
      </Box>
      <Fab style={{ position: "fixed", top: "2.5rem", right: "2.5rem" }}>
        <Close />
      </Fab>
    </Dialog>
  )
}

export default NavMenu
