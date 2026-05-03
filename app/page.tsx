'use client'


import { Mail, Github, Linkedin, ExternalLink, Code2, Zap, Globe, Download } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'
import { Header } from '@/components/header'

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
      highlights: [
        'Backend: User management, game history, inventory with MongoDB',
        'Gameplay mechanics, animations, graphics options with Unity',
        'Real-time multiplayer synchronization using Netcode',
        'Complete UI/UX design for immersive experience',
      ],
    },
    {
      title: 'Accommodation Management System',
      period: '10/2023 – 02/2024',
      description: 'Microservices-based full-stack application',
      technologies: ['Angular', 'Spring Boot', 'Docker', 'Jenkins'],
      highlights: [
        'Microservices architecture with Spring Boot',
        'Frontend development with Angular',
        'CI/CD pipeline implementation with Jenkins',
      ],
    },
    {
      title: 'Multi-Platform Clinic Management',
      period: '01/2023 – 05/2023',
      description: 'Cross-platform application for clinic operations',
      technologies: ['JavaFX', 'Symfony', 'FlutterFlow', 'Firebase'],
      highlights: [
        'Web, desktop, and mobile platforms',
        'Patient and appointment management',
        'Real-time data synchronization with Firebase',
      ],
    },
  ],
  fr: [
    {
      title: 'GamiX - Jeu Mobile Multijoueur',
      period: '12/2023 – 05/2024',
      description: 'Jeu multijoueur complet avec synchronisation en temps réel',
      technologies: ['Unity', '.NET', 'Node.js', 'MongoDB', 'Netcode'],
      highlights: [
        'Backend: Gestion des utilisateurs, historique des jeux, inventaire avec MongoDB',
        'Mécaniques de jeu, animations, options graphiques avec Unity',
        'Synchronisation multijoueur en temps réel avec Netcode',
        'Design complet UI/UX pour une expérience immersive',
      ],
    },
    {
      title: 'Système de Gestion d\'Hébergement',
      period: '10/2023 – 02/2024',
      description: 'Application full-stack basée sur les microservices',
      technologies: ['Angular', 'Spring Boot', 'Docker', 'Jenkins'],
      highlights: [
        'Architecture microservices avec Spring Boot',
        'Développement frontend avec Angular',
        'Implémentation de pipeline CI/CD avec Jenkins',
      ],
    },
    {
      title: 'Gestion de Clinique Multi-Plateforme',
      period: '01/2023 – 05/2023',
      description: 'Application multiplateforme pour opérations de clinique',
      technologies: ['JavaFX', 'Symfony', 'FlutterFlow', 'Firebase'],
      highlights: [
        'Plateformes web, bureau et mobile',
        'Gestion des patients et des rendez-vous',
        'Synchronisation des données en temps réel avec Firebase',
      ],
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
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold">{t.hero.title}</h1>
              <p className="text-2xl text-primary">{t.hero.subtitle}</p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              {t.hero.description}
            </p>

            <div className="flex gap-4 pt-4 flex-wrap">
              <a
                href="mailto:ihebjdey2@gmail.com"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                <Mail size={20} />
                {t.hero.getInTouch}
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
              >
                {t.hero.viewProjects}
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/ihebjdey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/ihebjdey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:ihebjdey2@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 border border-primary/30">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Code2 className="text-primary" size={32} />
                  <span className="text-lg font-semibold">{t.hero.fullStack}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="text-primary" size={32} />
                  <span className="text-lg font-semibold">{t.hero.realTime}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="text-primary" size={32} />
                  <span className="text-lg font-semibold">{t.hero.devops}</span>
                </div>
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
        <h2 className="text-4xl font-bold mb-12 text-center">{t.projects.title}</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="border border-border rounded-lg p-6 hover:border-primary/50 transition-colors bg-card/50">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.period}</p>
                </div>
                <ExternalLink size={20} className="text-primary" />
              </div>

              <p className="text-muted-foreground mb-4">{project.description}</p>

              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary">›</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
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
        <div className="text-center space-y-8">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold">{t.cv.title}</h2>
            <p className="text-lg text-muted-foreground">{t.cv.subtitle}</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="/cv/Jdey-Iheb-CV-English.pdf"
              download
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-medium flex items-center gap-2"
            >
              <Download size={24} />
              {t.cv.english}
            </a>
            <a
              href="/cv/Jdey-Iheb-CV-French.pdf"
              download
              className="px-8 py-4 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors text-lg font-medium flex items-center gap-2"
            >
              <Download size={24} />
              {t.cv.french}
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
