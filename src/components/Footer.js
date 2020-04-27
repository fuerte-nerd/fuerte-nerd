import React from "react"
import { Box, Container, Typography } from "@material-ui/core"
import { Fade } from "react-reveal"

const Footer = () => {
  return (
    <Box
      bgcolor="primary.main"
      color="#fff"
      boxShadow={3}
      py={4}
      align="center"
    >
      <Container>
        <Fade>
          <Typography variant="caption">
            All content &copy; 2020
            {new Date().getFullYear() === 2020
              ? null
              : `-${new Date().getFullYear()}`}
            {` `} David Andrews
          </Typography>
        </Fade>
      </Container>
    </Box>
  )
}

export default Footer
