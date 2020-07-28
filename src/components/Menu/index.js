import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/logo.png'
import './Menu.css';
// import ButtonLink from './components/ButtonLink';
 import Button from '../Button';

function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="MyFlix logo" />  
            </Link>
            
    {/* atributo as="a" faz o button se comportar como a tag <a>
            na segunda aula foi trocado para as={Link} para deixar conforme a arquitetura Single Page Application (SPA)
    */}
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Add video
            </Button>
        </nav>
    );
}

export default Menu;