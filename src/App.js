import Cards from './Cards';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ofertas from './Ofertas';
import 'animate.css/animate.min.css';
import Prueba from './OfertasBotones/Prueba';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/Ofertas" element={<Ofertas />} />
          <Route path="/OfertasBotones/Prueba" element={<Prueba/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



