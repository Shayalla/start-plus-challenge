import React, { useContext } from 'react';
import Context from '../context/Context';
import { createUser } from '../services/users';

function FormRegister() {
  const { newUser, handleChangeRegister, login, navigate } = useContext(Context);

  const register = async () => {
    await createUser(newUser);
    await login(newUser);
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
          onChange={ ({target}) => handleChangeRegister(target) }
        />
      </label>
      <label htmlFor="username">
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Usuário"
          onChange={ ({target}) => handleChangeRegister(target) }
        />
      </label>
      <label htmlFor="email">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="E-mail"
          onChange={ ({target}) => handleChangeRegister(target) }
        />
      </label>
      <label htmlFor="cellPhone">
        <input
          type="tel"
          id="cellPhone"
          name="cellPhone"
          placeholder="Telefone"
          onChange={ ({target}) => handleChangeRegister(target) }
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Senha"
          onChange={ ({target}) => handleChangeRegister(target) }
        />
      </label>
      <button type="button" onClick={ register }>Registar</button>
      <button type="button" onClick={ navigate.goBack }>Cancelar</button>
    </form>
  )
};

export default FormRegister;