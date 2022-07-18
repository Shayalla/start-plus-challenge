import { Container, Button, Card, CardContent, CardActions, CssBaseline } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import React, { useContext } from 'react';
import Context from '../../context/Context';
import { createUser } from '../../services/users';
import InputPassword from '../InputPassword';
import Input from '../Input';
import './FormRegister.css';
import { confirmPwd, passwordValidator, validateEmail } from '../../utils/validate';

const FormRegister = () => {
  const { newUser, handleChangeRegister, navigate } = useContext(Context);

  const register = async () => {
    const { email, password, confirmPassword } = newUser;
    if (confirmPwd(password, confirmPassword)) {
      alert('Passwords do not match.');
    }
    if (!validateEmail(email)) {
      alert('The Email field must be a valid email');
    } 
    if (!passwordValidator(password)){
      alert('Field must contain at least one uppercase, lowercase, special character and digit with min 8 chars');
    } else {
      await createUser(newUser);
      navigate('/');
    }
  };
console.log(newUser);
  return (
    <form className="form-register" id="app">
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
            <InputPassword
              type="password"
              name="password"
              placeholder="Senha"
              onChange={ handleChangeRegister }
            />
            <InputPassword
              type="password"
              name="confirmPassword"
              placeholder="Confirme a senha"
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