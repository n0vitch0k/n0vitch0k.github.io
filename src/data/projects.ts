export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  tag: string;
  title: string;
  status: string;
  description: string;
  features: string[];
  stack: string[];
  metrics: ProjectMetric[];
  mainImage: { src: string; alt: string; contain?: boolean };
  /** Galerie en format portrait (screenshots mobiles 9:16) */
  portrait?: boolean;
  gallery: { src: string; alt: string }[];
  /** null → placeholder honnête en attendant un vrai témoignage */
  testimonial: { quote: string; author: string } | null;
  links: { label: string; href?: string; primary?: boolean }[];
}

export const PROJECTS: Project[] = [
  {
    id: 'chrisroi-agence-apk',
    tag: 'Mobile · Expo / React Native · Android',
    title: 'ChrisRoi Agence — Application mobile',
    status: 'Livré & en production',
    description:
      "Application Android interne utilisée par les agents de ChrisRoi Agence, agence de placement de personnel domestique à Abidjan. Elle numérise toute la chaîne papier : fiche d'inscription complète, génération du contrat de placement A4 (2 pages, fidèle au document officiel), impression, signature, puis scan du contrat signé et suivi des commissions. Les données sont centralisées sur un backend PocketBase hébergé sur le VPS (HTTPS, sous-domaine dédié) — le même serveur qui héberge la version web.",
    features: [
      "Fiche d'inscription complète (photo, parents, urgences, expériences)",
      'Scanner IA (OCR Gemini) : scan des fiches et contrats papier → données structurées',
      'Contrat A4 2 pages généré, imprimé (expo-print), puis signé et scanné',
      'Commissions automatiques et suivi des échéances',
      'Alertes et notifications locales J-7 / J-3 / jour J (fin de contrat, commission due)',
      'Tableau de bord « Aujourd’hui » + calendrier (inscriptions, contrats, commissions)',
      "Journal d'activité et recherche globale",
    ],
    stack: [
      'Expo SDK 57',
      'React Native 0.86',
      'React 19',
      'TypeScript',
      'PocketBase (VPS HTTPS)',
      'React Navigation',
      'React Native Paper',
      'expo-print',
      'EAS Build',
    ],
    metrics: [
      { value: '16', label: 'Écrans' },
      { value: 'OCR IA', label: 'Scanner Gemini' },
      { value: 'APK', label: 'EAS production' },
    ],
    mainImage: {
      src: 'screenshots/apk-01.webp',
      alt: "Fiche d'inscription — identité du candidat",
      contain: true,
    },
    portrait: true,
    gallery: [
      { src: 'screenshots/apk-03.webp', alt: 'Tableau de bord « Aujourd’hui » — actions rapides' },
      { src: 'screenshots/apk-04.webp', alt: 'Dossiers — liste des candidats avec recherche et filtres' },
      { src: 'screenshots/apk-05.webp', alt: 'Impression du contrat A4 (2 pages) — données floutées' },
      { src: 'screenshots/apk-02.webp', alt: 'Écran de connexion' },
    ],
    /* Témoignage retiré : l'ancien texte était inventé.
       À remplacer par un retour réel du gérant de l'agence. */
    testimonial: null,
    links: [],
  },
  {
    id: 'christ-roi-personnel-web',
    tag: 'Web · React + Vite · Site public + Admin',
    title: 'Christ-Roi Personnel — Plateforme web',
    status: 'Livré & en production',
    description:
      "Site public de recrutement et de placement de personnel à Abidjan — offres d'emploi & profils de candidats — doublé d'un panneau d'administration : tableau de bord (compteurs + activité récente), gestion des candidats, des offres, des messages et des utilisateurs. Backend PocketBase (authentification + données). En production sur chrisroiagence.com (VPS nginx, backend PocketBase).",
    features: [
      "Site public : offres & profils (recherche, filtres, pagination)",
      'Fiches détaillées en modales (offre / candidat / intérêt)',
      "Formulaires d'intérêt et de contact → messages centralisés",
      'Admin : tableau de bord, candidats, offres, messages, utilisateurs',
      'Authentification PocketBase + rôles',
      'Notifications sonner + ErrorBoundary global',
      'SEO OpenGraph + 100% responsive',
    ],
    stack: [
      'React 18',
      'Vite 6',
      'TypeScript',
      'Tailwind CSS 3.4',
      'Radix UI',
      'React Router 6',
      'PocketBase',
      'Sonner',
    ],
    metrics: [
      { value: 'Live', label: 'chrisroiagence.com' },
      { value: '2-en-1', label: 'Site public + admin' },
      { value: 'VPS', label: 'nginx + PocketBase' },
    ],
    mainImage: {
      src: 'screenshots/site-desktop-hero.webp',
      alt: 'Site public chrisroiagence.com — accueil',
    },
    gallery: [
      { src: 'screenshots/site-desktop-valeurs.webp', alt: 'Section « Le sérieux et la confiance avant tout » — à propos' },
      { src: 'screenshots/site-desktop-services.webp', alt: 'Section « Que recherchez-vous ? » — candidats & recruteurs' },
      { src: 'screenshots/site-desktop-contact.webp', alt: 'Section contact' },
      { src: 'screenshots/site-mobile-hero.webp', alt: 'Vue mobile — accueil' },
    ],
    testimonial: null,
    links: [{ label: 'Voir le site', href: 'https://chrisroiagence.com', primary: true }],
  },
];
