import React from 'react';
import Logo from '../../assets/img/logo.png';
import './menu.css';
import Button from '../Button';

function Navbar() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Megumin"/>
            </a>
            <Button className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Navbar;