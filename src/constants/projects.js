// src/constants/projects.js
import JCKN from "../assets/image/latreJCKN.png";
import QuickEvent from "../assets/image/quickEvent.png";
import Portfolio from "../assets/image/heroPortfolio.png";

export const projects = [
  {
    titre: "Portfolio BTS SIO",
    description:
      "Mon portfolio personnel présentant mon parcours, mes compétences et mes projets réalisés durant ma formation BTS SIO option SLAM.",
    categorie: "web",
    icon: "🎨",
    technologies: ["React", "TailwindCSS", "Vite", "Javascript"],
    github: "https://github.com/Jay-Joel/portfolio-bts/tree/main",
    demo: "#",
    image: Portfolio,

    details: {
      objectif:
        "Créer une vitrine numérique professionnelle pour présenter mon profil, mes compétences et mes projets.",
      objectifs: [
        "Présenter mon profil de développeur",
        "Centraliser mes projets",
        "Améliorer ma visibilité professionnelle",
        "Travailler l’UX/UI",
        "Créer une interface responsive",
      ],
      technologies: "React, TailwindCSS, Vite, Javascript, PHP, MySQL, Git",
      architecture:
        "Application front-end modulaire avec des composants réutilisables.",
      fonctionnalites: [
        "Navigation fluide",
        "Design responsive",
        "Présentation des projets",
        "Liens GitHub / démos",
      ],
      difficultes: [
        "Structuration du design",
        "Gestion du responsive",
        "Organisation des composants",
      ],
      resultats:
        "Portfolio fonctionnel utilisé comme support professionnel en entretien.",
      ameliorations: ["Mode sombre", "Animations avancées", "Blog technique"],
      pitch:
        "Ce projet m’a permis de structurer une interface complète et professionnelle orientée utilisateur.",
    },
  },

  {
    titre: "Gestion d'évènements",
    description: "Application de gestion d'événements.",
    categorie: "mobile",
    icon: "🏛️",
    technologies: [
      "React",
      "TailwindCSS",
      "Vite",
      "Javascript",
      "PHP",
      "MySQL",
    ],
    github: "https://github.com/",
    demo: "#",
    image: QuickEvent,

    details: {
      objectif:
        "Créer une application permettant de gérer des événements de manière centralisée.",
      objectifs: [
        "Créer et gérer des événements",
        "Gérer les participants",
        "Organiser les données",
        "Automatiser certaines tâches",
      ],
      technologies: "React, TailwindCSS, Vite, Javascript, PHP, MySQL",
      architecture:
        "Architecture client / serveur avec API REST et base de données.",
      fonctionnalites: [
        "CRUD événements",
        "Gestion participants",
        "Recherche et filtres",
      ],
      difficultes: [
        "Synchronisation front/back",
        "Gestion des relations",
        "Validation des données",
      ],
      resultats:
        "Application full-stack fonctionnelle avec API opérationnelle.",
      ameliorations: [
        "Notifications email",
        "Calendrier interactif",
        "Système de rôles",
      ],
      pitch:
        "Projet full-stack m’ayant permis de comprendre la gestion d’une API complète.",
    },
  },

  {
    titre: "Gestion d'inventaire",
    description:
      "Application de gestion de stock permettant le suivi des produits.",
    categorie: "web",
    icon: "👗",
    technologies: [
      "React",
      "TailwindCSS",
      "Vite",
      "Javascript",
      "PHP",
      "MySQL",
    ],
    github: "https://github.com/",
    demo: "#",
    image: JCKN,

    details: {
      objectif:
        "Créer un système de gestion de stock simulant un outil d’entreprise.",
      objectifs: [
        "Suivre les produits",
        "Gérer les quantités",
        "Optimiser la gestion",
      ],
      technologies: "React, TailwindCSS, Vite, Javascript, PHP, MySQL",
      architecture: "Application avec API REST et base de données structurée.",
      fonctionnalites: [
        "Ajout / suppression produits",
        "Mise à jour stock",
        "Recherche produits",
      ],
      difficultes: [
        "Cohérence des données",
        "Mise à jour temps réel",
        "Gestion des erreurs",
      ],
      resultats: "Application fonctionnelle simulant un outil de gestion réel.",
      ameliorations: ["Statistiques", "Export PDF", "Alertes stock faible"],
      pitch:
        "Projet orienté métier m’ayant appris la gestion de données dynamiques.",
    },
  },
];
