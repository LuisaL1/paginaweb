import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cards from './Cards';
import Ofertas from './Ofertas';
import Comprar from './Botones/Comprar';
import Accesorios from './Accesorios';
import Moda from './Moda';
import Añadir from './Botones/Añadir';
import './App.css';

const App = () => {
  useEffect(() => {
    // Cambiar el título de la página
    document.title = "ModVibe";

    // Cambiar el icono de la pestaña
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = '/Logo/Icon.jpg';  // Cambia esto a la ruta de tu icono
    document.head.appendChild(link);
  }, []);

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/Ofertas" element={<Ofertas />} />
          <Route path="/Botones/Comprar" element={<Comprar />} />
          <Route path="/Moda" element={<Moda />} />
          <Route path="/Accesorios" element={<Accesorios />} />
          <Route path="/Botones/Añadir" element={<Añadir />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
