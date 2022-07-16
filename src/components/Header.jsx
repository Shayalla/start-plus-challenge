import React from 'react';
import { useNavigate } from 'react-router';

function Header() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/')
  };
  
  return (
    <div>
      <h1>Bem-vindo!!! =D</h1>
      <button type="button" onClick={ logout }>Logout</button>
    </div>
  )
};

export default Header;