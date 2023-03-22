// Permet le stockage, l'ajout, la suppression de données de connexion dans le cache du navigateur web de l'utilisateur

// Supprime la donnée
export function removeItem(itemToRemove) {
    window.localStorage.removeItem(itemToRemove);
}

// Récupère la donnée
export function getItem(item) {
    return window.localStorage.getItem(item);
}

// Ajoute une nouvelle donnée
export function addItem(localStorageName, newItem) {
    window.localStorage.setItem(localStorageName, newItem);
}