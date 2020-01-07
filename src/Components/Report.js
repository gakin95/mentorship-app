import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import MiniDrawer from './DashBoard'
import CommonButton from './CommonButton'


const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(5),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    width:'100%',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
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
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

  const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
    marginLeft: theme.spacing(6),
    width:'50%', 
  },
  grid: {
    backgroundColor: theme.palette.background.paper,
  }
 
}));

  export default function Report() {
  const classes = useStyles();
  return (
    <MiniDrawer name='Report'>
    <Grid container spacing={2} className={classes.grid}>
    <form className={classes.root} autoComplete="off">
    <Grid sm={12}>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="age-customized-input">
          Learning Objectives</InputLabel>
        <BootstrapInput id="age-customized-input" 
        placeholder="Learning Objectives" />
      </FormControl>
    </Grid>
    <Grid sm={12}>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="age-customized-input">
          Learning Goals</InputLabel>
        <BootstrapInput id="age-customized-input" 
        placeholder="Learning Goals" />
      </FormControl>
    </Grid>
    <Grid sm={12}>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="age-customized-input">
          Summary of Discision</InputLabel>
        <BootstrapInput id="age-customized-input"
        placeholder="Summary of Discision" />
      </FormControl>
    </Grid>
    <Grid sm={12}>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="age-customized-input">
          Learning Outcome</InputLabel>
        <BootstrapInput id="age-customized-input"
        placeholder="Learning Outcome" />
      </FormControl>
    </Grid>
    <Grid container className={classes.margin} style={{justifyContent:'flex-end'}}>
    <CommonButton name='Cancel'  bgColor='grey' />
    <CommonButton name='Send Report' />
    </Grid>
    </form>
    </Grid>
    </MiniDrawer>
  );
}
