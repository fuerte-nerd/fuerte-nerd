import React from "react"
import {
  TextField,
  Box,
  Container,
  Grid,
  Typography,
  Button,
} from "@material-ui/core"
import { DirectionsRun } from "@material-ui/icons"
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
        <form action="" method="post">
          <Grid container spacing={3} alignContent="center">
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
            <Grid item xs={12}>
              <Button variant="contained">Send</Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  )
}

export default SectionContact
