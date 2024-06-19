import React from 'react';

const LoginForm = ({ setUsername, setPassword, setRemember, handleSubmit, error }) => {
    return (
        <form id="loginForm" onSubmit={handleSubmit}>
            {error && <div className="error-message">{error}</div>}
            <div className="form-group">
                <label htmlFor="username">Usuário:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    required
                    className="rounded-input"
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Senha:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="rounded-input"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="form-group">
                <div className='keep-login'>
                    <input
                        type="checkbox"
                        id="remember"
                        name="remember"
                        onChange={(e) => setRemember(e.target.checked)}
                    />
                    <label htmlFor="remember">Manter conectado</label>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="captcha">Digite o Captcha:</label>
                <input
                    type="text"
                    id="captcha"
                    name="captcha"
                    required
                    className="rounded-input"
                />
            </div>
            <button type="submit" className="material-symbols-outlined">
                Entrar
            </button>
        </form>
    );
};

export default LoginForm;
