/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from "react";

import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";

/* Importaciones para Material UI toolbar */

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

/* Definiciones de Variables para Material UI toolbar */

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  /**
   * Renderiza el Componente Navbar con un boton de log-in o log-out dependiendo de si el usuario esta autenticado o no.
   * @param props 
   */

  export const PageLayout = (props) => {
      const isAuthenticated = useIsAuthenticated();
      const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                    Plataforma de Autenticación de Microsoft
                    </Typography>
                    { isAuthenticated ? <SignOutButton /> : <SignInButton /> }
                </Toolbar>
                </AppBar>
            </div>

            <br></br>
            {props.children}
        </>
    );
};
