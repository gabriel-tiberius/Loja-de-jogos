import CardProduto  from './assets/CardProduto'
import React from 'react';
import { useState } from 'react';
import Navbar from './navbar';




function App() {
                                {/* fazer busca*/}
  const [pesquisa,setpesquisa] = useState("");

  const busca = (Texto) =>{
    setpesquisa(Texto);
  };

  return(
    <div>
      {/* Passa a função de pesquisa para a Navbar */}
      <Navbar onSearch={busca} />
      
      {/* Passa o valor da pesquisa para o CardProduto */}
      <CardProduto pesquisa={pesquisa} />
    </div>
  );

   
}

export default App;
