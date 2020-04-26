import React, { useEffect } from "react"
import { connect } from "react-redux"
import { setSmoothScroll } from "../redux/actions"
import {
  Hidden,
  Toolbar,
  Box,
  Container,
  Typography,
  Button,
} from "@material-ui/core"

import { DirectionsRun } from "@material-ui/icons"
import { HeroImage } from "./image"
import { Link, Events } from "react-scroll"

const SectionHome = props => {
  useEffect(() => {
    Events.scrollEvent.register("begin", () =>
      props.dispatch(setSmoothScroll(true))
    )
    Events.scrollEvent.register("end", () =>
      props.dispatch(setSmoothScroll(false))
    )
  }, [])
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
        boxShadow={3}
      >
        <Hidden smUp>
          <Toolbar />
        </Hidden>
        <Container>
          <Box width="100%" align="center">
            <HeroImage />
          </Box>
          <Box mt={2}>
            <Typography variant="h2" align="center">
              Hola!
            </Typography>
          </Box>
          <Typography variant="subtitle1" align="center" paragraph>
            My name is David and I make apps, websites and cups of coffee* with
            code.
          </Typography>
          <Box align="center">
            <Link to="about" smooth={true}>
              <Button
                variant="contained"
                size="large"
                color="secondary"
                startIcon={<DirectionsRun />}
              >
                Come inside!
              </Button>
            </Link>
          </Box>
          <Box mt={1} width="100%" display="block" textAlign="center">
            <Typography variant="caption" align="center">
              *work in progress
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default connect()(SectionHome)
