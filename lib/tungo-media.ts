import type { ProjectMedia } from '@/lib/portfolio-data'

function screen(src: string, width: number, height: number, en: string, fr: string): ProjectMedia {
  return {
    src,
    kind: 'image',
    width,
    height,
    alt: { en: `TUNGO — ${en}.`, fr: `TUNGO — ${fr}.` },
    caption: { en, fr },
  }
}

export interface TungoMediaGroup {
  id: string
  title: { en: string; fr: string }
  description: { en: string; fr: string }
  layout: 'mobile' | 'wide'
  media: ProjectMedia[]
}

export const tungoReportCover = screen(
  '/projects/tungo/report-cover.png',
  1315,
  1784,
  'Final-year engineering report cover',
  'Couverture du rapport de projet de fin d’études',
)

export const tungoDemoVideo: ProjectMedia = {
  src: '/projects/tungo/tungo-demo.mp4',
  kind: 'video',
  width: 1280,
  height: 720,
  poster: '/projects/tungo/homepage.webp',
  alt: { en: 'Complete TUNGO platform demonstration', fr: 'Démonstration complète de la plateforme TUNGO' },
  caption: {
    en: 'Complete platform walkthrough — passenger, driver and web workflows (4 min 29 sec).',
    fr: 'Parcours complet de la plateforme — workflows passager, chauffeur et web (4 min 29 s).',
  },
}

const clientMedia = [
  screen('/projects/tungo/client/interface-d-accueil-du-client.png', 499, 885, 'Passenger home and service shortcuts', 'Accueil passager et raccourcis vers les services'),
  screen('/projects/tungo/passenger-current-reservation.webp', 496, 895, 'Current passenger reservation', 'Réservation actuelle du passager'),
  screen('/projects/tungo/passenger-live-tracking.webp', 523, 914, 'Passenger live tracking map', 'Suivi en temps réel côté passager'),
  screen('/projects/tungo/client/interface-de-choix-du-type-de-reservation.png', 499, 898, 'Reservation type selection', 'Choix du type de réservation'),
  screen('/projects/tungo/client/interface-de-choix-du-type-de-transport.png', 500, 895, 'Transport type selection', 'Choix du type de transport'),
  screen('/projects/tungo/client/interface-de-connexion-client.png', 501, 891, 'Passenger sign-in', 'Connexion du passager'),
  screen('/projects/tungo/client/interface-de-creation-d-une-nouvelle-recherche.png', 502, 891, 'New journey search', 'Création d’une nouvelle recherche'),
  screen('/projects/tungo/client/interface-de-l-historique-des-reservations.png', 503, 892, 'Reservation history', 'Historique des réservations'),
  screen('/projects/tungo/client/interface-de-modification-du-profil.png', 504, 895, 'Passenger profile editing', 'Modification du profil passager'),
  screen('/projects/tungo/client/interface-d-envoi-d-un-colis.png', 503, 892, 'Parcel shipment form', 'Formulaire d’envoi d’un colis'),
  screen('/projects/tungo/client/interface-de-recherche-bus.png', 500, 888, 'Bus journey results', 'Résultats de recherche de bus'),
  screen('/projects/tungo/client/interface-de-recherche-sur-carte.png', 500, 902, 'Map-based journey search', 'Recherche de trajet sur la carte'),
  screen('/projects/tungo/client/interface-de-recherche-train.png', 503, 898, 'Train journey results', 'Résultats de recherche de train'),
  screen('/projects/tungo/client/interface-de-reservation-de-vehicule-entier.png', 496, 867, 'Whole-vehicle reservation', 'Réservation d’un véhicule entier'),
  screen('/projects/tungo/client/interface-de-suivi-du-colis.png', 506, 897, 'Parcel tracking', 'Suivi d’un colis'),
  screen('/projects/tungo/client/interface-des-chauffeurs-disponibles.png', 505, 894, 'Available drivers', 'Chauffeurs disponibles'),
  screen('/projects/tungo/client/interface-des-conversations-du-chatbot.png', 503, 907, 'Assistant conversation list', 'Liste des conversations du chatbot'),
  screen('/projects/tungo/client/interface-du-profil-client.png', 501, 894, 'Passenger profile', 'Profil du passager'),
  screen('/projects/tungo/client/interface-d-inscription-client.png', 505, 891, 'Passenger registration', 'Inscription du passager'),
  screen('/projects/tungo/client/interface-onboarding-1.png', 498, 889, 'Passenger onboarding — step 1', 'Onboarding passager — étape 1'),
  screen('/projects/tungo/client/interface-onboarding-2.png', 499, 890, 'Passenger onboarding — step 2', 'Onboarding passager — étape 2'),
  screen('/projects/tungo/client/interface-onboarding-3.png', 500, 894, 'Passenger onboarding — step 3', 'Onboarding passager — étape 3'),
  screen('/projects/tungo/client/interface-onboarding-4.png', 503, 891, 'Passenger onboarding — step 4', 'Onboarding passager — étape 4'),
  screen('/projects/tungo/chatbot-home.webp', 504, 896, 'AI assistant home', 'Accueil du chatbot assisté par IA'),
  screen('/projects/tungo/client/interface-splash-de-demarrage-client.png', 487, 895, 'Passenger app splash screen', 'Écran de démarrage de l’application passager'),
  screen('/projects/tungo/client/capture-d-ecran-2025-12-07-042816.png', 501, 891, 'Additional passenger workflow screen', 'Écran complémentaire du parcours passager'),
]

const driverMedia = [
  screen('/projects/tungo/driver/interface-d-accueil-chauffeur.png', 500, 860, 'Driver home', 'Accueil chauffeur'),
  screen('/projects/tungo/driver-live-tracking.webp', 477, 906, 'Driver live route tracking', 'Suivi d’itinéraire en direct côté chauffeur'),
  screen('/projects/tungo/driver/interface-d-accueil-chauffeur-2.png', 502, 862, 'Driver home with active operations', 'Accueil chauffeur avec opérations actives'),
  screen('/projects/tungo/driver/interface-d-activation-du-suivi-en-direct.png', 500, 857, 'Live tracking activation', 'Activation du suivi en direct'),
  screen('/projects/tungo/driver/interface-de-l-historique-des-colis.png', 499, 862, 'Driver parcel history', 'Historique des colis du chauffeur'),
  screen('/projects/tungo/driver/interface-de-selection-de-l-itineraire.png', 499, 857, 'Route selection', 'Sélection de l’itinéraire'),
  screen('/projects/tungo/driver/interface-de-selection-du-vehicule.png', 500, 859, 'Vehicle selection', 'Sélection du véhicule'),
  screen('/projects/tungo/driver/interface-des-colis-en-livraison.png', 499, 861, 'Parcels in delivery', 'Colis en cours de livraison'),
  screen('/projects/tungo/driver/interface-des-colis-a-livrer.png', 499, 862, 'Parcels awaiting delivery', 'Colis à livrer'),
  screen('/projects/tungo/driver/interface-des-reservations-en-attente.png', 500, 857, 'Pending driver reservations', 'Réservations chauffeur en attente'),
  screen('/projects/tungo/driver/interface-des-trajets-confirmes.png', 502, 863, 'Confirmed driver journeys', 'Trajets chauffeur confirmés'),
  screen('/projects/tungo/driver/interface-detail-du-colis.png', 500, 859, 'Parcel delivery details', 'Détail d’un colis'),
  screen('/projects/tungo/driver/interface-d-inscription-chauffeur-1.png', 498, 862, 'Driver registration — step 1', 'Inscription chauffeur — étape 1'),
  screen('/projects/tungo/driver/interface-d-inscription-chauffeur-2.png', 504, 865, 'Driver registration — step 2', 'Inscription chauffeur — étape 2'),
  screen('/projects/tungo/driver/interface-d-inscription-chauffeur-3.png', 503, 857, 'Driver registration — step 3', 'Inscription chauffeur — étape 3'),
  screen('/projects/tungo/driver/interface-menu-lateral.png', 498, 862, 'Driver navigation menu', 'Menu de navigation chauffeur'),
  screen('/projects/tungo/driver/interface-mot-de-passe-oublie.png', 503, 859, 'Driver password recovery', 'Récupération du mot de passe chauffeur'),
  screen('/projects/tungo/driver/interface-profil-chauffeur.png', 501, 859, 'Driver profile', 'Profil chauffeur'),
  screen('/projects/tungo/driver/interface-splash-de-demarrage-chauffeur.png', 497, 855, 'Driver app splash screen', 'Écran de démarrage de l’application chauffeur'),
  screen('/projects/tungo/driver/logo-app-chauffeur.png', 502, 892, 'Driver application identity screen', 'Écran d’identité de l’application chauffeur'),
]

const publicWebMedia = [
  screen('/projects/tungo/homepage.webp', 1897, 832, 'Public transport search homepage', 'Page publique de recherche de transport'),
  screen('/projects/tungo/public-web/page-de-connexion.png', 1900, 880, 'Web platform sign-in', 'Connexion à la plateforme web'),
]

const adminMedia = [
  screen('/projects/tungo/admin/dashboard-admin.png', 1884, 842, 'Administrator dashboard prototype', 'Prototype du tableau de bord administrateur'),
]

const superAdminMedia = [
  screen('/projects/tungo/super-admin/dashboard-superadmin.png', 1890, 862, 'Super administrator operational dashboard', 'Tableau de bord opérationnel du super administrateur'),
  screen('/projects/tungo/super-admin/dashboard-superadmin-2.png', 1920, 1080, 'Super administrator dashboard — analytics view', 'Tableau de bord super administrateur — vue analytique'),
  screen('/projects/tungo/super-admin/dashboard-superadmin-3.png', 1920, 1080, 'Super administrator dashboard — network view', 'Tableau de bord super administrateur — vue réseau'),
  screen('/projects/tungo/station-map.webp', 1890, 854, 'Interactive station map', 'Carte interactive des stations'),
  screen('/projects/tungo/super-admin/ajouter-un-itineraire.png', 1920, 872, 'Route creation form', 'Formulaire d’ajout d’un itinéraire'),
  screen('/projects/tungo/super-admin/ajouter-une-station.png', 1885, 854, 'Station creation form', 'Formulaire d’ajout d’une station'),
  screen('/projects/tungo/super-admin/gestion-des-administrateurs.png', 1886, 865, 'Administrator management', 'Gestion des administrateurs'),
  screen('/projects/tungo/super-admin/gestion-des-compagnies.png', 1883, 881, 'Transport company management', 'Gestion des compagnies de transport'),
  screen('/projects/tungo/super-admin/gestion-des-itineraires-bus.png', 1891, 853, 'Bus route management', 'Gestion des itinéraires de bus'),
  screen('/projects/tungo/super-admin/gestion-des-itineraires-louage.png', 1884, 840, 'Shared-taxi route management', 'Gestion des itinéraires de louage'),
  screen('/projects/tungo/super-admin/gestion-des-itineraires-train.png', 1888, 846, 'Train route management', 'Gestion des itinéraires de train'),
  screen('/projects/tungo/super-admin/gestion-des-superviseurs.png', 1893, 840, 'Station supervisor management', 'Gestion des superviseurs de station'),
  screen('/projects/tungo/super-admin/gestion-des-utilisateurs-1.png', 1893, 862, 'User management — overview', 'Gestion des utilisateurs — vue générale'),
  screen('/projects/tungo/super-admin/gestion-des-utilisateurs-2.png', 1896, 869, 'User management — details', 'Gestion des utilisateurs — détails'),
  screen('/projects/tungo/super-admin/gestion-des-villes.png', 1920, 880, 'City management', 'Gestion des villes'),
  screen('/projects/tungo/super-admin/liste-des-stations-bus.png', 1898, 862, 'Bus station directory', 'Liste des stations de bus'),
  screen('/projects/tungo/super-admin/liste-des-stations-train.png', 1888, 848, 'Train station directory', 'Liste des stations de train'),
]

const supervisorMedia = [
  screen('/projects/tungo/supervisor/dashboard-superviseur-station-bus.png', 1895, 865, 'Bus station supervisor dashboard', 'Tableau de bord du superviseur de station de bus'),
  screen('/projects/tungo/supervisor/dashboard-superviseur-station-louage.png', 1880, 845, 'Shared-taxi station supervisor dashboard', 'Tableau de bord du superviseur de station de louage'),
  screen('/projects/tungo/supervisor/dashboard-superviseur-station-train.png', 1878, 840, 'Train station supervisor dashboard', 'Tableau de bord du superviseur de station de train'),
  screen('/projects/tungo/supervisor/gestion-des-arret-bus-et-train.png', 1884, 851, 'Bus and train stop management', 'Gestion des arrêts de bus et de train'),
  screen('/projects/tungo/supervisor/gestion-des-colis.png', 1893, 867, 'Station parcel management', 'Gestion des colis en station'),
  screen('/projects/tungo/supervisor/gestion-des-horaires-bus-et-train.png', 1898, 874, 'Bus and train schedule management', 'Gestion des horaires de bus et de train'),
  screen('/projects/tungo/supervisor/gestion-des-reservations.png', 1891, 864, 'Station reservation management', 'Gestion des réservations en station'),
]

export const tungoMediaGroups: TungoMediaGroup[] = [
  {
    id: 'passenger',
    title: { en: 'Passenger application', fr: 'Application passager' },
    description: { en: 'Search, reservations, parcel delivery, live tracking and the transport assistant.', fr: 'Recherche, réservations, envoi de colis, suivi en direct et assistant de transport.' },
    layout: 'mobile',
    media: clientMedia,
  },
  {
    id: 'driver',
    title: { en: 'Driver application', fr: 'Application chauffeur' },
    description: { en: 'Driver onboarding, journeys, reservations, parcels and live route operations.', fr: 'Onboarding chauffeur, trajets, réservations, colis et opérations d’itinéraire en direct.' },
    layout: 'mobile',
    media: driverMedia,
  },
  {
    id: 'public-web',
    title: { en: 'Public web platform', fr: 'Plateforme web publique' },
    description: { en: 'Public journey search and access to the web platform.', fr: 'Recherche publique de trajets et accès à la plateforme web.' },
    layout: 'wide',
    media: publicWebMedia,
  },
  {
    id: 'admin',
    title: { en: 'Administrator', fr: 'Administrateur' },
    description: { en: 'Administrator dashboard prototype for operational monitoring.', fr: 'Prototype du tableau de bord administrateur pour le suivi opérationnel.' },
    layout: 'wide',
    media: adminMedia,
  },
  {
    id: 'super-admin',
    title: { en: 'Super administrator', fr: 'Super administrateur' },
    description: { en: 'Network-wide oversight of users, companies, routes, cities and stations.', fr: 'Supervision globale des utilisateurs, compagnies, itinéraires, villes et stations.' },
    layout: 'wide',
    media: superAdminMedia,
  },
  {
    id: 'supervisor',
    title: { en: 'Station supervisor', fr: 'Superviseur de station' },
    description: { en: 'Station-level schedules, stops, reservations and parcel operations.', fr: 'Gestion des horaires, arrêts, réservations et colis au niveau de la station.' },
    layout: 'wide',
    media: supervisorMedia,
  },
]
