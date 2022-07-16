import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { firstAccessUser, loginUser } from '../services/users';
import { useNavigate } from 'react-router';

const Provider = ({ children }) => {
  const [newUser, setNewUser] = useState({});
  const [isHidden, setIsHidden] = useState(true);
  const navigate = useNavigate();

  // função para guardar novos dados no estado para o registro
  const handleChangeRegister = ({ target: { name, value } }) => {
    setNewUser({ ...newUser, [name]: value });
  };

  // verifica se é o primeiro login e direciona para a pagina adequada
  const isFirst = async (token) => {
    const { firstAccess } = await firstAccessUser(token);
    if (firstAccess) {
      navigate('/personal-info');
    } else {
      navigate('/home');
    }
  };

  // faz o login e guarda o token no local storage 
  const login = async (user) => {
    const token = await loginUser(user);

    if (!token) {
      setIsHidden(false);
    } else {
      localStorage.setItem('user', JSON.stringify({ token }));
    };
   isFirst(token);
  };
  
  const states = {
    newUser,
    isHidden,
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