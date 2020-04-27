import React from "react"
import { Typography, Button } from "@material-ui/core"
import Reveal from "./Reveal"

const AboutExternalLink = props => {
  return (
    <Reveal>
      <Typography variant="body2" paragraph>
        {props.intro}
      </Typography>
      <Button
        fullWidth
        style={{ maxWidth: 300 }}
        variant="contained"
        color="secondary"
        startIcon={props.icon}
        onClick={props.clickHandler}
        id={props.id}
      >
        {props.buttonText}
      </Button>
    </Reveal>
  )
}

export default AboutExternalLink
