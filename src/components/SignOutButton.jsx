import React from "react";
import { useMsal } from "@azure/msal-react";
import Button from '@material-ui/core/Button';

/**
 * Renders a sign-out button
 */
export const SignOutButton = () => {
    const { instance } = useMsal();

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
        <Button class="btn btn-primary" variant="primary" className="ml-auto" drop="left" onClick={() => handleLogout("redirect")}>
            Cerrar Sesión
        </Button>
    )
}