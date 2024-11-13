import React from 'react';
import './carousel_jogo.css'

function Carousel_Jogo() {
  return (
    <div id="carrosselEOpcoes" style={{ marginTop: '20px' }}>
      <div id="carouseljogo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouseljogo" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouseljogo" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouseljogo" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/c0i88t0Kacs?mute=1"
              title="the witcher trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="carousel-item">
            <img src="../imagem/the_witcher.jpg" className="d-block w-100" alt="The Witcher" />
          </div>
          <div className="carousel-item">
            <img src="https://www.games4u.com/sc/br/g4u/_imgwy_/747857a00d3528a06fde2bee3b8b27d7/?i=http%3A%2F%2Fp2.trrsf.com%2Fimage%2Ffget%2Fcf%2F780%2F460%2Fsmart%2Fimages.terra.com%2F2019%2F02%2F11%2Fmonster-hunter-geralt-abre.jpg" className="d-block w-100" alt="Monster Hunter" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouseljogo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouseljogo" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
export default Carousel_Jogo;


