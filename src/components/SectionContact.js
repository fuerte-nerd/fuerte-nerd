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
          <Grid container>
            <Grid item>
              <TextField />
            </Grid>
            <Grid item>
              <TextField />
            </Grid>
            <Grid item>
              <TextField />
            </Grid>
            <Grid item>
              <Button />
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  )
}

export default SectionContact
