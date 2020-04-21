import React from "react"
import {
  Hidden,
  Toolbar,
  Box,
  Container,
  Grid,
  Typography,
  Button,
} from "@material-ui/core"
import { DirectionsRun } from "@material-ui/icons"
import { HeroImage } from "./image"
import { Link } from "react-scroll"

const SectionHome = () => {
  return (
    <>
      <Box
        id="home"
        minHeight="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        py={2}
      >
        <Hidden smUp>
          <Toolbar />
        </Hidden>
        <Container>
          <Grid container alignItems="center" justify="center">
            <Grid item xs={12} md={4}>
              <Box width="100%" align="center">
                <HeroImage />
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography
                variant="h2"
                variantMapping={{ h2: "h1" }}
                align="center"
              >
                Hello!
              </Typography>
              <Typography variant="subtitle1" align="center" paragraph>
                My name is David and I make apps, websites and cups of coffee*
                with code.
              </Typography>
              <Box align="center">
                <Link to="about" smooth={true}>
                  <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    startIcon={<DirectionsRun />}
                  >
                    Come and see more!
                  </Button>
                </Link>
              </Box>
              <Box mt={1} width="100%" display="block" textAlign="center">
                <Typography variant="caption" align="center">
                  *work in progress
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default SectionHome
