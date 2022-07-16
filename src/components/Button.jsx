import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, text }) =>{ 
  return (
    <button
      onClick={ onClick }
      type="button"
    >
      { text }
    </button>
  )
};

Button.propTypes = ({
  onClick: PropTypes.func,
  text: PropTypes.anystring,
}).isRequired;

export default Button;
