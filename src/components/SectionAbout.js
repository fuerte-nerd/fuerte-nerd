import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
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
              <GridListTile>{GridImage1}</GridListTile>
              <GridListTile>{GridImage2}</GridListTile>
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
