import { createContext }  from 'react';

/* const initialState = { 
  "carpeta" : [
    {
      "path": "\\Users\\adminvencer\\Documents\\PasantiaOrlando\\POP_Directorios\\Ejemplo_2_PDF.pdf",
      "name": "Ejemplo_2_PDF.pdf",
      "size": 186239,
      "extension": ".pdf",
      "type": "file"
    },
    {
      "path": "\\Users\\adminvencer\\Documents\\PasantiaOrlando\\POP_Directorios\\POP_Directorios_2",
      "name": "POP_Directorios_2",
      "children": [
        {
          "path": "\\Users\\adminvencer\\Documents\\PasantiaOrlando\\POP_Directorios\\POP_Directorios_2\\Ejemplo_3_PDF.pdf",
          "name": "Ejemplo_3_PDF.pdf",
          "size": 186634,
          "extension": ".pdf",
          "type": "file"
        }
      ],
      "size": 186634,
      "type": "directory"
    }
  ]
} */

export const GlobalContext = createContext({ 
  "carpeta" : [
    {
      "path": "\\Users\\adminvencer\\Documents\\PasantiaOrlando\\POP_Directorios\\Ejemplo_2_PDF.pdf",
      "name": "Ejemplo_2_PDF.pdf",
      "size": 186239,
      "extension": ".pdf",
      "type": "file"
    },
    {
      "path": "\\Users\\adminvencer\\Documents\\PasantiaOrlando\\POP_Directorios\\POP_Directorios_2",
      "name": "POP_Directorios_2",
      "children": [
        {
          "path": "\\Users\\adminvencer\\Documents\\PasantiaOrlando\\POP_Directorios\\POP_Directorios_2\\Ejemplo_3_PDF.pdf",
          "name": "Ejemplo_3_PDF.pdf",
          "size": 186634,
          "extension": ".pdf",
          "type": "file"
        }
      ],
      "size": 186634,
      "type": "directory"
    }
  ]
})