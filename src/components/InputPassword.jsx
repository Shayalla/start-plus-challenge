import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const InputPassword = ({ name, onChange, placeholder, type='text' }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <TextField
      variant="standard"
      margin="dense"
      required
      fullWidth
      type={ !showPassword ? 'password' : 'text' }
      label={ placeholder }
      name={ name }
      autoComplete="email"
      autoFocus
      onChange={ onChange }
      InputProps={{
        endAdornment: type === 'password' ? (
          <InputAdornment position="end">
            <IconButton
              onClick={handleClick}
              edge="end"
            >
              {!showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ) : null}}
    />
  )
};

InputPassword.propTypes = ({
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string
}).isRequired;

export default InputPassword;
