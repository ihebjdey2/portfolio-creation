'use client'

import { useState } from 'react'
import { ChevronDown, Database, Smartphone, Globe, Radio, Bot, ArrowRight } from 'lucide-react'

interface TungoCaseStudyProps {
  language: 'en' | 'fr'
}

const architectureData = [
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    subtitle: 'Flutter',
    description: 'Client & Driver apps with offline-first architecture and real-time sync',
    techs: ['Flutter', 'Provider', 'WebSocket'],
  },
  {
    icon: Globe,
    title: 'Admin Dashboards',
    subtitle: 'React.js',
    description: 'Multi-station supervision platform with real-time analytics and control',
    techs: ['React', 'Redux', 'Chart.js'],
  },
  {
    icon: Database,
    title: 'Backend API',
    subtitle: 'Node.js + Express',
    description: 'RESTful API with microservices pattern and real-time event handling',
    techs: ['Node.js', 'Express', 'REST API'],
  },
  {
    icon: Radio,
    title: 'Real-Time Engine',
    subtitle: 'Socket.io',
    description: 'Live GPS tracking, notifications, and multi-user synchronization',
    techs: ['Socket.io', 'WebSocket', 'Events'],
  },
  {
    icon: Database,
    title: 'Data Layer',
    subtitle: 'PostgreSQL',
    description: 'Robust relational database with optimized queries for high-volume transactions',
    techs: ['PostgreSQL', 'Sequelize', 'Transactions'],
  },
  {
    icon: Bot,
    title: 'AI Chatbot',
    subtitle: 'RAG + Hugging Face',
    description: 'Intelligent customer support with Retrieval-Augmented Generation',
    techs: ['RAG', 'Hugging Face', 'NLP'],
  },
]

const keyHighlights = {
  en: [
    { label: '10,000+', value: 'Monthly Active Users' },
    { label: '50ms', value: 'Average GPS Update Latency' },
    { label: '99.5%', value: 'System Uptime' },
    { label: '3', value: 'Mobile Platforms (iOS, Android, Web)' },
    { label: 'Real-time', value: 'Multi-transport Integration' },
    { label: 'AI-Powered', value: 'Customer Support Chatbot' },
  ],
  fr: [
    { label: '10,000+', value: 'Utilisateurs Actifs Mensuels' },
    { label: '50ms', value: 'Latence Moyenne Mise à Jour GPS' },
    { label: '99.5%', value: 'Uptime Système' },
    { label: '3', value: 'Plateformes Mobiles (iOS, Android, Web)' },
    { label: 'Temps réel', value: 'Intégration Multi-transports' },
    { label: 'Alimenté par IA', value: 'Chatbot Support Client' },
  ],
}

const techStackCategories = {
  en: {
    frontend: ['React.js', 'Flutter', 'TypeScript', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'Socket.io', 'REST API'],
    database: ['PostgreSQL', 'Redis Cache', 'Sequelize ORM'],
    ai: ['Hugging Face', 'RAG', 'LLM Integration'],
    devops: ['Docker', 'Jenkins', 'CI/CD Pipeline', 'Monitoring'],
  },
  fr: {
    frontend: ['React.js', 'Flutter', 'TypeScript', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'Socket.io', 'API REST'],
    database: ['PostgreSQL', 'Cache Redis', 'Sequelize ORM'],
    ai: ['Hugging Face', 'RAG', 'Intégration LLM'],
    devops: ['Docker', 'Jenkins', 'Pipeline CI/CD', 'Monitoring'],
  },
}

export function TungoCaseStudy({ language }: TungoCaseStudyProps) {
  const [expandedArch, setExpandedArch] = useState(0)
  const highlights = keyHighlights[language]
  const techStack = techStackCategories[language]

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-24 border-t border-border overflow-hidden">
      {/* Gradient background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      {/* Header */}
      <div className="mb-16">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
          {language === 'en' ? 'Featured Engineering Case Study' : 'Étude de Cas Technique Présentée'}
        </p>
        <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          TUNGO
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">
          {language === 'en'
            ? 'A national-scale transport platform unifying Tunisia\'s fragmented inter-urban transport ecosystem. Engineered for 10,000+ concurrent users with real-time GPS tracking, multi-platform support, and AI-powered customer service.'
            : 'Une plateforme de transport à l\'échelle nationale unifiant l\'écosystème fragmenté du transport interurbain tunisien. Conçue pour 10,000+ utilisateurs simultanés avec suivi GPS temps réel, support multi-plateforme et service client alimenté par IA.'}
        </p>

        {/* Business Context */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 backdrop-blur-sm">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm font-semibold text-primary mb-2">
                {language === 'en' ? 'Problem Solved' : 'Problème Résolu'}
              </p>
              <p className="text-sm text-muted-foreground">
                {language === 'en'
                  ? 'Tunisia\'s transport market fragmented across 200+ operators with no unified booking system, causing poor UX and operational inefficiency.'
                  : 'Marché transport tunisien fragmenté sur 200+ opérateurs sans système réservation unifié, causant mauvaise UX et inefficacité opérationnelle.'}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-primary mb-2">
                {language === 'en' ? 'Solution Impact' : 'Impact Solution'}
              </p>
              <p className="text-sm text-muted-foreground">
                {language === 'en'
                  ? 'Single platform connecting operators, passengers, and drivers. Increased operator revenue by 35% through better customer access and dynamic pricing.'
                  : 'Plateforme unique connectant opérateurs, passagers et conducteurs. Augmentation revenu opérateur 35% via meilleur accès clients et pricing dynamique.'}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-primary mb-2">
                {language === 'en' ? 'Technical Achievement' : 'Accomplissement Technique'}
              </p>
              <p className="text-sm text-muted-foreground">
                {language === 'en'
                  ? 'Full-stack system handling 10K+ concurrent users, 50ms GPS tracking, 99.5% uptime. 3 platforms (iOS, Android, Web) in production.'
                  : 'Système full-stack gérant 10K+ utilisateurs concurrents, suivi GPS 50ms, 99.5% uptime. 3 plateformes (iOS, Android, Web) en production.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="group relative bg-card/50 border border-primary/20 rounded-lg p-6 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{item.label}</p>
              <p className="text-sm text-muted-foreground font-medium">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Architecture Section */}
      <div className="mb-20">
        <h3 className="text-3xl font-bold mb-12">
          {language === 'en' ? 'Multi-Platform Architecture' : 'Architecture Multi-Plateforme'}
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {architectureData.map((arch, idx) => {
            const Icon = arch.icon
            return (
              <div
                key={idx}
                onClick={() => setExpandedArch(expandedArch === idx ? -1 : idx)}
                className="group cursor-pointer"
              >
                <div className="relative h-full bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 overflow-hidden hover:shadow-xl">
                  {/* Gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon size={28} className="text-primary" />
                      </div>
                      <ChevronDown
                        size={20}
                        className={`text-primary transition-transform duration-300 ${expandedArch === idx ? 'rotate-180' : ''}`}
                      />
                    </div>

                    <h4 className="text-lg font-bold mb-1">{arch.title}</h4>
                    <p className="text-sm text-primary font-semibold mb-3">{arch.subtitle}</p>
                    <p className="text-sm text-muted-foreground mb-4">{arch.description}</p>

                    {/* Animated tech badges */}
                    <div className="flex flex-wrap gap-2">
                      {arch.techs.map((tech, techIdx) => (
                        <span
                          key={tech}
                          className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium group-hover:bg-primary/20 transition-all duration-300"
                          style={{
                            animation: `fadeInUp 0.5s ease-out ${techIdx * 100}ms both`,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="bg-card/50 border border-border rounded-xl p-8 md:p-12">
        <h3 className="text-3xl font-bold mb-12">
          {language === 'en' ? 'Complete Technology Stack' : 'Stack Technologique Complet'}
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {Object.entries(techStack).map(([category, techs]) => (
            <div key={category}>
              <h4 className="text-sm font-bold text-primary uppercase tracking-wide mb-4">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h4>
              <ul className="space-y-2">
                {techs.map((tech) => (
                  <li key={tech} className="text-sm text-muted-foreground flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 flex items-center justify-center gap-4 flex-wrap">
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
        >
          {language === 'en' ? 'Discuss Implementation' : 'Discuter de l\'Implémentation'}
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
