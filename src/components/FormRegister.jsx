import React from 'react';
import { useNavigate } from 'react-router';

function FormRegister() {
  const navigate = useNavigate();

  return (
    <form>
      <label htmlFor="name">
        <input type="text" id="name" placeholder="Nome Completo"/>
      </label>
      <label htmlFor="username">
        <input type="text" id="username" placeholder="Usuário"/>
      </label>
      <label htmlFor="email">
        <input type="email" id="email" placeholder="E-mail"/>
      </label>
      <label htmlFor="cellPhone">
        <input type="tel" id="cellPhone" placeholder="Telefone"/>
      </label>
      <label htmlFor="password">
        <input type="password" id="password" placeholder="Senha"/>
      </label>
      <button type="button">Registar</button>
      <button type="button" onClick={ () => navigate('/') }>Cancelar</button>
    </form>
  )
};

export default FormRegister;