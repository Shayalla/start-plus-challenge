import { Card, CardContent, CardActions, Button, Typography, CssBaseline } from '@mui/material';
import FaceTwoToneIcon from '@mui/icons-material/FaceTwoTone';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import React, { useContext, useState } from 'react';
import Context from '../../context/Context';
import Input from '../Input';
import './FormLogin.css';

const FormLogin = () => {
  const { isHidden, login, navigate } = useContext(Context);
  const [user, setUser] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  return (
    <form className="form-login">
      <Card className="card-login">
      <CssBaseline />
        <FaceTwoToneIcon sx={{ fontSize: 80 }} />
        <Typography variant="h3">
          Login
        </Typography>
        <CardContent>
          <Input
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            onChange={handleChange}
          />
          {
            !isHidden
              && <Typography variant="caption">
                    Email e/ou senha inválidos
                  </Typography>
          }
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            endIcon={<LoginIcon />}
            onClick={() => login(user)}
            color="success"
          >
            Entrar
          </Button>
          <Button
            variant="contained"
            endIcon={<PersonAddAlt1Icon />}
            onClick={() => navigate('/register')}
          >
            Cadastrar
          </Button>
        </CardActions>
      </Card>
    </form>
  )
};

export default FormLogin;