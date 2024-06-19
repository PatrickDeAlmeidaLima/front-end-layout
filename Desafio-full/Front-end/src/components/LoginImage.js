import React, { useState } from 'react';
import bannerLogin1 from '../assets/img/Banner-login1.png'; // Caminho para a imagem 1
import bannerLogin2 from '../assets/img/Banner-login2.png'; // Caminho para a imagem 2
import bannerLogin3 from '../assets/img/Banner-login3.png'; // Caminho para a imagem 3
import darkLogo from '../assets/img/dark.png'; // Imagem para modo escuro
import lightLogo from '../assets/img/light.png'; // Imagem para modo claro

const LoginImage = () => {
    const [currentImage, setCurrentImage] = useState(1); // Estado para controlar a imagem atual
    const [darkMode, setDarkMode] = useState(false); // Estado para controlar o modo escuro

    // Funções para navegar entre as imagens
    const nextImage = () => {
        setCurrentImage((prev) => (prev < 3 ? prev + 1 : 1)); // Se estiver na última imagem, volta para a primeira
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev > 1 ? prev - 1 : 3)); // Se estiver na primeira imagem, vai para a última
    };

    // Função para exibir a imagem com base no estado currentImage
    const getImage = () => {
        switch (currentImage) {
            case 1:
                return bannerLogin1;
            case 2:
                return bannerLogin2;
            case 3:
                return bannerLogin3;
            default:
                return bannerLogin1;
        }
    };

    // Função para alternar entre modo claro e escuro
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        applyDarkModeStyles(); // Aplica os estilos do modo escuro quando o modo é alterado
    };

    // Função para aplicar os estilos do modo escuro
    const applyDarkModeStyles = () => {
        const formContent = document.querySelector('.login-form-content');
        const roundedInputs = document.querySelectorAll('.rounded-input');

        if (darkMode) {
            formContent.style.backgroundColor = '#333'; // Cor de fundo do formulário no modo escuro
            formContent.style.color = '#fff'; // Cor do texto do formulário no modo escuro

            roundedInputs.forEach(input => {
                input.style.backgroundColor = '#444'; // Cor de fundo do input no modo escuro
                input.style.borderColor = '#666'; // Cor da borda do input no modo escuro
                input.style.color = '#fff'; // Cor do texto do input no modo escuro
            });
        } else {
            formContent.style.backgroundColor = '#fff'; // Cor de fundo do formulário no modo claro
            formContent.style.color = '#333'; // Cor do texto do formulário no modo claro

            roundedInputs.forEach(input => {
                input.style.backgroundColor = '#fff'; // Cor de fundo do input no modo claro
                input.style.borderColor = '#ccc'; // Cor da borda do input no modo claro
                input.style.color = '#333'; // Cor do texto do input no modo claro
            });
        }
    };

    return (
        <div className={`login-image ${darkMode ? 'dark-mode' : ''}`}>
            {/* Botão de Dark Mode com imagem */}
            <button className="dark-mode-button" onClick={toggleDarkMode}>
                <img src={darkMode ? darkLogo : lightLogo} alt="Logo" />
            </button>
            <img src={getImage()} alt={`Banner de Login ${currentImage}`} />
            <div className='text-left'>
                <div className="bottom-left">
                    <button className="theme-button">Cursos</button>
                    <h1>Plataforma de cursos completa</h1>
                    <p>Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar suspendisse, morbi mi proin urna ornare posuere donec aptent. orci vivamus primis fusce lacinia libero nostra aliquam vestibulum</p>
                </div>
            </div>
            <div className='carousel'>
                <div className="carousel-bullets">
                    <span className={currentImage === 1 ? 'active' : ''} onClick={() => setCurrentImage(1)}></span>
                    <span className={currentImage === 2 ? 'active' : ''} onClick={() => setCurrentImage(2)}></span>
                    <span className={currentImage === 3 ? 'active' : ''} onClick={() => setCurrentImage(3)}></span>
                </div>
                <div className="carousel-controls">
                    <button className="prev-button" onClick={prevImage}>&lt;</button>
                    <button className="next-button" onClick={nextImage}>&gt;</button>
                </div>
            </div>
        </div>
    );
};

export default LoginImage;
