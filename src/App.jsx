import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Api_juego from './Componentes/Api/Api_juego'; // Importa el componente del juego
import Nav from './Componentes/Nav'
import Reservas from './Componentes/Reservas'
import Reseñas from './Componentes/Reseñas'
import Inicio from "./Componentes/Inicio"; // Ruta relativa al componente Inicio
import Productos from './Componentes/Productos';
import Api from './Componentes/Api';
import Footer from './Componentes/Footer';
import { useEffect } from 'react';
import { conectarBackend } from './config';



function App() {
  
  useEffect(()=>{
    conectarBackend().then(data => console.log(data))
  },[])

  return (
   <Router>
    <Nav></Nav>
    
    <Routes>
    <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/reseñas" element={<Reseñas />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/Api" element={<Api/>} />
        <Route path="/juego" element={<Api_juego />} /> {/* Nueva ruta para el juego */}
    </Routes>
    <Footer></Footer>
   </Router> 
  )
}

export default App
