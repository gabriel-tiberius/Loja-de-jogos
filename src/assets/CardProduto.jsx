import React, { useState, useEffect } from 'react';
import '../Style/CardProduto.css';


function CardProduto({ pesquisa }) {
  
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    fetch('../Json/jogos.json')
      .then(response => response.json())
      .then(jogos => setJogos(jogos))
  },[]);
    

    const jogosFiltrados = jogos.filter((jogo) =>
      jogo.nome.toLowerCase().includes(pesquisa.toLowerCase()) || 
      jogo.genero.toLowerCase().includes(pesquisa.toLowerCase())
    );

  return (
    <div className="CardsGrid">
      {jogosFiltrados.map((jogo, index) => (
        <div key={index} className="col-md-3 d-flex justify-content-center mb-4" id='card'>
          <a href="jogo.html" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card" style={{ width: '100%' }} data-bs-theme="dark">
              <img src={jogo.imagem} className="card-img-top" alt={jogo.nome} />
              <div className="card-body">
                <h2 className="card-title">{jogo.nome}</h2>
                <a className="btn btn-outline-success valor" role="button">
                  R$ {jogo.preco}
                </a>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>

  );
}

export default CardProduto;
