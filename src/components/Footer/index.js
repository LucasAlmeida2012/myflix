import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo.png'

function Footer() {
  return (
    <FooterBase>
      <img className="Logo" src={Logo} alt="Logo MyFlix" />
      <p>
        Orgulhosamente criado durante a
        Imersão React da <a href="https://www.alura.com.br/">Alura</a>
      </p>
    </FooterBase>
  );
}

export default Footer;
