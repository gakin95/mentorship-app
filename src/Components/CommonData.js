import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MaterialUIPickers from './DatePicker'

const titles = [
  {
    value: 'gender',
    label: 'Mr',
  },
  {
    value: 'gender',
    label: 'Mrs',
  },
  {
    value: 'BTC',
    label: 'Pastor',
  },
  {
    value: 'JPY',
    label: 'DR',
  },
];

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    width:'30%'
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

export default function CommonData() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    age: '',
    multiline: 'Controlled',
    title: 'gender',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
       <TextField
        id="filled-full-width"
        label="Membership number"
        style={{ margin: 8 }}
        placeholder="Enter your membership number"
        fullWidth
        margin="normal"
        variant="filled"
        InputLabelProps={{
          shrink: true,
        }}
      />
       <TextField
        id="filled-select-title"
        select
        label="Title"
        className={classes.textField}
        value={values.titles}
        onChange={handleChange(titles)}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Please select your title"
        margin="normal"
        variant="filled"
      >
        {titles.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      
      <TextField
        id="filled-name"
        label="FirstName"
        className={classes.textField}
        margin="normal"
        variant="filled"
      />
      <TextField
        id="filled-name"
        label="LastName"
        name="lastname"
        className={classes.textField}
        onChange={handleChange('lastname')}
        margin="normal"
        variant="filled"
      />
      <TextField
        id="filled-email-input"
        label="Email"
        className={classes.textField}
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="filled"
      />
      <TextField
        id="filled-number"
        type="phone"
        label="Number"
        onChange={handleChange('num')}
        className={classes.textField}
        margin="normal"
        variant="filled"
      />
      <TextField
        id="filled-name"
        type="date"
        // label="Date of Birth"
        className={classes.textField}
        onChange={handleChange('date')}
        margin="normal"
        variant="filled"
      />
      {/* <MaterialUIPickers /> */}
       <TextField
        id="filled-address"
        label="Address"
        className={classes.textField}
        onChange={handleChange('addressname')}
        margin="normal"
        variant="filled"
      />
       <TextField
        id="filled-sex"
        label="Sex"
        className={classes.textField}
        onChange={handleChange('sex')}
        margin="normal"
        variant="filled"
      />
       <TextField
        id="filled-organization"
        label="Organization"
        className={classes.textField}
        onChange={handleChange('organization')}
        margin="normal"
        variant="filled"
      />
      <TextField
        id="filled-password-input"
        label="Password"
        className={classes.textField}
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="filled"
      />
      <TextField
        id="filled-password-input"
        label="Re-type Password"
        className={classes.textField}
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="filled"
      />
     
      
    </form>
  );
}

