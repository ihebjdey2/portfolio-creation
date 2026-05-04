'use client'

import { useState } from 'react'
import { ChevronDown, Github, ExternalLink } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  shortDescription: string
  technologies: string[]
  keyFeatures: string[]
  overview: string
  architecture: string
  yourRole: string
  technicalChallenges: string[]
  codeStructure: string
  impact: string
  futureImprovements: string
}

export function ProjectCard({
  title,
  description,
  shortDescription,
  technologies,
  keyFeatures,
  overview,
  architecture,
  yourRole,
  technicalChallenges,
  codeStructure,
  impact,
  futureImprovements,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="group">
      {/* Main Card */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="border border-border rounded-xl p-6 cursor-pointer transition-all duration-300 bg-card/50 hover:border-primary/50 hover:bg-card hover:shadow-lg"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-2xl font-bold text-foreground">{title}</h3>
              <ChevronDown
                size={24}
                className={`text-primary transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              />
            </div>
            <p className="text-base text-muted-foreground mb-4">{shortDescription}</p>

            {/* Technologies - as pills */}
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/15 text-primary rounded-full text-xs font-medium hover:bg-primary/25 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Key Features - only visible when not expanded */}
            {!isExpanded && (
              <ul className="space-y-2">
                {keyFeatures.slice(0, 2).map((feature, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="border border-t-0 border-border rounded-b-xl p-6 bg-card/30 space-y-6 animate-in fade-in duration-300">
          <div>
            <h4 className="text-lg font-semibold mb-2 text-foreground">Project Overview</h4>
            <p className="text-muted-foreground leading-relaxed">{overview}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2 text-foreground">Architecture</h4>
            <p className="text-muted-foreground leading-relaxed">{architecture}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2 text-foreground">Your Role</h4>
            <p className="text-muted-foreground leading-relaxed">{yourRole}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 text-foreground">Key Features</h4>
            <ul className="space-y-2">
              {keyFeatures.map((feature, idx) => (
                <li key={idx} className="text-muted-foreground flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 text-foreground">Technical Challenges</h4>
            <ul className="space-y-2">
              {technicalChallenges.map((challenge, idx) => (
                <li key={idx} className="text-muted-foreground flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2 text-foreground">Code Structure</h4>
            <p className="text-muted-foreground leading-relaxed">{codeStructure}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2 text-foreground">Impact & Results</h4>
            <p className="text-muted-foreground leading-relaxed">{impact}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2 text-foreground">Future Improvements</h4>
            <p className="text-muted-foreground leading-relaxed">{futureImprovements}</p>
          </div>

          <div className="flex gap-3 pt-4 border-t border-border">
            <a
              href="https://github.com/ihebjdey"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors font-medium"
            >
              <ExternalLink size={18} />
              View Project
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
