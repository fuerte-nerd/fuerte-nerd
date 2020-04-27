import React from "react"
import { Box, Typography, Divider } from "@material-ui/core"

const SectionHeading = props => {
  return (
    <Box mb={2}>
      <Typography variant="h2">{props.title}</Typography>
      <Divider style={{ marginBottom: 10 }} />
      <Typography variant="h5">{props.subtitle}</Typography>
    </Box>
  )
}

export default SectionHeading
