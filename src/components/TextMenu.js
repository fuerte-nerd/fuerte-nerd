import React from "react"
import { connect } from "react-redux"
import { setTextMenuAnchor } from "../redux/actions"
import { Menu, MenuItem, ListItemIcon } from "@material-ui/core"

import { WhatsApp, Message, Email } from "@material-ui/icons"

const TextMenu = props => {
  return (
    <Menu
      anchorEl={props.textMenuAnchorEl}
      open={Boolean(props.textMenuAnchorEl)}
      onClose={() => props.dispatch(setTextMenuAnchor(null))}
    >
      <MenuItem>
        <ListItemIcon>
          <WhatsApp />
        </ListItemIcon>
        Send WhatsApp
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <Email />
        </ListItemIcon>
        Send email
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <Message />
        </ListItemIcon>
        Send SMS
      </MenuItem>
    </Menu>
  )
}

const mapStateToProps = state => ({
  textMenuAnchorEl: state.textMenuAnchorEl,
})

export default connect(mapStateToProps)(TextMenu)
