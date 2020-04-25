import React from "react"
import { connect } from "react-redux"
import { setPhoneMenuAnchor } from "../redux/actions"
import { Menu, MenuItem } from "@material-ui/core"

const PhoneMenu = props => {
  return (
    <Menu
      anchorEl={props.phoneMenuAnchorEl}
      open={Boolean(props.phoneMenuAnchorEl)}
      onClose={() => props.dispatch(setPhoneMenuAnchor(null))}
    >
      <MenuItem>Call on phone</MenuItem>
      <MenuItem>Call on WhatsApp</MenuItem>
    </Menu>
  )
}

const mapStateToProps = state => ({
  phoneMenuAnchorEl: state.phoneMenuAnchorEl,
})

export default connect(mapStateToProps)(PhoneMenu)
