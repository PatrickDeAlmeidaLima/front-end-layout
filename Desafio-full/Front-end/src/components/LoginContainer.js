import React, { useState } from 'react';
import LoginImage from './LoginImage';
import LoginForm from './LoginForm';
import SocialLogin from './SocialLogin';
import Logo from '../assets/img/Logo.png'; // Importa a imagem do Facebook
import ForgotPassword from './ForgotPassword';
import Modal from './Modal';

const LoginContainer = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            email: username,
            password: password,
            remember: remember,
        };

        try {
            const response = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data); // Aqui você pode lidar com a resposta do back-end
                // Exemplo: abrir modal de sucesso
                setModalOpen(true);
            } else {
                const errorData = await response.json();
                setError(errorData.error);
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            setError('Erro ao fazer login. Por favor, tente novamente.');
        }
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="login-container">
            <LoginImage />
            <div className="login-form-container">
                <div className="login-form-content">
                    <div className='first-content'>
                        <img src={Logo} alt="Logo" />
                        <div className="create-acount">
                            <a href='#'>Criar conta</a>
                        </div>
                    </div>
                    <div className="welcome-container">
                        <div className="welcome-text">
                            <h3 style={{ fontFamily: 'Inter, sans-serif' }}>Boas vindas!</h3>
                            <p style={{ fontFamily: 'Inter, sans-serif' }}>Entre utilizando uma das opções abaixo</p>
                        </div>
                    </div>
                    <SocialLogin />
                    <div className="or-divider">
                        <span className='divider-line'></span>
                        <span style={{ fontFamily: 'Inter, sans-serif' }}>ou</span>
                        <span className='divider-line'></span>
                    </div>
                    <LoginForm
                        setUsername={setUsername}
                        setPassword={setPassword}
                        setRemember={setRemember}
                        handleSubmit={handleSubmit}
                        error={error}
                    />
                    <ForgotPassword />
                </div>
            </div>
            <Modal
                isOpen={modalOpen}
                onClose={closeModal}
                username={username}
                remember={remember}
            />
        </div>
    );
};

export default LoginContainer;
