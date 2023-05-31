import React from 'react';
import '../styles/logo.css';
import imagemLogo from '../images/google.png';

function Main() {
    return (
        <div className='Main'>
            <div className='Logo'>
                <a href="#"><img src={imagemLogo} alt="Avatar"/></a>
            </div>
            <div className='Search'>
            </div>
            <div className='Buttons'>
                 <button className='button'>Pesquisa Google</button>
                 <button className='button'>Estou com sorte</button>
            </div>
            <div className='Banner'>
            </div>
        </div>
    )
}

export default Main;