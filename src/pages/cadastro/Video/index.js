import React from 'react';
import MasterPage from '../../../components/MaterPage';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';

function CadastroVideo(){
    return (
        <MasterPage>
            <h1>Cadastro de video</h1>

            <Button as={Link} to="/cadastro/categoria">
                Add Categoria
            </Button>
        </MasterPage>
    );
  }

  export default CadastroVideo;