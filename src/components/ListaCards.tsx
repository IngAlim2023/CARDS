import React from "react";
import { Tarjeta } from "../App";
import Cards from "./Cards";
import InfoExtra from "./InfoExtra";
import { useState } from "react";
import InputMsg from "./InputMsg";

interface Props {
  tarjetas: Tarjeta[];
}

const ListaCards: React.FC<Props> = ({ tarjetas }) => {
  const [info, setInfo] = useState({
    id: 0,
    nombre: "",
    potencia: 0,
    carga: 0,
    velocidad: 0,
    foto: ""
  });
  const [infoExtra, setInfoExtra] = useState(false);

  return (
    <><div className="inputMsg">
        <p>Enviamos un mensaje: </p>
        <InputMsg/>
    </div>
      <div className="tarjetas">
        {tarjetas.map((tarjeta) => (
          <div key={tarjeta.id} className="tarjeta" onClick={() => {
            setInfo(tarjeta)
            setInfoExtra(true)
            ;}}>
            <Cards tarjeta={tarjeta} />
          </div>
        ))}
      </div>
      <div className={`${infoExtra ? "infoExtraActiva" : "infoExtra"}`}>
        <InfoExtra info={info}/>
      </div>
    </>
  );
};

export default ListaCards;
