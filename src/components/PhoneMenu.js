import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import { setPhoneMenuAnchor, setConfirmDialog } from "../redux/actions"
import { Menu, MenuItem, Typography } from "@material-ui/core"

const PhoneMenu = props => {
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

  const handleClick = e => {
    const f = e.currentTarget

    switch (f.id) {
      case "whatsapp":
        return props.dispatch(
          setConfirmDialog({
            title: "Open WhatsApp?",
            text: "Would you like to continue to WhatsApp?",
            y: "Yes",
            n: "No",
            action: () =>
              window.open(
                `https://wa.me/${data.site.siteMetadata.contact.phone}`,
                "_self"
              ),
            isOpen: true,
          })
        )
      case "sms":
        return props.dispatch(
          setConfirmDialog({
            title: "Open SMS app?",
            text: "Would you like to continue to your SMS application?",
            y: "Yes",
            n: "No",
            action: () =>
              window.open(
                `sms:${data.site.siteMetadata.contact.phone}`,
                "_self"
              ),
            isOpen: true,
          })
        )
    }
  }
  return (
    <Menu
      anchorEl={props.phoneMenuAnchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      open={Boolean(props.phoneMenuAnchorEl)}
      onClose={() => props.dispatch(setPhoneMenuAnchor(null))}
    >
      <MenuItem>
        Phone me
        <Typography
          color="textSecondary"
          variant="caption"
          style={{ marginLeft: 10 }}
        >
          ({data.site.siteMetadata.contact.phoneStr})
        </Typography>
      </MenuItem>
      <MenuItem>
        Send me an SMS
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
  phoneMenuAnchorEl: state.phoneMenuAnchorEl,
})

export default connect(mapStateToProps)(PhoneMenu)
