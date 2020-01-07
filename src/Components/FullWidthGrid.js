import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabelPosition from './RadioBotton'
import CommonData from './CommonData'



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

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Fill the field below to register for CIBN 
          suceesfully for mentorship</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className={classes.paper3}>Membership application form</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper2}>
            {/* <Typography variant="h6" component="p">
              Please select the category you are signing up for
            </Typography> */}
            <FormControlLabelPosition />
            <CommonData />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
