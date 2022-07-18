import { AppBar, Button, Toolbar, Typography, Box, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { useNavigate } from 'react-router';
import './DashBoard.css';

const DashBoard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/')
  };
  
  return (
    <div className="div-dash">
      <Box sx={{ flexGrow: 1, width: '100vw' }}>
        <AppBar position="static" color="success">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Home
            </Typography>
            <Button
              variant="contained"
              endIcon={ <LogoutIcon /> }
              onClick={ logout }
              color="error"
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <h1 className="bem-vindos">
        $ Bem-vindo!!! =D $
      </h1>
    </div>
  )
};

export default DashBoard;