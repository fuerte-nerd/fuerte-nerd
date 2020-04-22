import React from "react"
import {
  TextField,
  Box,
  Container,
  Grid,
  Typography,
  Button,
} from "@material-ui/core"
import { Send, Email, Phone, WhatsApp } from "@material-ui/icons"
import { HeroImage } from "./image"

const SectionContact = () => {
  return (
    <Box
      id="contact"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container>
        <Box>
          <Typography variant="h2">Get in touch!</Typography>
          <Typography>
            If you would like to hire me or if you have any questions about my
            work, please feel free to contact me!
          </Typography>
        </Box>

        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Button
                variant="contained"
                size="large"
                startIcon={<Phone />}
                fullWidth
              >
                Phone
              </Button>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                variant="contained"
                size="large"
                startIcon={<Email />}
                fullWidth
              >
                Email
              </Button>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button
                variant="contained"
                size="large"
                startIcon={<WhatsApp />}
                fullWidth
              >
                WhatsApp
              </Button>
            </Grid>
          </Grid>
          <Button>Email</Button>
          <Button>WhatsApp</Button>
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
              <Button endIcon={<Send />} variant="contained">
                Send
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  )
}

export default SectionContact
