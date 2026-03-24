#  Projet : Student Dashboard

## Objectif

Créer une application web permettant de gérer des étudiants et leurs notes en utilisant **HTML, CSS et JavaScript**.

---

## Compétences visées

- Manipulation du DOM
- Utilisation des tableaux et objets
- Fonctions JavaScript
- Conditions et boucles
- Gestion des erreurs (`try...catch`)
- Manipulation dynamique des données

---

##  Fonctionnalités à développer

### 1. Ajouter un étudiant
- Un champ input pour saisir le nom
- Un bouton pour ajouter
- Empêcher les noms vides
- Empêcher les doublons

---

### 2. Ajouter une note
- Sélectionner un étudiant dans une liste
- Saisir une note
- Ajouter la note à l’étudiant
- Vérifier que la note est valide (entre 0 et 20)

---

### 3. Afficher les étudiants dans un tableau

Créer un tableau HTML avec les colonnes suivantes :

- Nom
- Notes
- Moyenne

 Les données doivent être générées dynamiquement avec JavaScript

---

### 4. Calculer la moyenne

- Créer une fonction `calculMoyenne(notes)`
- Utiliser une boucle pour calculer la somme
- Gérer les erreurs si les données sont invalides

---

### 5. Recherche

- Ajouter un champ de recherche
- Filtrer les étudiants par nom en temps réel
- Utiliser `.filter()`

---

### 6. Meilleur étudiant

- Afficher l’étudiant avec la meilleure moyenne
- Mettre en évidence ce résultat

---

##  Gestion des erreurs (OBLIGATOIRE)

Utiliser `try...catch` dans :

- ajout d’étudiant
- ajout de note
- calcul de moyenne

Afficher les erreurs avec `alert()` ou `console.error()`

---

##  Structure du projet
project/
├── index.html
├── style.css
├── script.js
├── functions.js
├── arrays.js


---

##  Contraintes techniques

- Utiliser au moins :
  - 1 tableau
  - 1 objet
  - 3 fonctions
  - 1 boucle `for`
- Séparer la logique en plusieurs fichiers JS
- Code lisible et organisé

---

##  Bonus (optionnel)

- Supprimer un étudiant
- Trier les étudiants par moyenne
- Sauvegarder les données avec `localStorage`
- Améliorer le design

---

##  Livraison

- Projet hébergé sur GitHub
- Minimum **20 commits**
- Branches :
  - `main`
  - `develop`
  il faut un read me qui doit décrire le projet 
  push à partir de git hub (sur le site web)

---

## Exemple de structure de données

```js
{
  name: "Alice",
  notes: [12, 15, 18]
}

// à préparer jeudi
créer une fonction (dans le js) et affiche le résultat de cette fonction dans le html