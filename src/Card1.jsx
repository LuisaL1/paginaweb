import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from './Imagenes/image.jpg'; 
import { useNavigate } from 'react-router-dom';

function Card1() {
  const navigate = useNavigate();
  const handleContinueClick = () => {
    navigate('/Ofertas');
  };
  return (
    <Card className='text-center bg-dark' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} alt="" />
      <Card.Body className='text-light'>
        <Card.Title>🌟Ofertas🌟</Card.Title>
        <Card.Text>
          ¡¡En esta navidad sorpréndete con nuestros grandiosos precios!!
        </Card.Text>
        <Button href=''className='btn btn-ouline-secondary border'target="_blank" variant="outline-secondary" onClick={handleContinueClick}>Continuar</Button>
      </Card.Body>
    </Card>
  );
}

export default Card1;
