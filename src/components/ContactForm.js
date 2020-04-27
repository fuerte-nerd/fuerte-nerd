import React from "react"
import { Box, Typography, Grid, TextField, Button } from "@material-ui/core"
import { Send } from "@material-ui/icons"
import { Fade } from "react-reveal"

const ContactForm = () => {
  return (
    <Box>
      <Fade left>
        <Typography align="justify">
          If you would prefer, you can send me a message directly using the form
          below...
        </Typography>
      </Fade>
      <form action="" method="post">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Fade>
              <TextField
                fullWidth
                name="name"
                id="name"
                label="Name"
                required
              />
            </Fade>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Fade>
              <TextField
                fullWidth
                name="email"
                id="email"
                label="Email"
                type="email"
                required
              />
            </Fade>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Fade>
              <TextField fullWidth name="phone" id="phone" label="Phone" />
            </Fade>
          </Grid>
          <Grid item xs={12}>
            <Fade>
              <TextField
                fullWidth
                name="message"
                id="message"
                label="Message"
                multiline
                required
              />
            </Fade>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Fade>
              <Button
                color="secondary"
                endIcon={<Send />}
                variant="contained"
                size="large"
              >
                Send
              </Button>
            </Fade>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}

export default ContactForm
