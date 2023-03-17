/*
import React from "react";

//on créé le composant fonctionnel
//entre {} on destructure les props pour récupérer path et component
const AuthenticatedRoute = ({ path, component }) => {
    //on récupère notre contexte (Le Contexte offre un moyen de faire passer des données à travers 
    //l’arborescence du composant sans avoir à passer manuellement les props à chaque niveau.)
    //et on lui dit de l'utiliser
    const { isAuthenticated } = useContext(Auth);
    
    // si on est auth on retourne ce composant
    return isAuthenticated ? (
        <Route exact path={path} component={component} />
    ) : (
        //sinon redirection vers login
        <Redirect to="/login" />
        )
}

export default AuthenticatedRoute;
*/