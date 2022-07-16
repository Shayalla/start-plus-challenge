import React from 'react';
import { Route, Routes } from 'react-router';
import Login from './pages/Login';
import PersonalInfo from './pages/PersonalInfo';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/personal-information" element={ <PersonalInfo /> } />
    </Routes>
  );
}

export default App;
