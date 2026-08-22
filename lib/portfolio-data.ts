import type { LocalizedList, LocalizedText } from '@/lib/localization'

export { localize } from '@/lib/localization'
export type { LocalizedList, LocalizedText } from '@/lib/localization'

export interface Experience {
  company: string
  role: LocalizedText
  period: string
  project?: string
  summary: LocalizedText
  highlights: LocalizedList
  technologies: string[]
}

export interface Education {
  institution: string
  degree: LocalizedText
  period: string
  specialization?: LocalizedText
}

export interface ProjectCaseStudy {
  overview: LocalizedText
  context?: LocalizedText
  built: LocalizedList
  technicalApproach: LocalizedList
  engineeringDecisions?: LocalizedList
  results?: LocalizedList
  limitations?: LocalizedList
}

export interface ProjectMedia {
  src: string
  kind: 'image' | 'video'
  alt: LocalizedText
  caption?: LocalizedText
  width: number
  height: number
  poster?: string
}

export interface Project {
  slug: string
  title: string
  category: LocalizedText
  description: LocalizedText
  technologies: string[]
  githubUrl: string
  heroMedia?: ProjectMedia
  media?: ProjectMedia[]
  proofPoints?: LocalizedList
  caseStudy: ProjectCaseStudy
}

export interface ProjectNavigationData {
  previous: Pick<Project, 'slug' | 'title'>
  next: Pick<Project, 'slug' | 'title'>
}

export interface SkillCategory {
  id: string
  title: LocalizedText
  skills: string[]
}

export const profile = {
  name: 'Iheb Jdey',
  role: {
    en: 'Software Engineer · Full-Stack · Mobile · Applied AI',
    fr: 'Ingénieur logiciel · Full-Stack · Mobile · IA appliquée',
  } satisfies LocalizedText,
  introduction: {
    en: 'I build web, mobile and AI-powered software, with experience across backend systems, cross-platform applications, DevOps and interactive technologies.',
    fr: 'Je développe des logiciels web, mobiles et assistés par IA, avec une expérience en systèmes backend, applications multiplateformes, DevOps et technologies interactives.',
  } satisfies LocalizedText,
  about: {
    en: [
      'I’m a Software Engineer and ESPRIT graduate interested in building complete products across web, mobile, backend systems and applied AI.',
      'My projects range from transportation and healthcare platforms to computer vision, DevOps pipelines, multiplayer games and immersive VR systems.',
      'I enjoy working across the software lifecycle: understanding the problem, designing the technical approach, building the application and improving it through testing and iteration.',
    ],
    fr: [
      'Je suis ingénieur logiciel diplômé d’ESPRIT et je m’intéresse à la création de produits complets pour le web, le mobile, les systèmes backend et l’IA appliquée.',
      'Mes projets couvrent les plateformes de transport et de santé, la vision par ordinateur, les pipelines DevOps, les jeux multijoueurs et les expériences VR immersives.',
      'J’apprécie travailler sur l’ensemble du cycle logiciel : comprendre le problème, définir l’approche technique, construire l’application puis l’améliorer par les tests et l’itération.',
    ],
  } satisfies LocalizedList,
}

export const skillCategories: SkillCategory[] = [
  { id: 'frontend', title: { en: 'Frontend', fr: 'Frontend' }, skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
  { id: 'backend', title: { en: 'Backend', fr: 'Backend' }, skills: ['Node.js', 'Express.js', 'NestJS', 'Spring Boot', 'Symfony', 'Flask', 'REST APIs'] },
  { id: 'mobile', title: { en: 'Mobile', fr: 'Mobile' }, skills: ['Flutter', 'Dart'] },
  { id: 'databases', title: { en: 'Databases', fr: 'Bases de données' }, skills: ['PostgreSQL', 'MySQL', 'MongoDB'] },
  { id: 'ai', title: { en: 'Applied AI', fr: 'IA appliquée' }, skills: ['Python', 'TensorFlow', 'OpenCV', 'scikit-learn', 'RAG', 'Computer Vision'] },
  { id: 'devops', title: { en: 'DevOps', fr: 'DevOps' }, skills: ['Git', 'GitHub', 'Docker', 'Jenkins', 'GitHub Actions', 'SonarQube', 'Prometheus', 'Grafana'] },
  { id: 'immersive', title: { en: 'Game & Immersive', fr: 'Jeu & Immersif' }, skills: ['Unity', 'C#', 'Unreal Engine', 'OpenXR', 'XR Interaction Toolkit', 'Netcode for GameObjects', 'ML-Agents'] },
]

export const experiences: Experience[] = [
  {
    company: 'INVEEP',
    role: { en: 'Full-Stack & Mobile Developer Intern / Final-Year Project', fr: 'Stagiaire développeur Full-Stack & Mobile / Projet de fin d’études' },
    period: '01/2025 – 06/2025',
    project: 'TUNGO',
    summary: {
      en: 'Contributed to a multi-platform intercity transportation system developed as a final-year engineering project.',
      fr: 'Contribution à un système multiplateforme de transport interurbain réalisé comme projet de fin d’études.',
    },
    highlights: {
      en: ['Developed REST APIs, Flutter passenger and driver applications, and React administration interfaces.', 'Worked on reservations, parcels, schedules, routes, authentication and authorization.', 'Integrated an AI-assisted chatbot and used Docker and Jenkins in the project workflow.'],
      fr: ['Développement d’API REST, d’applications Flutter passager et conducteur, et d’interfaces d’administration React.', 'Travail sur les réservations, colis, horaires, itinéraires, l’authentification et les autorisations.', 'Intégration d’un chatbot assisté par IA et utilisation de Docker et Jenkins dans le workflow.'],
    },
    technologies: ['Node.js', 'Express.js', 'React', 'Flutter', 'PostgreSQL', 'JWT', 'Docker', 'Jenkins'],
  },
  {
    company: 'SOTUDEV',
    role: { en: 'Frontend & API Integration Developer Intern', fr: 'Stagiaire développeur Frontend & intégration API' },
    period: '09/2024 – 11/2024',
    project: 'Gym Exercise Finder',
    summary: {
      en: 'Developed a fitness web application with a dedicated mobile experience for discovering exercises by name, muscle group, body part or equipment.',
      fr: 'Développement d’une application web fitness avec une expérience mobile dédiée pour découvrir des exercices par nom, groupe musculaire, partie du corps ou équipement.',
    },
    highlights: {
      en: ['Built the React and Material UI exercise catalogue, search and mobile navigation.', 'Integrated ExerciseDB and YouTube Search through protected API routes.', 'Implemented loading, error and keyboard-navigation states for a reliable browsing experience.'],
      fr: ['Création du catalogue d’exercices, de la recherche et de la navigation mobile avec React et Material UI.', 'Intégration d’ExerciseDB et de YouTube Search via des routes API protégées.', 'Implémentation des états de chargement, d’erreur et de navigation clavier pour une expérience fiable.'],
    },
    technologies: ['React', 'Material UI', 'ExerciseDB', 'YouTube Search API', 'Vercel Functions'],
  },
  {
    company: 'ESPRIT',
    role: { en: 'Machine Learning Intern', fr: 'Stagiaire Machine Learning' },
    period: '06/2023 – 08/2023',
    summary: {
      en: 'Explored machine-learning and computer-vision workflows through experimentation and evaluation.',
      fr: 'Exploration de workflows de machine learning et de vision par ordinateur par l’expérimentation et l’évaluation.',
    },
    highlights: {
      en: ['Worked on image preprocessing, model experimentation and evaluation.'],
      fr: ['Travail sur le prétraitement d’images, l’expérimentation et l’évaluation de modèles.'],
    },
    technologies: ['Python', 'PyTorch', 'OpenCV', 'scikit-learn'],
  },
  {
    company: 'Tunisie Telecom',
    role: { en: 'Full-Stack Intern', fr: 'Stagiaire Full-Stack' },
    period: '06/2022 – 08/2022',
    summary: {
      en: 'Contributed to a web application involving frontend and backend integration.',
      fr: 'Contribution à une application web avec intégration frontend et backend.',
    },
    highlights: {
      en: ['Worked on web application development and REST API integration.'],
      fr: ['Travail sur le développement web et l’intégration d’API REST.'],
    },
    technologies: ['React', 'Node.js', 'REST APIs'],
  },
]

export const education: Education[] = [
  {
    institution: 'ESPRIT',
    degree: { en: 'Software Engineering Degree', fr: 'Diplôme d’ingénieur en génie logiciel' },
    period: '2021 – 2025',
    specialization: { en: 'GAMIX Specialization — Game Development & Immersive Experience', fr: 'Spécialisation GAMIX — Développement de jeux & expérience immersive' },
  },
  {
    institution: 'Faculty of Sciences of Sfax',
    degree: { en: 'Engineering Preparatory Cycle', fr: 'Cycle préparatoire aux études d’ingénieur' },
    period: '2019 – 2021',
  },
]

const imageMedia = (
  src: string,
  width: number,
  height: number,
  alt: LocalizedText,
  caption: LocalizedText,
): ProjectMedia => ({ src, kind: 'image', width, height, alt, caption })

export const projects: Project[] = [
  {
    slug: 'agridiagnose-ai',
    title: 'AgriDiagnose AI',
    category: { en: 'Applied AI · Computer Vision', fr: 'IA appliquée · Vision par ordinateur' },
    description: {
      en: 'AI-assisted plant health platform combining a 39-class MobileNetV2 model with a multilingual Flask application.',
      fr: 'Plateforme d’analyse de la santé des plantes combinant un modèle MobileNetV2 à 39 classes avec une application Flask multilingue.',
    },
    technologies: ['Python', 'TensorFlow', 'MobileNetV2', 'Flask', 'PostgreSQL', 'GitHub Actions'],
    githubUrl: 'https://github.com/ihebjdey2/ai-plant-disease-detection',
    heroMedia: imageMedia('/projects/agridiagnose-ai/prediction-tomato-leaf-mold.webp', 1920, 1080, { en: 'AgriDiagnose AI result identifying Tomato Leaf Mold from a leaf image.', fr: 'Résultat AgriDiagnose AI identifiant la moisissure de la feuille de tomate.' }, { en: 'Model prediction result for Tomato Leaf Mold.', fr: 'Résultat de prédiction du modèle pour la moisissure de la feuille de tomate.' }),
    media: [
      imageMedia('/projects/agridiagnose-ai/upload-dashboard-en.webp', 1920, 1080, { en: 'English crop-health dashboard with the leaf upload area.', fr: 'Tableau de bord de santé des cultures avec zone d’envoi d’une feuille.' }, { en: 'Leaf-analysis workflow and model coverage.', fr: 'Workflow d’analyse de feuille et couverture du modèle.' }),
      imageMedia('/projects/agridiagnose-ai/supported-crops-fr.webp', 1920, 1080, { en: 'French model-coverage view listing supported crops.', fr: 'Vue française de la couverture du modèle listant les cultures prises en charge.' }, { en: 'Supported-crop coverage presented in French.', fr: 'Couverture des cultures présentée en français.' }),
      imageMedia('/projects/agridiagnose-ai/prediction-potato-late-blight-ar.webp', 1920, 1080, { en: 'Arabic prediction result for potato late blight.', fr: 'Résultat de prédiction en arabe pour le mildiou de la pomme de terre.' }, { en: 'Arabic RTL prediction result.', fr: 'Résultat de prédiction en arabe avec mise en page RTL.' }),
    ],
    proofPoints: {
      en: ['73,563 audited images · 39 classes · 14 crops', '95.44% internal test accuracy · 95.92% internal Macro-F1'],
      fr: ['73 563 images auditées · 39 classes · 14 cultures', '95,44 % de précision interne · 95,92 % de Macro-F1 interne'],
    },
    caseStudy: {
      overview: {
        en: 'A full-stack machine-learning application for plant-leaf analysis with authentication, prediction history, dashboards, multilingual support and a REST API.',
        fr: 'Une application full-stack de machine learning pour l’analyse de feuilles, avec authentification, historique, tableaux de bord, support multilingue et API REST.',
      },
      context: {
        en: 'The project explores how a documented image-classification model can be integrated into an application while communicating uncertainty and evaluation limits.',
        fr: 'Le projet étudie l’intégration d’un modèle de classification documenté dans une application tout en communiquant l’incertitude et les limites d’évaluation.',
      },
      built: {
        en: ['Multilingual Flask application and REST prediction endpoint', 'Authentication, prediction history and result views', 'Reproducible dataset, training and evaluation workflows'],
        fr: ['Application Flask multilingue et endpoint REST de prédiction', 'Authentification, historique et vues de résultats', 'Workflows reproductibles de données, entraînement et évaluation'],
      },
      technicalApproach: {
        en: ['Frozen MobileNetV2 classifier with 39 outputs', 'Flask application factory, modular blueprints and SQLAlchemy persistence', 'Automated tests, migrations and GitHub Actions CI'],
        fr: ['Classifieur MobileNetV2 figé avec 39 sorties', 'Factory Flask, blueprints modulaires et persistance SQLAlchemy', 'Tests automatisés, migrations et CI GitHub Actions'],
      },
      engineeringDecisions: {
        en: ['Kept model evaluation reproducible and separate from application inference.', 'Added confidence and no-leaf handling instead of presenting every output as a diagnosis.'],
        fr: ['Séparation de l’évaluation reproductible du modèle et de l’inférence applicative.', 'Ajout de la gestion de confiance et de l’absence de feuille plutôt que de présenter chaque sortie comme un diagnostic.'],
      },
      results: {
        en: ['73,563 audited images across 39 classes and 14 crops', '95.44% internal test accuracy and 95.92% internal Macro-F1', '41.41% external PlantDoc subset accuracy, demonstrating domain shift rather than field accuracy'],
        fr: ['73 563 images auditées pour 39 classes et 14 cultures', '95,44 % de précision interne et 95,92 % de Macro-F1 interne', '41,41 % sur le sous-ensemble externe PlantDoc, révélant un décalage de domaine plutôt qu’une précision terrain'],
      },
      limitations: {
        en: ['Internal evaluation does not represent field accuracy.', 'Treatment decisions require qualified local agricultural expertise.'],
        fr: ['L’évaluation interne ne représente pas une précision en conditions réelles.', 'Les décisions de traitement nécessitent l’avis d’un spécialiste agricole local qualifié.'],
      },
    },
  },
  {
    slug: 'tungo',
    title: 'TUNGO',
    category: { en: 'Full-Stack · Mobile · Applied AI', fr: 'Full-Stack · Mobile · IA appliquée' },
    description: {
      en: 'Multi-platform intercity transportation system with passenger and driver apps, web dashboards, backend APIs and an AI-assisted chatbot.',
      fr: 'Système multiplateforme de transport interurbain avec applications passager et conducteur, tableaux de bord web, API backend et chatbot assisté par IA.',
    },
    technologies: ['Flutter', 'React', 'Node.js', 'Express.js', 'PostgreSQL', 'RAG', 'Docker'],
    githubUrl: 'https://github.com/ihebjdey2/TUNGO',
    heroMedia: imageMedia('/projects/tungo/homepage.webp', 1897, 832, { en: 'TUNGO public homepage with intercity transport search.', fr: 'Page d’accueil TUNGO avec recherche de transport interurbain.' }, { en: 'Public intercity transport search interface.', fr: 'Interface publique de recherche de transport interurbain.' }),
    media: [
      imageMedia('/projects/tungo/passenger-current-reservation.webp', 496, 895, { en: 'Passenger application showing an active reservation.', fr: 'Application passager affichant une réservation active.' }, { en: 'Passenger current-reservation interface.', fr: 'Interface de réservation actuelle du passager.' }),
      imageMedia('/projects/tungo/passenger-live-tracking.webp', 523, 914, { en: 'Passenger application live-tracking map.', fr: 'Carte de suivi en temps réel dans l’application passager.' }, { en: 'Passenger live-tracking interface.', fr: 'Interface de suivi en temps réel côté passager.' }),
      imageMedia('/projects/tungo/driver-live-tracking.webp', 477, 906, { en: 'Driver application live route and tracking map.', fr: 'Carte d’itinéraire et de suivi en temps réel dans l’application conducteur.' }, { en: 'Driver route and live-tracking interface.', fr: 'Interface conducteur d’itinéraire et de suivi en direct.' }),
      imageMedia('/projects/tungo/station-map.webp', 1890, 854, { en: 'TUNGO administration map with transport stations across Tunisia.', fr: 'Carte d’administration TUNGO affichant les stations de transport en Tunisie.' }, { en: 'Interactive station-management map.', fr: 'Carte interactive de gestion des stations.' }),
      imageMedia('/projects/tungo/chatbot-home.webp', 504, 896, { en: 'TUNGO mobile assistant conversation home.', fr: 'Accueil des conversations de l’assistant mobile TUNGO.' }, { en: 'AI-assisted transport chatbot interface.', fr: 'Interface du chatbot de transport assisté par IA.' }),
    ],
    caseStudy: {
      overview: {
        en: 'A final-year engineering project connecting passenger services, driver workflows and administration through mobile applications, web dashboards and a central backend.',
        fr: 'Un projet de fin d’études reliant les services passagers, les workflows conducteurs et l’administration via des applications mobiles, des tableaux de bord web et un backend central.',
      },
      context: {
        en: 'The system models intercity transportation workflows including reservations, parcels, schedules, routes, stations and role-based operations.',
        fr: 'Le système modélise des workflows de transport interurbain : réservations, colis, horaires, itinéraires, stations et opérations par rôles.',
      },
      built: {
        en: ['Flutter passenger and driver applications', 'React administration dashboards', 'Node.js and Express REST API with PostgreSQL', 'AI-assisted chatbot integration'],
        fr: ['Applications Flutter passager et conducteur', 'Tableaux de bord d’administration React', 'API REST Node.js et Express avec PostgreSQL', 'Intégration d’un chatbot assisté par IA'],
      },
      technicalApproach: {
        en: ['JWT-based authentication and role authorization', 'Shared backend for mobile and web clients', 'Docker and Jenkins project workflow'],
        fr: ['Authentification JWT et autorisation par rôles', 'Backend partagé entre clients mobiles et web', 'Workflow de projet Docker et Jenkins'],
      },
      engineeringDecisions: {
        en: ['Separated passenger, driver and administration interfaces while keeping shared domain rules in the backend.', 'Organized repository components across dedicated branches.'],
        fr: ['Séparation des interfaces passager, conducteur et administration tout en centralisant les règles métier dans le backend.', 'Organisation des composants du dépôt dans des branches dédiées.'],
      },
      limitations: {
        en: ['Academic engineering project requiring environment configuration and external service keys.', 'No production adoption or service-level claims are made.'],
        fr: ['Projet académique nécessitant la configuration de l’environnement et des services externes.', 'Aucune affirmation d’adoption en production ou de niveau de service.'],
      },
    },
  },
  {
    slug: 'cliniclic',
    title: 'CliniClic',
    category: { en: 'Web · Desktop · Mobile', fr: 'Web · Desktop · Mobile' },
    description: {
      en: 'Multi-client clinic management project with a Symfony web platform, JavaFX desktop application and Java Codename One mobile application.',
      fr: 'Projet de gestion de clinique multi-client avec une plateforme web Symfony, une application desktop JavaFX et une application mobile Java Codename One.',
    },
    technologies: ['Symfony 7.4', 'PHP', 'Java', 'JavaFX', 'Codename One', 'MySQL', 'Doctrine', 'JDBC'],
    githubUrl: 'https://github.com/ihebjdey2/CliniClic-ESPRIT--PIDEV',
    heroMedia: imageMedia('/projects/cliniclic/public-homepage.webp', 1600, 862, { en: 'CliniClic public homepage presenting the patient care journey.', fr: 'Accueil public CliniClic présentant le parcours de soins du patient.' }, { en: 'Public clinic experience and patient entry points.', fr: 'Expérience publique de la clinique et accès patient.' }),
    media: [
      imageMedia('/projects/cliniclic/appointments.webp', 1920, 1080, { en: 'CliniClic appointment list with status and date filters.', fr: 'Liste des rendez-vous CliniClic avec filtres de statut et de date.' }, { en: 'Appointment workflow and status management.', fr: 'Workflow de rendez-vous et gestion des statuts.' }),
      imageMedia('/projects/cliniclic/doctor-dashboard.webp', 1920, 1080, { en: 'CliniClic doctor dashboard with availability and appointment actions.', fr: 'Tableau de bord médecin avec disponibilités et actions de rendez-vous.' }, { en: 'Role-specific doctor workspace.', fr: 'Espace médecin adapté au rôle.' }),
      imageMedia('/projects/cliniclic/patient-dashboard.webp', 1920, 1080, { en: 'CliniClic patient dashboard with appointment access.', fr: 'Tableau de bord patient avec accès aux rendez-vous.' }, { en: 'Role-specific patient workspace.', fr: 'Espace patient adapté au rôle.' }),
      imageMedia('/projects/cliniclic/desktop-user-management.png', 1448, 1086, { en: 'CliniClic JavaFX desktop administration interface for user management.', fr: 'Interface d’administration desktop JavaFX de CliniClic pour la gestion des utilisateurs.' }, { en: 'Desktop client — users, roles, account status and administrative actions.', fr: 'Client desktop — utilisateurs, rôles, statuts de compte et actions administratives.' }),
      imageMedia('/projects/cliniclic/mobile-app-experience.png', 1024, 1421, { en: 'CliniClic Codename One mobile application screens.', fr: 'Écrans de l’application mobile Codename One de CliniClic.' }, { en: 'Mobile client — authentication, events, complaints and patient profile.', fr: 'Client mobile — authentification, événements, réclamations et profil patient.' }),
    ],
    caseStudy: {
      overview: {
        en: 'An ESPRIT academic PIDEV project spanning web, desktop and mobile clients across three dedicated repository branches.',
        fr: 'Un projet académique PIDEV à ESPRIT couvrant les clients web, desktop et mobile dans trois branches dédiées du dépôt.',
      },
      context: {
        en: 'Each client addresses a different part of the clinic domain: advanced clinical workflows on the web, operational administration on desktop and selected user-facing services on mobile.',
        fr: 'Chaque client couvre une partie différente du domaine clinique : workflows cliniques avancés sur le web, administration opérationnelle sur desktop et services utilisateur ciblés sur mobile.',
      },
      built: {
        en: ['Symfony web platform for four roles, appointments, availability, consultations, prescriptions, inventory and events', 'JavaFX desktop client for users, authentication, appointments, events, complaints and administrative exports', 'Codename One mobile client for authentication, profiles, events, categories, articles and complaints'],
        fr: ['Plateforme web Symfony pour quatre rôles, rendez-vous, disponibilités, consultations, ordonnances, inventaire et événements', 'Client desktop JavaFX pour les utilisateurs, l’authentification, les rendez-vous, événements, réclamations et exports administratifs', 'Client mobile Codename One pour l’authentification, les profils, événements, catégories, articles et réclamations'],
      },
      technicalApproach: {
        en: ['Symfony 7.4, Doctrine, Twig and Bootstrap for the web branch', 'JavaFX/FXML, JDBC and MySQL in the desktop branch', 'Java 8 source level, Codename One and Symfony API access in the mobile branch', 'Separate branches preserve each client’s build system and modernization path'],
        fr: ['Symfony 7.4, Doctrine, Twig et Bootstrap pour la branche web', 'JavaFX/FXML, JDBC et MySQL dans la branche desktop', 'Niveau source Java 8, Codename One et accès à l’API Symfony dans la branche mobile', 'Des branches séparées préservent le système de build et la trajectoire de modernisation de chaque client'],
      },
      engineeringDecisions: {
        en: ['Kept web, desktop and mobile implementations isolated in dedicated branches.', 'Enforced medical access, appointment conflicts and availability rules in the Symfony application.', 'Kept mobile network access behind service classes and the desktop UI organized around FXML controllers and services.'],
        fr: ['Isolation des implémentations web, desktop et mobile dans des branches dédiées.', 'Application des règles d’accès médical, de conflits de rendez-vous et de disponibilité dans Symfony.', 'Centralisation des accès réseau mobiles dans des services et organisation de l’interface desktop autour de contrôleurs FXML et services.'],
      },
      limitations: {
        en: ['Academic demonstration using fictional accounts and data.', 'The desktop and mobile branches retain legacy Ant-based project structures.', 'The mobile API contract and role model still need alignment with the modernized Symfony backend.'],
        fr: ['Démonstration académique utilisant des comptes et données fictifs.', 'Les branches desktop et mobile conservent des structures de projet historiques basées sur Ant.', 'Le contrat API mobile et le modèle de rôles doivent encore être alignés avec le backend Symfony modernisé.'],
      },
    },
  },
  {
    slug: 'guardian-quests',
    title: 'Guardian Quests',
    category: { en: 'Game Development · Multiplayer', fr: 'Développement de jeu · Multijoueur' },
    description: {
      en: 'Educational multiplayer 3D game combining social-deduction mechanics with sustainability-focused challenges.',
      fr: 'Jeu éducatif 3D multijoueur combinant déduction sociale et défis axés sur le développement durable.',
    },
    technologies: ['Unity', 'C#', 'Netcode for GameObjects', 'Unity Transport'],
    githubUrl: 'https://github.com/ihebjdey2/Guardian_Quests--ESPRIT-GamiX',
    heroMedia: imageMedia('/projects/guardian-quests/guardian-quests-main-menu.png', 907, 415, { en: 'Guardian Quests main menu with New Game, Load Game, Options and Exit actions.', fr: 'Menu principal de Guardian Quests avec les actions Nouvelle partie, Charger, Options et Quitter.' }, { en: 'Guardian Quests main menu and visual identity.', fr: 'Menu principal et identité visuelle de Guardian Quests.' }),
    media: [
      imageMedia('/projects/guardian-quests/gameplay-map.webp', 1181, 600, { en: 'Top-down Guardian Quests gameplay map with mobile controls.', fr: 'Carte de jeu Guardian Quests en vue du dessus avec contrôles mobiles.' }, { en: 'Top-down gameplay and mobile controls.', fr: 'Gameplay en vue du dessus et contrôles mobiles.' }),
      imageMedia('/projects/guardian-quests/player-lobby.webp', 1232, 594, { en: 'Guardian Quests player session interface.', fr: 'Interface de session joueur de Guardian Quests.' }, { en: 'Player session interface.', fr: 'Interface de session joueur.' }),
      imageMedia('/projects/guardian-quests/settings-menu.webp', 1161, 583, { en: 'Guardian Quests graphics, sound and gameplay settings.', fr: 'Réglages graphiques, audio et gameplay de Guardian Quests.' }, { en: 'Game settings interface.', fr: 'Interface des réglages du jeu.' }),
      imageMedia('/projects/guardian-quests/memory-mini-game.webp', 1024, 576, { en: 'Guardian Quests memory mini-game with six interactive cards.', fr: 'Mini-jeu de mémoire Guardian Quests avec six cartes interactives.' }, { en: 'One of the educational mini-games included in the multiplayer experience.', fr: 'Un des mini-jeux éducatifs intégrés à l’expérience multijoueur.' }),
      {
        src: '/projects/guardian-quests/gameplay-demo.mp4',
        kind: 'video',
        width: 1024,
        height: 576,
        poster: '/projects/guardian-quests/memory-mini-game.webp',
        alt: { en: 'Guardian Quests gameplay demonstration showing rooms and educational mini-games.', fr: 'Démonstration de Guardian Quests présentant les salles et mini-jeux éducatifs.' },
        caption: { en: 'Short gameplay demonstration covering several interactive activities.', fr: 'Courte démonstration de gameplay couvrant plusieurs activités interactives.' },
      },
    ],
    caseStudy: {
      overview: {
        en: 'An academic Unity prototype combining multiplayer social-deduction gameplay, educational activities and backend services.',
        fr: 'Un prototype académique Unity combinant gameplay multijoueur de déduction sociale, activités éducatives et services backend.',
      },
      context: {
        en: 'The project explores how sustainability-focused tasks can be integrated into a collaborative and competitive multiplayer loop.',
        fr: 'Le projet explore l’intégration de tâches liées au développement durable dans une boucle multijoueur collaborative et compétitive.',
      },
      built: {
        en: ['3D multiplayer environment with player sessions and synchronized task progression', 'Social-deduction systems for voting and sabotage', 'Sustainability-focused mini-games plus authentication and game-management services'],
        fr: ['Environnement 3D multijoueur avec sessions joueur et progression des tâches synchronisée', 'Systèmes de déduction sociale pour le vote et le sabotage', 'Mini-jeux liés au développement durable, authentification et services de gestion de partie'],
      },
      technicalApproach: {
        en: ['Unity 2022.3 and C# gameplay scripts', 'Netcode for GameObjects and Unity Transport', 'Client/host sessions with synchronized player state'],
        fr: ['Unity 2022.3 et scripts gameplay C#', 'Netcode for GameObjects et Unity Transport', 'Sessions client/hôte avec état joueur synchronisé'],
      },
      engineeringDecisions: {
        en: ['Separated gameplay, multiplayer state and backend responsibilities.', 'Focused the prototype on local-network multiplayer before remote matchmaking.'],
        fr: ['Séparation des responsabilités gameplay, état multijoueur et backend.', 'Priorité au multijoueur en réseau local avant le matchmaking distant.'],
      },
      limitations: {
        en: ['Academic prototype with local-network configuration.', 'Unity Relay, Lobby and internet matchmaking are not integrated.'],
        fr: ['Prototype académique avec configuration en réseau local.', 'Unity Relay, Lobby et le matchmaking internet ne sont pas intégrés.'],
      },
    },
  },
  {
    slug: 'student-management-devops',
    title: 'Student Management DevOps',
    category: { en: 'Backend · DevOps', fr: 'Backend · DevOps' },
    description: {
      en: 'Spring Boot student-management API delivered through a Jenkins pipeline with automated quality analysis, artifact storage, containerization and monitoring.',
      fr: 'API Spring Boot de gestion des étudiants livrée par un pipeline Jenkins avec analyse qualité automatisée, stockage des artefacts, conteneurisation et monitoring.',
    },
    technologies: ['Java 17', 'Spring Boot', 'Jenkins', 'SonarQube', 'Nexus', 'Docker', 'Prometheus', 'Grafana'],
    githubUrl: 'https://github.com/ihebjdey2/StudentMangement_DevOps',
    heroMedia: imageMedia('/projects/student-management-devops/jenkins-pipeline.png', 1920, 947, { en: 'Successful Jenkins StudentManagement pipeline with archived artifacts, test history and stage view.', fr: 'Pipeline Jenkins StudentManagement réussi avec artefacts archivés, historique des tests et vue des étapes.' }, { en: 'Jenkins pipeline, archived artifacts and automated test history.', fr: 'Pipeline Jenkins, artefacts archivés et historique des tests automatisés.' }),
    media: [
      imageMedia('/projects/student-management-devops/sonarqube-quality-gate.png', 1306, 691, { en: 'SonarQube quality dashboard with a passed quality gate and code metrics.', fr: 'Tableau de qualité SonarQube avec quality gate validée et métriques du code.' }, { en: 'Passed quality gate — 0 bugs, 0 vulnerabilities, 88.9% coverage and 924 unit tests shown.', fr: 'Quality gate validée — 0 bug, 0 vulnérabilité, couverture de 88,9 % et 924 tests unitaires affichés.' }),
      imageMedia('/projects/student-management-devops/docker-monitoring-stack.png', 1920, 952, { en: 'Docker Desktop running Jenkins, SonarQube, Prometheus, Node Exporter, Grafana and cAdvisor containers.', fr: 'Docker Desktop exécutant les conteneurs Jenkins, SonarQube, Prometheus, Node Exporter, Grafana et cAdvisor.' }, { en: 'Containerized CI, quality and monitoring services running locally.', fr: 'Services CI, qualité et monitoring conteneurisés exécutés en local.' }),
      imageMedia('/projects/student-management-devops/nexus-artifacts.webp', 1920, 1080, { en: 'Student-management Maven artifacts stored in Nexus.', fr: 'Artefacts Maven de student-management stockés dans Nexus.' }, { en: 'Versioned Maven artifacts in Nexus.', fr: 'Artefacts Maven versionnés dans Nexus.' }),
      {
        src: '/projects/student-management-devops/student-management-demo.mp4',
        kind: 'video',
        width: 1920,
        height: 1080,
        poster: '/projects/student-management-devops/jenkins-pipeline.png',
        alt: { en: 'Student Management DevOps workflow demonstration', fr: 'Démonstration du workflow DevOps Student Management' },
        caption: { en: 'Complete workflow demonstration — Jenkins, SonarQube, Nexus and Docker Hub (2 min 51 sec).', fr: 'Démonstration complète du workflow — Jenkins, SonarQube, Nexus et Docker Hub (2 min 51 s).' },
      },
    ],
    caseStudy: {
      overview: { en: 'A student-management backend used to implement and demonstrate an end-to-end DevOps delivery workflow.', fr: 'Un backend de gestion des étudiants utilisé pour implémenter et démontrer un workflow de livraison DevOps de bout en bout.' },
      context: { en: 'The project moves a Spring Boot REST API from source control through automated build, tests, quality analysis, artifact storage, Docker image publication and an observable local runtime.', fr: 'Le projet fait passer une API REST Spring Boot du contrôle de source au build automatisé, aux tests, à l’analyse qualité, au stockage des artefacts, à la publication de l’image Docker et à une exécution locale observable.' },
      built: { en: ['Layered REST API for student data', 'Jenkins pipeline for checkout, build, tests, analysis, packaging and artifact archiving', 'SonarQube quality analysis and Nexus Maven artifact storage', 'Docker image publication and local monitoring stack'], fr: ['API REST en couches pour les données étudiantes', 'Pipeline Jenkins pour checkout, build, tests, analyse, packaging et archivage des artefacts', 'Analyse qualité SonarQube et stockage des artefacts Maven dans Nexus', 'Publication de l’image Docker et stack locale de monitoring'] },
      technicalApproach: { en: ['Maven tests and JaCoCo coverage feed the automated quality stage', 'SonarQube evaluates the code before Maven artifacts are versioned in Nexus', 'Docker packages the application while Prometheus, Grafana, cAdvisor and Node Exporter provide the monitoring environment'], fr: ['Les tests Maven et la couverture JaCoCo alimentent l’étape qualité automatisée', 'SonarQube évalue le code avant le versionnement des artefacts Maven dans Nexus', 'Docker package l’application tandis que Prometheus, Grafana, cAdvisor et Node Exporter constituent l’environnement de monitoring'] },
      limitations: { en: ['The demonstrated infrastructure runs locally and requires coordinated container configuration.', 'Development credentials must be externalized and rotated before any production deployment.'], fr: ['L’infrastructure démontrée s’exécute en local et nécessite une configuration coordonnée des conteneurs.', 'Les identifiants de développement doivent être externalisés et renouvelés avant tout déploiement en production.'] },
    },
  },
  {
    slug: 'library-management-microservices',
    title: 'Library Management Microservices',
    category: { en: 'Distributed Systems · Microservices', fr: 'Systèmes distribués · Microservices' },
    description: { en: 'Distributed library platform built around six Spring Boot domain services, centralized gateway routing, Eureka discovery and Docker infrastructure.', fr: 'Plateforme de bibliothèque distribuée autour de six services métier Spring Boot, d’un routage centralisé par gateway, de la découverte Eureka et d’une infrastructure Docker.' },
    technologies: ['Angular 15', 'TypeScript', 'Spring Boot', 'Spring Cloud Gateway', 'Eureka', 'MySQL', 'Docker Compose'],
    githubUrl: 'https://github.com/ihebjdey2/Library-management-microservices',
    heroMedia: imageMedia('/projects/library-management-microservices/library-dashboard.webp', 1920, 1080, { en: 'Library dashboard for loans, books, subscriptions, stock and reservations.', fr: 'Tableau de bord de bibliothèque pour les emprunts, livres, abonnements, stock et réservations.' }, { en: 'Library administration dashboard.', fr: 'Tableau de bord d’administration de la bibliothèque.' }),
    caseStudy: {
      overview: { en: 'A distributed library management system decomposed into six independently built business-domain services behind a common entry point.', fr: 'Un système distribué de gestion de bibliothèque décomposé en six services métier construits indépendamment derrière un point d’entrée commun.' },
      context: { en: 'The architecture separates loans, books, reservations, subscriptions, inventory and events while keeping routing and service location outside the business services.', fr: 'L’architecture sépare les emprunts, livres, réservations, abonnements, stocks et événements tout en externalisant le routage et la localisation des services.' },
      built: { en: ['Loan service on port 8189 and book service on port 8183', 'Reservation service on port 8184 and subscription service on port 8009', 'Stock service on port 8008 and event service on port 8112', 'Angular administration frontend, API Gateway, Eureka discovery and MySQL infrastructure'], fr: ['Service d’emprunts sur le port 8189 et service de livres sur le port 8183', 'Service de réservations sur le port 8184 et service d’abonnements sur le port 8009', 'Service de stock sur le port 8008 et service d’événements sur le port 8112', 'Frontend d’administration Angular, API Gateway, découverte Eureka et infrastructure MySQL'] },
      technicalApproach: { en: ['Angular 15 client reaches services through Spring Cloud Gateway on port 8111', 'Services register with Eureka on port 8761 instead of relying on fixed service locations', 'Each Spring Boot service owns its Maven configuration, source, application configuration and tests', 'Docker Compose coordinates the configured services and MySQL persistence on port 3307'], fr: ['Le client Angular 15 accède aux services via Spring Cloud Gateway sur le port 8111', 'Les services s’enregistrent auprès d’Eureka sur le port 8761 au lieu de dépendre d’emplacements fixes', 'Chaque service Spring Boot possède sa configuration Maven, son code source, sa configuration applicative et ses tests', 'Docker Compose coordonne les services configurés et la persistance MySQL sur le port 3307'] },
      engineeringDecisions: { en: ['One service per business domain keeps responsibilities explicit.', 'Centralized gateway routing gives clients one backend entry point.', 'Discovery separates logical service names from runtime service locations.', 'Independent builds preserve a separate lifecycle for each service.'], fr: ['Un service par domaine métier rend les responsabilités explicites.', 'Le routage centralisé par gateway fournit un point d’entrée backend unique aux clients.', 'La découverte sépare les noms logiques des services de leurs emplacements d’exécution.', 'Les builds indépendants préservent un cycle de vie distinct pour chaque service.'] },
      limitations: { en: ['Local multi-service execution requires coordinated startup and environment configuration.', 'API URLs, credentials, secrets and database settings must be externalized before production use.'], fr: ['L’exécution locale multi-services nécessite un démarrage coordonné et une configuration d’environnement.', 'Les URL d’API, identifiants, secrets et paramètres de base de données doivent être externalisés avant une utilisation en production.'] },
    },
  },
  {
    slug: 'immersive-kitchen-vr',
    title: 'Immersive Kitchen VR',
    category: { en: 'VR · Immersive Development', fr: 'VR · Développement immersif' },
    description: { en: 'Unity VR cooking prototype focused on physical object manipulation and controller-based interaction.', fr: 'Prototype de cuisine VR sous Unity centré sur la manipulation d’objets et les interactions par contrôleurs.' },
    technologies: ['Unity', 'C#', 'OpenXR', 'XR Interaction Toolkit'],
    githubUrl: 'https://github.com/ihebjdey2/Immersive-kitchen_Simulator-VR-Unity',
    heroMedia: imageMedia('/projects/immersive-kitchen-vr/kitchen-interaction-view.webp', 1920, 1080, { en: 'Unity kitchen interaction scene with ingredients and utensils.', fr: 'Scène d’interaction de cuisine Unity avec ingrédients et ustensiles.' }, { en: 'Kitchen interaction environment.', fr: 'Environnement d’interaction de cuisine.' }),
    media: [imageMedia('/projects/immersive-kitchen-vr/kitchen-editor-overview.webp', 1920, 1080, { en: 'Top-down Unity editor overview of the immersive kitchen.', fr: 'Vue d’ensemble de la cuisine immersive dans l’éditeur Unity.' }, { en: 'Unity editor overview of the kitchen layout.', fr: 'Vue de la disposition de la cuisine dans l’éditeur Unity.' })],
    caseStudy: {
      overview: { en: 'An experimental VR kitchen for hands-on interaction with ingredients, appliances and containers.', fr: 'Une cuisine VR expérimentale permettant d’interagir avec des ingrédients, appareils et contenants.' },
      context: { en: 'The project explores natural controller interactions and physical feedback in a cooking environment.', fr: 'Le projet explore les interactions naturelles par contrôleurs et les retours physiques dans un environnement de cuisine.' },
      built: { en: ['Object grabbing and socket interactions', 'Soup and steak cooking mechanics', 'Gas stove and liquid-pouring systems'], fr: ['Saisie d’objets et interactions par sockets', 'Mécaniques de cuisson de soupe et steak', 'Systèmes de cuisinière et de versement de liquides'] },
      technicalApproach: { en: ['Unity and XR Interaction Toolkit', 'OpenXR controller input', 'Rotation, collision, audio and particle feedback'], fr: ['Unity et XR Interaction Toolkit', 'Entrées contrôleurs OpenXR', 'Retours par rotation, collisions, audio et particules'] },
      limitations: { en: ['Experimental prototype requiring compatible VR hardware and further interaction testing.'], fr: ['Prototype expérimental nécessitant du matériel VR compatible et davantage de tests d’interaction.'] },
    },
  },
  {
    slug: 'unity-ai-navigation-algorithms',
    title: 'Unity AI Navigation Algorithms',
    category: { en: 'Game AI · Algorithms', fr: 'IA de jeu · Algorithmes' },
    description: { en: 'Shared Unity environment comparing Ad Hoc rules, A* pathfinding and Monte Carlo Tree Search through three autonomous agents and a live score display.', fr: 'Environnement Unity commun comparant règles Ad Hoc, pathfinding A* et Monte Carlo Tree Search à travers trois agents autonomes et un affichage des scores en direct.' },
    technologies: ['Unity 2022.3', 'C#', 'A*', 'Monte Carlo Tree Search', 'Rule-Based AI'],
    githubUrl: 'https://github.com/ihebjdey2/unity-ai-navigation-agents',
    heroMedia: imageMedia('/projects/unity-ai-navigation/navigation-agents-gameplay.png', 995, 552, { en: 'Shared Unity game environment displaying the MCTS, A-star and Ad Hoc agent scores.', fr: 'Environnement de jeu Unity commun affichant les scores des agents MCTS, A* et Ad Hoc.' }, { en: 'Three navigation agents evaluated in the same Unity game environment.', fr: 'Trois agents de navigation évalués dans le même environnement de jeu Unity.' }),
    media: [
      {
        src: '/projects/unity-ai-navigation/navigation-comparison-demo.mp4',
        kind: 'video',
        width: 1280,
        height: 720,
        poster: '/projects/unity-ai-navigation/navigation-agents-gameplay.png',
        alt: { en: 'Ad Hoc, A-star and MCTS navigation comparison demonstration', fr: 'Démonstration comparative de navigation Ad Hoc, A* et MCTS' },
        caption: { en: 'Shared 40-second run with live MCTS, A* and Ad Hoc scores.', fr: 'Exécution commune de 40 secondes avec scores MCTS, A* et Ad Hoc en direct.' },
      },
    ],
    caseStudy: {
      overview: { en: 'A shared 3D environment used to observe three autonomous-agent decision approaches under the same scene conditions.', fr: 'Un environnement 3D commun utilisé pour observer trois approches de décision d’agents autonomes dans les mêmes conditions de scène.' },
      context: { en: 'The project places rule-based, heuristic-search and simulation-based agents in one low-poly Unity environment and exposes their score progression through a shared HUD.', fr: 'Le projet place des agents fondés sur des règles, la recherche heuristique et la simulation dans un même environnement Unity low-poly et expose la progression de leurs scores dans une interface commune.' },
      built: { en: ['Ad Hoc navigation driven by explicit rules', 'A* navigation driven by heuristic path search', 'Monte Carlo Tree Search navigation driven by simulated decision branches', 'Shared targets, obstacles, animated agents and live score display'], fr: ['Navigation Ad Hoc pilotée par des règles explicites', 'Navigation A* pilotée par une recherche de chemin heuristique', 'Navigation Monte Carlo Tree Search pilotée par des branches de décision simulées', 'Cibles, obstacles, agents animés et affichage des scores partagés'] },
      technicalApproach: { en: ['Unity 2022.3 scene and C# agent scripts', 'The same environment and score interface make the three behaviors observable side by side', 'The recording captures score evolution during one 40-second execution'], fr: ['Scène Unity 2022.3 et scripts d’agents C#', 'Le même environnement et la même interface de score rendent les trois comportements observables côte à côte', 'L’enregistrement capture l’évolution des scores pendant une exécution de 40 secondes'] },
      limitations: { en: ['The recorded scores represent one visible run, not a statistically controlled benchmark.', 'Runtime, path length, explored nodes and success-rate measurements are not documented in the supplied media.'], fr: ['Les scores enregistrés représentent une exécution visible, et non un benchmark statistiquement contrôlé.', 'Les mesures de temps, longueur de chemin, nœuds explorés et taux de réussite ne sont pas documentées dans les médias fournis.'] },
    },
  },
  {
    slug: 'ml-agent-target-chase',
    title: 'Machine Learning Agent Target Chase',
    category: { en: 'Reinforcement Learning · Unity', fr: 'Apprentissage par renforcement · Unity' },
    description: { en: 'Unity reinforcement-learning experiment covering environment design, ML-Agents training, TensorBoard monitoring and ONNX inference.', fr: 'Expérience d’apprentissage par renforcement sous Unity couvrant la conception de l’environnement, l’entraînement ML-Agents, le suivi TensorBoard et l’inférence ONNX.' },
    technologies: ['Unity', 'C#', 'Python', 'ML-Agents', 'PyTorch', 'TensorBoard', 'ONNX'],
    githubUrl: 'https://github.com/ihebjdey2/Machine-learning-agent-target-chase',
    heroMedia: imageMedia('/projects/ml-agent-target-chase/environment-initial-screen.png', 1813, 772, { en: 'Initial Unity target-chase environment with the learning agent, target and scene obstacles.', fr: 'Environnement initial Target Chase sous Unity avec l’agent d’apprentissage, la cible et les obstacles de la scène.' }, { en: 'Initial 3D environment prepared for the target-chase experiment.', fr: 'Environnement 3D initial préparé pour l’expérience Target Chase.' }),
    media: [
      imageMedia('/projects/ml-agent-target-chase/tensorboard-training-metrics.png', 991, 469, { en: 'TensorBoard dashboard displaying cumulative reward, reward distribution and episode length for multiple ML-Agents runs.', fr: 'Tableau de bord TensorBoard affichant la récompense cumulée, sa distribution et la durée des épisodes pour plusieurs entraînements ML-Agents.' }, { en: 'TensorBoard monitoring across the Test1, Test2 and Test3 training runs.', fr: 'Suivi TensorBoard des entraînements Test1, Test2 et Test3.' }),
      imageMedia('/projects/ml-agent-target-chase/unity-ml-agents-package.png', 939, 503, { en: 'Unity Package Manager showing the ML Agents 2.0.1 package installed in the project.', fr: 'Unity Package Manager montrant le package ML Agents 2.0.1 installé dans le projet.' }, { en: 'ML Agents 2.0.1 integration through Unity Package Manager.', fr: 'Intégration de ML Agents 2.0.1 via Unity Package Manager.' }),
      {
        src: '/projects/ml-agent-target-chase/target-chase-demo.mp4',
        kind: 'video',
        width: 1920,
        height: 1080,
        poster: '/projects/ml-agent-target-chase/environment-initial-screen.png',
        alt: { en: 'Machine Learning Agent Target Chase project demonstration', fr: 'Démonstration du projet Machine Learning Agent Target Chase' },
        caption: { en: 'Supplied 28-second demonstration of the Unity ML-Agents project.', fr: 'Démonstration fournie de 28 secondes du projet Unity ML-Agents.' },
      },
    ],
    caseStudy: {
      overview: { en: 'A complete Unity ML-Agents experiment from the initial 3D scene and learning behavior to monitored training runs and an exported inference policy.', fr: 'Une expérience Unity ML-Agents complète, de la scène 3D initiale et du comportement d’apprentissage jusqu’au suivi des entraînements et à l’export d’une politique d’inférence.' },
      context: { en: 'The project applies observations, actions and reward signals to a target-seeking navigation task, with TensorBoard used to inspect training progression.', fr: 'Le projet applique observations, actions et signaux de récompense à une tâche de navigation vers une cible, avec TensorBoard pour analyser la progression de l’entraînement.' },
      built: { en: ['Target-seeking agent behavior inside a Unity 3D environment', 'Positive and negative reward signals for learning', 'Named and resumed ML-Agents training runs', 'TensorBoard monitoring and exported ONNX policy for Unity inference'], fr: ['Comportement d’agent recherchant une cible dans un environnement 3D Unity', 'Signaux de récompense positifs et négatifs pour l’apprentissage', 'Entraînements ML-Agents nommés et repris entre plusieurs runs', 'Suivi TensorBoard et politique ONNX exportée pour l’inférence Unity'] },
      technicalApproach: { en: ['Python 3.9.13 virtual environment with an updated pip toolchain', 'ML-Agents toolkit with PyTorch, Protocol Buffers and ONNX dependencies', 'ML Agents 2.0.1 installed through Unity Package Manager', 'C# environment and agent behavior with X/Z movement and obstacle collisions'], fr: ['Environnement virtuel Python 3.9.13 avec une chaîne d’outils pip mise à jour', 'Toolkit ML-Agents avec les dépendances PyTorch, Protocol Buffers et ONNX', 'ML Agents 2.0.1 installé via Unity Package Manager', 'Environnement et comportement de l’agent en C# avec mouvement X/Z et collisions'] },
      limitations: { en: ['The supplied TensorBoard evidence documents training activity but does not provide a controlled comparison between policies.', 'The environment remains intentionally simple and does not document complex randomized scenarios.'], fr: ['Les preuves TensorBoard fournies documentent l’activité d’entraînement sans établir de comparaison contrôlée entre plusieurs politiques.', 'L’environnement reste volontairement simple et ne documente pas de scénarios aléatoires complexes.'] },
    },
  },
  {
    slug: 'maze-escape-pro',
    title: 'Maze Escape Pro',
    category: { en: 'Game Development · Unreal Engine', fr: 'Développement de jeu · Unreal Engine' },
    description: { en: 'Maze game built in Unreal Engine 5.4 with a hybrid C++ and Blueprint implementation, procedural generation and a real-time mini-map.', fr: 'Jeu de labyrinthe réalisé sous Unreal Engine 5.4 avec une implémentation hybride C++ et Blueprint, une génération procédurale et une mini-carte en temps réel.' },
    technologies: ['Unreal Engine 5.4', 'C++', 'Blueprints', 'Enhanced Input', 'MazeGenerator'],
    githubUrl: 'https://github.com/ihebjdey2/MazeEscapePro-Unreal-Engine',
    heroMedia: imageMedia('/projects/maze-escape-pro/maze-gameplay-main.png', 1920, 1080, { en: 'First-person Maze Escape Pro gameplay with timer, collectible counters and real-time mini-map.', fr: 'Gameplay à la première personne de Maze Escape Pro avec chronomètre, compteurs d’objets et mini-carte en temps réel.' }, { en: 'Generated maze gameplay with navigation HUD and mini-map.', fr: 'Gameplay dans le labyrinthe généré avec HUD de navigation et mini-carte.' }),
    media: [imageMedia('/projects/maze-escape-pro/blueprint-implementation.png', 1920, 1012, { en: 'BP_Maze event graph in Unreal Engine showing the Blueprint implementation behind the maze system.', fr: 'Graphe d’événements BP_Maze dans Unreal Engine montrant l’implémentation Blueprint du système de labyrinthe.' }, { en: 'Blueprint visual scripting for maze generation, game-state updates and configurable maze assets.', fr: 'Scripting visuel Blueprint pour la génération du labyrinthe, la mise à jour de l’état de jeu et la configuration des éléments du labyrinthe.' })],
    caseStudy: {
      overview: { en: 'An Unreal Engine maze game combining native C++ foundations with Blueprint visual scripting for the playable maze system.', fr: 'Un jeu de labyrinthe Unreal Engine combinant une base native en C++ et du scripting visuel Blueprint pour le système de jeu.' },
      built: { en: ['Playable generated maze with coins, keys, timer and levels', 'Real-time mini-map and navigation HUD', 'BP_Maze Blueprint logic and native Unreal C++ module'], fr: ['Labyrinthe généré jouable avec pièces, clés, chronomètre et niveaux', 'Mini-carte en temps réel et HUD de navigation', 'Logique Blueprint BP_Maze et module natif Unreal en C++'] },
      technicalApproach: { en: ['Hybrid C++ and Blueprint architecture in Unreal Engine 5.4', 'Blueprint event graph for maze generation and game-state updates', 'MazeGenerator, Modeling Tools and Enhanced Input integration'], fr: ['Architecture hybride C++ et Blueprint sous Unreal Engine 5.4', 'Graphe d’événements Blueprint pour la génération et la mise à jour de l’état de jeu', 'Intégration de MazeGenerator, Modeling Tools et Enhanced Input'] },
      limitations: { en: ['The repository documents the project foundation more than a complete gameplay loop.'], fr: ['Le dépôt documente davantage la base du projet qu’une boucle de gameplay complète.'] },
    },
  },
  {
    slug: 'smartshop',
    title: 'SmartShop',
    category: { en: 'Desktop · Hardware Integration', fr: 'Desktop · Intégration matérielle' },
    description: { en: 'Qt desktop business-management application with Oracle persistence, reporting and Arduino integration.', fr: 'Application desktop de gestion sous Qt avec persistance Oracle, rapports et intégration Arduino.' },
    technologies: ['C++', 'Qt 6', 'Oracle', 'Arduino', 'Qt Charts'],
    githubUrl: 'https://github.com/ihebjdey2/SmartShop-QT-Arduino',
    caseStudy: {
      overview: { en: 'An ESPRIT end-of-year desktop project centralizing shop, transaction, tenant, employee, complaint and event management.', fr: 'Un projet desktop de fin d’année ESPRIT centralisant la gestion des boutiques, transactions, locataires, employés, réclamations et événements.' },
      context: { en: 'The project combines administrative desktop workflows with reporting, external communication and serial hardware integration.', fr: 'Le projet combine workflows administratifs desktop, rapports, communication externe et intégration matérielle série.' },
      built: { en: ['Qt modules for core business entities', 'Charts, PDF and data export features', 'SMS, email, API and Arduino communication'], fr: ['Modules Qt pour les principales entités métier', 'Graphiques, PDF et export de données', 'Communication SMS, e-mail, API et Arduino'] },
      technicalApproach: { en: ['C++17 and Qt 6 Widgets', 'Oracle through Qt SQL and QODBC', 'Qt SerialPort for Arduino communication'], fr: ['C++17 et Qt 6 Widgets', 'Oracle via Qt SQL et QODBC', 'Qt SerialPort pour la communication Arduino'] },
      limitations: { en: ['Requires local Oracle, external-service and hardware configuration.'], fr: ['Nécessite une configuration locale d’Oracle, des services externes et du matériel.'] },
    },
  },
  {
    slug: 'gym-exercise-finder',
    title: 'Gym Exercise Finder',
    category: { en: 'Frontend · API Integration', fr: 'Frontend · Intégration API' },
    description: {
      en: 'React exercise-discovery application with a focused mobile web experience, powered by ExerciseDB and YouTube APIs.',
      fr: 'Application React de découverte d’exercices avec une expérience web mobile dédiée, alimentée par les API ExerciseDB et YouTube.',
    },
    technologies: ['React 18', 'React Router 6', 'Material UI 5', 'ExerciseDB', 'YouTube Search API', 'Vercel Functions'],
    githubUrl: 'https://github.com/ihebjdey2/GYM-exercise-finder',
    heroMedia: imageMedia('/projects/gym-exercise-finder/homepage.png', 1920, 1080, { en: 'Gym Exercise Finder landing page with exercise discovery positioning.', fr: 'Page d’accueil Gym Exercise Finder présentant la découverte d’exercices.' }, { en: 'Fitness exercise-discovery homepage.', fr: 'Accueil de découverte d’exercices fitness.' }),
    media: [
      imageMedia('/projects/gym-exercise-finder/exercise-library.png', 1920, 1080, { en: 'Exercise catalogue with illustrated exercise cards.', fr: 'Catalogue d’exercices avec cartes illustrées.' }, { en: 'ExerciseDB catalogue with 1,324 available results.', fr: 'Catalogue ExerciseDB avec 1 324 résultats disponibles.' }),
      imageMedia('/projects/gym-exercise-finder/body-part-browser.png', 1920, 1080, { en: 'Exercise browsing interface filtered by body part.', fr: 'Interface de navigation des exercices par partie du corps.' }, { en: 'Body-part filters connected to the exercise catalogue.', fr: 'Filtres par partie du corps reliés au catalogue.' }),
      imageMedia('/projects/gym-exercise-finder/exercise-search.png', 1920, 1080, { en: 'Exercise search by name, target muscle, body part or equipment.', fr: 'Recherche d’exercices par nom, muscle ciblé, partie du corps ou équipement.' }, { en: 'Multi-criteria exercise search.', fr: 'Recherche d’exercices multicritère.' }),
      imageMedia('/projects/gym-exercise-finder/mobile-experience.png', 925, 1701, { en: 'Gym Exercise Finder mobile web navigation displayed inside a phone.', fr: 'Navigation web mobile de Gym Exercise Finder affichée dans un téléphone.' }, { en: 'Mobile experience with focused navigation and direct exercise search.', fr: 'Expérience mobile avec navigation ciblée et accès direct à la recherche.' }),
      {
        src: '/projects/gym-exercise-finder/gym-demo.mp4',
        kind: 'video',
        width: 1280,
        height: 720,
        poster: '/projects/gym-exercise-finder/homepage.png',
        alt: { en: 'Gym Exercise Finder interface demonstration', fr: 'Démonstration de l’interface Gym Exercise Finder' },
        caption: { en: 'Short product walkthrough — homepage, catalogue, body-part navigation and search (22 sec).', fr: 'Parcours produit court — accueil, catalogue, navigation par partie du corps et recherche (22 s).' },
      },
    ],
    caseStudy: {
      overview: {
        en: 'An exercise-discovery web application with searchable catalogue pages, detailed exercise routes, related movements and external training videos.',
        fr: 'Une application web de découverte d’exercices avec catalogue consultable, fiches détaillées, mouvements associés et vidéos d’entraînement externes.',
      },
      context: {
        en: 'Developed during my SOTUDEV internship, the application organizes ExerciseDB data into desktop and mobile web experiences while keeping RapidAPI credentials outside the client bundle.',
        fr: 'Développée pendant mon stage chez SOTUDEV, l’application organise les données ExerciseDB dans des expériences web desktop et mobile tout en conservant les identifiants RapidAPI hors du bundle client.',
      },
      built: {
        en: ['Search by exercise name, target muscle, body part or equipment', 'Exercise detail routes with instructions, similar movements and related YouTube videos', 'Pagination, shareable filter URLs, loading states, error states and keyboard navigation'],
        fr: ['Recherche par nom d’exercice, muscle ciblé, partie du corps ou équipement', 'Fiches d’exercice avec instructions, mouvements similaires et vidéos YouTube associées', 'Pagination, URL de filtres partageables, états de chargement et d’erreur, et navigation clavier'],
      },
      technicalApproach: {
        en: ['React Router routes are lazy-loaded for the catalogue and exercise detail pages', 'Material UI and Emotion provide the component system used across desktop and mobile views', 'Vercel serverless API proxies connect to ExerciseDB and YouTube Search without exposing RapidAPI keys'],
        fr: ['Les routes React Router du catalogue et des fiches sont chargées à la demande', 'Material UI et Emotion fournissent le système de composants utilisé sur les vues desktop et mobile', 'Des proxys API serverless Vercel connectent ExerciseDB et YouTube Search sans exposer les clés RapidAPI'],
      },
      engineeringDecisions: {
        en: ['Cached requests and AbortController prevent avoidable duplicate or stale exercise requests.', 'Related API requests use independent settled results so one unavailable source does not block the complete detail page.', 'Tests cover search matching, pagination, duplicate removal, ID validation and accessible card navigation.'],
        fr: ['Le cache des requêtes et AbortController évitent les appels d’exercices dupliqués ou obsolètes.', 'Les requêtes associées sont résolues indépendamment afin qu’une source indisponible ne bloque pas toute la fiche.', 'Les tests couvrent la recherche, la pagination, la suppression des doublons, la validation des identifiants et l’accessibilité des cartes.'],
      },
      limitations: {
        en: ['Exercise and video content depends on external RapidAPI services and configured server-side credentials.'],
        fr: ['Le contenu des exercices et vidéos dépend de services RapidAPI externes et d’identifiants configurés côté serveur.'],
      },
    },
  },
  {
    slug: 'delivery-mobile-app',
    title: 'Delivery Mobile App',
    category: { en: 'Mobile · REST API Integration', fr: 'Mobile · Intégration API REST' },
    description: {
      en: 'Flutter client for an e-commerce and delivery API, covering products, cart, wishlist, orders and delivery-status workflows.',
      fr: 'Client Flutter pour une API e-commerce et livraison couvrant produits, panier, favoris, commandes et suivi du statut de livraison.',
    },
    technologies: ['Flutter', 'Dart', 'Provider', 'REST API', 'HTTP', 'JSON Serialization'],
    githubUrl: 'https://github.com/ihebjdey2/delivery-mobile-app',
    caseStudy: {
      overview: {
        en: 'A Flutter frontend that consumes a local REST API for product browsing, shopping actions, order placement and delivery-status operations.',
        fr: 'Un frontend Flutter consommant une API REST locale pour le catalogue, les actions d’achat, la création de commandes et les opérations de statut de livraison.',
      },
      context: {
        en: 'The repository contains the mobile client on its frontend-flutter branch and expects a separate backend at localhost:3000/api.',
        fr: 'Le dépôt contient le client mobile sur sa branche frontend-flutter et attend un backend séparé sur localhost:3000/api.',
      },
      built: {
        en: ['Product catalogue and product-detail screens', 'Cart and wishlist add, retrieve and remove workflows', 'Order creation with delivery address and order consultation', 'Delivery-status lookup and updates for preparing, on-the-way and delivered states'],
        fr: ['Catalogue de produits et écrans de détail', 'Ajout, consultation et suppression dans le panier et les favoris', 'Création de commande avec adresse de livraison et consultation des commandes', 'Consultation et mise à jour des statuts préparation, en route et livré'],
      },
      technicalApproach: {
        en: ['MultiProvider composes product, cart, wishlist, order and delivery ChangeNotifier providers', 'Models, services, providers and screens separate JSON data, HTTP calls, state and UI', 'The HTTP service layer targets REST endpoints under a shared local API base URL'],
        fr: ['MultiProvider compose les ChangeNotifier de produits, panier, favoris, commandes et livraison', 'Les modèles, services, providers et écrans séparent données JSON, appels HTTP, état et interface', 'La couche de services HTTP cible les endpoints REST sous une URL d’API locale commune'],
      },
      engineeringDecisions: {
        en: ['Provider classes expose loading and error states around asynchronous service calls.', 'json_annotation and generated serializers map API payloads to typed Dart models.'],
        fr: ['Les providers exposent les états de chargement et d’erreur autour des appels de services asynchrones.', 'json_annotation et les sérialiseurs générés transforment les réponses API en modèles Dart typés.'],
      },
      limitations: {
        en: ['The public repository contains the Flutter frontend only and requires a separately running local API.', 'No maps, payments, push notifications or real-time location tracking were verified in the repository.'],
        fr: ['Le dépôt public contient uniquement le frontend Flutter et nécessite une API locale exécutée séparément.', 'Aucune carte, paiement, notification push ou géolocalisation en temps réel n’a été vérifié dans le dépôt.'],
      },
    },
  },
  {
    slug: 'unity-3d-endless-runner',
    title: 'Unity 3D Endless Runner',
    category: { en: 'Game Development · Unity', fr: 'Développement de jeu · Unity' },
    description: {
      en: 'Three-lane Unity runner with continuous movement, generated track segments, obstacles, coins, timed upgrades and a restartable game-over flow.',
      fr: 'Runner Unity à trois voies avec déplacement continu, segments générés, obstacles, pièces, améliorations temporaires et boucle de game over relançable.',
    },
    technologies: ['Unity 2022.3.10f1', 'C#', 'Universal Render Pipeline', 'TextMesh Pro', 'Animation Rigging'],
    githubUrl: 'https://github.com/ihebjdey2/Unity-3D_Game-endless-runner',
    heroMedia: imageMedia('/projects/unity-3d-endless-runner/jump-boost.jpg', 1920, 1080, { en: 'Endless Runner character jumping between three railway lanes while the JumpBoost upgrade is active.', fr: 'Personnage d’Endless Runner sautant entre trois voies ferrées pendant que l’amélioration JumpBoost est active.' }, { en: 'Three-lane gameplay with coins, obstacles and an active JumpBoost.', fr: 'Gameplay à trois voies avec pièces, obstacles et JumpBoost actif.' }),
    media: [
      imageMedia('/projects/unity-3d-endless-runner/obstacle-jump.jpg', 1920, 1080, { en: 'Runner jumping toward a dense sequence of containers and lane obstacles.', fr: 'Runner sautant vers une séquence dense de conteneurs et d’obstacles sur les voies.' }, { en: 'Jump timing and obstacle avoidance across the three lanes.', fr: 'Timing du saut et évitement des obstacles sur les trois voies.' }),
      imageMedia('/projects/unity-3d-endless-runner/three-lane-run.jpg', 1920, 1080, { en: 'Three-lane railway run with coins, containers, timer and coin counter.', fr: 'Course ferroviaire à trois voies avec pièces, conteneurs, chronomètre et compteur de pièces.' }, { en: 'Continuous forward run with collectible and obstacle distribution.', fr: 'Course continue avec répartition des objets à collecter et des obstacles.' }),
      {
        src: '/projects/unity-3d-endless-runner/endless-runner-demo.mp4',
        kind: 'video',
        width: 1280,
        height: 720,
        poster: '/projects/unity-3d-endless-runner/jump-boost.jpg',
        alt: { en: 'Unity 3D Endless Runner gameplay demonstration', fr: 'Démonstration de gameplay Unity 3D Endless Runner' },
        caption: { en: 'Complete 58-second gameplay run with lane changes, jumps, coins, obstacles and JumpBoost.', fr: 'Séquence complète de 58 secondes avec changements de voie, sauts, pièces, obstacles et JumpBoost.' },
      },
    ],
    caseStudy: {
      overview: {
        en: 'A Unity 3D endless-runner prototype built around lane switching, jumping, generated track content, collectibles and short-lived player upgrades.',
        fr: 'Un prototype de runner 3D sous Unity fondé sur le changement de voie, le saut, la génération de piste, les objets à collecter et les améliorations temporaires.',
      },
      context: {
        en: 'The project implements a complete playable loop across separate main-menu and game scenes using Unity 2022.3.10f1.',
        fr: 'Le projet implémente une boucle jouable entre des scènes distinctes de menu principal et de jeu avec Unity 2022.3.10f1.',
      },
      built: {
        en: ['Automatic forward motion, three-lane keyboard switching and Rigidbody jumping', 'Generated floor tiles with randomized obstacles, coins and upgrade pickups', 'Elapsed-time and coin counters with a game-over display', 'Main menu, collision-driven death, restart, return-to-menu and quit flows'],
        fr: ['Course automatique, changement clavier entre trois voies et saut avec Rigidbody', 'Segments de piste générés avec obstacles, pièces et améliorations aléatoires', 'Compteurs de temps et de pièces avec affichage de fin de partie', 'Menu principal, mort par collision, redémarrage, retour au menu et fermeture'],
      },
      technicalApproach: {
        en: ['LevelGenerator instantiates track tiles, assigns randomized lane content and removes older segments', 'Trigger components connect obstacles, coins and upgrades to player state and scoring', 'Animator triggers, TextMesh Pro UI and audio hooks provide gameplay feedback', 'Universal Render Pipeline 14.0.8 supports the project rendering setup'],
        fr: ['LevelGenerator instancie les segments, répartit aléatoirement leur contenu par voie et supprime les anciens', 'Les triggers relient obstacles, pièces et améliorations à l’état du joueur et au score', 'Les triggers Animator, l’interface TextMesh Pro et les hooks audio fournissent le feedback de jeu', 'Universal Render Pipeline 14.0.8 prend en charge le rendu du projet'],
      },
      engineeringDecisions: {
        en: ['Jump-force and coin-attraction upgrades run as five-second coroutines.', 'Separate scripts isolate player control, generation, collisions, scoring and menu transitions.'],
        fr: ['Les améliorations de saut et d’attraction des pièces utilisent des coroutines de cinq secondes.', 'Des scripts distincts isolent le contrôle, la génération, les collisions, le score et les transitions de menu.'],
      },
      limitations: {
        en: ['The current generator uses Instantiate and Destroy rather than object pooling.', 'The supplied recording demonstrates the gameplay run, but not the separate main-menu, restart or game-over screens.', 'No persistent high score or mobile touch controls were verified in the repository.'],
        fr: ['Le générateur actuel utilise Instantiate et Destroy plutôt qu’un pool d’objets.', 'L’enregistrement fourni démontre la course, mais pas les écrans distincts de menu principal, redémarrage ou game over.', 'Aucun meilleur score persistant ni contrôle tactile mobile n’a été vérifié dans le dépôt.'],
      },
    },
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getProjectNavigation(slug: string): ProjectNavigationData | undefined {
  const currentIndex = projects.findIndex((project) => project.slug === slug)

  if (currentIndex === -1) return undefined

  const previousProject = projects[(currentIndex - 1 + projects.length) % projects.length]
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return {
    previous: { slug: previousProject.slug, title: previousProject.title },
    next: { slug: nextProject.slug, title: nextProject.title },
  }
}
