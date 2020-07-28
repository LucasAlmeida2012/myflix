import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video'

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroCategoria from './pages/cadastro/Categoria';


const Pagina404 = () => (<div><h1>Epa!</h1><h3>A página solicitada não existe.</h3></div>);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/*Rotas:
        Route exact -> força a rota ser exatamente como definido no path
          Caso não tenha o exact, se a url começar com o valor do path, ja considera como a rota a ser seguida;
            No caso da rota do path="/", sem o exact todas as urls cairam nessa rota

          A ordem das rotas influenciam, se a rota do path="/" viesse em primeiro ia sempre cair nessa rota (caso ela não tenha o atributo "exact")

          Rota sem o atributo path, forçará que carregue isso caso não encontre nenhuma rota
      */}
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
      
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
