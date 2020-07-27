import React from 'react';
import Logo from '../../assets/img/logo.png'
import './Menu.css';
// import ButtonLink from './components/ButtonLink';
 import Button from '../Button';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="MyFlix logo" />  
            </a>
            
            {/* atributo as="a" faz o button se comportar como a tag <a>*/}
            <Button as="a" className="ButtonLink" href="/">
                Add video
            </Button>
        </nav>
    );
}

export default Menu;