import React, { useContext } from 'react';
import Context from '../context/Context';
import { updateUser } from '../services/users';

function FormPersonalInfo() {
  const { newUser, handleChangeRegister, setIsFirstAccess, navigate } = useContext(Context);

  const completeRegister = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    await updateUser(newUser, token);
    setIsFirstAccess(false);
    navigate('/home');
    console.log('registrado');
  };

  console.log(newUser);
  return (
    <div>
      <label htmlFor="rg">
        <input type="number" id="rg" name="rg" placeholder="RG" onChange={ ({ target }) => handleChangeRegister(target) } />
      </label>
      <label htmlFor="cpf">
        <input type="number" id="cpf" name="cpf" placeholder="CPF" onChange={ ({ target }) => handleChangeRegister(target) } />
      </label>
      <label htmlFor="nationality">
        <input type="text" id="nationality" name="nationality" placeholder="Nacionalidade" onChange={ ({ target }) => handleChangeRegister(target) } />
      </label>
      <select name="gender" id="gender" onChange={ ({ target }) => handleChangeRegister(target) }>
        <option value="" disabled selected>Gênero</option>
        <option value="masculino">Masculino</option>
        <option value="feminino">Feminino</option>
        <option value="lgbtqia+">LGBTQIA+</option>
      </select>
      <select name="maritalStatus" id="maritalStatus" onChange={ ({ target }) => handleChangeRegister(target) }>
        <option value="" disabled selected>Estado Civil</option>
        <option value="solteiro">Solteiro</option>
        <option value="casado">Casado</option>
        <option value="divorciado">Divorciado</option>
        <option value="viuvo">Viúvo</option>
        <option value="união estável">União Estável</option>
      </select>
      <select name="skinColor" id="skinColor" onChange={ ({ target }) => handleChangeRegister(target) }>
        <option value="" disabled selected>Cor da pele</option>
        <option value="branca">Branco</option>
        <option value="parda">Parda</option>
        <option value="preta">Preta</option>
        <option value="indígena">Indígena</option>
        <option value="amarela">Amarela</option>
      </select>
      <select name="schooling" id="schooling" onChange={ ({ target }) => handleChangeRegister(target) }>
        <option value="" disabled selected>Escolaridade</option>
        <option value="Fundamental - Incompleto">Fundamental - Incompleto</option>
        <option value="Fundamental - Completo">Fundamental - Completo</option>
        <option value="Médio - Incompleto">Médio - Incompleto</option>
        <option value="Médio - Completo">Médio - Completo</option>
        <option value="Superior - Incompleto">Superior - Incompleto</option>
        <option value="Superior - Completo">Superior - Completo</option>
        <option value="Pós-graduação - Incompleto">Pós-graduação - Incompleto</option>
        <option value="Pós-graduação - Completo">Pós-graduação - Completo</option>
      </select>
      <button type="button" onClick={ completeRegister }>Completar Cadastro</button>
    </div>
  )
};

export default FormPersonalInfo;