'use client'

import { Mail, Linkedin, Github, Code2, Zap, Brain } from 'lucide-react'

interface RecruiterSnapshotProps {
  language: 'en' | 'fr'
}

export function RecruiterSnapshot({ language }: RecruiterSnapshotProps) {
  const content = {
    en: {
      headline: 'Full-Stack Systems Engineer',
      description: 'Production-scale platforms • Real-time systems • ML integration',
      focus: [
        { icon: Zap, label: 'Real-time APIs', desc: '10K+ concurrent users' },
        { icon: Code2, label: 'Distributed Systems', desc: '<50ms latency' },
        { icon: Brain, label: 'AI/ML Integration', desc: 'Production pipelines' },
      ],
      highlight: 'Currently building TUNGO: 10,000+ daily users across 3 transport modes',
      contact: 'Open to: Senior positions • Architecture roles • Tech leadership',
      cta: 'Let\'s Talk',
    },
    fr: {
      headline: 'Ingénieur Systèmes Full-Stack',
      description: 'Plateformes production • Systèmes temps réel • Intégration ML',
      focus: [
        { icon: Zap, label: 'APIs Temps Réel', desc: '10K+ utilisateurs concurrents' },
        { icon: Code2, label: 'Systèmes Distribués', desc: 'Latence <50ms' },
        { icon: Brain, label: 'Intégration IA/ML', desc: 'Pipelines production' },
      ],
      highlight: 'Actuellement TUNGO: 10 000+ utilisateurs quotidiens sur 3 modes transports',
      contact: 'Ouvert à: Postes seniors • Rôles architecte • Leadership technique',
      cta: 'Parlons',
    },
  }

  const data = content[language]

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 animate-slide-up">
      <div className="bg-gradient-to-br from-primary/10 via-card/50 to-accent/10 border border-primary/20 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Left: Headline */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">{data.headline}</h2>
            <p className="text-lg text-muted-foreground">{data.description}</p>
            <div className="pt-2 border-t border-primary/20">
              <p className="text-sm text-primary font-semibold mt-4">{data.highlight}</p>
            </div>
          </div>

          {/* Middle: Focus Areas */}
          <div className="space-y-4">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">Areas of Focus</p>
            <div className="space-y-4">
              {data.focus.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="flex gap-3">
                    <Icon size={20} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right: Contact & CTA */}
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">Get in Touch</p>
              <div className="space-y-2">
                <a
                  href="mailto:ihebjdey2@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Mail size={16} className="group-hover:translate-x-1 transition-transform" />
                  ihebjdey2@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/ihebjdey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Linkedin size={16} className="group-hover:translate-x-1 transition-transform" />
                  LinkedIn Profile
                </a>
                <a
                  href="https://github.com/ihebjdey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Github size={16} className="group-hover:translate-x-1 transition-transform" />
                  GitHub
                </a>
              </div>
            </div>

            <div className="border-t border-primary/20 pt-4">
              <p className="text-xs text-muted-foreground mb-4">{data.contact}</p>
              <a
                href="#contact"
                className="block w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-center hover-lift hover:shadow-lg hover:shadow-primary/30 transition-smooth"
              >
                {data.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
