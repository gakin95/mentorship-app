import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabelPosition from './RadioBotton'
import MenteeInterest from './MenteeInterest'
import TextField from '@material-ui/core/TextField'



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'flex-end',
    color: theme.palette.text.secondary,
    margin: theme.spacing(3)
  },
  paper2: {
    padding: theme.spacing(1),
    textAlign: '',
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    borderRadius:0
  },
  paper3: {
    background: 'brown',
    padding: theme.spacing(1),
    textAlign: '',
    color: 'white',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    borderRadius:0
  }
}));

export default function Mentee() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className={classes.paper3}>Area of Interest</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper2}>
            <MenteeInterest />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
