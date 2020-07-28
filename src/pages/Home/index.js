import React from 'react';
import Menu from '../../components/Menu';
import dadosInicialJson from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div className="App">
      <Menu />

      <BannerMain
      videoTitle={dadosInicialJson.categorias[0].videos[0].titulo}
      url={dadosInicialJson.categorias[0].videos[0].url}
      videoDescription = "teste 123"
      />
 
 {dadosInicialJson.categorias.map((categoria, key) =>
    <Carousel  category={categoria} />
  )};

     <Footer></Footer>
    </div>
  );
}

export default Home;
