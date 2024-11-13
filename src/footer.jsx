function Footer() {
    return (
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <div id="conteinerInternoFooter" style={{ display: "flex" }}>
            <div id="LinksFooter" style={{ display: "flex", flexDirection: "row" }}>
              <li className="nav-item">
                <a href="index.html" className="nav-link px-2 text-muted">Home</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-muted">Contato</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-muted">Redes</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-muted">Perguntas Frequentes</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-muted">Sobre</a>
              </li>
                </div>
            </div>   
        </ul>
        <p className="text-center text-muted">© 2024 Jogo.com, Inc</p>
      </footer>
    );
  }
  
  export default Footer;  