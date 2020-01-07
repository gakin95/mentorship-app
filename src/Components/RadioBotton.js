import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Link } from 'react-router-dom';

export default function FormControlLabelPosition() {
  const [value, setValue] = React.useState('mentee');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Please select the category you are signing up for</FormLabel>
      <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
        <Link to='/signUP'>
        <FormControlLabel
          value="mentee"
          control={<Radio color="black" />}
          label="Mentee"
          labelPlacement="end"
        />
        </Link>
        <Link to='/sign'>
        <FormControlLabel
          value="mentor"
          control={<Radio color="black" />}
          label="Mentor"
          labelPlacement="end"
        />
        </Link>
      </RadioGroup>
    </FormControl>
  );
}
