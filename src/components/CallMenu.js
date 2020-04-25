import React from "react"
import { connect } from "react-redux"
import { setCallMenuAnchor } from "../redux/actions"
import { Menu, MenuItem, ListItemIcon } from "@material-ui/core"

import { Phone, WhatsApp } from "@material-ui/icons"

const CallMenu = props => {
  return (
    <Menu
      anchorEl={props.callMenuAnchorEl}
      open={Boolean(props.callMenuAnchorEl)}
      onClose={() => props.dispatch(setCallMenuAnchor(null))}
    >
      <MenuItem>
        <ListItemIcon>
          <Phone />
        </ListItemIcon>
        Call on phone
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <WhatsApp />
        </ListItemIcon>
        Call on WhatsApp
      </MenuItem>
    </Menu>
  )
}

const mapStateToProps = state => ({
  callMenuAnchorEl: state.callMenuAnchorEl,
})

export default connect(mapStateToProps)(CallMenu)