import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, onChange, placeholder, type }) => {
  return (
    <label htmlFor={ name }>
      <input
        type={ type }
        id={ name }
        name={ name }
        onChange={ onChange }
        placeholder={ placeholder }
        />
    </label>
  )
};

Input.propTypes = ({
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
}).isRequired;

export default Input;
