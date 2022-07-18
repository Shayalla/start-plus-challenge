import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const Input = ({ name, onChange, placeholder, type='text' }) => {
  return (
    <TextField
      variant="standard"
      margin="dense"
      required
      fullWidth
      type={ type }
      label={ placeholder }
      name={ name }
      autoComplete="email"
      autoFocus
      onChange={ onChange }
    />
  )
};

Input.propTypes = ({
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string
}).isRequired;

export default Input;
