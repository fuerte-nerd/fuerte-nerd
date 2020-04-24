import React, { useState } from "react"
import { Menu, MenuItem } from "@material-ui/core"

const ContactMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null)

  return (
    <Menu>
      <MenuItem>Phone</MenuItem>
      <MenuItem>WhatsApp</MenuItem>
    </Menu>
  )
}

export default ContactMenu
