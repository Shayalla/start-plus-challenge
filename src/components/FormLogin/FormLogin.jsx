import React, { useContext, useState } from 'react';
import Context from '../../context/Context';
import Button from '../Button';
import Input from '../Input';

const FormLogin = () => {
  const { isHidden, login, navigate } = useContext(Context);
  const [user, setUser] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  return (
    <form>
      <Input
        type="email"
        name="email"
        placeholder="email"
        onChange={ handleChange }
      />
      <Input
        type="password"
        name="password"
        placeholder="senha"
        onChange={ handleChange }
      />
      <Button onClick={ () => login(user) } text="Entrar" />
      <Button onClick={ () => navigate('/register') } text="Cadastrar" />
      <p hidden={isHidden}>Email e/ou senha inválidos</p>
    </form>
  )
};

export default FormLogin;