import React from "react"
import { connect } from "react-redux"
import { setProjectMenu } from "../redux/actions"
import { Menu, MenuItem } from "@material-ui/core"

const ProjectMenu = props => {
  const handleClick = e => {
    const f = e.currentTarget
    switch (f.id) {
      case "visit":
        return window.open(props.projectMenu.viewLink, "_blank")
      case "code":
        return window.open(props.projectMenu.codeLink, "_blank")
      default:
        return
    }
  }
  return (
    <Menu
      anchorOrigin={{ vertical: "center", horizontal: "center" }}
      transformOrigin={{ vertical: "center", horizontal: "center" }}
      anchorEl={props.projectMenu.anchor}
      open={Boolean(props.projectMenu.anchor)}
      onClose={() =>
        props.dispatch(
          setProjectMenu({
            ...props.projectMenu,
            anchor: null,
          })
        )
      }
    >
      <MenuItem onClick={handleClick} id="visit">
        Visit Project
      </MenuItem>
      <MenuItem onClick={handleClick} id="code">
        View Code
      </MenuItem>
    </Menu>
  )
}

const mapStateToProps = state => ({
  projectMenu: state.projectMenu,
})

export default connect(mapStateToProps)(ProjectMenu)
