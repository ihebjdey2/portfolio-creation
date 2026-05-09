'use client'

import { Mail, Github, Linkedin, Download, ExternalLink, ArrowRight, Code, Zap, Server } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'
import { Header } from '@/components/header'
import { ProjectCard } from '@/components/project-card'
import { TungoCaseStudy } from '@/components/tungo-case-study'
import { useState } from 'react'

const skillsData = {
  frontend: ['React', 'Next.js', 'Flutter', 'Tailwind CSS', 'TypeScript'],
  backend: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Socket.io'],
  database: ['PostgreSQL', 'MongoDB', 'Firebase', 'Redis'],
  tools: ['Docker', 'Jenkins', 'Git', 'CI/CD', 'Hugging Face', 'TensorFlow'],
}

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
      featured: true,
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
      featured: false,
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
      featured: false,
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
      featured: true,
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
      featured: false,
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
      featured: false,
    },
  ],
}

export default function Home() {
  const { language } = useLanguage()
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' })
  
  const t = translations[language]
  const experiences = experiencesData[language]
  const projects = projectsData[language]
  const featuredProject = projects.find(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', contactForm)
    // Handle form submission
  }

  return (
    <main className="bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center py-20 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            {/* Profile Picture */}
            <div className="relative w-40 md:w-56 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-3xl -z-10"></div>
              <img
                src="/profile.jpg"
                alt="Jdey Iheb"
                className="w-full rounded-3xl border-2 border-primary/30 object-cover shadow-2xl"
              />
            </div>

            {/* Hero Content */}
            <div className="flex-1">
              <p className="text-primary font-semibold text-lg mb-2">{t.hero.tagline}</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
                {t.hero.title}
              </h1>
              <p className="text-2xl text-muted-foreground mb-6 text-balance">{t.hero.subtitle}</p>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                {t.hero.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="#projects"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 w-fit"
                >
                  {t.hero.viewProjects}
                  <ArrowRight size={20} />
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/10 transition-all duration-300 w-fit"
                >
                  {t.hero.contactMe}
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 items-center">
                <a href="https://github.com/ihebjdey" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/ihebjdey" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:ihebjdey2@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-4xl font-bold">{t.about.title}</h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{t.about.bio}</p>
            <ul className="space-y-4">
              {t.about.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Code className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <h2 className="text-4xl font-bold mb-12">{t.skills.title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">{t.skills.frontend}</h3>
            <div className="space-y-2">
              {skillsData.frontend.map((skill) => (
                <div key={skill} className="px-3 py-2 bg-card border border-border rounded-lg text-sm">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">{t.skills.backend}</h3>
            <div className="space-y-2">
              {skillsData.backend.map((skill) => (
                <div key={skill} className="px-3 py-2 bg-card border border-border rounded-lg text-sm">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">{t.skills.database}</h3>
            <div className="space-y-2">
              {skillsData.database.map((skill) => (
                <div key={skill} className="px-3 py-2 bg-card border border-border rounded-lg text-sm">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">{t.skills.tools}</h3>
            <div className="space-y-2">
              {skillsData.tools.map((skill) => (
                <div key={skill} className="px-3 py-2 bg-card border border-border rounded-lg text-sm">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Case Study - TUNGO */}
      <TungoCaseStudy language={language} />

      {/* Projects Grid */}
      {otherProjects.length > 0 && (
        <section id="projects" className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
          <h2 className="text-3xl font-bold mb-12">Other Notable Projects</h2>
          <div className="space-y-8">
            {otherProjects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </section>
      )}

      {/* Experience Section */}
      <section id="experience" className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <h2 className="text-4xl font-bold mb-12">{t.experience.title}</h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border-l-2 border-primary pl-8 pb-8">
              <p className="text-sm text-primary font-semibold mb-1">{exp.period}</p>
              <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
              <p className="text-lg text-muted-foreground mb-4">{exp.company}</p>
              <p className="text-muted-foreground mb-4">{exp.description}</p>
              <ul className="space-y-2 mb-4">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CV Download Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t.cv.title}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <a
            href="/cv/Jdey-Iheb-CV-English.pdf"
            download
            className="group px-8 py-6 bg-primary text-primary-foreground rounded-xl hover:shadow-lg transition-all duration-300 font-semibold flex items-center justify-center gap-3"
          >
            <Download size={24} className="group-hover:translate-y-1 transition-transform" />
            <div className="text-left">
              <div>{t.cv.english}</div>
              <div className="text-sm text-primary-foreground/80">PDF</div>
            </div>
          </a>
          <a
            href="/cv/Jdey-Iheb-CV-French.pdf"
            download
            className="group px-8 py-6 border-2 border-primary text-primary rounded-xl hover:bg-primary/10 hover:shadow-lg transition-all duration-300 font-semibold flex items-center justify-center gap-3"
          >
            <Download size={24} className="group-hover:translate-y-1 transition-transform" />
            <div className="text-left">
              <div>{t.cv.french}</div>
              <div className="text-sm text-primary/80">PDF</div>
            </div>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">{t.contact.title}</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">{t.contact.subtitle}</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder={t.contact.name}
                  value={contactForm.name}
                  onChange={handleContactChange}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder={t.contact.email}
                  value={contactForm.email}
                  onChange={handleContactChange}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder={t.contact.message}
                  value={contactForm.message}
                  onChange={handleContactChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                {t.contact.send}
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold text-primary mb-2">Email</p>
                <a href="mailto:ihebjdey2@gmail.com" className="text-lg hover:text-primary transition-colors">
                  ihebjdey2@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary mb-2">Location</p>
                <p className="text-lg text-muted-foreground">{t.contact.location}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary mb-4">Social</p>
                <div className="flex gap-4">
                  <a href="https://github.com/ihebjdey" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="https://linkedin.com/in/ihebjdey" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground text-sm">
          {t.footer.copyright}
        </div>
      </footer>
    </main>
  )
}
