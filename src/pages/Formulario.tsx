import React, { useState } from "react";

const Formulario: React.FC = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const datos = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`Nombre: ${nombre}`)
        console.log(`Nombre: ${apellido}`)
    }

    return(
        <form onSubmit={datos}>
            <input type="email" placeholder="Ingresa email" onChange={(e)=>{setNombre(e.target.value)}}/>
            <input type="password" placeholder="Ingresa contraseña" onChange={(e)=>{setApellido(e.target.value)}}/>
            <button type="submit">Agregar</button>
        </form>
    )
}

export default Formulario;
