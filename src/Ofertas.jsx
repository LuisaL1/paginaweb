import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineHeart, AiFillHeart, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Image1 from './Catalogo/Image1.jpg';
import Image2 from './Catalogo/Image2.jpg';
import Image3 from './Catalogo/Image3.jpg';
import Image9 from './Catalogo/image9.jpg';
import Image10 from './Catalogo/Image10.jpg';
import Image11 from './Catalogo/Image11.jpg';
import Cart from './Cart'; 

const products = [
  {
    id: 1,
    name: 'Camisa manga larga Unisex',
    price: 30000,
    image: Image1,
  },
  {
    id: 2,
    name: 'Chaqueta térmica Hombre',
    price: 89900,
    image: Image2,
  },
  {
    id: 3,
    name: 'Chaqueta térmica Mujer',
    price: 98000,
    image: Image3,
  },
  {
    id: 4,
    name: 'Suéter Spring Mujer',
    price: 50000,
    image: Image9,
  },
  {
    id: 5,
    name: 'Vestido de gala Zahara',
    price: 95000,
    image: Image10,
  },
  {
    id: 6,
    name: 'Falda rosa Spring Gamusa',
    price: 25000,
    image: Image11,
  }
];

const Ofertas = () => {
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
          <span style={{ position: 'absolute', top: '0', right: '0', backgroundColor: 'red', borderRadius: '50%', padding: '2px 6px', color: 'red' }}>
            {cartItemCount}
          </span>
        )}
      </AiOutlineShoppingCart>
      <h2 className="d-flex flex-column align-items-center" style={titleStyle}>
      🌟Ofertas especiales🌟
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
            md={2}
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
          <Modal.Body >
            <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: '50%',display: 'block', margin: 'auto' }} />
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

export default Ofertas;
