import React from 'react';

const InputMsg: React.FC = () => {
    const cambio = (e: any) =>{
        console.log(e.target.value);
    }
    
    return(
        <input type="text" onChange={(e)=>cambio(e)} />
    )
}

export default InputMsg;