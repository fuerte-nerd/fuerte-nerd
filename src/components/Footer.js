import React from "react"
import { Box, Container, Typography } from "@material-ui/core"

const Footer = () => {
  return (
    <Box py={4} align="center">
      <Container>
        <Typography variant="caption">
          All content &copy; 2020
          {new Date().getFullYear() === 2020
            ? null
            : `-${new Date().getFullYear()}`}
          {` `} David Andrews
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
