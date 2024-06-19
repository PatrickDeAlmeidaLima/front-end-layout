import React from 'react';
import facebookImg from '../assets/img/facebook.png'; 
import tzImg from '../assets/img/tz.png'; 
import twitterImg from '../assets/img/twitter.png'; 
import appleImg from '../assets/img/apple.png'; 

function App() {
    return (
        <div className="App">
            <div className="social-login">
                <a href="#" className="social-btn Tz">
                    <img src={tzImg} alt="Login com Tz" />
                </a>
                <a href="#" className="social-btn facebook">
                    <img src={facebookImg} alt="Login com Facebook" />
                </a>
                <a href="#" className="social-btn Twitter">
                    <img src={twitterImg} alt="Login com Twitter" />
                </a>
                <a href="#" className="social-btn Apple">
                    <img src={appleImg} alt="Login com Apple" />
                </a>
            </div>
        </div>
    );
}

export default App;
