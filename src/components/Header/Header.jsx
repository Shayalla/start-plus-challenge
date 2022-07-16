import React from 'react';
import { useNavigate } from 'react-router';
import Button from '../Button';

const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/')
  };
  
  return (
    <div>
      <h1>Bem-vindo!!! =D</h1>
      <Button onClick={ logout } text="Logout" />
    </div>
  )
};

export default Header;