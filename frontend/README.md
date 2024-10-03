# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Utilisation 


## Démarrer le projet

Pour démarrer le projet, vous devez d'abord cloner le dépôt et installer les dépendances. Utilisez les commandes suivantes :

-- git clone https://github.com/adamKHTML/TPCleanArchi.git
-- cd Card
-- npm install

## Lancer le serveur

Pour démarrer le serveur backend, exécutez :

-- npm start 

Cela va démarrer le serveur sur http://localhost:3000. Assurez-vous que le serveur est en cours d'exécution pour que votre application frontend puisse communiquer avec lui.

## Lancer le frontend
Pour démarrer le frontend, exécutez :

-- npm run dev 

Cela va ouvrir votre application frontend dans le navigateur à l'adresse http://localhost:5173

## Fonctionnalité d'ajout de produits

Lorsque vous ajoutez des produits via le formulaire, les informations (nom et prix) sont envoyées au serveur et ajoutées au panier. La page se met à jour dynamiquement pour afficher le total du panier ainsi que les produits actuellement dans le panier, sans avoir besoin de recharger la page.