import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ name, onChange, first, data }) => {
  return (
    <select name={ name } onChange={ onChange }>
      <option defaultValue="" selected disabled>{first}</option>
      {data.map((opt, index) => (
        <option value={ opt } key={ index }>{opt}</option>
      ))}
    </select> 
  )
};

Select.propTypes = ({
  name: PropTypes.string,
  onChange: PropTypes.func,
  first: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.string),
}).isRequired;

export default Select;