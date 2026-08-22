import type { ProjectMedia } from '@/lib/portfolio-data'

function screen(src: string, width: number, height: number, en: string, fr: string): ProjectMedia {
  return {
    src,
    kind: 'image',
    width,
    height,
    alt: { en: `CliniClic — ${en}.`, fr: `CliniClic — ${fr}.` },
    caption: { en, fr },
  }
}

export interface CliniclicMediaGroup {
  id: string
  title: { en: string; fr: string }
  description: { en: string; fr: string }
  media: ProjectMedia[]
}

export const cliniclicPublicHomepage = screen(
  '/projects/cliniclic/public-homepage.webp',
  1600,
  862,
  'public clinic homepage and patient entry points',
  'accueil public de la clinique et accès patient',
)

export const cliniclicDesktopApp = screen(
  '/projects/cliniclic/desktop-user-management.png',
  1448,
  1086,
  'JavaFX desktop administration client with user, role and account-status management',
  'client d’administration desktop JavaFX avec gestion des utilisateurs, rôles et statuts de compte',
)

export const cliniclicMobileApp = screen(
  '/projects/cliniclic/mobile-app-experience.png',
  1024,
  1421,
  'Codename One mobile client with authentication, events, complaints and profile screens',
  'client mobile Codename One avec authentification, événements, réclamations et profil',
)

export const cliniclicDemoVideo: ProjectMedia = {
  src: '/projects/cliniclic/cliniclic-demo.mp4',
  kind: 'video',
  width: 1280,
  height: 720,
  poster: '/projects/cliniclic/public-homepage.webp',
  alt: { en: 'CliniClic web application demonstration', fr: 'Démonstration de l’application web CliniClic' },
  caption: {
    en: 'Web walkthrough — registration, patient workspace, role-based navigation and public site (2 min 33 sec).',
    fr: 'Parcours web — inscription, espace patient, navigation par rôle et site public (2 min 33 s).',
  },
}

const publicMedia = [cliniclicPublicHomepage]

const adminMedia = [
  screen('/projects/cliniclic/admin-dashboard.webp', 1920, 1080, 'administrative overview and privacy-focused indicators', 'vue administrative et indicateurs respectant la confidentialité'),
  screen('/projects/cliniclic/admin/users.png', 1920, 1080, 'user and role management', 'gestion des utilisateurs et des rôles'),
  screen('/projects/cliniclic/admin/new-user.png', 1920, 1080, 'role-based account creation form', 'formulaire de création de compte par rôle'),
  screen('/projects/cliniclic/appointments.webp', 1920, 1080, 'appointment list, filters and statuses', 'liste, filtres et statuts des rendez-vous'),
  screen('/projects/cliniclic/admin/appointment-types.png', 1920, 1080, 'appointment type configuration and usage', 'configuration et utilisation des types de rendez-vous'),
  screen('/projects/cliniclic/admin/new-event.png', 1920, 1080, 'clinic event publication form', 'formulaire de publication d’un événement clinique'),
]

const doctorMedia = [
  screen('/projects/cliniclic/doctor-dashboard.webp', 1920, 1080, 'doctor dashboard with appointments and availability', 'tableau de bord médecin avec rendez-vous et disponibilités'),
]

const patientMedia = [
  screen('/projects/cliniclic/patient-dashboard.webp', 1920, 1080, 'patient dashboard with appointments and medical record access', 'tableau de bord patient avec rendez-vous et accès au dossier médical'),
]

export const cliniclicMediaGroups: CliniclicMediaGroup[] = [
  {
    id: 'public',
    title: { en: 'Public experience', fr: 'Expérience publique' },
    description: { en: 'Clinic presentation, services and entry points for account creation and sign-in.', fr: 'Présentation de la clinique, services et accès à la création de compte et à la connexion.' },
    media: publicMedia,
  },
  {
    id: 'desktop',
    title: { en: 'Desktop application', fr: 'Application desktop' },
    description: { en: 'JavaFX administration client for users, roles, appointments, events, complaints and operational tools.', fr: 'Client d’administration JavaFX pour les utilisateurs, rôles, rendez-vous, événements, réclamations et outils opérationnels.' },
    media: [cliniclicDesktopApp],
  },
  {
    id: 'mobile',
    title: { en: 'Mobile application', fr: 'Application mobile' },
    description: { en: 'Java Codename One client for authentication, profiles, events, categories, articles and complaints.', fr: 'Client Java Codename One pour l’authentification, les profils, événements, catégories, articles et réclamations.' },
    media: [cliniclicMobileApp],
  },
  {
    id: 'administration',
    title: { en: 'Administration', fr: 'Administration' },
    description: { en: 'Operational overview, users, appointments, configuration and event publishing.', fr: 'Vue opérationnelle, utilisateurs, rendez-vous, configuration et publication d’événements.' },
    media: adminMedia,
  },
  {
    id: 'doctor',
    title: { en: 'Doctor workspace', fr: 'Espace médecin' },
    description: { en: 'Role-specific access to appointments, availability and medical workflows.', fr: 'Accès adapté au rôle pour les rendez-vous, disponibilités et workflows médicaux.' },
    media: doctorMedia,
  },
  {
    id: 'patient',
    title: { en: 'Patient workspace', fr: 'Espace patient' },
    description: { en: 'Appointments, medical record entry point, events and profile actions.', fr: 'Rendez-vous, accès au dossier médical, événements et actions sur le profil.' },
    media: patientMedia,
  },
]
