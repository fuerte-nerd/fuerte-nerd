import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import { setWhatsAppMenuAnchor } from "../redux/actions"
import { Menu, MenuItem, Typography } from "@material-ui/core"

const WhatsAppMenu = props => {
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
      anchorEl={props.whatsAppMenuAnchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      open={Boolean(props.whatsAppMenuAnchorEl)}
      onClose={() => props.dispatch(setWhatsAppMenuAnchor(null))}
    >
      <MenuItem>
        Call on WhatsApp
        <Typography
          color="textSecondary"
          variant="caption"
          style={{ marginLeft: 10 }}
        >
          ({data.site.siteMetadata.contact.phoneStr})
        </Typography>
      </MenuItem>
      <MenuItem>
        Send WhatsApp
        <Typography
          color="textSecondary"
          variant="caption"
          style={{ marginLeft: 10 }}
        >
          ({data.site.siteMetadata.contact.phoneStr})
        </Typography>
      </MenuItem>
    </Menu>
  )
}

const mapStateToProps = state => ({
  whatsAppMenuAnchorEl: state.whatsAppMenuAnchorEl,
})

export default connect(mapStateToProps)(WhatsAppMenu)
