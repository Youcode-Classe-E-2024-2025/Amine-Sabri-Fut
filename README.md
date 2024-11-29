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
