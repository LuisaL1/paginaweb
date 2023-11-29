import React from 'react';

const Compra = () => {
  const titleStyle = {
    color: 'white',
    fontSize: '50px',  
  };
  const containerStyle = {
    paddingTop: '200px',
  };

  return (
    <container style={containerStyle}> 
      <div>
      <h1 style={titleStyle} className='text-center'>¡Gracias por su compra!</h1>
    </div>
    </container> 
  );
};

export default Compra;



