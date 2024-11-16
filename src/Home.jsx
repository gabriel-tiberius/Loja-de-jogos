import React from "react";
import CardProduto  from './assets/CardProduto'
import { useState } from 'react';
import Navbar from './assets/navbar';
import './Style/Home.css'

function Home(){

                                    {/* fazer busca*/}
  const [pesquisa,setpesquisa] = useState("");

  const busca = (Texto) =>{
    setpesquisa(Texto);
  };

  return(
    <div id="HomeConteiner">
      {/* Passa a função de pesquisa para a Navbar */}
      <Navbar onSearch={busca} />
      {/* Passa o valor da pesquisa para o CardProduto */}
      <CardProduto pesquisa={pesquisa} />
    </div>
  );
}

  export default Home;