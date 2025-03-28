import React from "react";
import { Tarjeta } from "../App";

interface Props {
    info: Tarjeta;
}


const InfoExtra:React.FC<Props> = ({info}) => {
    return(
        <div>
            <h2>Información Extra de{info.nombre}</h2>
            <p>Potencia: {info.potencia} W</p>
            <p>Carga: {info.carga} W</p>
            <p>Velocidad: {info.velocidad} GB/s</p>
        </div>
    )
}

export default InfoExtra;