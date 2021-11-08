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
import pdf from './images/Archivo.png';
import carpeta from './images/FolderImg.png';
import './album.css';
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function Copyright() {
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

function handleClick(event) {
  /* event.preventDefault(); */
  // En esta funcion debo eliminar todos los elementos de la lista del breadcrumb que esten despues del elemento seleccionado, es decir esta funcion debe tener un setState que me permita borrar elementos de mi estado.
  console.info('You clicked a breadcrumb.');
}

const SimpleBreadcrumbs = ({lista}) => {

  return (
    <Breadcrumbs aria-label="breadcrumb" align="center">
        {lista.map( (directorioRecorrido) => (
          <Link key={directorioRecorrido} color="inherit" href="/" onClick={handleClick}>
            {directorioRecorrido}
          </Link>))}
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
  const [breadcrumb, setBreadcrumb] = useState(['Pasantia Orlando']);
  const url_name = 'http://localhost:4000/api/folders/';
  const [urlApi, setUrlApi] = useState('http://localhost:5000');
  const [folders,setFolders] = useState();
  const location = useLocation();
  let history = useHistory();
  let match = useRouteMatch();
  let {path, url, params} = useRouteMatch();

  useEffect(() => {
    console.log("mi useRouteMatch es: ", match );
    console.log("mi ruta es: ", url);
    
  }, [location])

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
    fetchApi()
  }, [])

  function handleOpen(event, cards, nombre, urlApi) {
    /* event.preventDefault(); */
    setUrlApi( `${urlApi}/${ encodeURI(nombre) }`);
    setFolders([...cards]);
    setBreadcrumb([...breadcrumb, nombre]);
    
    
    { !params.directory ? history.push(`${nombre}`) : history.push(`${params.directory}/${nombre}/`) }
    console.log("Mi url: ", url );


/*     history.push(`${url}/${nombre}`)
    { !} */
    
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <SimpleBreadcrumbs lista={[...breadcrumb]} /> 
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
                    image={card.type == "file" ? pdf : carpeta }
                  />
                  <CardContent className={classes.cardContent}>

                    <Typography>
                      {card.name}
                    </Typography>
                    <hr />

                  </CardContent>
                  <CardActions>
                    {card.type == "directory" ? 
                      <>
                        <Button size="small" onClick={(event) => handleOpen(event, [...card.children], card.name, urlApi)}>
                          Abrir Directorio
                        </Button>
                      </> : 
                      <Button href={`${urlApi}/${card.name}`} size="small" target="_blank">
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