import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image3 from './Imagenes/Image3.jpg'; 
import { useNavigate } from 'react-router-dom';
function Card3() {
  const navigate = useNavigate();
  const handleContinueClick = () => {
    navigate('/Moda');
  };
  return (
    <Card className='text-center bg-dark' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image3} alt="" />
      <Card.Body className='text-light'>
        <Card.Title>Moda</Card.Title>
        <Card.Text>
        Lo mejor de la última colección 🌀
        </Card.Text>
        <Button href=''className='btn btn-ouline-secondary border'target="_blank" variant="outline-secondary" onClick={handleContinueClick}>Continuar</Button>
      </Card.Body>
    </Card>
  );
}

export default Card3;
