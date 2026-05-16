'use client'

import { useState } from 'react'
import { Download, FileText, ExternalLink, ChevronDown } from 'lucide-react'

interface ResumeViewerProps {
  language: 'en' | 'fr'
}

export function ResumeViewer({ language }: ResumeViewerProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const content = {
    en: {
      title: 'Resume',
      subtitle: 'Download my complete professional resume',
      viewOnline: 'View Online',
      download: 'Download PDF',
      highlights: [
        'Full-stack engineer with 4+ internships',
        'Proficiency in Node.js, React, Flutter, DevOps',
        'Real-time systems & AI integration expertise',
        'Production-grade deployment experience',
      ],
    },
    fr: {
      title: 'CV',
      subtitle: 'Téléchargez mon CV professionnel complet',
      viewOnline: 'Voir en ligne',
      download: 'Télécharger PDF',
      highlights: [
        'Ingénieur full-stack avec 4+ stages',
        'Compétences en Node.js, React, Flutter, DevOps',
        'Expertise systèmes temps réel & intégration IA',
        'Expérience déploiement production',
      ],
    },
  }

  const t = content[language]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h3 className="text-2xl font-bold mb-2">{t.title}</h3>
        <p className="text-muted-foreground">{t.subtitle}</p>
      </div>

      {/* Main Card */}
      <div className="bg-gradient-to-br from-card/50 to-card/30 border border-primary/20 rounded-xl p-8 hover:border-primary/40 transition-all duration-300">
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <FileText className="text-primary" size={24} />
              </div>
              <div>
                <p className="font-semibold text-foreground">Jdey Iheb - Professional Resume</p>
                <p className="text-sm text-muted-foreground">PDF Document</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid md:grid-cols-2 gap-2 mt-6">
              {t.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span className="text-muted-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 font-semibold group"
            >
              <ExternalLink size={18} className="group-hover:scale-110 transition-transform" />
              {t.viewOnline}
            </a>
            <a
              href="/resume.pdf"
              download="Jdey_Iheb_Resume.pdf"
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-accent/10 text-accent border border-accent/30 rounded-lg hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 font-semibold group"
            >
              <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
              {t.download}
            </a>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="border-t border-primary/10 pt-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-primary font-semibold hover:opacity-80 transition-opacity"
        >
          <ChevronDown size={20} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          {language === 'en' ? 'Key Qualifications' : 'Qualifications Clés'}
        </button>

        {isExpanded && (
          <div className="mt-4 space-y-4 animate-fade-in">
            <div>
              <h4 className="font-semibold text-sm text-primary mb-2">{language === 'en' ? 'Technical Skills' : 'Compétences Techniques'}</h4>
              <p className="text-sm text-muted-foreground">
                {language === 'en'
                  ? 'Full-stack development: Node.js, Express, React, Flutter, PostgreSQL, MongoDB, Docker, Jenkins, AWS'
                  : 'Développement full-stack: Node.js, Express, React, Flutter, PostgreSQL, MongoDB, Docker, Jenkins, AWS'}
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-primary mb-2">{language === 'en' ? 'Experience' : 'Expérience'}</h4>
              <p className="text-sm text-muted-foreground">
                {language === 'en'
                  ? '4+ internships including TUNGO (national transport platform), agricultural AI platform, ML research, and content management systems'
                  : '4+ stages incluant TUNGO (plateforme transport nationale), plateforme IA agricole, recherche ML et systèmes gestion contenu'}
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm text-primary mb-2">{language === 'en' ? 'Education' : 'Éducation'}</h4>
              <p className="text-sm text-muted-foreground">
                {language === 'en'
                  ? 'Computer Engineer, ESPRIT School of Engineering, Tunisia (Graduating 2025)'
                  : 'Ingénieur Informatique, École ESPRIT, Tunisie (Diplôme 2025)'}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
