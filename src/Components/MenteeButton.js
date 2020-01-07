import React from 'react';
import CommonButton from './CommonButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';
import Slide from '@material-ui/core/Slide';
import Avatar from '@material-ui/core/Avatar';
import cibn from '../cibn.png'

const useStyles = makeStyles(theme => ({


    dialogObj: {
      justifyContent: "center",
    },
    dialogImg: {
      justifyContent: 'center',
      display: 'flex',
      padding: '4%'
    }
  }));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
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
      <CommonButton name='Submit'  onClick={handleClickOpen} /> 
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <div className={classes.dialogImg}>
          <img src={cibn} />
          </div> 
          <DialogContentText id="alert-dialog-slide-description">
            <h3>Please check your Email for confirmation</h3>
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.dialogObj}>
        <CommonButton name='Continue'  href="/login" /> 
        </DialogActions>
       </Dialog>
    </div>
  );
}
