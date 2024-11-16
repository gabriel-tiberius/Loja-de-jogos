import React from 'react';
import  {useState, useEffect} from 'react';



function NavbarInterna() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="/public/imagem/logo.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
          Jogo.com
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ width: 'auto' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Mais Vendidos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Jogos para PC</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Jogos para Console
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">PS5</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Xbox Series X/S</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Nintendo</a></li>
              </ul>
            </li>
          </ul>
          
        </div>

        <div id="entrar" style={{ alignSelf: 'flex-end', flexDirection: 'row' }}>
          <a className="navbar-brand" href="carinho.html">
            <img src={'/public/imagem/carinho.png'} alt="Cart" width="30" height="30" className="d-inline-block align-text-top" style={{ marginBottom: '5px' }} />
          </a>

          <a className="btn btn-outline-success" href="/Login" role="button">Entrar</a>
        </div>
      </div>
    </nav>
  );
}

export default NavbarInterna;
