import React, { useState, useEffect } from 'react';
import '../Style/CardProduto.css';

function CardProduto(props) {
  const [jogos, setJogos] = useState([]);

  // Carregar os jogos
  useEffect(() => {
    fetch('../Json/jogos.json')
      .then(response => response.json())
      .then(jogos => setJogos(jogos));
  }, []);

  // Filtrar jogos com base na pesquisa
  const jogosFiltrados = jogos.filter((jogo) =>
    jogo.nome.toLowerCase().includes(props.pesquisa.toLowerCase()) ||
    jogo.genero.toLowerCase().includes(props.pesquisa.toLowerCase())
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
                <a className="btn btn-outline-success valor" role="button" style={{ marginRight: '15px' }}>
                  R$ {jogo.preco}
                </a>
                <a
                  
                  className="btn btn-outline-success valor"
                  role="button"
                  style={{ marginLeft: '15px' }}
                  onClick={(e) => {
                    e.preventDefault();
                    props.addToCart(jogo); // Chama a função addToCart que foi passada como prop
                  }}
                >
                  
                  <img src={'./imagem/carinho.png'} alt="Cart" width="25" height="25" />
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
