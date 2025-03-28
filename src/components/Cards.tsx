import React from "react";
import { Tarjeta } from "../App";

interface Prop {
  tarjeta: Tarjeta;
}

const Cards: React.FC<Prop> = ({ tarjeta }) => {
  const click = () => {
    alert(
      `Potencia: ${tarjeta.potencia} W\nCarga: ${tarjeta.carga} W\nVelocidad: ${tarjeta.velocidad} GB/s`
    );
  };
  return (
    <div>
      <h2>{tarjeta.nombre}</h2>
      <img src={tarjeta.foto} alt={tarjeta.nombre} className="imgCard" />
      <p>Potencia: {tarjeta.potencia} W</p>
      <p>Carga: {tarjeta.carga} W</p>
      <p>Velocidad: {tarjeta.velocidad} GB/s</p>
      <button
        onClick={() => {
          click();
        }}
      >
        Más información
      </button>
    </div>
  );
};

export default Cards;
