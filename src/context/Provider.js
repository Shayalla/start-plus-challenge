import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { firstAccessUser, loginUser } from '../services/users';
import { useNavigate } from 'react-router';

function Provider({ children }) {
  const [newUser, setNewUser] = useState({});
  const [isHidden, setIsHidden] = useState(true);
  const [isFirstAccess, setIsFirstAccess] = useState(false);
  const navigate = useNavigate();

  const handleChangeRegister = ({ name, value }) => {
    setNewUser({ ...newUser, [name]: value });
  };

  const login = async (user) => {
    const { token } = await loginUser(user);
    const { firstAccess } = await firstAccessUser(token);
    setIsFirstAccess(firstAccess);
    if (!token) {
      setIsHidden(false);
    } else {
      localStorage.setItem(
        'user',
        JSON.stringify({ token }),
      );
    //   console.log('tudo certo!!');
    };
    navigate('/home');
  };
  
  const states = {
    newUser,
    isHidden,
    isFirstAccess,
    setIsFirstAccess,
    handleChangeRegister,
    login,
    navigate
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