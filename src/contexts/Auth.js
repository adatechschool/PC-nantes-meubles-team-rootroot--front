import React from "react";

// Initialisation de la variable isAuthenticated, qui sera 'false' par défaut
// c'est-à-dire que l'utilisateur n'est par défaut pas connecté
export default React.createContext({
    isAuthenticated: false
})