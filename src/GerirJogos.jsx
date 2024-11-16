import React, { useState } from "react";

const GerirJogos = () => {
  const [jogos, setJogos] = useState([]); // Lista de jogos
  const [novoJogo, setNovoJogo] = useState({
    nome: "",
    imagem: "",
    preco: 0,
    descricao: "",
    genero: "",
    quantidade_ps4: 0,
    quantidade_pc: 0,
  });

  // Função para lidar com a criação de um novo jogo
  const criarJogo = (e) => {
    e.preventDefault();
    setJogos([...jogos, { ...novoJogo, id: Date.now() }]); // Adiciona o jogo com um ID único
    setNovoJogo({
      nome: "",
      imagem: "",
      preco: 0,
      descricao: "",
      genero: "",
      quantidade_ps4: 0,
      quantidade_pc: 0,
    });
  };

  // Função para deletar um jogo
  const deletarJogo = (id) => {
    setJogos(jogos.filter((jogo) => jogo.id !== id));
  };

  // Função para atualizar um jogo
  const atualizarJogo = (id) => {
    const jogoAtualizado = prompt("Digite o novo nome do jogo:");
    if (jogoAtualizado) {
      setJogos(
        jogos.map((jogo) =>
          jogo.id === id ? { ...jogo, nome: jogoAtualizado } : jogo
        )
      );
    }
  };

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Gerir Jogos</h1>

      {/* Formulário para criar novos jogos */}
      <form onSubmit={criarJogo} className="mb-5">
        <h2>Criar Jogo</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Nome:</label>
            <input
              type="text"
              className="form-control"
              value={novoJogo.nome}
              onChange={(e) => setNovoJogo({ ...novoJogo, nome: e.target.value })}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Imagem (caminho):</label>
            <input
              type="text"
              className="form-control"
              value={novoJogo.imagem}
              onChange={(e) =>
                setNovoJogo({ ...novoJogo, imagem: e.target.value })
              }
              required
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Preço:</label>
            <input
              type="number"
              className="form-control"
              value={novoJogo.preco}
              onChange={(e) =>
                setNovoJogo({ ...novoJogo, preco: Number(e.target.value) })
              }
              required
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Quantidade PS4:</label>
            <input
              type="number"
              className="form-control"
              value={novoJogo.quantidade_ps4}
              onChange={(e) =>
                setNovoJogo({
                  ...novoJogo,
                  quantidade_ps4: Number(e.target.value),
                })
              }
              required
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Quantidade PC:</label>
            <input
              type="number"
              className="form-control"
              value={novoJogo.quantidade_pc}
              onChange={(e) =>
                setNovoJogo({
                  ...novoJogo,
                  quantidade_pc: Number(e.target.value),
                })
              }
              required
            />
          </div>
          <div className="col-12">
            <label className="form-label">Descrição:</label>
            <textarea
              className="form-control"
              value={novoJogo.descricao}
              onChange={(e) =>
                setNovoJogo({ ...novoJogo, descricao: e.target.value })
              }
              required
            />
          </div>
          <div className="col-12">
            <label className="form-label">Gênero:</label>
            <input
              type="text"
              className="form-control"
              value={novoJogo.genero}
              onChange={(e) =>
                setNovoJogo({ ...novoJogo, genero: e.target.value })
              }
              required
            />
          </div>
          <div className="col-12 text-center">
            <button type="submit" className="btn btn-primary">
              Criar Jogo
            </button>
          </div>
        </div>
      </form>

      {/* Lista de jogos */}
      <h2 className="mb-3">Jogos Cadastrados</h2>
      {jogos.length === 0 ? (
        <p className="text-center">Nenhum jogo cadastrado ainda.</p>
      ) : (
        <div className="row">
          {jogos.map((jogo) => (
            <div className="col-md-4 mb-4" key={jogo.id}>
              <div className="card h-100">
                <img
                  src={jogo.imagem}
                  className="card-img-top"
                  alt={jogo.nome}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{jogo.nome}</h5>
                  <p className="card-text">
                    <strong>Gênero:</strong> {jogo.genero}
                    <br />
                    <strong>Descrição:</strong> {jogo.descricao}
                  </p>
                  <p className="card-text">
                    <strong>Preço:</strong> R$ {(jogo.preco / 100).toFixed(2)}
                  </p>
                </div>
                <div className="card-footer text-center">
                  <button
                    className="btn btn-warning me-2"
                    onClick={() => atualizarJogo(jogo.id)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deletarJogo(jogo.id)}
                  >
                    Deletar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GerirJogos;
