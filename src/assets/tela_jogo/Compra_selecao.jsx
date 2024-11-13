function Compra_Selecao() {
    return (
      <div className="container d-flex justify-content-center" style={{ width: '20rem', marginTop: '10px', marginBottom: '35px' }}>
        <div className="card p-4" style={{ width: '20rem' }}>
          <h2 className="text-center mb-4">Plataforma do Jogo</h2>
          <form>
            {['PC', 'PS5', 'XBOX series S/X', 'Nintendo'].map((platform) => (
              <div className="form-check mb-2" key={platform}>
                <input className="form-check-input" type="radio" name="plataforma" value={platform} required />
                <label className="form-check-label">{platform}</label>
              </div>
            ))}
            <div className="d-flex justify-content-between mt-4">
              <button type="button" className="btn btn-outline-secondary w-100 me-2">Carrinho</button>
              <button type="button" className="btn btn-outline-success w-100">Comprar</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default Compra_Selecao;