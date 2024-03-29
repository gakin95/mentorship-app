import React from 'react';
import { fade, withStyles, makeStyles} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import FormDialog from './forgotPasswordModal'
import CommonButton from './CommonButton'


const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

 const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: "center"
  },
  margin: {
    margin: theme.spacing(1),
  },
    
 
}));

 export default function CustomizedInputs() {
  const classes = useStyles();

  return (
    <div>
    <form className={classes.root} noValidate> 
      <FormControl className={classes.margin}>
        
        {/* <InputLabel shrink htmlFor="bootstrap-input">
          Username
        </InputLabel> */}
        <BootstrapInput  id="bootstrap-input" placeholder='UserName'/>
        
        <InputLabel shrink htmlFor="bootstrap-input2">
       
        </InputLabel>
        <BootstrapInput id="bootstrap-input2" type='password' placeholder='Password' />
      </FormControl>
    </form>
    <FormDialog />
    <CommonButton name='Login' href="/tita" />
    </div>
  );
}
