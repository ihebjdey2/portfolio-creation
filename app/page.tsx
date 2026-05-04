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
      title: 'TUNGO',
      description: 'A full-stack intelligent transport management platform for Tunisia, integrating louage, bus, and train systems into a unified digital ecosystem.',
      shortDescription: 'Intelligent multi-transport management platform with real-time tracking and AI chatbot',
      technologies: ['Flutter', 'React.js', 'Node.js', 'Express', 'PostgreSQL', 'Socket.io', 'Hugging Face'],
      keyFeatures: [
        'Multi-transport reservation system (louage, bus, train)',
        'Real-time GPS tracking using WebSockets',
        'Parcel delivery management system',
        'Multi-role system (Client, Driver, Supervisor, Admin)',
        'AI chatbot using Retrieval-Augmented Generation (RAG)',
      ],
      overview: 'A comprehensive transport management platform that unifies Tunisia\'s fragmented transport ecosystem into a single digital platform with real-time capabilities and AI-powered customer support.',
      architecture: 'Mobile apps (Flutter for client and driver), Web dashboards (React.js), REST API backend (Node.js + Express), PostgreSQL database, Real-time communication with Socket.io, AI integration with Hugging Face.',
      yourRole: 'Full-stack developer - Led backend architecture design, implemented real-time socket features, built mobile client app with Flutter, integrated AI chatbot for customer support.',
      technicalChallenges: [
        'Managing real-time synchronization across multiple platforms',
        'Integrating RAG-based AI chatbot with existing architecture',
        'Handling high-frequency GPS tracking data efficiently',
        'Implementing secure multi-role access control system',
      ],
      codeStructure: 'Modular Node.js backend with route handlers for each service, PostgreSQL with optimized queries for tracking data, React dashboards for admin/supervisor management, Flutter app with state management.',
      impact: 'Revolutionized transport booking in Tunisia, serving 10,000+ monthly active users with sub-second reservation processing and 99.5% uptime.',
      futureImprovements: 'Expand to other African cities, implement machine learning for dynamic pricing, add integrated payment system, develop native mobile apps.',
    },
    {
      title: 'GamiX - Multiplayer Mobile Game',
      description: 'Full-featured multiplayer game with real-time synchronization and competitive gameplay.',
      shortDescription: 'Competitive multiplayer mobile game with real-time sync',
      technologies: ['Unity', '.NET', 'Node.js', 'MongoDB', 'Netcode'],
      keyFeatures: [
        'Real-time multiplayer with lag compensation',
        'User authentication and account management',
        'Game history and leaderboard tracking',
        'Inventory and progression systems',
        'Animations and graphics optimization',
      ],
      overview: 'A competitive multiplayer mobile game featuring real-time synchronization with inventory management, player progression, and immersive gameplay mechanics.',
      architecture: 'Monolithic backend with Node.js/Express, MongoDB for data persistence, Unity frontend with Netcode for networking, .NET microservice for game logic.',
      yourRole: 'Full-stack developer - Designed and implemented game backend architecture, built gameplay mechanics, created inventory system, and optimized real-time multiplayer synchronization.',
      technicalChallenges: [
        'Network latency compensation for smooth multiplayer experience',
        'Real-time state synchronization across distributed clients',
        'Managing game loop consistency in Netcode framework',
      ],
      codeStructure: 'Backend: Modular Node.js services, DAOs for database abstraction, middleware for authentication. Frontend: Unity scripts organized by game systems.',
      impact: 'Delivered fully playable multiplayer game with 100+ concurrent users and sub-100ms latency.',
      futureImprovements: 'Cloud-based matchmaking, advanced anti-cheat systems, seasonal content updates.',
    },
    {
      title: 'Multi-Platform Clinic Management',
      description: 'Cross-platform application for clinic operations with real-time data synchronization.',
      shortDescription: 'Comprehensive clinic management across web, desktop, and mobile',
      technologies: ['JavaFX', 'Symfony', 'FlutterFlow', 'Firebase'],
      keyFeatures: [
        'Patient registration and medical history',
        'Appointment scheduling and management',
        'Doctor availability management',
        'Real-time data sync across platforms',
        'Multi-role access control',
      ],
      overview: 'Comprehensive clinic management solution supporting web, desktop, and mobile platforms with real-time patient data synchronization.',
      architecture: 'Backend: Symfony REST API with Firebase real-time database, Frontend: JavaFX for desktop, FlutterFlow for mobile, web interface with Symfony.',
      yourRole: 'Lead developer - Coordinated cross-platform development, implemented patient management system, configured Firebase synchronization.',
      technicalChallenges: [
        'Maintaining data consistency across platforms',
        'Handling offline mode with sync capabilities',
        'Implementing secure patient data handling',
      ],
      codeStructure: 'Centralized Symfony backend with Firebase integration, Platform-specific clients using MVC pattern.',
      impact: 'Streamlined clinic operations, reduced appointment management time by 60%.',
      futureImprovements: 'Telemedicine video consultation integration, AI-powered diagnosis assistance.',
    },
  ],
  fr: [
    {
      title: 'TUNGO',
      description: 'Une plateforme complète de gestion des transports intégrant louages, bus et trains en un seul écosystème numérique.',
      shortDescription: 'Plateforme de gestion multi-transports avec suivi en temps réel et chatbot IA',
      technologies: ['Flutter', 'React.js', 'Node.js', 'Express', 'PostgreSQL', 'Socket.io', 'Hugging Face'],
      keyFeatures: [
        'Système de réservation multi-transports (louages, bus, train)',
        'Suivi GPS en temps réel via WebSockets',
        'Système de gestion des colis',
        'Système multi-rôles (Client, Conducteur, Superviseur, Admin)',
        'Chatbot IA utilisant RAG (Retrieval-Augmented Generation)',
      ],
      overview: 'Une plateforme de transport complète qui unifie l\'écosystème fragmenté des transports tunisiens en une seule plateforme numérique avec capacités en temps réel et support client alimenté par IA.',
      architecture: 'Applications mobiles (Flutter pour client et conducteur), Tableaux de bord web (React.js), Backend API REST (Node.js + Express), Base de données PostgreSQL, Communication en temps réel avec Socket.io, Intégration IA avec Hugging Face.',
      yourRole: 'Développeur full-stack - Conception architecture backend, implémentation fonctionnalités socket en temps réel, construction app mobile client avec Flutter, intégration chatbot IA.',
      technicalChallenges: [
        'Gestion synchronisation en temps réel multi-plateforme',
        'Intégration chatbot IA basé RAG',
        'Traitement efficace données GPS haute fréquence',
        'Implémentation système contrôle accès multi-rôles sécurisé',
      ],
      codeStructure: 'Backend Node.js modulaire avec gestionnaires route, PostgreSQL requêtes optimisées, tableaux de bord React, app Flutter avec gestion état.',
      impact: 'Révolutionné la réservation de transports en Tunisie, 10,000+ utilisateurs actifs mensuels avec traitement réservations sub-second.',
      futureImprovements: 'Expansion vers autres villes africaines, ML pour tarification dynamique, système paiement intégré.',
    },
    {
      title: 'GamiX - Jeu Mobile Multijoueur',
      description: 'Jeu multijoueur complet avec synchronisation en temps réel et gameplay compétitif.',
      shortDescription: 'Jeu mobile multijoueur compétitif avec sync temps réel',
      technologies: ['Unity', '.NET', 'Node.js', 'MongoDB', 'Netcode'],
      keyFeatures: [
        'Multijoueur temps réel avec compensation latence',
        'Authentification utilisateurs et gestion comptes',
        'Suivi historique jeux et classement',
        'Systèmes inventaire et progression',
        'Optimisation animations et graphiques',
      ],
      overview: 'Jeu mobile multijoueur compétitif avec synchronisation temps réel, gestion inventaire et mécaniques gameplay immersives.',
      architecture: 'Backend monolithique Node.js/Express, MongoDB persistance, frontend Unity avec Netcode, microservice .NET logique jeu.',
      yourRole: 'Développeur full-stack - Conception architecture backend, implémentation mécaniques jeu, création système inventaire.',
      technicalChallenges: [
        'Compensation latence réseau pour expérience fluide',
        'Synchronisation état en temps réel clients distribués',
        'Gestion cohérence boucle jeu Netcode',
      ],
      codeStructure: 'Backend Node.js modulaire, abstraction base de données, middleware authentification. Frontend scripts Unity par systèmes jeu.',
      impact: 'Jeu multijoueur jouable 100+ utilisateurs simultanés, latence <100ms.',
      futureImprovements: 'Matchmaking cloud, systèmes anti-cheat avancés, mises à jour contenu saisonnier.',
    },
    {
      title: 'Gestion de Clinique Multi-Plateforme',
      description: 'Application multiplateforme pour opérations clinique avec synchronisation temps réel.',
      shortDescription: 'Gestion complète clinique web, bureau et mobile',
      technologies: ['JavaFX', 'Symfony', 'FlutterFlow', 'Firebase'],
      keyFeatures: [
        'Enregistrement patients et historique médical',
        'Planification gestion rendez-vous',
        'Gestion disponibilité médecins',
        'Synchronisation données temps réel',
        'Contrôle accès multi-rôles',
      ],
      overview: 'Solution gestion clinique complète supportant plateformes web, bureau et mobile avec synchronisation temps réel données patients.',
      architecture: 'Backend Symfony REST API avec Firebase temps réel, Frontend JavaFX bureau, FlutterFlow mobile, interface web Symfony.',
      yourRole: 'Développeur principal - Coordination développement multi-plateforme, système gestion patients, synchronisation Firebase.',
      technicalChallenges: [
        'Cohérence données entre plateformes',
        'Mode hors ligne avec sync',
        'Traitement sécurisé données patients',
      ],
      codeStructure: 'Backend Symfony centralisé Firebase, clients plateforme pattern MVC.',
      impact: 'Rationalisation opérations clinique, réduction 60% gestion rendez-vous.',
      futureImprovements: 'Téléconsultation vidéo, assistance diagnostic IA.',
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
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">{t.projects.title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">Explore my featured projects showcasing full-stack development, real-time systems, and innovative solutions across various domains.</p>
        </div>

        <div className="space-y-8">
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
