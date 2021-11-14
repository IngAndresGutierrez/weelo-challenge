/* import external modules */
import { useState } from 'react'
import {
  Button,
  Dialog,
  IconButton,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from '@material-ui/core'

/** @description This is a functional component for generic alert dialog
 *  @version 1.0.0
 *  @since 11/14/2021
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name AlertDialog
 *  @returns {Component} Returns the alert dialog component
 **/

const AlertDialog = ({ title, children, contentText, iconOpenButton }) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      {!iconOpenButton && (
        <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
          Open alert dialog
        </Button>
      )}
      {iconOpenButton && (
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleClickOpen}
          aria-label="account of current user"
          data-cy="openDialogButton"
        >
          {iconOpenButton}
        </IconButton>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {contentText}
          </DialogContentText>
          {children}
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            color="primary"
            variant="contained"
            onClick={handleClose}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export default AlertDialog
