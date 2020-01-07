import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CommonButton from './CommonButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AlertDialogSlide from './MenteeButton'
import MaterialUIPickers from './DatePicker'



const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width:'91%'
  },
  textField: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  root: {
    background: 'linear-gradient(45deg, #376b53 30%, #3a7936 90%)',
    border: 0,
    borderRadius: 4,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    // padding: '0 30px',
    
   },
  Button: {
    background: 'linear-gradient(45deg, #1b1a1a 30%, #a55c1366 90%)',
    border: 0,
    borderRadius: 4,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    // padding: '0 30px',
  },
  dialog: {
      minWidth: 450,
     
  },
  dialogObj: {
    display: "flex",
    justifyContent: "space-between",
    padding:"22px"
  }
}));

export default function MenteeInterest() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Grid container >
        <Grid md='4' >
          <TextField
            fullWidth
            id="filled-name"
            label="interest 1"
            className={classes.textField}
            margin="normal"
            variant="filled"
          />
        </Grid>
      </Grid>

      <Grid container >
        <Grid md='4'  >
          <TextField
            fullWidth
            id="filled-name"
            label="interest 2"
            className={classes.textField}
            margin="normal"
            variant="filled"
          />
        </Grid>
      </Grid>

      <Grid container >
        <Grid md='4'  >
          <TextField
            fullWidth
            id="filled-name"
            label="Area of specialization"
            placeholder="Not more than 100 charcters"
            className={classes.textField}
            margin="normal"
            variant="filled"
          />
        </Grid>
      </Grid>
      <Grid container className={classes.dialogObj}>
        <Grid sm={12}>
        <div className={classes.dialogObj} >
        <CommonButton name='Cancel' bgColor='#A52A2A' href="/" /> 
          <AlertDialogSlide />
        </div>
      </Grid>
    </Grid>
    </form>
  );
}

