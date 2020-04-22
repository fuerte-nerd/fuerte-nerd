import React from "react"
import { Box, Container, Grid, Typography, Button } from "@material-ui/core"
import { DirectionsRun } from "@material-ui/icons"
import { HeroImage } from "./image"

const SectionProjects = () => {
  return (
    <Box
      py={4}
      id="projects"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container>
        <Box>
          <Typography variant="h2">My Work</Typography>
          <Typography variant="subtitle1">
            Here you will find a selection of my work ranging from SPAs (Single
            Page Applications) to websites (and more!)...
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default SectionProjects
