import React from 'react';

const Añadir = () => {
  const onAddProduct = () => {
    // Aquí deberías colocar la lógica para añadir el producto al carrito
    // Puedes abrir una nueva ventana con la información del producto
    const productInfo = 'Información del producto a agregar al carrito';
    const newWindow = window.open('', '_blank');
    newWindow.document.write(productInfo);
  };

  return (
    <div>
      <div>Añadir</div>
      <button onClick={onAddProduct}>
        Añadir al carrito
      </button>
    </div>
  );
};

export default Añadir;




