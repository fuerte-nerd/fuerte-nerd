import React from "react"
import { Button } from "@material-ui/core"

const ContactButton = props => {
  return (
    <Button
      color="secondary"
      variant="contained"
      size="large"
      startIcon={<Phone />}
      fullWidth
      onClick={props.clickHandler}
      id={props.id}
    >
      {props.label}
    </Button>
  )
}

export default ContactButton
