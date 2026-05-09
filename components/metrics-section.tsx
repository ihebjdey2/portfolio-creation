'use client'

import { useEffect, useState } from 'react'
import { Code2, Zap, Smartphone, Brain, Layers, Cpu } from 'lucide-react'

interface MetricCardProps {
  icon: React.ReactNode
  label: string
  value: number
  suffix?: string
  description: string
}

function MetricCard({ icon, label, value, suffix = '', description }: MetricCardProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = Math.ceil(value / 50)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 30)
    return () => clearInterval(timer)
  }, [value])

  return (
    <div className="group relative rounded-2xl p-6 md:p-8 border border-primary/20 bg-gradient-to-br from-card/40 to-card/20 hover:border-primary/40 hover:from-card/60 hover:to-card/40 transition-all duration-500 overflow-hidden backdrop-blur-sm">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-20"></div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Icon */}
        <div className="mb-4 inline-flex w-fit p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
          <div className="text-primary group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>

        {/* Label */}
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
          {label}
        </p>

        {/* Animated Counter */}
        <div className="mb-3">
          <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {count}
            {suffix}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

interface MetricsProps {
  language: 'en' | 'fr'
}

export function MetricsSection({ language }: MetricsProps) {
  const metrics = {
    en: [
      {
        icon: <Code2 size={28} />,
        label: 'Full-Stack Projects',
        value: 3,
        description: 'End-to-end applications from architecture to deployment',
      },
      {
        icon: <Layers size={28} />,
        label: 'APIs Developed',
        value: 5,
        suffix: '+',
        description: 'RESTful and real-time APIs handling scalable traffic',
      },
      {
        icon: <Zap size={28} />,
        label: 'Real-Time Systems',
        value: 3,
        description: 'WebSocket-powered applications with live data sync',
      },
      {
        icon: <Smartphone size={28} />,
        label: 'Mobile Apps',
        value: 2,
        description: 'Cross-platform mobile applications (Flutter)',
      },
      {
        icon: <Brain size={28} />,
        label: 'AI Integrations',
        value: 2,
        suffix: '+',
        description: 'RAG-based chatbots and machine learning models',
      },
      {
        icon: <Cpu size={28} />,
        label: 'Technologies',
        value: 20,
        suffix: '+',
        description: 'Languages, frameworks, and tools mastered',
      },
    ],
    fr: [
      {
        icon: <Code2 size={28} />,
        label: 'Projets Full-Stack',
        value: 3,
        description: 'Applications complètes de l\'architecture au déploiement',
      },
      {
        icon: <Layers size={28} />,
        label: 'APIs Développées',
        value: 5,
        suffix: '+',
        description: 'APIs RESTful et temps réel gérant le trafic scalable',
      },
      {
        icon: <Zap size={28} />,
        label: 'Systèmes Temps Réel',
        value: 3,
        description: 'Applications WebSocket avec synchronisation données live',
      },
      {
        icon: <Smartphone size={28} />,
        label: 'Applications Mobile',
        value: 2,
        description: 'Applications mobiles cross-plateforme (Flutter)',
      },
      {
        icon: <Brain size={28} />,
        label: 'Intégrations IA',
        value: 2,
        suffix: '+',
        description: 'Chatbots RAG et modèles apprentissage automatique',
      },
      {
        icon: <Cpu size={28} />,
        label: 'Technologies',
        value: 20,
        suffix: '+',
        description: 'Langages, frameworks et outils maîtrisés',
      },
    ],
  }

  const currentMetrics = metrics[language]
  const title = language === 'en' ? 'Engineering Metrics' : 'Métriques d\'Ingénierie'
  const subtitle = language === 'en' 
    ? 'Quantifying impact through production-scale projects and technical depth'
    : 'Quantifier l\'impact par des projets à l\'échelle de la production et la profondeur technique'

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-24 border-t border-primary/10">
      {/* Section Header */}
      <div className="mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">{title}</h2>
        <p className="text-xl text-muted-foreground max-w-2xl">{subtitle}</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentMetrics.map((metric, idx) => (
          <div key={idx} style={{ animationDelay: `${idx * 100}ms` }} className="animate-fade-in">
            <MetricCard
              icon={metric.icon}
              label={metric.label}
              value={metric.value}
              suffix={metric.suffix}
              description={metric.description}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
