import React from "react"
import { connect } from "react-redux"
import { setPhoneMenuAnchor, setWhatsAppMenuAnchor } from "../redux/actions"
import PhoneMenu from "./PhoneMenu"
import WhatsAppMenu from "./WhatsAppMenu"
import {
  TextField,
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Toolbar,
  Divider,
} from "@material-ui/core"
import { Send, Email, Phone, WhatsApp } from "@material-ui/icons"

const SectionContact = props => {
  const handleClick = e => {
    const f = e.currentTarget
    switch (f.id) {
      case "phone":
        return props.dispatch(setPhoneMenuAnchor(f))
      case "whatsapp":
        return props.dispatch(setWhatsAppMenuAnchor(f))
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
        <Box>
          <Typography variant="h2">Contact</Typography>
          <Divider style={{ marginBottom: 10 }} />
          <Typography variant="h5">Get in touch!</Typography>
          <Typography align="justify">
            If you would like to hire me or if you have any questions about my
            work, please feel free to contact me!
          </Typography>
        </Box>

        <Box py={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4}>
              <Button
                color="secondary"
                variant="contained"
                size="large"
                startIcon={<Phone />}
                fullWidth
                onClick={handleClick}
                id="phone"
              >
                Phone
              </Button>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                color="secondary"
                variant="contained"
                size="large"
                startIcon={<Email />}
                fullWidth
                onClick={handleClick}
                id="email"
              >
                Email
              </Button>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                color="secondary"
                variant="contained"
                size="large"
                startIcon={<WhatsApp />}
                fullWidth
                onClick={handleClick}
                id="whatsapp"
              >
                WhatsApp
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Typography align="justify">
            If you would prefer, you can send me a message directly using the
            form below...
          </Typography>
        </Box>
        <form action="" method="post">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                name="name"
                id="name"
                label="Name"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                name="email"
                id="email"
                label="Email"
                type="email"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField fullWidth name="phone" id="phone" label="Phone" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="message"
                id="message"
                label="Message"
                multiline
                required
              />
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Button
                color="secondary"
                endIcon={<Send />}
                variant="contained"
                size="large"
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
      <Toolbar />
      <PhoneMenu />
      <WhatsAppMenu />
    </Box>
  )
}

export default connect()(SectionContact)
