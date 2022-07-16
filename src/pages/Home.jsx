import React, { useContext, useEffect } from 'react';
import FormPersonalInfo from '../components/FormPersonalInfo';
import Context from '../context/Context';
import Header from '../components/Header';

function Home() {
  const { isFirstAccess, navigate } = useContext(Context);
  
  useEffect(() => {
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