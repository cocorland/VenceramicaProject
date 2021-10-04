# Single-Page Application Front-End desarrollado para Venceramica Venezuela

La Empresa Venezolana de Cerámicas de Venezuela necesita una aplicación web que le permita a sus empleados la lectura de los archivos almacenados en su base de datos principal. Debido a esto nace el Proyecto Omni-Page (POP) descrito a continuación.

## Características

Este proyecto web cuenta con las siguientes características en su funcionalidad:

* Login con la API de ActiveDirectory para permitir el acceso a usuarios con dirección @venceramica.com
* Logout
* Acceso condicional a directorios dependiendo de los permisos del usuario
* Acceso a directorios mediante un árbol de directorios similar al FileSystem de Windows
* Acceso a la lectura de archivos pdf públicos de Vencerámica y empresas asociadas

## Contents

| File/folder       | Description                                |
|-------------------|--------------------------------------------|
| `src`             | Archivos Fuente               |
| `styles`          | Estilos para la Aplicación y el índice            |
| `components`      | Componentes principales como el Álbum para mostrar los elementos y la Barra de Navegación |
| `public`          | Contenido estático como la imágenes del frontend y el favicon   |
| `authConfig.js`   | Parámetros de Configuración relacionados a microsoft y ActiveDirectory      |
| `App.jsx`         | Contiene los componentes de React para inicializar la Aplicación |
| `index.js`        | Contiene el componente raíz y MsalProvider |
| `.gitignore`      | Define los elementos a ignorar al momento de hacer el commit      |
| `CHANGELOG.md`    | Lista de cambios             |
| `CONTRIBUTING.md` | Guías para contribuir al proyecto |
| `package.json`    | Declaraciones de paquetes utilizados por npm                  |
| `README.md`       | Archivo ReadME                          |
| `LICENSE`         | Licencia del Proyecto                |

**Nota:** Este Proyecto ha sido desarrollado utilizando la biblioteca React [Create React App](https://github.com/facebook/create-react-app).

## Inicialización

### Pre-Requisitos:

[Node.js](https://nodejs.org/en/) Instalado.

### Setup

1. [Register a new application](https://docs.microsoft.com/azure/active-directory/develop/scenario-spa-app-registration) in the [Azure Portal](https://portal.azure.com). Ensure that the application is enabled for the [authorization code flow with PKCE](https://docs.microsoft.com/azure/active-directory/develop/v2-oauth2-auth-code-flow). This will require that you redirect URI configured in the portal is of type `SPA`.
1. Clone this repository `git clone https://github.com/Azure-Samples/ms-identity-javascript-react-spa.git`
1. Open the [/src/authConfig.js](./src/authConfig.js) file and provide the required configuration values.
1. On the command line, navigate to the root of the repository, and run `npm install` to install the project dependencies via npm.

## Running the sample

1. Configure authentication and authorization parameters:
   1. Open `src/authConfig.js`
   2. Replace the string `"Enter_the_Application_Id_Here"` with your app/client ID on AAD Portal.
   3. Replace the string `"Enter_the_Cloud_Instance_Id_HereEnter_the_Tenant_Info_Here"` with `"https://login.microsoftonline.com/common/"` (*note*: This is for multi-tenant applications located on the global Azure cloud. For more information, see the [documentation](https://docs.microsoft.com/azure/active-directory/develop/quickstart-v2-javascript-auth-code)).
   4. Replace the string `"Enter_the_Redirect_Uri_Here"` with the redirect uri you setup on AAD Portal.
2. Configure the parameters for calling MS Graph API:
   2. Replace the string `"Enter_the_Graph_Endpoint_Herev1.0/me"` with `"https://graph.microsoft.com/v1.0/me"` (*note*: This is for MS Graph instance located on the global Azure cloud. For more information, see the [documentation](https://docs.microsoft.com/en-us/graph/deployments))
3. To start the sample application, run `npm start`.
4. Finally, open a browser and navigate to [http://localhost:3000](http://localhost:3000).

## Contribuciones

El Desarrollo de este proyecto está concebido como un pseudo requisito del proyecto de pasantías largas para optar al título de Ingeniero de La Computación. No obstante, cualquier contribución será aceptada y bien recibida.
