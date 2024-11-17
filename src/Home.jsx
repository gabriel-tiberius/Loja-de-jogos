import React, { useState, useEffect } from "react";
import Navbar from './assets/navbar';
import Carousel from "./assets/carouselPrincipal";
import CardProduto from './assets/CardProduto';
import './Style/Home.css';


function Home() {
  const [pesquisa, setPesquisa] = useState("");

  const [carrinho, setCarrinho] = useState(() => {
    // Carregar o carrinho do localStorage ou iniciar com um carrinho vazio
    const carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho'));
    return carrinhoSalvo || [];
  });

  // Função de busca
  const busca = (Texto) => {
    setPesquisa(Texto);
  };

  // Função de adicionar ao carrinho
  const addToCart = (jogo) => {
    
    setCarrinho((prevCarrinho) => {
      const novoCarrinho = [...prevCarrinho, jogo];
      // Atualiza o localStorage sempre que o carrinho mudar
      localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
      return novoCarrinho;
    });
  };

  return (
    <div id="HomeConteiner">
      <Navbar onSearch={busca} />
      <Carousel />
      {/* Passando a função addToCart como prop para CardProduto */}
      <CardProduto pesquisa={pesquisa} addToCart={addToCart} />
    </div>
  );
}

export default Home;
