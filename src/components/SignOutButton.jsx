import React, { useEffect } from "react";
import { useMsal } from "@azure/msal-react";
import Button from '@material-ui/core/Button';

/* Importaciones del buscador */

import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

/* Fin de las importaciones del buscador */

/* Estilos del buscador */
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        marginRight: 4,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

/**
 * Renderiza boton de Buscador y Logout
 */
export const SignOutButton = ( {buscar, setBuscar} ) => {

    const { instance } = useMsal();
    const classes = useStyles();

    const { name, enter } = buscar;
    
    const handleEnter = ({ target, key }) => {
        if (key === 'Enter') {
            console.log("Se intentan buscar las coincidencias de: ", target.value);
            setBuscar(
                {
                    ...buscar,
                    [ target.name ]: target.value,
                    enter : true
                }
            );
        }
    }

    const handleChange = ({ target }) => {
        
        setBuscar(
            {
                ...buscar,
                [ target.name ]: target.value,
                enter : false
            }
        );
    }
    
    const handleLogout = (logoutType) => {
        if (logoutType === "popup") {
            instance.logoutPopup({
                postLogoutRedirectUri: "/",
                mainWindowRedirectUri: "/"
            });
        } else if (logoutType === "redirect") {
            instance.logoutRedirect({
                postLogoutRedirectUri: "/",
            });
        }
    }
    return (
        <>  
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    name="name"
                    placeholder="Buscar..."
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    value={ name }
                    onKeyPress={ handleEnter }
                    onChange={ (e) => handleChange(e) }
                    autoComplete="off"
                    />
            </div>
            
            <Button className="btn btn-primary" variant="contained" color="secondary" drop="left" onClick={() => handleLogout("redirect")}>
                Cerrar Sesión
            </Button>
        </>
    )
}