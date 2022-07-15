import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { createUser } from '../services/users';

function FormRegister() {
  const [newUser, setNewUser] = useState({});
  const navigate = useNavigate();

  const handleChange = ({ name, value }) => {
    setNewUser({ ...newUser, [name]: value });
  };

  const register = async () => {
    await createUser(newUser);
    navigate('/');
  };

  return (
    <form>
      <label htmlFor="name">
        <input
          type="text"
          id="name"
          name="fullName"
          placeholder="Nome Completo"
          onChange={ ({target}) => handleChange(target) }
        />
      </label>
      <label htmlFor="username">
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Usuário"
          onChange={ ({target}) => handleChange(target) }
        />
      </label>
      <label htmlFor="email">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="E-mail"
          onChange={ ({target}) => handleChange(target) }
        />
      </label>
      <label htmlFor="cellPhone">
        <input
          type="tel"
          id="cellPhone"
          name="cellPhone"
          placeholder="Telefone"
          onChange={ ({target}) => handleChange(target) }
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Senha"
          onChange={ ({target}) => handleChange(target) }
        />
      </label>
      <button type="button" onClick={ register }>Registar</button>
      <button type="button" onClick={ () => navigate('/') }>Cancelar</button>
    </form>
  )
};

export default FormRegister;