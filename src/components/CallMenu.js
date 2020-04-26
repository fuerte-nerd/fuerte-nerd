import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import { setCallMenuAnchor, setConfirmDialog } from "../redux/actions"
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
              return props.dispatch(
                setConfirmDialog({
                  isOpen: false,
                })
              )
            },
            isOpen: true,
          })
        )
      case "whatsapp":
        return props.dispatch(
          setConfirmDialog({
            title: "Open WhatsApp?",
            text:
              "Would you like to continue to WhatsApp? (You will need to call me within the app)",
            y: "Yes",
            n: "No",
            action: () => {
              window.open(
                `https://wa.me/${data.site.siteMetadata.contact.phone}`,
                "_blank"
              )
              return props.dispatch(
                setConfirmDialog({
                  isOpen: false,
                })
              )
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
      anchorEl={props.callMenuAnchorEl}
      open={Boolean(props.callMenuAnchorEl)}
      onClose={() => props.dispatch(setCallMenuAnchor(null))}
    >
      <MenuItem onClick={handleClick} id="call_phone">
        Call via phone
        <Typography
          color="textSecondary"
          variant="caption"
          style={{ marginLeft: 10 }}
        >
          ({data.site.siteMetadata.contact.phoneStr})
        </Typography>
      </MenuItem>
      <MenuItem onClick={handleClick} id="whatsapp">
        Call on WhatsApp
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
  callMenuAnchorEl: state.callMenuAnchorEl,
})

export default connect(mapStateToProps)(CallMenu)
