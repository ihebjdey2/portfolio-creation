'use client'


import { Mail, Github, Linkedin, Download } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'
import { Header } from '@/components/header'
import { ProjectCard } from '@/components/project-card'

const experiencesData = {
  en: [
    {
      title: 'Internship - Final Year Project',
      company: 'INVEEP',
      period: '01/2025 – 06/2025',
      description: 'TUNGO — National inter-urban transport platform',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'React', 'Flutter', 'Docker', 'Jenkins'],
      highlights: [
        'Full-stack development: Backend API, Web supervision platform, Mobile apps',
        'Real-time features: Live tracking, notifications, multi-station supervision',
        'CI/CD pipeline with Docker, Jenkins, SonarQube, Prometheus/Grafana',
      ],
    },
    {
      title: 'Engineer Internship',
      company: 'SOTUDEV',
      period: '09/2024 – 11/2024',
      description: 'Mobile application for farmers with AI integration',
      technologies: ['Flutter', 'Node.js', 'TensorFlow', 'OpenCV', 'MongoDB'],
      highlights: [
        'Full-stack mobile and backend development',
        'AI integration: Plant anomaly detection with TensorFlow & OpenCV',
        'Appointment booking system with specialist matching',
      ],
    },
    {
      title: 'Intern',
      company: 'ESPRIT',
      period: '06/2023 – 08/2023',
      description: 'Machine Learning project for product success prediction',
      technologies: ['Python', 'PyTorch', 'OpenCV'],
      highlights: [
        'Data preprocessing and feature extraction with OpenCV',
        'Built predictive models with PyTorch',
        'Customer feedback analysis and product recommendations',
      ],
    },
    {
      title: 'Intern',
      company: 'Tunisie Telecom',
      period: '06/2022 – 08/2022',
      description: 'Full-stack blog development',
      technologies: ['React', 'Node.js'],
      highlights: [
        'Full-stack development: Frontend with React, Backend with Node.js',
        'User article publishing and comment management',
        'Admin feedback tracking system',
      ],
    },
  ],
  fr: [
    {
      title: 'Stage - Projet de Fin d\'Études',
      company: 'INVEEP',
      period: '01/2025 – 06/2025',
      description: 'TUNGO — Plateforme nationale de transport interurbain',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'React', 'Flutter', 'Docker', 'Jenkins'],
      highlights: [
        'Développement full-stack: API Backend, plateforme de supervision Web, applications mobiles',
        'Fonctionnalités en temps réel: Suivi en direct, notifications, supervision multi-stations',
        'Pipeline CI/CD avec Docker, Jenkins, SonarQube, Prometheus/Grafana',
      ],
    },
    {
      title: 'Stage Ingénieur',
      company: 'SOTUDEV',
      period: '09/2024 – 11/2024',
      description: 'Application mobile pour agriculteurs avec intégration IA',
      technologies: ['Flutter', 'Node.js', 'TensorFlow', 'OpenCV', 'MongoDB'],
      highlights: [
        'Développement full-stack mobile et backend',
        'Intégration IA: Détection d\'anomalies des plantes avec TensorFlow & OpenCV',
        'Système de réservation avec appariement de spécialistes',
      ],
    },
    {
      title: 'Stagiaire',
      company: 'ESPRIT',
      period: '06/2023 – 08/2023',
      description: 'Projet d\'apprentissage automatique pour prédiction de succès produit',
      technologies: ['Python', 'PyTorch', 'OpenCV'],
      highlights: [
        'Prétraitement des données et extraction de caractéristiques avec OpenCV',
        'Modèles prédictifs construits avec PyTorch',
        'Analyse des commentaires clients et recommandations produits',
      ],
    },
    {
      title: 'Stagiaire',
      company: 'Tunisie Telecom',
      period: '06/2022 – 08/2022',
      description: 'Développement full-stack de blog',
      technologies: ['React', 'Node.js'],
      highlights: [
        'Développement full-stack: Frontend avec React, Backend avec Node.js',
        'Publication d\'articles par utilisateurs et gestion des commentaires',
        'Système de suivi des retours administrateurs',
      ],
    },
  ],
}

const projectsData = {
  en: [
    {
      title: 'GamiX - Multiplayer Mobile Game',
      period: '12/2023 – 05/2024',
      description: 'Full-featured multiplayer game with real-time synchronization',
      technologies: ['Unity', '.NET', 'Node.js', 'MongoDB', 'Netcode'],
      overview: 'A competitive multiplayer mobile game featuring real-time synchronization with inventory management, player progression, and immersive gameplay mechanics.',
      architecture: 'Monolithic backend with Node.js/Express, MongoDB for data persistence, Unity frontend with Netcode for networking, .NET microservice for game logic.',
      yourRole: 'Full-stack developer - Designed and implemented game backend architecture, built gameplay mechanics, created inventory system, and optimized real-time multiplayer synchronization.',
      features: [
        'Real-time multiplayer with lag compensation',
        'User authentication and account management',
        'Game history and leaderboard tracking',
        'Inventory and progression systems',
        'Animations and graphics optimization',
        'Cross-device synchronization',
      ],
      technicalChallenges: [
        'Network latency compensation for smooth multiplayer experience',
        'Real-time state synchronization across distributed clients',
        'Managing game loop consistency in Netcode framework',
        'Optimizing MongoDB queries for high-frequency updates',
      ],
      codeStructure: 'Backend: Modular Node.js services, DAOs for database abstraction, middleware for authentication. Frontend: Unity scripts organized by game systems (player, inventory, network).',
      impact: 'Delivered a fully playable multiplayer game with 100+ concurrent users, providing seamless gameplay experience with sub-100ms latency.',
      futureImprovements: 'Cloud-based matchmaking, advanced anti-cheat systems, seasonal content updates, cross-platform support expansion.',
    },
    {
      title: 'Accommodation Management System',
      period: '10/2023 – 02/2024',
      description: 'Microservices-based full-stack application',
      technologies: ['Angular', 'Spring Boot', 'Docker', 'Jenkins'],
      overview: 'Enterprise-level accommodation booking and management platform built with microservices architecture for scalability and maintainability.',
      architecture: 'Microservices with Spring Boot, containerized with Docker, CI/CD pipeline with Jenkins, Angular frontend, API Gateway pattern implementation.',
      yourRole: 'Backend architect and developer - Designed microservices architecture, implemented booking and payment services, set up CI/CD pipeline with Jenkins.',
      features: [
        'Accommodation listing and search',
        'Booking management system',
        'Payment processing integration',
        'Multi-tenant support',
        'Admin dashboard',
        'Real-time availability updates',
      ],
      technicalChallenges: [
        'Ensuring data consistency across microservices',
        'Implementing distributed transaction patterns',
        'Service discovery and load balancing',
        'Managing inter-service communication',
      ],
      codeStructure: 'Each microservice has independent Spring Boot project with own database. API Gateway routes requests. Jenkins pipelines for automated testing and deployment.',
      impact: 'Reduced deployment time by 70%, improved system scalability to handle 10,000+ concurrent bookings, enhanced code maintainability.',
      futureImprovements: 'Event-driven architecture migration, Kubernetes orchestration, service mesh implementation, advanced analytics dashboard.',
    },
    {
      title: 'Multi-Platform Clinic Management',
      period: '01/2023 – 05/2023',
      description: 'Cross-platform application for clinic operations',
      technologies: ['JavaFX', 'Symfony', 'FlutterFlow', 'Firebase'],
      overview: 'Comprehensive clinic management solution supporting web, desktop, and mobile platforms with real-time patient data synchronization.',
      architecture: 'Backend: Symfony REST API with Firebase real-time database, Frontend: JavaFX for desktop, FlutterFlow for mobile, web interface built with Symfony templating.',
      yourRole: 'Lead developer - Coordinated cross-platform development, implemented patient management system, configured Firebase real-time synchronization, built admin interfaces.',
      features: [
        'Patient registration and medical history',
        'Appointment scheduling and management',
        'Doctor availability management',
        'Prescription management',
        'Real-time data sync across platforms',
        'Multi-role access control',
      ],
      technicalChallenges: [
        'Maintaining data consistency across platforms',
        'Handling offline mode with sync capabilities',
        'Implementing secure patient data handling',
        'Cross-platform UI/UX consistency',
      ],
      codeStructure: 'Centralized Symfony backend with Firebase integration, Platform-specific clients using MVC pattern, shared business logic via REST API.',
      impact: 'Streamlined clinic operations, reduced appointment management time by 60%, enabled remote clinic management.',
      futureImprovements: 'Telemedicine video consultation integration, AI-powered diagnosis assistance, mobile app native rewrite, advanced analytics.',
    },
  ],
  fr: [
    {
      title: 'GamiX - Jeu Mobile Multijoueur',
      period: '12/2023 – 05/2024',
      description: 'Jeu multijoueur complet avec synchronisation en temps réel',
      technologies: ['Unity', '.NET', 'Node.js', 'MongoDB', 'Netcode'],
      overview: 'Un jeu mobile multijoueur compétitif offrant synchronisation en temps réel avec gestion d\'inventaire, progression des joueurs et mécaniques de jeu immersives.',
      architecture: 'Backend monolithique avec Node.js/Express, MongoDB pour la persistance des données, frontend Unity avec Netcode pour la mise en réseau, microservice .NET pour la logique de jeu.',
      yourRole: 'Développeur full-stack - Conception et implémentation de l\'architecture backend, construction des mécaniques de jeu, création du système d\'inventaire, optimisation de la synchronisation multijoueur.',
      features: [
        'Multijoueur en temps réel avec compensation de latence',
        'Authentification des utilisateurs et gestion des comptes',
        'Suivi de l\'historique des jeux et classement',
        'Systèmes d\'inventaire et progression',
        'Animations et optimisation graphique',
        'Synchronisation cross-device',
      ],
      technicalChallenges: [
        'Compensation de la latence réseau pour une expérience multijoueur fluide',
        'Synchronisation d\'état en temps réel entre clients distribués',
        'Gestion de la cohérence de la boucle de jeu dans Netcode',
        'Optimisation des requêtes MongoDB pour mises à jour haute fréquence',
      ],
      codeStructure: 'Backend: Services Node.js modulaires, DAOs pour abstraction base de données, middleware pour authentification. Frontend: Scripts Unity organisés par systèmes de jeu.',
      impact: 'Jeu multijoueur complètement jouable avec 100+ utilisateurs simultanés, offrant une expérience fluide avec latence <100ms.',
      futureImprovements: 'Matchmaking basé sur le cloud, systèmes anti-cheat avancés, mises à jour de contenu saisonnier, expansion du support cross-plateforme.',
    },
    {
      title: 'Système de Gestion d\'Hébergement',
      period: '10/2023 – 02/2024',
      description: 'Application full-stack basée sur les microservices',
      technologies: ['Angular', 'Spring Boot', 'Docker', 'Jenkins'],
      overview: 'Plateforme de réservation et gestion d\'hébergement de niveau entreprise construite avec architecture microservices pour scalabilité et maintenabilité.',
      architecture: 'Microservices avec Spring Boot, conteneurisés avec Docker, pipeline CI/CD avec Jenkins, frontend Angular, implémentation pattern API Gateway.',
      yourRole: 'Architecte et développeur backend - Conception architecture microservices, implémentation services de réservation et paiement, mise en place pipeline CI/CD Jenkins.',
      features: [
        'Listing et recherche d\'hébergements',
        'Système de gestion des réservations',
        'Intégration traitement des paiements',
        'Support multi-tenant',
        'Tableau de bord administrateur',
        'Mises à jour disponibilité en temps réel',
      ],
      technicalChallenges: [
        'Assurer la cohérence des données entre microservices',
        'Implémentation patterns transactions distribuées',
        'Service discovery et load balancing',
        'Gestion communication inter-services',
      ],
      codeStructure: 'Chaque microservice avec projet Spring Boot indépendant et base de données propre. API Gateway route les requêtes. Pipelines Jenkins pour tests automatisés et déploiement.',
      impact: 'Réduction temps déploiement de 70%, amélioration scalabilité pour 10,000+ réservations simultanées, meilleure maintenabilité du code.',
      futureImprovements: 'Migration architecture event-driven, orchestration Kubernetes, implémentation service mesh, tableau de bord analytics avancé.',
    },
    {
      title: 'Gestion de Clinique Multi-Plateforme',
      period: '01/2023 – 05/2023',
      description: 'Application multiplateforme pour opérations de clinique',
      technologies: ['JavaFX', 'Symfony', 'FlutterFlow', 'Firebase'],
      overview: 'Solution complète de gestion clinique supportant plateformes web, bureau et mobile avec synchronisation en temps réel des données patients.',
      architecture: 'Backend: API REST Symfony avec base de données Firebase en temps réel, Frontend: JavaFX pour bureau, FlutterFlow pour mobile, interface web avec templates Symfony.',
      yourRole: 'Développeur principal - Coordination développement multi-plateforme, implémentation système gestion patients, configuration synchronisation Firebase, construction interfaces administrateur.',
      features: [
        'Enregistrement patients et historique médical',
        'Planification et gestion rendez-vous',
        'Gestion disponibilité médecins',
        'Gestion prescriptions',
        'Synchronisation données en temps réel',
        'Contrôle d\'accès multi-rôles',
      ],
      technicalChallenges: [
        'Maintien cohérence données entre plateformes',
        'Gestion mode hors ligne avec capacités synchronisation',
        'Implémentation traitement sécurisé données patients',
        'Cohérence UI/UX cross-plateforme',
      ],
      codeStructure: 'Backend Symfony centralisé avec intégration Firebase, clients spécifiques plateforme utilisant pattern MVC, logique métier partagée via API REST.',
      impact: 'Rationalisation opérations clinique, réduction temps gestion rendez-vous de 60%, activation gestion clinique à distance.',
      futureImprovements: 'Intégration téléconsultation vidéo, assistance diagnostic basée IA, réécriture native application mobile, analytics avancé.',
    },
  ],
}

const skillsData = {
  en: {
    languages: ['JavaScript/TypeScript', 'Dart', 'Java', 'Python', 'C/C++/C#', 'Solidity'],
    backend: ['Node.js', 'Express', 'Spring Boot', 'Flask', 'ASP.NET', 'WebSockets', 'REST'],
    frontend: ['React', 'Flutter', 'Vue.js', 'Bootstrap', 'Tailwind CSS'],
    databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'PL/SQL'],
    devops: ['Docker', 'Jenkins', 'SonarQube', 'Prometheus', 'Grafana'],
    ml: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV'],
    tools: ['Git', 'GitHub', 'GitLab', 'Jira', 'Agile/Scrum'],
  },
  fr: {
    languages: ['JavaScript/TypeScript', 'Dart', 'Java', 'Python', 'C/C++/C#', 'Solidity'],
    backend: ['Node.js', 'Express', 'Spring Boot', 'Flask', 'ASP.NET', 'WebSockets', 'REST'],
    frontend: ['React', 'Flutter', 'Vue.js', 'Bootstrap', 'Tailwind CSS'],
    databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'PL/SQL'],
    devops: ['Docker', 'Jenkins', 'SonarQube', 'Prometheus', 'Grafana'],
    ml: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV'],
    tools: ['Git', 'GitHub', 'GitLab', 'Jira', 'Agile/Scrum'],
  },
}

export default function Home() {
  const { language } = useLanguage()
  const t = translations[language]
  const experiences = experiencesData[language]
  const projects = projectsData[language]
  const skills = skillsData[language]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center py-12 px-6">
        <div className="max-w-7xl mx-auto w-full">
          {/* Profile Picture and Name Section */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-12 md:mb-16 items-start md:items-start">
            {/* Left: Profile Picture */}
            <div className="relative w-32 md:w-48 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 rounded-3xl blur-3xl -z-10"></div>
              <img
                src="/profile.jpg"
                alt="Jdey Iheb Profile"
                className="w-full rounded-3xl border-2 border-primary/40 object-cover shadow-2xl"
              />
            </div>

            {/* Right: Name, Title and Description */}
            <div className="flex-1">
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  Jdey <span className="text-primary">Iheb</span>
                </h1>
                <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
                  {t.hero.fullStack}
                </p>
              </div>

              <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                {t.hero.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#contact"
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity w-fit"
                >
                  {t.hero.cta}
                </a>
                <a
                  href="https://github.com/ihebjdey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors w-fit"
                >
                  GitHub
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 items-center">
                <a
                  href="https://github.com/ihebjdey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/ihebjdey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:ihebjdey2@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <h2 className="text-4xl font-bold mb-12 text-center">{t.experience.title}</h2>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border-l-2 border-primary pl-8 py-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-2xl font-semibold">{exp.title}</h3>
                  <p className="text-primary">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </div>

              <p className="text-muted-foreground mb-4">{exp.description}</p>

              <ul className="space-y-2 mb-4">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">{t.projects.title}</h2>
        <p className="text-center text-muted-foreground text-lg mb-12">Click on a project to explore detailed information</p>

        <div className="space-y-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <h2 className="text-4xl font-bold mb-12 text-center">{t.skills.title}</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="bg-card/50 border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-primary mb-4 capitalize">
                {t.skills[category as keyof typeof t.skills]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">{t.cv.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.cv.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="/cv/Jdey-Iheb-CV-English.pdf"
              download
              className="group px-8 py-6 bg-primary text-primary-foreground rounded-xl hover:shadow-lg transition-all duration-300 font-semibold flex items-center justify-center gap-3 text-lg"
            >
              <Download size={24} className="group-hover:translate-y-1 transition-transform" />
              <div>
                <div>{t.cv.english}</div>
                <div className="text-sm text-primary-foreground/80">PDF Format</div>
              </div>
            </a>
            <a
              href="/cv/Jdey-Iheb-CV-French.pdf"
              download
              className="group px-8 py-6 border-2 border-primary text-primary rounded-xl hover:bg-primary/10 hover:shadow-lg transition-all duration-300 font-semibold flex items-center justify-center gap-3 text-lg"
            >
              <Download size={24} className="group-hover:translate-y-1 transition-transform" />
              <div>
                <div>{t.cv.french}</div>
                <div className="text-sm text-primary/80">Format PDF</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">{t.contact.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.contact.description}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="mailto:ihebjdey2@gmail.com"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-medium flex items-center gap-2"
            >
              <Mail size={24} />
              {t.contact.emailMe}
            </a>
            <a
              href="https://linkedin.com/in/ihebjdey"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors text-lg font-medium flex items-center gap-2"
            >
              <Linkedin size={24} />
              {t.contact.linkedIn}
            </a>
            <a
              href="https://github.com/ihebjdey"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors text-lg font-medium flex items-center gap-2"
            >
              <Github size={24} />
              {t.contact.github}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-muted-foreground">
          <p>{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  )
}
