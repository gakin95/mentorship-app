import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import baby from '../baby.png'
import CustomizedInputs from './Signinform'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color:'white',
    borderRadius:'none',
    background:'hsl(144, 100%, 12%)',
    height:'86vh',
    '& h3':{
     marginTop: '40%',
    },
  },

  paper2: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius:'none',
    height:'86vh',
    backgroundImage: `url(${baby})`,
    backgroundSize:'cover',
    
  },
}));

export default function LoginGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper}>
              <h3>LOGIN</h3>
              <p>Enter your username and password</p>
              <CustomizedInputs />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <Paper className={classes.paper2}></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
