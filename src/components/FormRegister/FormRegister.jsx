import { Container, Button, Card, CardContent, CardActions, CssBaseline } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import React, { useContext } from 'react';
import Context from '../../context/Context';
import { createUser } from '../../services/users';
import Input from '../Input';
import './FormRegister.css';

const FormRegister = () => {
  const { newUser, handleChangeRegister, navigate } = useContext(Context);

  const register = async () => {
    await createUser(newUser);
    navigate('/');
  };

  return (
    <form>
      <Container maxWidth="sm">
      <CssBaseline />
        <Card className="card-register">
          <CardContent>
            <Input
              name="fullName"
              placeholder="Nome Completo"
              onChange={ handleChangeRegister }
              />
            <Input
              name="username"
              placeholder="Usuário"
              onChange={ handleChangeRegister }
              />
            <Input
              name="email"
              placeholder="E-mail"
              onChange={ handleChangeRegister }
              />
            <Input
              type="number"
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
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              endIcon={ <HowToRegIcon /> }
              onClick={ register }
              color="success"
            >
              Registar
            </Button>
            <Button
              variant="contained" 
              onClick={ () => navigate('/') }
              color="error"
            >
              Cancelar
            </Button>
          </CardActions>
        </Card>
      </Container>
    </form>
  )
};

export default FormRegister;