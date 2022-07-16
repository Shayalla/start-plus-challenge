import React, { useContext } from 'react';
import Context from '../../context/Context';
import { createUser } from '../../services/users';
import Button from '../Button';
import Input from '../Input';

const FormRegister = () => {
  const { newUser, handleChangeRegister, login, navigate } = useContext(Context);

  const register = async () => {
    await createUser(newUser);
    await login(newUser);
    navigate('/');
  };

  return (
    <form>
      <Input
        type="text"
        name="fullName"
        placeholder="Nome Completo"
        onChange={ handleChangeRegister }
      />
      <Input
        type="text"
        name="username"
        placeholder="Usuário"
        onChange={ handleChangeRegister }
      />
      <Input
        type="email"
        name="email"
        placeholder="E-mail"
        onChange={ handleChangeRegister }
      />
      <Input
        type="tel"
        name="cellPhone"
        placeholder="Telefone"
        onChange={ handleChangeRegister }
      />
      <Input
        type="password"
        name="password"
        placeholder="Senha"
        onChange={ handleChangeRegister }
      />
      <Button onClick={ register } text="Registar" />
      <Button onClick={ () => navigate('/') } text="Cancelar" />
    </form>
  )
};

export default FormRegister;