import React from "react"; 
import "../Style/main.css"
import "../Style/navbarInterna.css"

function PerfilUsuario() {
  return (
    <>
      {/* Header */}
      <div className="card" style={{ height: "100px" }}>
        <div
          className="card-body"
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            color: "white",
            fontSize: "xx-large",
          }}
        >
          Perfil de Usuário
        </div>
      </div>

      {/* Histórico de Compras */}
      <div className="card" style={{ maxWidth: "700px", margin: "100px auto" }}>
        <div className="card-header">Histórico de Compras</div>
        <div className="card-body">
          <h5 className="card-title">Ver histórico de compras</h5>
          <a href="#" className="btn btn-danger">
            Acessar
          </a>
        </div>
      </div>

      {/* Dados do Usuário */}
      <div className="card" style={{ width: "700px", margin: "auto" }}>
        <div className="card-header">Dados do Usuário</div>
        <ul className="list-group list-group-flush">
          <li
            className="list-group-item"
            style={{
              backgroundColor: "hsl(235, 60%, 20%)",
              color: "white",
              borderColor: "black",
            }}
          >
            Nome completo:
          </li>
          <li
            className="list-group-item"
            style={{
              backgroundColor: "hsl(235, 60%, 22%)",
              color: "white",
              borderColor: "black",
            }}
          >
            Data de nascimento:
          </li>
          <li
            className="list-group-item"
            style={{
              backgroundColor: "hsl(235, 60%, 20%)",
              color: "white",
              borderColor: "black",
            }}
          >
            Endereço de E-mail:
          </li>
          <li
            className="list-group-item"
            style={{
              backgroundColor: "hsl(235, 60%, 22%)",
              color: "white",
              borderColor: "black",
            }}
          >
            Endereço de residência:
          </li>
          <li
            className="list-group-item"
            style={{
              backgroundColor: "hsl(235, 60%, 20%)",
              color: "white",
              borderColor: "black",
            }}
          >
            <a href="#" className="btn btn-danger">
              Alterar Dados
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default PerfilUsuario; 