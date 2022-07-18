import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SelectForm = ({ name, onChange, first, data }) => {
  return ( 
    <FormControl variant="standard" fullWidth>
      <InputLabel>{first}</InputLabel>
      <Select
        margin="dense"
        name={ name }
        onChange={ onChange }
      >
        {data.map((opt, index) => (
          <MenuItem value={ opt } key={ index }>{opt}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
};

SelectForm.propTypes = ({
  name: PropTypes.string,
  onChange: PropTypes.func,
  first: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.string),
}).isRequired;

export default SelectForm;