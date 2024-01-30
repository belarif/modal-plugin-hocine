# Introduction

`plugin-modal-hocine` est une librairie qui fournit une modal. Cette modal s'affiche au clic sur un bouton.
La librairie permet de personnaliser la modale en modifiant :

- la valeur du bouton : de la prop `buttonValue`
- la taille du bouton : de la prop `buttonSize`
- le contenu de la modal : de la prop `modalContent`

## Technologies

- React
- TypeScript

## Visualisation de la modal sur Storybook

Pour voir à quoi ressemble le composant modal, vous devez d'abord cloner en local le répertoire du projet depuis GitHub comme suit :

        git clone https://github.com/belarif/modal-plugin-hocine.git

Ensuite, installez les dépendances, en exécutant la commande :

        npm install

Ensuite, lancez Storybook en exécutant la commande :

        npm run storybook

Enfin, depuis le navigateur, saisissez l'adresse :

        http://localhost:6006/

Qui va afficher le tableau de bord Storybook affichant la modal

## Installation de plugin-modal-hocine dans un projet React

Depuis votre terminal, positionnez-vous à la racine de votre projet qui va utiliser la librairie. Puis, exécutez :

        npm i modal-plugin-hocine

## Utilisation de plugin-modal-hocine:

Cet example montre comment utiliser la librairie dans un projet React
Vous devez fournir les valeurs des props :

- `buttonValue` : `string`
- `buttonSize` : `"small" | "middle" | "large"`
- `modalContent` : `string`

<pre>
```
import { Modal } from "modal-plugin-hocine";

const Example = () => {
  return (
    < >
    < Modal buttonValue={buttonValue} buttonSize={buttonSize} modalContent={modalContent}>
    < /Modal>     
    < />
  );
};

export default Example;
```
</pre>
