import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import Context from '../context/Context';

function FormLogin() {
  const { isHidden, login } = useContext(Context);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleChange = ({ name, value }) => {
    setUser({ ...user, [name]: value });
  };

  return (
    <form>
      <label htmlFor="login">
        <input
          type="text"
          id="login"
          placeholder="e-mail"
          name="email"
          onChange={ ({target}) => handleChange(target) }
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          id="password"
          placeholder="senha"
          name="password"
          onChange={ ({target}) => handleChange(target) }
        />
      </label>
      <button type="button" onClick={ () => login(user) }>Entrar</button>
      <button type="button" onClick={ () => navigate('/register') }>Registrar-se</button>
      <div hidden={isHidden}>Email e/ou senha inválidos</div>
    </form>
  )
};

export default FormLogin;