import React from "react"
import {
  Box,
  Container,
  Grid,
  GridList,
  GridListTile,
  Typography,
  Button,
} from "@material-ui/core"
import { DirectionsRun } from "@material-ui/icons"
import { HeroImage } from "./image"

const SectionAbout = () => {
  return (
    <Box
      id="about"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor="secondary.main"
    >
      <Container>
        <Grid container>
          <Grid item>
            <GridList>
              <GridListTile></GridListTile>
              <GridListTile></GridListTile>
              <GridListTile></GridListTile>
              <GridListTile></GridListTile>
              <GridListTile></GridListTile>
            </GridList>
          </Grid>
          <Grid item>This is the writing part</Grid>
        </Grid>
        About
      </Container>
    </Box>
  )
}

export default SectionAbout
