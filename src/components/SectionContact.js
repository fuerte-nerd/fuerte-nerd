import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { connect } from "react-redux"
import { setPhoneMenuAnchor, setConfirmDialog } from "../redux/actions"
import SectionHeading from "./SectionHeading"
import ContactButton from "./ContactButton"
import ContactForm from "./ContactForm"
import PhoneMenu from "./PhoneMenu"
import WhatsAppMenu from "./WhatsAppMenu"
import { Box, Container, Grid, Typography, Toolbar } from "@material-ui/core"
import { Email, Phone, WhatsApp } from "@material-ui/icons"
import { Fade } from "react-reveal"

const SectionContact = props => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          contact {
            email
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
      case "phone":
        return props.dispatch(setPhoneMenuAnchor(f))
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
              return props.dispatch(
                setConfirmDialog({
                  isOpen: false,
                })
              )
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
              props.dispatch(setPhoneMenuAnchor(null))
            },
            isOpen: true,
          })
        )
      default:
        return
    }
  }

  return (
    <Box
      py={2}
      id="contact"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Toolbar />
      <Container>
        <Fade>
          <SectionHeading title="Contact" subtitle="Get in touch!" />
        </Fade>
        <Fade left>
          <Typography align="justify">
            If you would like to hire me or if you have any questions about my
            work, please feel free to contact me!
          </Typography>
        </Fade>

        <Box py={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4}>
              <ContactButton
                id="phone"
                clickHandler={handleClick}
                label="Phone"
                icon={<Phone />}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ContactButton
                id="email"
                clickHandler={handleClick}
                label="Email"
                icon={<Email />}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ContactButton
                id="whatsapp"
                clickHandler={handleClick}
                label="WhatsApp"
                icon={<WhatsApp />}
              />
            </Grid>
          </Grid>
        </Box>
        <ContactForm />
      </Container>
      <Toolbar />
      <PhoneMenu />
      <WhatsAppMenu />
    </Box>
  )
}

export default connect()(SectionContact)
