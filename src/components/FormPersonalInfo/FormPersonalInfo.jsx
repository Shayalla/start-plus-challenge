import { Card, CardActions, CardContent, Container, Button, Typography, CssBaseline } from '@mui/material';
import TaskIcon from '@mui/icons-material/Task';
import React, { useContext } from 'react';
import Context from '../../context/Context';
import { updateUser } from '../../services/users';
import comboBoxs from '../../utils/comboBoxs';
import Input from '../InputPassword';
import SelectForm from '../Select';
import './FormPersonalInfo.css';

const FormPersonalInfo = () => {
  const { newUser, handleChangeRegister, navigate } = useContext(Context);

  const completeRegister = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    await updateUser(newUser, token);
    navigate('/home');
  };

  return (
    <Container maxWidth="md">
      <CssBaseline />
      <Card className="card-info">
        <Typography 
          variant="h5"
          className="title"
        >
          Complete o seu cadastro:
        </Typography>
        <CardContent className="content-info">
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
            name="nationality"
            placeholder="Nacionalidade"
            onChange={ handleChangeRegister }
          />
          <SelectForm
            name="gender"
            first="Gênero"
            data={ comboBoxs.genero }
            onChange={ handleChangeRegister }
          />
          <SelectForm
            name="maritalStatus"
            first="Estado Civil"
            data={ comboBoxs.estadoCivil }
            onChange={ handleChangeRegister }
          />
          <SelectForm
            name="skinColor"
            first="Cor da pele"
            data={ comboBoxs.corDaPele }
            onChange={ handleChangeRegister }
          />
          <SelectForm
            name="schooling"
            first="Escolaridade"
            data={ comboBoxs.escolaridade }
            onChange={ handleChangeRegister }
          />
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            endIcon={ <TaskIcon /> }
            onClick={ completeRegister }
            color="success"
          >
            Completar Cadastro
          </Button>
        </CardActions>
      </Card>
    </Container>
  )
};

export default FormPersonalInfo;