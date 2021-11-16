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
import carpeta from './images/FOLDER.png';
import './album.css';
/* import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router'; */
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function Copyright() {
  /* Complemento del Footer.
  Componente renderizado para complementar el Footer. */

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Mi sitio web de proyectos realizados:
      </Link>{'https://github.com/cocorland'}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function handleClick(event, breadcrumb, setBreadcrumb, setFolders, recorrido, setRecorrido ) {
  /* Manejador de eventos.
  Controla las acciones que se realizan al hacer click en cualquiera de los niveles del breadcrumb */ 
    
  let historial = [...recorrido];
  const breadcrumbClickeado = (element) => element === event.target.innerText;
  const longitud = breadcrumb.findIndex(breadcrumbClickeado) + 1
  breadcrumb.length = longitud;
  historial.length = longitud;
  setRecorrido([...historial]);

  setFolders (
    recorrido[longitud]
  );
  
  setBreadcrumb( breadcrumb );
}

const SimpleBreadcrumbs = ( { breadcrumb, setBreadcrumb, setFolders, recorrido, setRecorrido } ) => {
  /* Componente encargado de la renderizacion del breadcrumb.
  Todos los elementos anteriores al ultimo deben ser clickeables. El ultimo elemento indica en que nivel del directorio estoy. */

  let arreglo = [...breadcrumb]
  arreglo.pop();

  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb" align="center">
        {arreglo.map( (directorioRecorrido) => (
          <Link underline="hover" color="primary" key={directorioRecorrido} onClick={ ( event ) => handleClick( event, [...breadcrumb], setBreadcrumb, setFolders, [...recorrido], setRecorrido ) }>
            {directorioRecorrido}
          </Link>))}
        <Typography color="inherit">{ breadcrumb[breadcrumb.length - 1] }</Typography>
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

export default function Album() {

  const classes = useStyles();
  const [recorrido, setRecorrido] = useState([]);
  const [breadcrumb, setBreadcrumb] = useState(['PasantiaOrlando']);
  const url_name = 'http://localhost:4000/api/folders/';
  const [urlApiServe, setUrlApiServe] = useState('http://localhost:5000');
  const [buscar, setBuscar] = useState('https:localhost:5000');
  const [folders,setFolders] = useState();
  /* const location = useLocation(); */
  /* let history = useHistory(); */
  /* let match = useRouteMatch(); */
  /* let {path, url, params} = useRouteMatch(); */
  
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

  }, [folders]);

  useEffect(() => {
    
    let caminito = breadcrumb.map( (ruta) => encodeURI(ruta) );
    caminito.shift();
    let ruta2 = 'http://localhost:5000/' + caminito.join('/');
    setBuscar(ruta2);

  }, [folders]);


  const displayImage = (param) => {
    switch(param) {
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


  function handleOpen(event, cards, nombre, urlApi) {
    /* event.preventDefault(); */
    setUrlApiServe( `${urlApi}/${ encodeURI(nombre) }`);
    setFolders([...cards]);
    setBreadcrumb([...breadcrumb, nombre]);
    
    /* { !params.directory ? history.push(`${nombre}`) : history.push(`${params.directory}/${nombre}/`) } */
    /* console.log("Mi url: ", url ); */

/*     history.push(`${url}/${nombre}`)
    { !} */
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <SimpleBreadcrumbs breadcrumb={ [...breadcrumb] } setBreadcrumb={ setBreadcrumb } setFolders={setFolders} recorrido={recorrido} setRecorrido={setRecorrido} /> 
        </Container>
        {/* Hero unit */}
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            { !folders ? ' No se ha podido acceder a los datos del servidor. ' :
            folders.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4} key={card.name}>
                <Card className={classes.card}>
                  <CardMedia
                    name={card.name}
                    className={classes.cardMedia}
                    image={ card.type == "directory" ? carpeta : displayImage(card.extension) }
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
                        <Button size="small" onClick={(event) => handleOpen(event, [...card.children], card.name, urlApiServe)}>
                          Abrir Directorio
                        </Button>
                      </> : 
                      <Button href={`${buscar}/${card.name}`} size="small" target="_blank">
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
          <li><a>Diseño, Implementación, Gestión, Elaboración y Mantenimiento realizado por: </a></li>
          <li><a>Orlando Chaparro Salazar</a></li>
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}