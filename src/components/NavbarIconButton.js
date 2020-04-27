import React from "react"
import { Hidden, Tooltip, IconButton } from "@material-ui/core"

const NavbarIconButton = props => {
  return (
    <Hidden smDown={props.hideOnSmallDevices}>
      <Tooltip title={props.tooltip}>
        <IconButton color="inherit" onClick={props.clickHandler} id={props.id}>
          {props.children}
        </IconButton>
      </Tooltip>
    </Hidden>
  )
}

export default NavbarIconButton
