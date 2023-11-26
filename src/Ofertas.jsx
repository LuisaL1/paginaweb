import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Image1 from './Catalogo/Image1.png';
import Image2 from './Catalogo/Image2.png';
import Image3 from './Catalogo/Image3.png';
import Image9 from './Catalogo/image9.png';
import Image10 from './Catalogo/Image10.png';

const products = [
  {
    id: 1,
    name: 'Camisa ModVibe manga larga negra Unisex',
    description: '$30.000',
    image: Image1,
  },
  {
    id: 2,
    name: 'Chaqueta térmica Hombre',
    description: '$89.900',
    image: Image2,
  },
  {
    id: 3,
    name: 'Chaqueta térmica Mujer',
    description: '$98.000',
    image: Image3,
  },
  {
    id: 4,
    name: 'Suéter Spring Mujer',
    description: '$50.000',
    image: Image9,
  },
  {
    id: 5,
    name: 'Vestido de gala Zahara',
    description: '$95.000',
    image: Image10,
  },
];

const Ofertas = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const containerStyle = {
    backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(86,9,121,1) 35%, rgba(0,212,255,1) 1000%)',
    paddingTop: '50px',
  };
  const titleStyle = {
    color: 'white',
    fontSize: '50px',  
  };
  const navigate = useNavigate();
  const handleContinueClick = () => {
    navigate('/OfertasBotones/Prueba');
  };
  return (
    <Container style={containerStyle}>
      <h2 className="d-flex flex-column align-items-center" style={titleStyle}>🌟Ofertas Especiales🌟</h2>
      <Row className="d-flex justify-content-center">
        {products.map((product) => (
          <Col
            key={product.id}
            md={3}
            lg={2}
            className=""
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <Card style={{ boxShadow: hoveredProduct === product.id ? '50px 50px 50px rgba(0, 0, 0, 0.3)' : 'none' }}>
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <button className='btn btn-outline-secondary border' target="_blank" variant="outline-secondary" onClick={handleContinueClick}>
                  Comprar
                </button>
                <button className='btn btn-outline-secondary border' target="_blank" variant="outline-secondary" onClick={handleContinueClick}>
                  Añadir al carrito
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Ofertas;
