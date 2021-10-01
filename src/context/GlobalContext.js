import { createContext, useReducer }  from 'react';
import appReducer from './AppReducer';

export const TrialsContext = createContext({
  "pruebita" : true
});

const carpetaEnBlanco = {};

export const GlobalContext = createContext(carpetaEnBlanco);

export const ContextProvider = ({children}) => {

  const addState = () => {
    console.log("Colocando en el estado los elementos de /"); 
  };

  return (
    <GlobalContext.Provider value={ { ...carpetaEnBlanco, addState} }>
      {children}
    </GlobalContext.Provider>
  );
};