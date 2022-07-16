import React, { useContext } from 'react';
import Context from '../context/Context';
import { updateUser } from '../services/users';
import comboBoxs from '../utils/comboBoxs';
import Button from './Button';
import Input from './Input';
import Select from './Select';

const FormPersonalInfo = () => {
  const { newUser, handleChangeRegister, setIsFirstAccess, navigate } = useContext(Context);

  const completeRegister = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    await updateUser(newUser, token);
    setIsFirstAccess(false);
    navigate('/home');
  };

  return (
    <div>
      <Input
        type="number"
        name="rg"
        placeholder="RG"
        onChange={ handleChangeRegister }
      />
      <Input
        type="number"
        name="cpf"
        placeholder="CPF"
        onChange={ handleChangeRegister }
      />
      <Input
        type="text"
        name="nationality"
        placeholder="Nacionalidade"
        onChange={ handleChangeRegister }
      />
      <Select
        name="gender"
        first="Gênero"
        data={ comboBoxs.genero }
        onChange={ handleChangeRegister }
      />
      <Select
        name="maritalStatus"
        first="Estado Civil"
        data={ comboBoxs.estadoCivil }
        onChange={ handleChangeRegister }
      />
      <Select
        name="skinColor"
        first="Cor da pele"
        data={ comboBoxs.corDaPele }
        onChange={ handleChangeRegister }
      />
      <Select
        name="schooling"
        first="Escolaridade"
        data={ comboBoxs.escolaridade }
        onChange={ handleChangeRegister }
      />
      <Button onClick={ completeRegister } text="Completar Cadastro" />
    </div>
  )
};

export default FormPersonalInfo;