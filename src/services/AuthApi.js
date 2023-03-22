import { getItem, addItem, removeItem } from './LocalStorage.js';

// Par défaut, on considère que l'utilisateur n'est pas connecté
export function hasAuthenticated() {
    return false;
}

// Exportée ici, importée dans './pages/Login.js'
// C'est ici que l'on devrait gérer les histoires de token
export function login() {
    
}


// Exemple de à quoi ça doit ressembler :

import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { getItem, addItem, removeItem } from './LocalStorage';

// Lorsque la personne se connecte, on récupère son token et on vérifie qu'il soit toujours valide
export function hasAuthenticated() {
    const token = getItem('miniblogToken');
    const result = token ? tokenIsValid(token) : false;

    if (false === result) {
        removeItem('miniblogToken');
    }

    return result;
}

// Dans le projet du tuto, il y a une vérification API de l'authentification.
// Si l'utilisateur connecté correspond à un utilisateur de la base de donnée, on lui attribue un token
// et je suppose qu'on fait passer sa validité ou son état de personne connectée à true ? 
export function login(credentials) {
    return axios
        .post('http://miniblog.local:8888/api/login_check', credentials)
        .then(response => response.data.token)
        .then(token => {
            addItem('miniblogToken', token);

            return true;
        });
}

export function logout() {
    removeItem('miniblogToken');
}

// Vérification de la validité du token, ici avec une date d'expiration
function tokenIsValid(token) {
    const { exp: expiration } = jwtDecode(token);

    if (expiration * 1000 > new Date().getTime()) {
        return true;
    }

    return false;
}
