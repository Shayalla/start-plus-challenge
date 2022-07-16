import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { firstAccessUser, loginUser } from '../services/users';
import { useNavigate } from 'react-router';

const Provider = ({ children }) => {
  const [newUser, setNewUser] = useState({});
  const [isHidden, setIsHidden] = useState(true);
  const [isFirstAccess, setIsFirstAccess] = useState(false);
  const navigate = useNavigate();

  // função para guardar novos dados no estado para o registro
  const handleChangeRegister = ({ target: { name, value } }) => {
    setNewUser({ ...newUser, [name]: value });
  };

  // faz o login e guarda o token no local storage 
  const login = async (user) => {
    const token = await loginUser(user);
    console.log(token);
    if (!token) {
      setIsHidden(false);
    } else {
      localStorage.setItem('user', JSON.stringify({ token }));
    };
    const isFirst = await firstAccessUser(token);
    setIsFirstAccess(isFirst.firstAccess);
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