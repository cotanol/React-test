/*
    Cambiar el color de fondo
    Implementar una pequeña aplicacion que permita cambiar el color de fondo
    de la pagina al hacer click en botones de diferentes colores
    Trabajar con eventos de onClick y aplicar estilos en linea
*/

import { useState } from "react";

const ColoresBackground = () => {
  // El estado `color` almacena el color de fondo actual
  const [color, setColor] = useState<string>("");

  // Cambia el color de fondo al color especificado
  const cambiarColor = (nuevoColor: string) => {
    setColor(nuevoColor); // Establece el color pasado como argumento
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{ backgroundColor: color }} // Aplica el color de fondo dinámicamente
    >
      <button onClick={() => cambiarColor("red")} className="p-2 mb-2 bg-red-500 text-white rounded">
        Rojo
      </button>
      <button onClick={() => cambiarColor("blue")} className="p-2 mb-2 bg-blue-500 text-white rounded">
        Azul
      </button>
      <button onClick={() => cambiarColor("yellow")} className="p-2 mb-2 bg-yellow-500 text-white rounded">
        Amarillo
      </button>
      <button onClick={() => cambiarColor("pink")} className="p-2 mb-2 bg-pink-500 text-white rounded">
        Rosado
      </button>
    </div>
  );
};

export default ColoresBackground;


