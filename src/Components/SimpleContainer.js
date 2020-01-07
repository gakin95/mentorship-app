import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ButtonAppBar from './Navbar'
import { makeStyles } from '@material-ui/core/styles';
import Background from './Background'



const useStyles = makeStyles(theme => ({
  root: {
   height:"100vh"
  },
 
}));

export default function SimpleContainer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <ButtonAppBar showButton={true} />
    <Background />
    </div>
  );
}