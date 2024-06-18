import React from 'react';
import bannerLogin from '../assets/img/Banner-login.png'; 

const LoginImage = () => {
    return (
        <div className="login-image">
            <img src={bannerLogin} alt="Login Image" />
        </div>
    );
};

export default LoginImage;
