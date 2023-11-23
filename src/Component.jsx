import React, { useState } from 'react';

export default function Component() {
  const [text, setText] = useState('');

  const textOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={textOnChange} />
      <button>Buscar</button>
      <p>Hombre</p>
      <p>Mujer</p>
      <p>Accesorios</p>
    </div>
  );
}

