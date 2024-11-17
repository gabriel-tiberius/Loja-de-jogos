import React, { useState, useEffect } from "react";
import NavbarInterna from './assets/navbarInterna';
import './Style/carinho.css';

function Carinho() {
  const [itensCarrinho, setItensCarrinho] = useState([]);

  useEffect(() => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')); // Obtém os itens do carrinho armazenados
    if (carrinho) {
      setItensCarrinho(carrinho);
    }
  }, []);

  const handleRemove = (index) => {
    const newCarrinho = itensCarrinho.filter((_, i) => i !== index);
    setItensCarrinho(newCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(newCarrinho)); // Atualiza o localStorage
  };

  return (
    <div className="container text-center" id="containercarinho">
      <NavbarInterna />
      <h1>MEU CARRINHO</h1>
      
      <table className="table" id="tabeladejogos">
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nome</th>
            <th>Plataforma</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {itensCarrinho.map((item, index) => (
            <tr key={index}>
              <td><img src={item.imagem} alt={item.nome} width="50" /></td>
              <td>{item.nome}</td>
              <td>{item.plataforma}</td>
              <td>1</td> {/* Ajuste a quantidade conforme necessário */}
              <td>R$ {item.preco}</td>
              <td><button onClick={() => handleRemove(index)}>Excluir</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className="table" id="comprar">
        <thead>
          <tr>
            <th>Total</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total</td>
            <td>R$ {itensCarrinho.reduce((acc, item) => acc + parseFloat(item.preco), 0)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Carinho;
