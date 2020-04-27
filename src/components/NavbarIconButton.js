import React from "react"

const NavbarIconButton = props => {
  return (
    <Hidden smDown={props.hideOnSmallDevices}>
      <Tooltip title={paper.tooltip}>
        <IconButton color="inherit" onClick={handleClick} id={props.id}>
          {props.children}
        </IconButton>
      </Tooltip>
    </Hidden>
  )
}

export default NavbarIconButton
