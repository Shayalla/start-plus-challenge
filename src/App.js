import React from 'react';
import { Route, Routes } from 'react-router';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import PersonalInfo from './pages/PersonalInfo';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/personal-info" element={ <PersonalInfo /> } />
      <Route path="/home" element={ <Home /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
