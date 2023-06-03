import React from 'react';
import '../styles/footer.css';

function Footer() {
    return (
        <div className='Footer'>
            <div className='ContainerSup'>
                <div className='Country'>
                    <span>Brasil</span>
                </div>

            </div>
            <div className='ContainerInf'>
                <div className='MenuRight'>
                    <a href="#"><span>Sobre</span></a>
                    <a href="#"><span>Publicidade</span></a>
                    <a href="#"><span>Negócios</span></a>
                    <a href="#"><span>Como funciona a pesquisa</span></a>
                </div>
                <div className='Menuleft'>
                    <a href="#"><span>Privacidade</span></a>
                    <a href="#"><span>Termos</span></a>
                    <a href="#"><span>Configurações</span></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;