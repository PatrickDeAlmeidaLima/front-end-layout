import React from 'react';

const Modal = ({ isOpen, onClose, username, remember }) => {
    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Sucesso!</h2>
                <p>Usuário: {username}</p>
                <p>Manter conectado: {remember ? 'Sim' : 'Não'}</p>
            </div>
        </div>
    );
};

export default Modal;
