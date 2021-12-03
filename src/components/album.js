import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
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

function handleClick(event, breadcrumb, setBreadcrumb, setFolders, recorrido, setRecorrido) {
  /* Manejador de eventos.
  Controla las acciones que se realizan al hacer click en cualquiera de los niveles del breadcrumb */

  let historial = [...recorrido];
  const breadcrumbClickeado = (element) => element === event.target.innerText;
  const longitud = breadcrumb.findIndex(breadcrumbClickeado) + 1
  breadcrumb.length = longitud;
  historial.length = longitud;
  setRecorrido([...historial]);

  setFolders(
    recorrido[longitud]
  );

  setBreadcrumb(breadcrumb);
}

const SimpleBreadcrumbs = ({ breadcrumb, setBreadcrumb, setFolders, recorrido, setRecorrido }) => {
  /* Componente encargado de la renderizacion del breadcrumb.
  Todos los elementos anteriores al ultimo deben ser clickeables. El ultimo elemento indica en que nivel del directorio estoy. */

  let arreglo = [...breadcrumb]
  arreglo.pop();

  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb" align="center">
      {arreglo.map((directorioRecorrido) => (
        <Link underline="hover" color="primary" key={directorioRecorrido} onClick={(event) => handleClick(event, [...breadcrumb], setBreadcrumb, setFolders, [...recorrido], setRecorrido)}>
          {directorioRecorrido}
        </Link>))}
      <Typography color="inherit">{breadcrumb[breadcrumb.length - 1]}</Typography>
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

/** Cantidad de tarjetas que voy a mostrar */
// const cards = ;

function findNode(name, folders, finalArray) {
  // Devuelve en el arreglo <finalArray> a todos los objetos que coincidan con el elemento <name> a buscar.
  let i,
    currentChild,
    result;
    
  for (i = 0; i < folders.length; i += 1) {
    if (folders[i].name.includes(name)) {
      finalArray.push( folders[i] )

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

  const { buscar: buscador } = props;
  const classes = useStyles();
  const [recorrido, setRecorrido] = useState([]);
  const [breadcrumb, setBreadcrumb] = useState(['PasantiaOrlando']);
  const url_name = 'http://localhost:4000/api/folders/';
  const [buscar, setBuscar] = useState('https:localhost:5000');
  const [folders, setFolders] = useState();

  const fetchApi = async () => {
    try {
      const response = await fetch(url_name)
      console.log(response.status)
      const responseJSON = await response.json()
      setFolders(responseJSON)
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
    /* Efecto que dispara el buscador despues de que folders se cargue por primera vez*/
    if (folders) {
      if (buscador.name.length > 7) {
        let finalArray = [];
        let arregloDeCoincidencias = findNode(buscador.name, folders, finalArray);
        setFolders( arregloDeCoincidencias )
  
      }
    }
    
    if (buscador.enter) {
      let finalArray = [];
      let arregloDeCoincidencias = findNode(buscador.name, folders, finalArray);
      setFolders( arregloDeCoincidencias )

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
    /* setBreadcrumb([...breadcrumb, nombre]); */
    let setearElBreadcrumb = path.split(/\\/).splice(4);
    setBreadcrumb([...setearElBreadcrumb]);

    /* { !params.directory ? history.push(`${nombre}`) : history.push(`${params.directory}/${nombre}/`) } */
    /* console.log("Mi url: ", url ); */

    /*     history.push(`${url}/${nombre}`)
        { !} */
  };

  function handleView(event, path) {
    /* Funcion para obtener la ruta en la cual visualizar la imagen. Permite visualizar imagenes encontradas mediante el buscador. */
    let setearLaVista = path.split(/\\/).splice(5);


    setBuscar( `http://localhost:5000/${setearLaVista.join('/')}` );
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <SimpleBreadcrumbs breadcrumb={[...breadcrumb]} setBreadcrumb={setBreadcrumb} setFolders={setFolders} recorrido={recorrido} setRecorrido={setRecorrido} />
        </Container>
        {/* Hero unit */}
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {!folders ? <div className="alert alert-danger"> No se pudo acceder a la base de datos del servidor </div> :
              folders.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4} key={`${card.name}${card.path}`}>
                  <Card className="animate__animated animate__fadeIn animate__fast">
                    <CardMedia
                      name={card.name}
                      className={classes.cardMedia}
                      image={card.type == "directory" ? carpeta : displayImage(card.extension)}
                    />
                    <CardContent className={classes.cardContent}>

                      <Typography variant="subtitle1" gutterBottom component="div">
                        {card.name}
                      </Typography>
                      <hr />

                    </CardContent>
                    <CardActions>
                      {card.type == "directory" ?
                        <>
                          <Button size="small" onClick={(event) => handleOpen(event, [...card.children], card.path)}>
                            Abrir Directorio
                          </Button>
                        </> :
                        <Button onClick={(event) => handleView(event, card.path)} href={`${buscar}`} size="small" target="_blank">
                          Ver
                        </Button>
                      }
                    </CardActions>
                  </Card>
                </Grid>
              ))}
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