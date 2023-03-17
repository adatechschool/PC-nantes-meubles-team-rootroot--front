Projet front : 

1. Cloner le repo 
2. Se créer une branche 
3. Commande dans le terminal : npm i (pour installer toutes les dépendances et les bons packages)
4. Commande : npm start (pour lancer la vue dans le navigateur)
5. Commande : ctrl + c (pour déconnecter le serveur)

Architecture : 

Dossier Components : contient les différents éléments des différentes pages (boutons, card, header, footer...)
Dossier Pages : contient les composants globaux des pages (un composant pour une page)
Dossier Assets : contient les images, svg. 
Fichier App.js : là où tout est appelé. 
Fichier App.css : style global du site, sinon chaque composant à son propre css. 

Comment ça marche React ? 

Tout fonctionne en composants. L'idée est d'en faire des adaptables : le composant ne contient que sa structure, et on lui envoie des informations via les props. 
Les props, ce sont l'équivalent des propriétés : permet de changer la couleur, le texte, le prix, etc. en fonction de ce qu'on lui envoie depuis la base de données. 
Chaque composant importe les autres composants dont il a besoin en début de fichier, puis s'exporte à la fin pour qu'il puisse être utilisé par la suite. 

Ce qu'il reste à faire : 

- Les fetch pour récupérer les datas et les envoyer dans les différents composants
- Les liens et les actions liés aux boutons
- Ajouter des liens depuis la page home pour accéder aux pages Admin et Login
- gérer les sessions 
- Ajuster le css pour toutes les pages 

À noter : 
On n'utilise bootstrap que pour le tableau de gestion dans la page Admin (ajout des meubles etc.). 
