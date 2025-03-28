import React from "react";
import { Tarjeta } from "../App";
import Cards from "./Cards";
import InfoExtra from "./InfoExtra";
import { useState } from "react";
import InputMsg from "./InputMsg";
import { Link } from "react-router-dom";
import Modal from "react-modal";

interface Props {
  tarjetas: Tarjeta[];
}
Modal.setAppElement("#root");
const ListaCards: React.FC<Props> = ({ tarjetas }) => {
  const [info, setInfo] = useState({
    id: 0,
    nombre: "",
    potencia: 0,
    carga: 0,
    velocidad: 0,
    foto: "",
  });
  const [infoExtra, setInfoExtra] = useState(false);
  //Integración del modal:

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const customStyles = {
    content: {
      color: "black",
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  //Termina integración
  return (
    <>
      <div className="inputMsg">
        <p>Enviamos un mensaje: </p>
        <InputMsg />
      </div>
      <div className="tarjetas">
        {tarjetas.map((tarjeta) => (
          <div
            key={tarjeta.id}
            className="tarjeta"
            onClick={() => {
              setInfo(tarjeta);
              setInfoExtra(true);
              setModalIsOpen(true);
            }}
          >
            <Cards tarjeta={tarjeta} />
          </div>
        ))}
      </div>
      <div className={`${infoExtra ? "infoExtraActiva" : "infoExtra"}`}>
        <InfoExtra info={info} />
      </div>
      <Link to="/form">Ir Formulario</Link>
      <div className="infoModal">

      </div>
      <Modal
      isOpen={modalIsOpen}
      onAfterOpen={() => setModalIsOpen(true)}
      onRequestClose={() => setModalIsOpen(false)}
      style={customStyles}
      contentLabel="Example Modal">
        <h2>Información Extra de {info.nombre}</h2>
        <p>Potencia: {info.potencia} W</p>
        <p>Carga: {info.carga} W</p>
        <p>Velocidad: {info.velocidad} GB/s</p>
        <button onClick={() => setModalIsOpen(false)}>Cerrar</button>
      </Modal>
    </>
  );
};

export default ListaCards;
