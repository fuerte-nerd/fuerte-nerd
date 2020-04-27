import React from "react"
import { Button } from "@material-ui/core"
import Reveal from "./Reveal"

const ContactButton = props => {
  return (
    <Reveal>
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
    </Reveal>
  )
}

export default ContactButton
