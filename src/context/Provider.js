import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { loginUser } from '../services/users';

function Provider({ children }) {
  const [newUser, setNewUser] = useState({});
  const [isHidden, setIsHidden] = useState(true);

  const handleChangeRegister = ({ name, value }) => {
    setNewUser({ ...newUser, [name]: value });
  };

  const login = async (user) => {
    const token = await loginUser(user);

    if (!token) {
      setIsHidden(false);
    } else {
      localStorage.setItem(
        'user',
        JSON.stringify(token),
      );
      console.log('tudo certo!!');
    };
  };
  
  const states = {
    newUser,
    isHidden,
    handleChangeRegister,
    login
  };

  return (
    <Context.Provider value={states}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;