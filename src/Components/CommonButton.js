import React from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    lineHeight: 1.5,
    backgroundColor: '#00b84a',
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
    '&:hover': {
      backgroundColor: '#4caf50',
      border: '1px solid',
      borderColor: '#ffffff',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#409462',
      borderColor: 'white',
    },
    '&:focus': {
      boxShadow: '#ffffff',
    },
  },
})(Button);


  const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));
;

  export default function CustomizedButtons(props) {
  const classes = useStyles();

  return (
    <div>
      <BootstrapButton variant="contained"
      style={{backgroundColor:props.bgColor,color:props.textColor,border:props.border} }
      color="primary" disableRipple 
      href ={props.href}
      onClick={props.onClick}
      className={classes.margin}>
        {props.name}
      </BootstrapButton>
    </div>
  );
}

CustomizedButtons.defaultProps = {
  backgroundColor: '#00b84a',
  color:'white',
}
