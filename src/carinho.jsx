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

  const handleQuantityChange = (index, quantity) => {
    const updatedCarrinho = [...itensCarrinho];
    updatedCarrinho[index].quantidade = quantity; // Atualiza a quantidade no estado
    setItensCarrinho(updatedCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(updatedCarrinho)); // Atualiza o localStorage
  };

  return (
    <div>
      <NavbarInterna />

      <div className="container text-center" id="containercarinho">
        <h1>MEU CARRINHO</h1>
        
        <table className="table" id="carinhodejogos">
          <thead>
            <tr>
              <th id = "colunafoto">Foto</th>
              <th>Nome</th>
              <th id = "colunaplataforma">Plataforma</th>
              <th>Quantidade</th>
              <th>Preço</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {itensCarrinho.map((item, index) => (
              <tr key={index}>
                <td id ="colunaimagem"><img src={item.imagem} alt={item.nome} width="50" /></td>
                <td id ="colunanome">{item.nome}</td>
                <td id ="colunaplataforma">{item.plataforma}</td>
                
                <td id="colunaquantidade">

                <input id= "colunaquantidade2"
                    type="number"
                    min="1"
                    value={item.quantidade || 1} // Exibe a quantidade, padrão 1
                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                  />
                  
                </td> {/* Ajuste a quantidade conforme necessário */}
                
                <td id ="colunapreco">R$ {(item.preco * (item.quantidade || 1)).toFixed(2)}</td>    {/* arendondar numero de casas decimais*/}
                <td id = "colunaexcluir"><button onClick={() => handleRemove(index)}>Excluir</button></td>
              </tr>
            ))}
          </tbody>
        </table>

        <table className="table" id="valortotal">
          <thead>
            <tr>
              
              <th>Valor Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>R$ {itensCarrinho.reduce((acc, item) => acc + (parseFloat(item.preco) * (item.quantidade || 1)), 0).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Carinho;
