import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import { setTextMenuAnchor, setConfirmDialog } from "../redux/actions"
import { Hidden, Menu, MenuItem, Typography } from "@material-ui/core"

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
            action: () => {
              window.open(
                `https://wa.me/${data.site.siteMetadata.contact.phone}`,
                "_self"
              )
              props.dispatch(
                setConfirmDialog({
                  isOpen: false,
                })
              )
              return props.dispatch(setTextMenuAnchor(null))
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
              return props.dispatch(setTextMenuAnchor(null))
            },
            isOpen: true,
          })
        )
      case "email":
        return props.dispatch(
          setConfirmDialog({
            title: "Open Email?",
            text: "Would you like to continue to your email application?",
            y: "Yes",
            n: "No",
            action: () => {
              window.open(
                `mailto:${data.site.siteMetadata.contact.email}`,
                "_blank"
              )
              props.dispatch(
                setConfirmDialog({
                  isOpen: false,
                })
              )
              return props.dispatch(setTextMenuAnchor(null))
            },
            isOpen: true,
          })
        )
      default:
        return
    }
  }

  return (
    <Menu
      anchorEl={props.textMenuAnchorEl}
      open={Boolean(props.textMenuAnchorEl)}
      onClose={() => props.dispatch(setTextMenuAnchor(null))}
    >
      <MenuItem onClick={handleClick} id="whatsapp">
        Send WhatsApp
        <Typography
          color="textSecondary"
          variant="caption"
          style={{ marginLeft: 10 }}
        >
          ({data.site.siteMetadata.contact.phoneStr})
        </Typography>
      </MenuItem>
      <MenuItem onClick={handleClick} id="email">
        Send email
        <Typography
          color="textSecondary"
          variant="caption"
          style={{ marginLeft: 10 }}
        >
          ({data.site.siteMetadata.contact.email})
        </Typography>
      </MenuItem>
      <Hidden smUp>
        <MenuItem onClick={handleClick} id="sms">
          Send SMS
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
  textMenuAnchorEl: state.textMenuAnchorEl,
})

export default connect(mapStateToProps)(TextMenu)
