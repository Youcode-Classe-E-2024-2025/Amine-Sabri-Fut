# Application FUT Team Builder

Cette application permet aux utilisateurs de créer leur équipe Ultimate Team (FUT) en ajoutant, positionnant et modifiant des joueurs selon différentes formations tactiques, tout en offrant une expérience interactive et intuitive.

---

## Fonctionnalités Clés

### Intégration UI et Ajout Dynamique des Joueurs
- Formulaire pour ajouter des joueurs avec des champs pour :
  - Nom
  - Position
  - Note
  - Statistiques
- Positions adaptées en fonction de la formation tactique choisie (ex. 4-3-3 ou 4-4-2).

### Positionnement des Joueurs
- Positions respectant la formation sélectionnée :
  - **4-3-3** : 1 GK, 2 CB, 1 LB, 1 RB, 3 CM, 1 LW, 1 RW, 1 ST.
  - **4-4-2** : 1 GK, 2 CB, 1 LB, 1 RB, 2 CM, 1 RM, 1 LM, 2 ST.
- Adaptation automatique des positions selon les changements de formation.

### Gestion des Cartes des Joueurs
- Ajout, modification et suppression des cartes via l’interface.
- Limitation à 11 joueurs dans la formation principale.
- Les joueurs supplémentaires sont réservés pour les remplacements.

### Calcul de la Chimie de l’Équipe (Bonus)
- Calcul basé sur :
  - Position correcte : +10 points.
  - Liens forts (club) : +3 points.
  - Liens moyens (ligue) : +2 points par joueur adjacent.
  - Nationalité partagée : +1 point.
- Score total de chimie normalisé sur une échelle de 0 à 100.
- Affichage visuel des liaisons fortes/faibles.

### Formulaires Dynamiques et Validation
- Ajout/suppression de joueurs dynamiquement.
- Validation des champs (nom, position, note, etc.) pour garantir la cohérence des données.

### Sauvegarde et Chargement des Données (Bonus)
- Stockage des formations et données des joueurs via `localStorage`.
- Chargement automatique des données à l'ouverture de l'application.

### Drag & Drop pour le Réarrangement (Bonus)
- Fonctionnalité de glisser-déposer pour repositionner les joueurs.

### Changement Dynamique de Formation (Bonus)
- Mise à jour automatique des positions lors d’un changement de formation.

### Responsive Design
- Interface adaptative (mobile, tablette, desktop).

---

## Technologies Utilisées
- **HTML**
- **CSS** (natif ou framework comme Tailwind CSS/Bootstrap)
- **JavaScript** (DOM natif)

---

## User Stories

### 1. Création d’une Équipe de 11 Joueurs
- **En tant qu'utilisateur**, je veux ajouter des joueurs via un formulaire dynamique avec un maximum de 11 joueurs.
- **Critères d’acceptation** :
  - Ajouter/modifier/supprimer des joueurs.
  - Validation des champs du formulaire.

### 2. Adaptation de la Formation
- **En tant qu'utilisateur**, je veux changer la formation et voir les positions des joueurs ajustées.
- **Critères d’acceptation** :
  - Sélection de formations prédéfinies.
  - Ajustement automatique des positions.

### 3. Calcul du Score de Chimie
- **En tant qu'utilisateur**, je veux voir le score de chimie de mon équipe pour optimiser sa composition.
- **Critères d’acceptation** :
  - Mise à jour dynamique du score.
  - Mise en évidence des liaisons visuellement.

### 4. Sauvegarde et Récupération des Données
- **En tant qu'utilisateur**, je veux que mes données soient sauvegardées pour les retrouver plus tard.
- **Critères d’acceptation** :
  - Sauvegarde via `localStorage`.
  - Chargement automatique des données au démarrage.

### 5. Gestion Dynamique des Joueurs
- **En tant qu'utilisateur**, je veux ajouter ou supprimer des joueurs dans l’interface.
- **Critères d’acceptation** :
  - Gestion via un formulaire dynamique.
  - Ajustement des positions et du nombre de joueurs.

---

## Installation et Lancement
1. Clonez le dépôt :  
   ```bash
   git clone https://github.com/username/fut-team-builder.git
