import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import { setCallMenuAnchor } from "../redux/actions"
import { Menu, MenuItem, Typography } from "@material-ui/core"

const CallMenu = props => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          contact {
            phone
            phoneStr
          }
        }
      }
    }
  `)
  return (
    <Menu
      anchorEl={props.callMenuAnchorEl}
      open={Boolean(props.callMenuAnchorEl)}
      onClose={() => props.dispatch(setCallMenuAnchor(null))}
    >
      <MenuItem>
        Call on phone{"  "}
        <Typography variant="overline">
          ({data.site.siteMetadata.contact.phoneStr})
        </Typography>
      </MenuItem>
      <MenuItem>Call on WhatsApp</MenuItem>
    </Menu>
  )
}

const mapStateToProps = state => ({
  callMenuAnchorEl: state.callMenuAnchorEl,
})

export default connect(mapStateToProps)(CallMenu)
