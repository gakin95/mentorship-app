import React from 'react';
import Button from '@material-ui/core/Button';
import CommonButton from './CommonButton'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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
      <Button style={{color:"yellow",textTransform:'lowercase',marginLeft:'22%'}} 
        onClick={handleClickOpen}>
        forgot password?
      </Button>
      <Dialog open={open} onClose={handleClose}  maxWidth="md" aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Provide email address below</DialogTitle>
        <DialogContent className={classes.dialog}>
          <TextField
            autoFocus
            margin="dense"
            variant="outlined"
            id="name"
            label="Email"
            placeholder="Enter email address "
            type="email"
            fullWidth
            />
        </DialogContent>
        <DialogActions className={classes.dialogObj} >
          <CommonButton name='Back' bgColor='hsl(204, 51%, 79%)' onClick={handleClose} />
          <CommonButton name='Proceed'  />
        </DialogActions>
      </Dialog>
    </div>
  );
}
