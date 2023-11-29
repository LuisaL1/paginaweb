import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineHeart, AiFillHeart, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Image1 from './Accesorios/Image1.jpg';
import Image2 from './Accesorios/Image2.jpg';
import Image3 from './Accesorios/Image3.jpg';
import Image4 from './Accesorios/Image4.jpg';
import Image5 from './Accesorios/Image5.jpg';
import Image6 from './Accesorios/Image6.jpg';
import Image7 from './Accesorios/Image7.jpg';
import Image8 from './Accesorios/Image8.jpg';
import Image9 from './Accesorios/Image9.jpg';
import Image10 from './Accesorios/Image10.jpg';
import Image11 from './Accesorios/Image11.jpg';
import Image12 from './Accesorios/Image12.jpg';
import Cart from './Cart';

const products = [
  {
    id: 7,
    name: 'Collar Artesanal Multicolor',
    price: 35000,
    image: Image1,
  },
  {
    id: 8,
    name: 'Cadena República Italiana ',
    price: 29900,
    image: Image2,
  },
  {
    id: 9,
    name: 'Dúo Gafas Hawaii',
    price: 30000,
    image: Image3,
  },
  {
    id: 10,
    name: 'Dúo Gafas de Gato',
    price: 35000,
    image: Image4,
  },
  {
    id: 11,
    name: 'Gafas Redondas Spring',
    price: 95000,
    image: Image5,
  },
  {
    id: 12,
    name: 'Gorra NY Blanco-Café',
    price: 40000,
    image: Image6,
  },
  {
    id: 13,
    name: 'Gorra NY Blanco-Morado',
    price: 40000,
    image: Image7,
  },
  {
    id: 14,
    name: 'Gorra Ralph Lauren Azul',
    price: 50000,
    image: Image8,
  },
  {
    id: 15,
    name: 'Gorra NY Rosa',
    price: 40000,
    image: Image9,
  },
  {
    id: 16,
    name: 'Pulsera paño en Oro',
    price: 95000,
    image: Image10,
  },
  {
    id: 17,
    name: 'Pulsera trenzada paño en Oro',
    price: 100000,
    image: Image11,
  },
  {
    id: 18,
    name: 'Case para Iphone 13/ pro max',
    price: 30000,
    image: Image12,
  },
];

const Accesorios = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();
  const [cartItemCount, setCartItemCount] = useState(0); // Nuevo estado para contar los elementos en el carrito

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleContinueClick = (action) => {
    switch (action) {
      case 'Comprar':
        navigate('/Botones/Comprar');
        break;
      case 'Añadir':
        setShowModal(true);
        break;
      default:
        break;
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const onAddProduct = (product) => {
    setCartItems([...cartItems, product]);
    setSelectedProduct(product);
    setShowModal(true);
    
    // Actualiza el número de elementos en el carrito
    setCartItemCount(cartItemCount + 1);
  };

  const handleToggleCart = () => {
    setShowCart(!showCart);
  };

  const containerStyle = {
    backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(86,9,121,1) 35%, rgba(0,212,255,1) 1000%)',
    paddingTop: '50px',
  };

  const titleStyle = {
    color: 'white',
    fontSize: '50px',
  };

  const searchBarStyle = {
    width: '300px',
    margin: '10px',
  };

  return (
    <Container style={containerStyle}>
      <AiOutlineShoppingCart
        size={40}
        style={{ position: 'fixed', top: '120px', right: '150px', cursor: 'pointer', color: 'white' }}
        onClick={handleToggleCart}
      >
        {cartItemCount > 0 && (
          <span style={{ position: 'absolute', top: '0', right: '0', backgroundColor: 'red', borderRadius: '50%', padding: '2px 6px', color: 'white' }}>
            {cartItemCount}
          </span>
        )}
      </AiOutlineShoppingCart>
      <h2 className="d-flex flex-column align-items-center" style={titleStyle}>
        Accesorios
      </h2>
      <div>
        <div className="input-group mb-3" style={searchBarStyle}>
          <input
            type="text"
            className="form-control"
            placeholder="Buscar productos..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {searchText && (
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => setSearchText('')}
            >
              <AiOutlineSearch />
            </button>
          )}
        </div>
      </div>
      <Row className="d-flex justify-content-center">
        {filteredProducts.map((product) => (
          <Col
            key={product.id}
            md={3}
            className=""
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
            style={{ marginBottom: '20px' }}
          >
            <Card style={{ boxShadow: hoveredProduct === product.id ? '0 0 15px rgba(0, 0, 0, 0.3)' : 'none' }}>
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <button
                  className="btn btn-outline-secondary border"
                  target="_blank"
                  variant="outline-secondary"
                  onClick={() => handleContinueClick('Comprar')}
                >
                  Comprar
                </button>
                <button
                  className="btn btn-outline-secondary border"
                  target="_blank"
                  variant="outline-secondary"
                  onClick={() => onAddProduct(product)}
                  style={{ marginRight: '10px', justifyContent: 'right' }}
                >
                  Añadir al carrito
                </button>
                <div style={{ display: 'flex', justifyContent: 'right', marginTop: '10px' }}>
                  <AiOutlineHeart style={{ cursor: 'pointer', marginRight: '10px' }} />
                  <AiFillHeart style={{ cursor: 'pointer' }} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Cart cartItems={cartItems} show={showCart} onClose={handleToggleCart} />
      {selectedProduct && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '50%', display: 'block', margin: 'auto' }} />
            <p>Precio: ${selectedProduct.price}</p>
            {/* Otras propiedades del producto que quieras mostrar */}
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-secondary" onClick={handleCloseModal}>
              Cerrar
            </button>
            <button className="btn btn-primary" onClick={() => handleContinueClick('Comprar')}>
              Comprar
            </button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default Accesorios;


