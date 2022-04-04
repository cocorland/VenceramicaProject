import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
// Proyecto Listo.
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import pdf from './images/PDF.png';
import jpg from './images/JPG.png';
import doc from './images/DOC.png';
import file from './images/FILE.png';
import carpeta from './images/FOLDER2.png';
import './album.css';


function Copyright() {
  /* Complemento del Footer.
  Componente renderizado para complementar el Footer. */

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © Mi sitio web de proyectos realizados: '}
      <Link color="inherit" href="https://github.com/cocorland">
        {'https://github.com/cocorland'}
      </Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const buscarBreadcrumb = (breadcrumb, foldersOriginal, result) => {

  let buscaRuta = `\\Users\\adminvencer\\Documents\\${breadcrumb.join('\\')}`;

  let i,
    currentChild;

  for (i = 0; i < foldersOriginal.length; i += 1) {
    if (foldersOriginal[i].path == buscaRuta) {
      console.log("Este es el resultado en la funcion: ", foldersOriginal[i].children)
      result.push(foldersOriginal[i].children)

    } else {
      if (foldersOriginal[i].children) {
        currentChild = foldersOriginal[i].children

        buscarBreadcrumb(breadcrumb, currentChild, result)
      }
    }
  }
  /* Este comentario es importante por que me muestra los procesos realizados. OJO. DESCOMENTARLO Y RESOLVER. */
  /* console.log("Lo que la funcion buscarBreadcrumb va a retornar: ", result) */
}

function handleClick(event, breadcrumb, setBreadcrumb, folders, setFolders, recorrido, setRecorrido, foldersOriginal, setConsegui, actual, setActual, setEnter) {

  /* Manejador de eventos.
  Controla las acciones que se realizan al hacer click en cualquiera de los niveles del breadcrumb */

  // setConsegui(true);
  let historial = [...recorrido];
  const breadcrumbClickeado = (element) => element === event.target.innerText;
  const longitud = breadcrumb.findIndex(breadcrumbClickeado) + 1
  breadcrumb.length = longitud;
  historial.length = longitud;
  setRecorrido([...historial]);

  let result = [];
  buscarBreadcrumb(breadcrumb, foldersOriginal, result);
  console.log("Result al terminar la funcion buscar: ", result[0]);

  if (result[0]) {
    setFolders(result[0]);
    setActual(result[0]);
  } else {
    setFolders(foldersOriginal);
    setActual(foldersOriginal);
  }
  // setFolders(recorrido[longitud])

  setBreadcrumb(breadcrumb);
  setEnter({ name: '', enter: false });
}

const SimpleBreadcrumbs = ({ breadcrumb, setBreadcrumb, folders, setFolders, recorrido, setRecorrido, foldersOriginal, setConsegui, actual, setActual, setEnter }) => {
  /* Componente encargado de la renderizacion del breadcrumb.
  Todos los elementos anteriores al ultimo deben ser clickeables. El ultimo elemento indica en que nivel del directorio estoy. */

  let arreglo = [...breadcrumb]
  arreglo.pop();

  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb" align="center">
      {arreglo.map((directorioRecorrido) => (
        <Button
          underline="hover"
          color="primary"
          key={directorioRecorrido}
          onClick={(event) => handleClick
            (
              event, [...breadcrumb], setBreadcrumb, folders, setFolders, [...recorrido], setRecorrido, foldersOriginal, setConsegui, actual, setActual, setEnter
            )
          }>
          {directorioRecorrido}
        </Button>))}
      <Button underline="hover" color="inherit">{breadcrumb[breadcrumb.length - 1]}</Button>
    </Breadcrumbs>
  )
};

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function findNode(name, folders, finalArray) {
  // Devuelve en el arreglo <finalArray> a todos los objetos que coincidan con el elemento <name> a buscar.
  let i,
    currentChild,
    result;

  for (i = 0; i < folders.length; i += 1) {
    if (folders[i].name.includes(name)) {
      finalArray.push(folders[i])

      if (folders[i].children) {
        currentChild = folders[i].children

        result = findNode(name, currentChild, finalArray)
      }

    } else {
      if (folders[i].children) {
        currentChild = folders[i].children

        result = findNode(name, currentChild, finalArray)
      }
    }
  }
  return finalArray
}

export default function Album(props) {

  // Declaracion de estilos.
  const classes = useStyles();
  // Cadena de texto para hacer request a la API 1.
  const url_name = 'http://10.20.4.251:4000/api/folders';
  // Desestructuracion de las variables y estados que provienen del buscador.
  const { buscar: buscador, setBuscar: setEnter } = props;
  // Estado que mantiene el recorrido de directorios desde el cual provengo en caso de navegacion.
  const [recorrido, setRecorrido] = useState([]);
  // Estado que mantiene el breadcrumb.
  const [breadcrumb, setBreadcrumb] = useState(['COMPAÑÍAS']);
  // Estado para mantener la ruta a la cual se realiza el request de un archivo.
  const [buscar, setBuscar] = useState('https:localhost:5000');
  // Estado en el que se almacenara todo el arbol de directorios importado del json y se modifica para mostrar directorio actual.
  const [folders, setFolders] = useState();
  // Estado para almacenar el arbol y que siempre se mantenga.
  const [foldersOriginal, setFoldersOriginal] = useState();
  // Estado para mantener una referencia fija a la carpeta donde estoy. (Cambia al abrir una carpeta o seleccionar un breadcrumb).
  const [actual, setActual] = useState();
  // Estado para saber si obtuve o no resultados en las busquedas.
  const [consegui, setConsegui] = useState(true)

  const fetchApi = async () => {
    try {
      const response = await fetch(url_name)
      console.log(response.status)
      const responseJSON = await response.json()
      setFolders(responseJSON)
      setFoldersOriginal(responseJSON)
      setActual(responseJSON)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchApi();
  }, [])

  useEffect(() => {
    setRecorrido([...recorrido, folders]);
    let caminito = breadcrumb.map((ruta) => encodeURI(ruta));
    caminito.shift();
    let ruta2 = 'http://localhost:5000/' + caminito.join('/');
    setBuscar(ruta2);

  }, [folders]);

  useEffect(() => {
    /* Efecto que dispara el buscador despues de que folders se cargue por primera vez */
    /* Si la palabra a buscar excede los 7 caracteres, la funcion "findNode" es llamada. Si no, hay que presionar Enter. */
    let b = buscador.name.toUpperCase();
    if (folders) {
      if (buscador.name.length > 7) {
        // El buscador autocompleta la busqueda a partir de 7 caracteres.
        let hallado = buscador.name.match(/\w/);
        if (hallado) {
          let finalArray = [];
          let arregloDeCoincidencias = findNode(b, actual, finalArray);
          setFolders(arregloDeCoincidencias);
          if (arregloDeCoincidencias.length == 0) {
            setConsegui(false)
          }
          else {
            console.log(`Encontre ${arregloDeCoincidencias.length} resultados.`);
          }
        }
      }
    }

    if (buscador.enter) {
      // Intenta determinar si el elemento a buscar coincide con una palabra o numero valido mediante una expresion regular.
      let hallado = b.match(/\w/);
      if (b.length == 0) {
        console.log('Busqueda vacia, muestra la carpeta actual.');
        setFolders(actual);
      }
      if (hallado) {
        let finalArray = [];
        let arregloDeCoincidencias = findNode(b, actual, finalArray);
        setFolders(arregloDeCoincidencias);
        if (arregloDeCoincidencias.length == 0) {
          setConsegui(false)
        }
        else {
          console.log(`Encontre ${arregloDeCoincidencias.length} resultados.`);
        }
      }
    }
  }, [buscador])

  const displayImage = (param) => {
    switch (param) {
      case param = '.pdf':
        return pdf;
      case param = '.jpg':
        return jpg;
      case param = '.docx':
        return doc;
      default:
        return file;
    }
  }

  function handleOpen(event, cards, path) {
    /* event.preventDefault(); */
    setFolders([...cards]);
    setActual([...cards]);
    /* setBreadcrumb([...breadcrumb, nombre]); */
    
    let setearElBreadcrumb = path.split(/\\/).splice(4);
    /* setearElBreadcumb debe devolver el conjunto que será mapeado por el componente breadcrumb  */
    /* por ejemplo, ['COMPAÑÍAS', 'VENCERÁMICA']. Esto lo obtengo mediante la ruta original, y la funcion splice  */
    
    setBreadcrumb([...setearElBreadcrumb]);
    setConsegui(true);
    setEnter({ name: '', enter: false })
  };

  function handleView(event, path) {
    /* Funcion para obtener la ruta en la cual visualizar la imagen. Permite visualizar imagenes encontradas mediante el buscador. */
    let setearLaVista = path.split(/\\/).splice(5);

    setBuscar(`http://localhost:5000/${setearLaVista.join('/')}`);
  }

  const MostrarRuta = ({ ruta }) => {

    let setearLaVista = ruta.split(/\\/).splice(4).join('/');

    return (
      <p className="breakAll">
        {setearLaVista}
      </p>
    )
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <SimpleBreadcrumbs
            breadcrumb={[...breadcrumb]}
            setBreadcrumb={setBreadcrumb}
            folders={folders}
            setFolders={setFolders}
            recorrido={recorrido}
            setRecorrido={setRecorrido}
            foldersOriginal={foldersOriginal}
            actual={actual}
            setActual={setActual}
            setEnter={setEnter} />
        </Container>
        {/* Hero unit */}
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {!folders ? <div className="alert alert-danger"> No se pudo acceder a la base de datos del servidor </div> :
              (folders.length == 0 ?
                (consegui == true ?
                  <div className="alert alert-danger"> Esta carpeta esta vacia </div> :
                  <div className="alert alert-danger"> No consegui resultados. Actualice la página o ingrese otra búsqueda. </div>)
                :
                (folders.map((card) => (
                  <Grid item xs={12} sm={6} md={4} key={`${card.name}${card.path}`}>
                    <Card className="animate__animated animate__fadeIn animate__fast">
                      <CardMedia                                                                                 
                        name={card.name}
                        className={classes.cardMedia}
                        image={card.type == "directory" ? carpeta : displayImage(card.extension)}
                      />
                      <CardContent className={classes.cardContent}>

                        <Typography gutterBottom variant="h6" component="h2">
                          {card.name}
                        </Typography>
                        {
                          buscador.enter ?
                            <MostrarRuta ruta={card.path} /> :
                            <> </>
                        }
                        <hr />

                      </CardContent>

                      <CardActions>
                        {card.type == "directory" ?
                          <Button size="small" onClick={(event) => handleOpen(event, [...card.children], card.path)}>
                            Abrir Directorio
                          </Button>
                          :
                          <Button onClick={(event) => handleView(event, card.path)} href={`${buscar}`} size="small" target="_blank">
                            Ver
                          </Button>
                        }
                      </CardActions>
                    </Card>
                  </Grid>
                )))
              )
            }
          </Grid>
        </Container>

      </main>

      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Departamento de Informática Vencerámica
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          <a>Página web propiedad de Vencerámica Venezuela.</a>
          <li><a>Diseño, Implementación, Gestión y Mantenimiento realizado por: </a></li>
          <li><a>Orlando Chaparro Salazar</a></li>
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>

  );
}