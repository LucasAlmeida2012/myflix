import React from 'react';
import MasterPage from '../../../components/MaterPage';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';

function CadastroCategoria(){
    return (
        <MasterPage>
            <h1>Cadastro de Categoria</h1>

            <Button as={Link} to="/cadastro/video">
                Add video
            </Button>
        </MasterPage>
    );
  }

  export default CadastroCategoria;