import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import CommonButton from './CommonButton'
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({

  dialog: {
      minWidth: 450,
     
  },
  dialogObj: {
    justifyContent: "space-between",
    padding:"22px"
  }
}));

export default function FormDialog() {
const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <CommonButton name='SIGN-UP' onClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose}  maxWidth="md" aria-labelledby="form-dialog-title">
        <DialogContent className={classes.dialog}>
            <TextField
                autoFocus
                margin="dense"
                variant="outlined"
                id="name"
                label="Email / Membership Number"
                placeholder="Enter email address or membership number"
                type="email"
                fullWidth
            />
        </DialogContent>
        <DialogActions className={classes.dialogObj} >
        <CommonButton name='Back' onClick={handleClose} bgColor='grey'  />
        <CommonButton name='Proceed' href="/signUp" />
        </DialogActions>
      </Dialog>
    </div>
  );
}
