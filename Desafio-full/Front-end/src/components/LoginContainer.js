import React from 'react';
import LoginImage from './LoginImage';
import LoginForm from './LoginForm';
import SocialLogin from './SocialLogin';

const LoginContainer = () => {
    return (
        <div className="login-container">
            <LoginImage />
            <div className="login-form">
                <h2>Login</h2>
                <SocialLogin />
                <p>ou</p>
                <LoginForm />
                <a href="#">Esqueceu a senha?</a>
            </div>
        </div>
    );
};

export default LoginContainer;
