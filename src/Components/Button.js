import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    root: {
        background: 'linear-gradient(45deg, #376b53 30%, #3a7936 90%)',
        border: 0,
        borderRadius: 4,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
        marginLeft: theme.spacing(45),
        },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  textField: {
   
    width:'90vh'
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  Button: {
    background: 'linear-gradient(45deg, #376b53 30%, #3a7936 90%)',
    border: 0,
    borderRadius: 5,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
 
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <Button variant="outlined" color="inherit" className={classes. menuButton} onClick={handleOpen}>
                    sign-up
        </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">
            
      
     
      <TextField
        id="outlined-with-placeholder"
        label="Email / Membership Number"
        placeholder="Enter email address or membership number"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      
  
            </h2>
            <div id="transition-modal-description">
            <Link to='/'>
            <Button className={classes.Button} >
              Back
            </Button>
            </Link>
            <Link to='/signUP'>
            <Button  className={classes.root}>
              Proceed
            </Button>
            </Link>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
