import React, { useState, useEffect,useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
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
import visualizador from './visualizador';
import pdf from './images/Archivo.png';
import carpeta from './images/FolderImg.png';
import './album.css'

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
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function SimpleBreadcrumbs() {
  return (
    <Breadcrumbs aria-label="breadcrumb" align="center" variant="outlined">
      <Link color="inherit" href="/" onClick={handleClick}>
        c
      </Link>
      <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
        Users
      </Link>
      <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
        adminvencer
      </Link>
      <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
        Documents
      </Link>
      <Typography color="textPrimary">PasantiaOrlando</Typography>
    </Breadcrumbs>
  );
}

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
  
  const elementos = useContext(GlobalContext);
  console.log(elementos.carpeta);
  const classes = useStyles();
  const url = 'http://localhost:4000/api/folders/';
  const [folders,setFolders] = useState()
  const fetchApi = async () => {
    const response = await fetch(url)
    console.log(response.status)
    const responseJSON = await response.json()
    setFolders(responseJSON)
  }
  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <SimpleBreadcrumbs align="center"/> 
        </Container>
        {/* Hero unit */}
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            { !folders ? 'Cargando' :
            folders.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4} key={card.name}>
                <Card className={classes.card}>
                  <CardMedia
                    name={card.name}
                    className={classes.cardMedia}
                    image={card.type == "file" ? pdf : carpeta }
                  />
                  <CardContent className={classes.cardContent}>

                    <Typography gutterBottom variant="h6" component="h2">
                      {card.name}
                    </Typography>

                  </CardContent>
                  <CardActions>
                    {card.type == "directory" ? 
                      <>
                        <Button size="small" color="primary">
                          Abrir Directorio
                        </Button>
                      </> : 
                      <Button href={"http://localhost:5000/" + card.name} size="small" color="primary" target="_blank">
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