import React from 'react';
import Home from './Home';
import Login from './Login';
import Cadastro from './Cadastro';
import GerirJogos from './GerirJogos';
import Carrinho from './carrinho';
import JogosPc from './jogosPc';
import JogosXbox from './jogosxbox';
import JogosPs5 from './jogosPs5';
import PerfilUsuario from './assets/PerfilUsuario';
import { BrowserRouter as Router,
        Routes,
        Route,
        Navigate
        } from "react-router-dom";






function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />}/>{/* qualquer url inexistente será tranferida para home*/}
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path='/GerirJogos' element={<GerirJogos/>} />
        <Route path="/Carrinho" element={<Carrinho/>}/>
        <Route path="/JogoPc" element={<JogosPc/>}/>
        <Route path="/JogoXbox" element={<JogosXbox/>}/>
        <Route path="/JogoPs5" element={<JogosPs5/>}/>
        <Route path="/PerfilUsuario" element={<PerfilUsuario/>}/>

        {/* <Route path="/another" element={<AnotherPage />} /> */}
      </Routes>
    </Router>
  );
   
}

export default App;
