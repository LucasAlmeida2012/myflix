import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
    background-color:var(--black);
    color: var(--white);
    flex:1;
    padding-top:50px;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 50px;
`;

function MasterPage(props){
    return (
/*Como todo componente tem que estar envolvido por uma tag, pra não ficar enchendo de DIV, usar 
    <React.Fragment> conteudo </React.Fragment> 
        ou a forma "resumida"
    <> conteudo </> 
*/
    <>
        <Menu/>
        <Main>
            {props.children}
        </Main>
        <Footer/>
    </>
    );
}

export default MasterPage;