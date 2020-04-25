import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import { setTextMenuAnchor } from "../redux/actions"
import { Menu, MenuItem, Typography } from "@material-ui/core"

const TextMenu = props => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          contact {
            phone
            phoneStr
            email
          }
        }
      }
    }
  `)
  return (
    <Menu
      anchorEl={props.textMenuAnchorEl}
      open={Boolean(props.textMenuAnchorEl)}
      onClose={() => props.dispatch(setTextMenuAnchor(null))}
    >
      <MenuItem>
        Send WhatsApp{" "}
        <Typography variant="caption" style={{ marginLeft: 10 }}>
          ({data.site.siteMetadata.contact.phoneStr})
        </Typography>
      </MenuItem>
      <MenuItem>
        Send email
        <Typography variant="caption" style={{ marginLeft: 10 }}>
          ({data.site.siteMetadata.contact.email})
        </Typography>
      </MenuItem>
      <MenuItem>
        Send SMS
        <Typography variant="caption" style={{ marginLeft: 10 }}>
          ({data.site.siteMetadata.contact.phoneStr})
        </Typography>
      </MenuItem>
    </Menu>
  )
}

const mapStateToProps = state => ({
  textMenuAnchorEl: state.textMenuAnchorEl,
})

export default connect(mapStateToProps)(TextMenu)
