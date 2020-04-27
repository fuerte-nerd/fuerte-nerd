import React from "react"
import { Box, Typography, Grid, TextField, Button } from "@material-ui/core"
import { Send } from "@material-ui/icons"
import Reveal from "./Reveal"

const ContactForm = () => {
  return (
    <Box>
      <Reveal>
        <Typography align="justify">
          If you would prefer, you can send me a message directly using the form
          below...
        </Typography>
      </Reveal>
      <form action="" method="post">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Reveal>
              <TextField
                fullWidth
                name="name"
                id="name"
                label="Name"
                required
              />
            </Reveal>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Reveal>
              <TextField
                fullWidth
                name="email"
                id="email"
                label="Email"
                type="email"
                required
              />
            </Reveal>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Reveal>
              <TextField fullWidth name="phone" id="phone" label="Phone" />
            </Reveal>
          </Grid>
          <Grid item xs={12}>
            <Reveal>
              <TextField
                fullWidth
                name="message"
                id="message"
                label="Message"
                multiline
                required
              />
            </Reveal>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Reveal>
              <Button
                color="secondary"
                endIcon={<Send />}
                variant="contained"
                size="large"
              >
                Send
              </Button>
            </Reveal>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}

export default ContactForm
