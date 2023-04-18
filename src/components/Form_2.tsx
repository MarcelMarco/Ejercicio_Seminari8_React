import React, { useState } from 'react';

function Form2() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Lógica para enviar el formulario, por ejemplo, enviar los datos al servidor o actualizar el estado global de la aplicación.
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Descripción:
        <textarea name="description" value={description} onChange={(event) => setDescription(event.target.value)} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Form2;
