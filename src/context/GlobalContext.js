import { createContext, useReducer }  from 'react';
import appReducer from './AppReducer';

export const TrialsContext = createContext({
  "pruebita" : true
});

const carpetaEnBlanco = {
  carpetas: [
    {
      "pruebita" : "true",
    },
    {
      "pruebita" : "false",
    },
  ],
};

export const GlobalContext = createContext(carpetaEnBlanco);

export const ContextProvider = ({children}) => {

  /*  Creacion de funciones para que cuando yo llame a openFolder, averiguar qué tengo en el estado y actualicen el estado.
      appReducer va a ser mi reducer, es decir, va a ser el conjunto de condicionales.
      No tengo que ejecutar el appReducer, el encargado de ejecutarlo va a ser mi dispatch.  */

  const [state, dispatch] = useReducer(appReducer, carpetaEnBlanco)

  /* Aqui debo añadir una funcion que me permita cambiar de directorio (openFolder). */
  const openFolder = (folders) => {
    //console.log(folders);
    dispatch({type: 'OPEN_FOLDER', payload: 'nuevo'})
  }

  /* El value esta pasando en este momento el carpetaEnBlanco (initialState), tambien vamos a pasar la funcion openFolder */
  return (
    <GlobalContext.Provider value={ { ...state, openFolder} }>
      {children}
    </GlobalContext.Provider>
  );
};