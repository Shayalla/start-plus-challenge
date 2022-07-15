import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { loginUser } from '../services/users';

function FormLogin() {
  const [user, setUser] = useState({});
  const [isHidden, setIsHidden] = useState(true);
  const navigate = useNavigate();

  const handleChange = ({ name, value }) => {
    setUser({ ...user, [name]: value });
  };

  const login = async () => {
    const token = await loginUser(user);

    if (!token) {
      setIsHidden(false);
    } else {
      localStorage.setItem(
        'user',
        JSON.stringify(token),
      );
      console.log('tudo certo!!');
    };
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
      <button type="button" onClick={ login }>Entrar</button>
      <button type="button" onClick={ () => navigate('/register') }>Registrar-se</button>
      <div hidden={isHidden}>Usuário ou senha inválido</div>
    </form>
  )
};

export default FormLogin;