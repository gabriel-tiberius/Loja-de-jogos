import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Navbar from './navbar.jsx';
import Footer from './footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Footer/>
    
  </StrictMode>,
)
