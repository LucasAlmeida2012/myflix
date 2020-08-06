import React, {useState} from 'react';
import MasterPage from '../../../components/MaterPage';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
    const valoresIniciaisCategoria = {nome: '', descricao: '', cor: ''};

    const [lstCategoria, setLstCategoria] = useState([]);
    const [categoria, setCategoria] = useState(valoresIniciaisCategoria);
    
    function setValue(key, value){
        //key: nome, descricao, cor
        setCategoria({
            ...categoria,
            [key]: value
        })

    }
    function handleChange(e){
        //  const { getAttribute, value } = e.target;
        //  setValue(getAttribute('name'), value);
         setValue(e.target.getAttribute('name'),e.target.value);
    }
    return (
        <MasterPage>
            <h1>Cadastro de Categoria</h1>

            <form  style={{background: categoria.cor}} onSubmit={function handleSubmit(e){ 
                e.preventDefault();
                setLstCategoria([
                    ...lstCategoria,
                    categoria
                ]);
                setCategoria(valoresIniciaisCategoria);
            }}>
                
                <FormField type="text" name="nome" label="Nome"
                 value={categoria.nome} onChange={handleChange} />
                

                <FormField type="textarea" name="descricao" label="Descrição"
                 value={categoria.descricao} onChange={handleChange} />
                
                <FormField type="color" name="cor" label="Cor"
                 value={categoria.cor} onChange={handleChange} />
                
                <button>Cadastrar</button>
             </form>
<ul>
    {lstCategoria.map( (cat, i) => {return( <li key={i}>{cat.nome}</li>)})}
</ul>
            <Button as={Link} to="/cadastro/video">
                Add video
            </Button>
        </MasterPage>
    );
  }

  export default CadastroCategoria;