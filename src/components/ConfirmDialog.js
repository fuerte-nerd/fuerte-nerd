import React from "react"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core"

const ConfirmDialog = props => {
  return (
    <Dialog open={true}>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions>
        <Button></Button>
        <Button></Button>
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmDialog
