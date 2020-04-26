import React from "react"
import { connect } from "react-redux"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core"

const ConfirmDialog = props => {
  const handleClick = e => {
    //do something
  }
  return (
    <Dialog open={props.confirmDialog.isOpen}>
      <DialogTitle>{props.confirmDialog.title}</DialogTitle>
      <DialogContent>{props.confirmDialog.text}</DialogContent>
      <DialogActions>
        <Button onClick={handleClick} id="no">
          {props.confirmDialog.n}
        </Button>
        <Button onClick={handleClick} id="yes">
          {props.confirmDialog.y}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

const mapStateToProps = state => ({
  confirmDialog: state.confirmDialog,
})

export default connect(mapStateToProps)(ConfirmDialog)
