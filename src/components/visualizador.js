import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const visualizador = () => {
    const elementos = useContext(GlobalContext);
    console.log(elementos);

    return <div>Prueba Contexto</div>;
}

export default visualizador;