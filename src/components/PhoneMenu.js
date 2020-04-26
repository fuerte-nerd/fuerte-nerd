import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import { setPhoneMenuAnchor, setConfirmDialog } from "../redux/actions"
import { Menu, MenuItem, Typography, Hidden } from "@material-ui/core"

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
      case "call_phone":
        return props.dispatch(
          setConfirmDialog({
            title: "Open Dialler?",
            text: "Would you like to continue to your phone dialler app?",
            y: "Yes",
            n: "No",
            action: () => {
              window.open(
                `tel:${data.site.siteMetadata.contact.phone}`,
                "_self"
              )
              props.dispatch(
                setConfirmDialog({
                  isOpen: false,
                })
              )
              return props.dispatch(setPhoneMenuAnchor(null))
            },
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
            action: () => {
              window.open(
                `sms:${data.site.siteMetadata.contact.phone}`,
                "_self"
              )
              props.dispatch(
                setConfirmDialog({
                  isOpen: false,
                })
              )
              return props.dispatch(setPhoneMenuAnchor(null))
            },
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
      <MenuItem onClick={handleClick} id="call_phone">
        Phone me
        <Typography
          color="textSecondary"
          variant="caption"
          style={{ marginLeft: 10 }}
        >
          ({data.site.siteMetadata.contact.phoneStr})
        </Typography>
      </MenuItem>
      <Hidden smUp>
        <MenuItem onClick={handleClick} id="sms">
          Send me an SMS
          <Typography
            color="textSecondary"
            variant="caption"
            style={{ marginLeft: 10 }}
          >
            ({data.site.siteMetadata.contact.phoneStr})
          </Typography>
        </MenuItem>
      </Hidden>
    </Menu>
  )
}

const mapStateToProps = state => ({
  phoneMenuAnchorEl: state.phoneMenuAnchorEl,
})

export default connect(mapStateToProps)(PhoneMenu)
