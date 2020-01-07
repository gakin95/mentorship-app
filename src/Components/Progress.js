import React from 'react';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten('#d1d1d1', 0.5),
    borderRadius:4,
  },
  bar: {
    borderRadius: 20,
    background: 'hsl(144, 100%, 21%)',
  },
})(LinearProgress);



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    paddingLeft:theme.spacing(8),
    paddingRight:theme.spacing(8),
  },
  root1: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root1}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <span style={{color:"blue"}}>Profile updated status 75%</span>
          <div className={classes.root}>
      <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="secondary"
        value={75}
      />
      <span>You need to update your profile to be able to send requst</span>
    </div>
      </Paper>
      </Grid>
      </Grid>
    </div>
  );
}
