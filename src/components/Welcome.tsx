import { useState } from "react";

const Mensaje = () => {
  // Usamos una cadena vacía como valor inicial para el nombre
  const [nombre, setNombre] = useState("");

  // Manejador para actualizar el estado con el valor del input
  const inputModificado = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(event.target.value); // Actualiza el estado con el valor del input
  };

  return (
    <div>
      {/* El valor del input se actualiza con el estado */}
      <input
        type="text"
        onChange={inputModificado}
        placeholder="Escribe tu nombre"
      />
      {/* Mostramos el mensaje si el nombre no está vacío */}
      <p>{nombre ? `¡Bienvenido, ${nombre}!` : "Por favor, ingresa tu nombre."}</p>
    </div>
  );
};

export default Mensaje;
