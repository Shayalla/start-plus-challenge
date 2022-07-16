import React, { useContext } from 'react';
import Context from '../context/Context';
import { useNavigate } from 'react-router';
import { createUser } from '../services/users';

function FormRegister() {
  const { newUser, handleChangeRegister, login } = useContext(Context);
  const navigate = useNavigate();

  console.log(newUser);
  const register = async () => {
    await createUser(newUser);
    await login(newUser);
    console.log(newUser);
    navigate('/personal-information');
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
      <button type="button" onClick={ () => navigate('/') }>Cancelar</button>
    </form>
  )
};

export default FormRegister;