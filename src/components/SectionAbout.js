import React from "react"
import { Box, Container, Grid, Typography, Button } from "@material-ui/core"
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
      <Container>About</Container>
    </Box>
  )
}

export default SectionAbout
