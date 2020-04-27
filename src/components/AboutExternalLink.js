import React from "react"
import { Typography, Button } from "@material-ui/core"

const AboutExternalLink = props => {
  return (
    <>
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
    </>
  )
}

export default AboutExternalLink
