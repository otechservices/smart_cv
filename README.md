# CV Master - Frontend Angular

Ce projet est le frontend Angular pour l'application CV Master, une plateforme de gestion de CV, de génération de lettres de motivation assistée par IA, et de candidature automatisée.

## Stack Technique

- **Angular**: Dernière version, utilisée comme framework principal.
- **TailwindCSS**: Pour le style via des classes utilitaires.
- **PrimeNG**: Pour la bibliothèque de composants UI (tables, boutons, cartes, etc.).
- **Reactive Forms**: Pour la construction de formulaires dynamiques et robustes.
- **jsPDF**: Pour la génération des CV au format PDF côté client.
- **TypeScript**: Pour un code typé et plus sûr.

## Structure du Projet

L'application est conçue selon une architecture modulaire pour séparer les responsabilités et assurer une bonne maintenabilité.

- `src/app/core/`: Contient les services singletons, le `LayoutComponent` principal, et la logique du sélecteur de thème. Tous les services qui communiquent avec le backend se trouvent dans `src/app/core/services/`.
- `src/app/modules/`: Contient les modules fonctionnels.
  - `cv/`: Gère la création, l'édition et la prévisualisation des CV.
  - `job/`: Gère la génération de lettres de motivation et le suivi des candidatures.
  - `user/`: Gère les fonctionnalités liées à l'utilisateur, comme les abonnements.
- `src/app/shared/`: Un module destiné à partager des composants, directives ou pipes communs à travers les autres modules.

## Démarrage Rapide

### Prérequis

- Node.js et npm installés sur votre machine.
- Angular CLI installé globalement : `npm install -g @angular/cli`

### Installation

1.  Clonez le dépôt de ce projet.
2.  Installez les dépendances du projet :
    ```bash
    npm install
    ```

### Lancer le serveur de développement

Exécutez la commande suivante pour démarrer le serveur de développement local :

```bash
ng serve
```

L'application sera alors accessible à l'adresse `http://localhost:4200/`.

## Connexion au Backend (Laravel)

Toute la communication avec le backend est centralisée dans les services situés dans le répertoire `src/app/core/services/`. Ces services utilisent le `HttpClient` d'Angular.

Actuellement, l'URL de l'API est une valeur de remplacement (`http://localhost:8000/api`). Pour connecter l'application à votre backend Laravel, vous devrez :

1.  Mettre à jour la propriété `apiUrl` dans chaque service concerné (`CvService`, `JobService`, `AIService`, `SubscriptionService`).
2.  **Recommandation :** Utiliser les fichiers d'environnement d'Angular (`src/environments/`) pour gérer les différentes URL d'API entre l'environnement de développement et de production.

---
Ce projet constitue une base solide et complète pour une application web moderne de gestion de CV.
