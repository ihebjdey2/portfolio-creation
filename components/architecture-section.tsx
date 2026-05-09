'use client'

import { useState } from 'react'
import { Database, Zap, Brain, Code2, Activity, ChevronRight } from 'lucide-react'

interface ArchitectureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  technologies: string[]
  details: string[]
  delay: number
}

function ArchitectureCard({ icon, title, description, technologies, details, delay }: ArchitectureCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className="group opacity-0 animate-fade-in"
      style={{
        animationDelay: `${delay * 100}ms`,
        animationFillMode: 'forwards',
      }}
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className={`relative p-6 rounded-xl border cursor-pointer transition-all duration-500 ${
          isExpanded
            ? 'border-primary/60 bg-gradient-to-br from-card to-card/50 shadow-2xl'
            : 'border-primary/20 bg-card/30 hover:border-primary/40 hover:bg-card/50 shadow-lg'
        }`}
      >
        {/* Background gradient on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl transition-opacity duration-500 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}></div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-lg transition-all duration-300 ${isExpanded ? 'bg-primary/20' : 'bg-primary/10'}`}>
              {icon}
            </div>
            <ChevronRight
              size={20}
              className={`text-primary/60 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}
            />
          </div>

          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>

          {/* Technology badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span key={tech} className="px-2 py-1 text-xs bg-primary/15 text-primary rounded-full font-medium">
                {tech}
              </span>
            ))}
          </div>

          {/* Expanded details */}
          {isExpanded && (
            <div className="mt-6 pt-6 border-t border-primary/20 space-y-3 animate-fade-in">
              {details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">{detail}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

interface ArchitectureSectionProps {
  language: 'en' | 'fr'
}

export function ArchitectureSection({ language }: ArchitectureSectionProps) {
  const content = {
    en: {
      title: 'System Architecture',
      subtitle: 'Scalable, modular design patterns built for production environments',
      frontend: {
        title: 'Frontend Layer',
        description: 'Multi-platform user interfaces with real-time data binding',
        technologies: ['React', 'Next.js', 'Flutter', 'Tailwind'],
        details: [
          'Responsive web applications using React and Next.js',
          'Native mobile apps with Flutter for iOS and Android',
          'Component-based architecture with TypeScript',
          'State management with React hooks and Context API',
          'Real-time UI updates via WebSocket connections',
        ],
      },
      backend: {
        title: 'Backend Services',
        description: 'RESTful APIs with microservices architecture',
        technologies: ['Node.js', 'Express', 'TypeScript'],
        details: [
          'Modular Express.js REST API with clean route separation',
          'Middleware for authentication, validation, and error handling',
          'Service layer pattern for business logic encapsulation',
          'Rate limiting and request throttling for API protection',
          'Comprehensive logging and monitoring with structured logs',
        ],
      },
      database: {
        title: 'Data Layer',
        description: 'Multi-database strategy for optimal performance',
        technologies: ['PostgreSQL', 'MongoDB', 'Redis'],
        details: [
          'PostgreSQL for relational data and ACID compliance',
          'MongoDB for flexible, schema-less document storage',
          'Redis caching layer for high-frequency queries',
          'Connection pooling for database performance optimization',
          'Automated backups and disaster recovery mechanisms',
        ],
      },
      realtime: {
        title: 'Real-Time Communication',
        description: 'WebSocket and event-driven architecture',
        technologies: ['Socket.io', 'WebSockets', 'Event Emitters'],
        details: [
          'Bi-directional communication with Socket.io',
          'Real-time location tracking with GPS updates',
          'Push notifications and event broadcasting',
          'Connection pooling and room management',
          'Fallback mechanisms for network resilience',
        ],
      },
      ai: {
        title: 'AI Integration',
        description: 'Machine learning and intelligent features',
        technologies: ['Hugging Face', 'RAG', 'TensorFlow', 'Python'],
        details: [
          'Retrieval-Augmented Generation for intelligent chatbots',
          'Natural language processing with transformer models',
          'Vector embeddings for semantic search',
          'Model serving and inference optimization',
          'AI pipeline integration with backend services',
        ],
      },
      devops: {
        title: 'DevOps & Deployment',
        description: 'Containerization and CI/CD pipeline',
        technologies: ['Docker', 'Jenkins', 'Git', 'Kubernetes'],
        details: [
          'Docker containerization for consistent deployment',
          'Jenkins CI/CD pipeline for automated testing and deployment',
          'Multi-stage builds for optimized production images',
          'Environment variable management and secrets handling',
          'Health checks and graceful shutdown mechanisms',
        ],
      },
    },
    fr: {
      title: 'Architecture Système',
      subtitle: 'Patterns de design scalables et modulaires pour environnements de production',
      frontend: {
        title: 'Couche Frontend',
        description: 'Interfaces utilisateur multi-plateformes avec liaison de données en temps réel',
        technologies: ['React', 'Next.js', 'Flutter', 'Tailwind'],
        details: [
          'Applications web réactives avec React et Next.js',
          'Applications mobiles natives avec Flutter pour iOS et Android',
          'Architecture basée sur les composants avec TypeScript',
          'Gestion d\'état avec hooks React et Context API',
          'Mises à jour UI en temps réel via connexions WebSocket',
        ],
      },
      backend: {
        title: 'Services Backend',
        description: 'APIs RESTful avec architecture microservices',
        technologies: ['Node.js', 'Express', 'TypeScript'],
        details: [
          'API REST Express.js modulaire avec séparation claire des routes',
          'Middleware pour authentification, validation et gestion erreurs',
          'Pattern service layer pour encapsulation logique métier',
          'Limitation débit et throttling requêtes pour protection API',
          'Journalisation complète et monitoring avec logs structurés',
        ],
      },
      database: {
        title: 'Couche Données',
        description: 'Stratégie multi-base de données pour performance optimale',
        technologies: ['PostgreSQL', 'MongoDB', 'Redis'],
        details: [
          'PostgreSQL pour données relationnelles et conformité ACID',
          'MongoDB pour stockage flexible de documents sans schéma',
          'Couche cache Redis pour optimisation requêtes haute fréquence',
          'Connection pooling pour optimisation performance base de données',
          'Sauvegardes automatisées et mécanismes récupération sinistre',
        ],
      },
      realtime: {
        title: 'Communication Temps Réel',
        description: 'Architecture WebSocket et pilotée par événements',
        technologies: ['Socket.io', 'WebSockets', 'Event Emitters'],
        details: [
          'Communication bidirectionnelle avec Socket.io',
          'Suivi localisation en temps réel avec mises à jour GPS',
          'Notifications push et diffusion événements',
          'Gestion regroupement connexions et salons',
          'Mécanismes fallback pour résilience réseau',
        ],
      },
      ai: {
        title: 'Intégration IA',
        description: 'Apprentissage automatique et fonctionnalités intelligentes',
        technologies: ['Hugging Face', 'RAG', 'TensorFlow', 'Python'],
        details: [
          'Génération Augmentée par Récupération pour chatbots intelligents',
          'Traitement langage naturel avec modèles transformer',
          'Incorporations vectorielles pour recherche sémantique',
          'Service modèle et optimisation inférence',
          'Intégration pipeline IA avec services backend',
        ],
      },
      devops: {
        title: 'DevOps & Déploiement',
        description: 'Conteneurisation et pipeline CI/CD',
        technologies: ['Docker', 'Jenkins', 'Git', 'Kubernetes'],
        details: [
          'Conteneurisation Docker pour déploiement cohérent',
          'Pipeline CI/CD Jenkins pour test et déploiement automatisés',
          'Builds multi-étapes pour images production optimisées',
          'Gestion variables environnement et secrets',
          'Vérifications santé et arrêt gracieux mécanismes',
        ],
      },
    },
  }

  const t = content[language]
  const architectures = [t.frontend, t.backend, t.database, t.realtime, t.ai, t.devops]
  const icons = [
    <Code2 key="frontend" size={24} className="text-primary" />,
    <Server key="backend" size={24} className="text-primary" />,
    <Database key="database" size={24} className="text-primary" />,
    <Activity key="realtime" size={24} className="text-primary" />,
    <Brain key="ai" size={24} className="text-primary" />,
    <Zap key="devops" size={24} className="text-primary" />,
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
      <div className="mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">{t.title}</h2>
        <p className="text-lg text-muted-foreground max-w-3xl">{t.subtitle}</p>
      </div>

      {/* Architecture Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {architectures.map((arch, idx) => (
          <ArchitectureCard
            key={idx}
            icon={icons[idx]}
            title={arch.title}
            description={arch.description}
            technologies={arch.technologies}
            details={arch.details}
            delay={idx}
          />
        ))}
      </div>

      {/* System Flow Visualization */}
      <div className="mt-20 pt-20 border-t border-primary/20">
        <h3 className="text-3xl font-bold mb-12">Data Flow Architecture</h3>
        <div className="relative bg-gradient-to-br from-card/50 to-card/30 rounded-2xl p-8 border border-primary/20 overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 rounded-2xl"></div>

          <div className="relative z-10">
            <div className="grid md:grid-cols-5 gap-4 items-center">
              {/* Mobile Layer */}
              <div className="text-center p-6 rounded-xl bg-primary/10 border border-primary/30">
                <div className="text-sm font-semibold text-primary mb-2">Mobile</div>
                <div className="text-xs text-muted-foreground">Flutter Apps</div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center">
                <ChevronRight size={24} className="text-primary/50 rotate-0" />
              </div>

              {/* API Layer */}
              <div className="text-center p-6 rounded-xl bg-primary/10 border border-primary/30">
                <div className="text-sm font-semibold text-primary mb-2">API Gateway</div>
                <div className="text-xs text-muted-foreground">Express.js</div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center">
                <ChevronRight size={24} className="text-primary/50 rotate-0" />
              </div>

              {/* Data Layer */}
              <div className="text-center p-6 rounded-xl bg-primary/10 border border-primary/30">
                <div className="text-sm font-semibold text-primary mb-2">Data Store</div>
                <div className="text-xs text-muted-foreground">PostgreSQL/Redis</div>
              </div>
            </div>

            {/* Real-time Layer */}
            <div className="mt-8 pt-8 border-t border-primary/20">
              <div className="grid md:grid-cols-4 gap-4 items-center">
                <div className="text-center p-4 rounded-lg bg-accent/10 border border-accent/30">
                  <div className="text-xs font-semibold text-accent">Real-Time Events</div>
                </div>
                <div className="hidden md:flex justify-center">
                  <ChevronRight size={20} className="text-accent/50" />
                </div>
                <div className="text-center p-4 rounded-lg bg-accent/10 border border-accent/30">
                  <div className="text-xs font-semibold text-accent">Socket.io</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-accent/10 border border-accent/30">
                  <div className="text-xs font-semibold text-accent">Live Updates</div>
                </div>
              </div>
            </div>

            {/* AI Layer */}
            <div className="mt-8 pt-8 border-t border-primary/20">
              <div className="flex items-center justify-center gap-4">
                <div className="text-center p-4 rounded-lg bg-blue-500/10 border border-blue-500/30 flex-1">
                  <div className="text-xs font-semibold text-blue-400">RAG Chatbot</div>
                </div>
                <div className="text-xs text-muted-foreground">←→</div>
                <div className="text-center p-4 rounded-lg bg-blue-500/10 border border-blue-500/30 flex-1">
                  <div className="text-xs font-semibold text-blue-400">Hugging Face API</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
