import React from 'react';

const LoginForm = () => {
  return (
    <form id="loginForm">
      <div className="form-group">
        <label htmlFor="username">Usuário:</label>
        <input type="text" id="username" name="username" required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Senha:</label>
        <input type="password" id="password" name="password" required />
      </div>
      <div className="form-group">
        <input type="checkbox" id="remember" name="remember" />
        <label htmlFor="remember">Manter conectado</label>
      </div>
      <div className="form-group">
        <label htmlFor="captcha">Digite o Captcha:</label>
        <input type="text" id="captcha" name="captcha" required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
