import React from "react"
import { Box, Typography, Grid, TextField, Button } from "@material-ui/core"
import { Send } from "@material-ui/icons"

const ContactForm = () => {
  return (
    <Box>
      <Typography align="justify">
        If you would prefer, you can send me a message directly using the form
        below...
      </Typography>
      <form action="" method="post">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <TextField fullWidth name="name" id="name" label="Name" required />
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
    </Box>
  )
}

export default ContactForm
