import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';
import Header from '../components/Header/Header';

const Home = () => {
  const { navigate } = useContext(Context);
  
  useEffect(() => {
    // checa se está logado, se não vai para a tela de login
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) navigate('/');
  }, [navigate]);

  return (
    <Header />
  )
};

export default Home;