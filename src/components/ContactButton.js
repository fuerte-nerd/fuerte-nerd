import React from "react"
import { Button } from "@material-ui/core"
import { Fade } from "react-reveal"

const ContactButton = props => {
  return (
    <Fade>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        startIcon={props.icon}
        fullWidth
        onClick={props.clickHandler}
        id={props.id}
      >
        {props.label}
      </Button>
    </Fade>
  )
}

export default ContactButton
