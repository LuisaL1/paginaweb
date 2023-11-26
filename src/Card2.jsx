import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image2 from './Imagenes/image2.jpg'; 
import { useNavigate } from 'react-router-dom';

function Card2() {
  const navigate = useNavigate();
  const handleContinueClick = () => {
    navigate('/Ofertas');
  };
  return (
    <Card className='text-center bg-dark' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image2} alt="" />
      <Card.Body className='text-light'>
        <Card.Title>Accesorios</Card.Title>
        <Card.Text>
          Temporada de SUN 🌞
        </Card.Text>
        <Button href=''className='btn btn-ouline-secondary border'target="_blank" variant="outline-secondary" onClick={handleContinueClick}>Continuar</Button>
      </Card.Body>
    </Card>
  );
}

export default Card2;
