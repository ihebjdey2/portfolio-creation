'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface ProjectCardProps {
  title: string
  period: string
  description: string
  technologies: string[]
  overview: string
  architecture: string
  yourRole: string
  features: string[]
  technicalChallenges: string[]
  codeStructure: string
  impact: string
  futureImprovements: string
}

export function ProjectCard({
  title,
  period,
  description,
  technologies,
  overview,
  architecture,
  yourRole,
  features,
  technicalChallenges,
  codeStructure,
  impact,
  futureImprovements,
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false)

  const sections = [
    { label: 'Project Overview', content: overview },
    { label: 'Architecture', content: architecture },
    { label: 'Your Role', content: yourRole },
    {
      label: 'Features',
      content: (
        <ul className="list-disc list-inside space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="text-foreground/90">
              {feature}
            </li>
          ))}
        </ul>
      ),
    },
    {
      label: 'Technical Challenges',
      content: (
        <ul className="list-disc list-inside space-y-2">
          {technicalChallenges.map((challenge, i) => (
            <li key={i} className="text-foreground/90">
              {challenge}
            </li>
          ))}
        </ul>
      ),
    },
    { label: 'Code Structure', content: codeStructure },
    { label: 'Impact & Results', content: impact },
    { label: 'Future Improvements', content: futureImprovements },
  ]

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card hover:shadow-lg transition-shadow">
      {/* Header */}
      <div
        className="p-6 cursor-pointer bg-card hover:bg-card/95 transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
            <p className="text-primary font-semibold mb-2">{period}</p>
            <p className="text-foreground/80 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <button
            className={`flex-shrink-0 mt-2 transition-transform duration-300 ${
              expanded ? 'rotate-180' : ''
            }`}
            aria-label="Toggle details"
          >
            <ChevronDown size={24} className="text-primary" />
          </button>
        </div>
      </div>

      {/* Expandable Details */}
      {expanded && (
        <div className="border-t border-border px-6 py-6 bg-background space-y-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold text-primary mb-3">{section.label}</h4>
              <div className="text-foreground/90 leading-relaxed">
                {typeof section.content === 'string' ? (
                  <p>{section.content}</p>
                ) : (
                  section.content
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
