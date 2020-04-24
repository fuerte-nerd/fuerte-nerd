import React from "react"
import { connect } from "react-redux"
import { setTextMenuAnchor } from "../redux/actions"
import { Menu, MenuItem } from "@material-ui/core"

const TextMenu = props => {
  return (
    <Menu
      anchorEl={props.textMenuAnchorEl}
      open={Boolean(props.textMenuAnchorEl)}
      onClose={() => props.dispatch(setTextMenuAnchor(null))}
    >
      <MenuItem>Send WhatsApp</MenuItem>
      <MenuItem>Send Email</MenuItem>
      <MenuItem>Send SMS</MenuItem>
    </Menu>
  )
}

const mapStateToProps = state => ({
  textMenuAnchorEl: state.textMenuAnchorEl,
})

export default connect(mapStateToProps)(TextMenu)
