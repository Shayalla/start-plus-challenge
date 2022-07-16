import React, { useContext, useEffect } from 'react';
import FormPersonalInfo from '../components/FormPersonalInfo';
import Context from '../context/Context';
import Header from '../components/Header';

const Home = () => {
  const { isFirstAccess, navigate } = useContext(Context);
  
  useEffect(() => {
    // checa se está logado, se não vai para a tela de login
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) navigate('/');
  }, [navigate]);

  return (
    <div>
      { isFirstAccess
          ? <FormPersonalInfo />
          : <Header />
      }
    </div>)
};

export default Home;