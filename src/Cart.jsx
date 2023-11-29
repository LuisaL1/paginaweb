import React from 'react';
import Modal from 'react-bootstrap/Modal';

const Cart = ({ cartItems, show, onClose }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Carrito de Compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>Precio: ${item.price}</p>
            <hr />
          </div>
        ))}
        <p>Total: ${calculateTotal()}</p>
      </Modal.Body>
    </Modal>
  );
};

export default Cart;
