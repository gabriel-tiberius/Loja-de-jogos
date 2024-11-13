import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {CardProduto}  from './assets/CardProduto'
import Login from './login.jsx'

function App() {
  const produto={
    nome: 'teste',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque at possimus quo optio dolorum a eaque quibusdam qui laudantium quam rem adipisci, aperiam reprehenderit alias, officia repellendus, soluta hic sed.',
    preco: 20

  }
  return (
    <div>
      <CardProduto produto = {produto}/>
      <h2> teste dos imports de html</h2>
      <Login/>

    </div>
  )
}

export default App;
