import React, { useState } from 'react';
import Card1 from './Card1'; 
import Card2 from './Card2';
import Card3 from './Card3';
import 'animate.css/animate.min.css'; // Asegúrate de importar el archivo de estilos animate.css

const Cards = () => {
  const titleStyle = {
    color: 'white',
    fontSize: '100px',
    font: 'sans-serif'
  };

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (cardNumber) => {
    setHoveredCard(cardNumber);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const getCardStyle = (cardNumber) => {
    return {
      transition: 'box-shadow 0.3s',
      boxShadow: hoveredCard === cardNumber ? '50px 50px 50px rgba(0, 0, 0, 0.2)' : 'none',
    };
  };

  return (
    <div className='d-flex flex-column align-items-center animate__animated animate__fadeIn'>
      <h2 style={titleStyle}>ModVibe</h2>
      <div className="row">
        <div
          className="col-md-4"
          style={getCardStyle(1)}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <Card1 />
        </div>
        <div
          className="col-md-4"
          style={getCardStyle(2)}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <Card2 />
        </div>
        <div
          className="col-md-4"
          style={getCardStyle(3)}
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
        >
          <Card3 />
        </div>
      </div>
    </div>
  );
}

export default Cards;

