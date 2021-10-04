/* Este modulo basicamente es una funcion */

export default function AppReducer(state, action) {
    /*  Voy a recibir:
        - state: Mi estado. Que datos tiene actualmente la aplicacion
        - action: Indico que quiero hacer o que quiero actualizar  */
    
    /* Para las pruebas, le estoy pasando {type: 'OPEN_FOLDER'} este seria el parametro 'action' */
    
    console.log(state, action);
    return {
        carpetas: [...state.carpetas, action.payload],
    };
}