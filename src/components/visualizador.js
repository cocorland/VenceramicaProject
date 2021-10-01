import React, { useContext } from 'react';
import { GlobalContext, TrialsContext } from '../context/GlobalContext';

/* Vamos a acceder a esta pagina de prueba con la ruta /ver */
const visualizador = () => {
    const elementos = useContext(TrialsContext);
    console.log(elementos.SePuedeLeerPruebita);

    return <div>Prueba Contexto</div>;
}

export default visualizador;