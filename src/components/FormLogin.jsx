import React from 'react';
import { useNavigate } from 'react-router';

function FormLogin() {
  const navigate = useNavigate();
  return (
    <form>
      <label htmlFor="login">
        <input type="text" id="login" placeholder="usuário"/>
      </label>
      <label htmlFor="password">
        <input type="password" id="password" placeholder="senha"/>
      </label>
      <button type="button">Entrar</button>
      <button type="button" onClick={ () => navigate('/register') }>Registrar-se</button>
    </form>
  )
};

export default FormLogin;