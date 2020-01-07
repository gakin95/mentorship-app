import 'date-fns';
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Grid from '@material-ui/core/Grid';
import CommonButton from './CommonButton'
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const BootstrapInput = withStyles(theme => ({
  root: {
    
    'label + &': {
      marginTop: theme.spacing(6),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
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
    width:'30%',
    
  },
  picker:{
    justifyContent:'flex-start',
    margin: theme.spacing(1),
    width:'30%',
    justifyC:"space-around"
  },
  button: {
    background: 'linear-gradient(45deg, #9ca762 30%, #63a21df0 90%)',
    border: 0,
    borderRadius: 4,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    width: '21%'
  },
}));

  export default function NewSchedule() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = 
  React.useState(new Date('2019-10-12T21:11:54'));
  const classes = useStyles();
  const [mentor, setMentor] = React.useState('');
  const handleChange = event => {
    setMentor(event.target.value);
  };
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <Grid >
      <form className={classes.root} autoComplete="off">
      <Grid container>
        <Grid xs={12}>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="age-customized-select">
          Select Mentor</InputLabel>
        <Select
          value={mentor}
          onChange={handleChange}
          input={<BootstrapInput name="age"
           id="age-customized-select" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Tolu David</MenuItem>
          <MenuItem value={2}>Bode Bankole</MenuItem>
          <MenuItem value={3}>Kehinde Durojaiye</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      </Grid>
    
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container className={classes.picker}>
        <Grid xs={12} md={12}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Set Date"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container className={classes.picker}>
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Set Time"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
    <Grid container>
    <Grid xs={12}>
    <FormControl className={classes.margin}>
        <InputLabel htmlFor="age-customized-input">Topic</InputLabel>
        <BootstrapInput id="age-customized-input"
        placeholder='Enter text here' />
    </FormControl>
    </Grid>
    </Grid>
    <Grid container>
    <Grid xs={12}>
    <FormControl className={classes.margin}>
        <TextareaAutosize aria-label="minimum height" 
        rows={5} placeholder='Enter a note of  1-100 characters' />
    </FormControl>
    </Grid>
    </Grid>
    <Grid container style={{justifyContent:'flex-end'}}>
    <Grid>
    <CommonButton name='Set Schedule'  />
    </Grid>
    </Grid>
    </form>
    </Grid>
    
  );
}
