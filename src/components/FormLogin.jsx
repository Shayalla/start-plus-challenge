import React from 'react';

function FormLogin() {
  return (
    <form>
      <label htmlFor="login">
        <input type="text" id="login" placeholder="usuário"/>
      </label>
      <label htmlFor="">
        <input type="password" id="password" placeholder="senha"/>
      </label>
      <button type="button">Entrar</button>
      <button type="button">Registrar-se</button>
    </form>
  )
};

export default FormLogin;