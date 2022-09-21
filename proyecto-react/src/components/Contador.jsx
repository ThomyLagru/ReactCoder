import React, {useState} from 'react';

const Contador = () => {
    const [contador, setContador] = useState(0);
    function modificarContador(operacion) {
        if(operacion == "+"){
            setContador(contador + 1)
        } else {
            setContador(contador - 1)
        }
    }
    return (
        <>
            <button onClick={() => modificarContador("+")} className='btn primary'>Sumar</button>
            <button onClick={() => modificarContador("-")} className='btn danger'>Restar</button>
            {contador}
        </>
    );
}

export default Contador;
