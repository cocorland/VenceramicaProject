import React, { useState } from "react";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import { PageLayout } from "./components/PageLayout";
import { ProfileData } from "./components/ProfileData";
import { callMsGraph } from "./graph";
import Button from "react-bootstrap/Button";
import "./styles/App.css";
import Album from "./components/album";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


/**
 * Renders information about the signed-in user or a button to retrieve data about the user
 */
  
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


const ProfileContent = () => {
    const classes = useStyles();
    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = useState(null);

    function RequestProfileData() {
        // Silently acquires an access token which is then attached to a request for MS Graph data
        instance.acquireTokenSilent({
            ...loginRequest,
            account: accounts[0]
        }).then((response) => {
            callMsGraph(response.accessToken).then(response => setGraphData(response));
        });
    }

    return (
        <>
            <Container maxWidth="sm">
            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                Bienvenido(a) {accounts[0].name}
            </Typography>
            <Typography variant="h7" align="center" color="textSecondary" paragraph>
                Te damos la bienvenida al sistema de visualización de archivos de vencerámica venezuela, te encuentras en
                el servidor principal. Utilizando el sistema de navegación por tarjetas puedes dirigirte al archivo que
                necesitas, o puedes esperar a que implemente el buscador cuando me de la gana.
            </Typography>
            <div className={classes.heroButtons}>

                {graphData ? 
                    <ProfileData graphData={graphData} />
                    :
                    <Button variant="secondary" onClick={RequestProfileData}>Request Profile Information</Button>
                }

            </div>
          </Container>
        </>
    );
};

/**
 * If a user is authenticated the ProfileContent component above is rendered. Otherwise a message indicating a user is not authenticated is rendered.
 */
const MainContent = () => {    
    return (
        <div className="App">
            <AuthenticatedTemplate>
                <ProfileContent />
                <Album />
            </AuthenticatedTemplate>

            <UnauthenticatedTemplate>
                <h5><center>Bienvenido(a) al Sistema de Visualización de Archivos de Vencerámica</center></h5>
                <br />
                <h5 className="card-title">Por favor, inicia sesión.</h5>
            </UnauthenticatedTemplate>
        </div>
    );
};

export default function App() {
    return (
        <PageLayout>
            <MainContent />
        </PageLayout>
    );
}
