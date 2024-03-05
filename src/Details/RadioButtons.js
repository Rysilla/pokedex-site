import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup() {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel style={{color: "white", fontWeight: "bold"}} value="female" control={<Radio style={{color: "white"}} />} label="Sort by ID"  />
        <FormControlLabel style={{color: "white", fontWeight: "bold"}} value="male" control={<Radio style={{color: "white"}}/>} label="Sort by Name"/>
      </RadioGroup>
    </FormControl>
  );
}