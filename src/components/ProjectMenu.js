import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import { setProjectMenuAnchor } from "../redux/actions"
import { Menu, MenuItem } from "@material-ui/core"

const ProjectMenu = props => {
  return (
    <Menu
      anchorOrigin={{ vertical: "center", horizontal: "center" }}
      transformOrigin={{ vertical: "center", horizontal: "center" }}
      anchorEl={props.projectMenuAnchorEl}
      open={Boolean(props.projectMenuAnchorEl)}
      onClose={() => props.dispatch(setProjectMenuAnchor(null))}
    >
      <MenuItem>Visit Project</MenuItem>
      <MenuItem>View Code</MenuItem>
    </Menu>
  )
}

const mapStateToProps = state => ({
  projectMenuAnchorEl: state.projectMenuAnchorEl,
})

export default connect(mapStateToProps)(ProjectMenu)
