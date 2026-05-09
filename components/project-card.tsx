'use client'

import { useState } from 'react'
import { ChevronDown, Github, ExternalLink, Star } from 'lucide-react'

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
  featured?: boolean
  githubUrl?: string
  liveUrl?: string
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
  featured = false,
  githubUrl = 'https://github.com/ihebjdey',
  liveUrl = '#contact',
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(featured)

  return (
    <div className="group">
      {/* Main Card - Glassmorphism Design */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className={`relative rounded-2xl p-6 md:p-8 cursor-pointer transition-all duration-500 backdrop-blur-sm border overflow-hidden ${
          featured
            ? 'border-primary/40 bg-gradient-to-br from-primary/5 via-card/50 to-accent/5 shadow-2xl hover:shadow-2xl hover:border-primary/60'
            : 'border-primary/20 bg-gradient-to-br from-card/40 to-card/20 hover:border-primary/40 hover:from-card/60 hover:to-card/40 hover:shadow-xl'
        }`}
      >
        {/* Animated gradient background on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

        <div className="relative z-10">
          {/* Header with title and expand icon */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h3>
                {featured && (
                  <div className="flex items-center gap-1 px-3 py-1 bg-primary/20 rounded-full">
                    <Star size={14} className="text-primary fill-primary" />
                    <span className="text-xs font-semibold text-primary">Featured</span>
                  </div>
                )}
              </div>
              <p className="text-base text-muted-foreground max-w-2xl">{shortDescription}</p>
            </div>
            <ChevronDown
              size={28}
              className={`text-primary transition-all duration-500 flex-shrink-0 group-hover:text-primary/80 ${
                isExpanded ? 'rotate-180' : 'group-hover:translate-y-1'
              }`}
            />
          </div>

          {/* Technology Badges - Animated */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, idx) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-gradient-to-r from-primary/15 to-accent/15 text-primary rounded-full text-xs font-semibold hover:from-primary/25 hover:to-accent/25 hover:shadow-md transition-all duration-300 border border-primary/20 hover:border-primary/40 cursor-default"
                style={{
                  animationDelay: `${idx * 50}ms`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Key Features Preview - Visible when collapsed */}
          {!isExpanded && (
            <div className="space-y-2 mt-6">
              {keyFeatures.slice(0, 2).map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm">
                  <span className="text-primary font-bold text-lg leading-none mt-0.5">↳</span>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Expanded Details Section */}
      {isExpanded && (
        <div className="border border-t-0 border-primary/20 rounded-b-2xl p-6 md:p-8 bg-gradient-to-b from-card/50 to-card/30 backdrop-blur-sm space-y-8 animate-fade-in">
          {/* Project Overview */}
          <div className="border-b border-primary/10 pb-6">
            <h4 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
              <span className="w-1 h-1 bg-primary rounded-full"></span>
              Project Overview
            </h4>
            <p className="text-muted-foreground leading-relaxed">{overview}</p>
          </div>

          {/* Architecture */}
          <div className="border-b border-primary/10 pb-6">
            <h4 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
              <span className="w-1 h-1 bg-primary rounded-full"></span>
              Architecture
            </h4>
            <p className="text-muted-foreground leading-relaxed">{architecture}</p>
          </div>

          {/* Your Role */}
          <div className="border-b border-primary/10 pb-6">
            <h4 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
              <span className="w-1 h-1 bg-primary rounded-full"></span>
              Your Role
            </h4>
            <p className="text-muted-foreground leading-relaxed">{yourRole}</p>
          </div>

          {/* Key Features Grid */}
          <div className="border-b border-primary/10 pb-6">
            <h4 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
              <span className="w-1 h-1 bg-primary rounded-full"></span>
              Key Features
            </h4>
            <ul className="grid md:grid-cols-2 gap-3">
              {keyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                  <span className="text-primary font-bold text-lg leading-none mt-0.5">✓</span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Challenges */}
          <div className="border-b border-primary/10 pb-6">
            <h4 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-2">
              <span className="w-1 h-1 bg-primary rounded-full"></span>
              Technical Challenges
            </h4>
            <ul className="space-y-3">
              {technicalChallenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3 bg-accent/5 rounded-lg border border-accent/10 hover:border-accent/30 transition-colors">
                  <span className="text-accent font-bold mt-0.5">⚡</span>
                  <span className="text-muted-foreground">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Code Structure */}
          <div className="border-b border-primary/10 pb-6">
            <h4 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
              <span className="w-1 h-1 bg-primary rounded-full"></span>
              Code Structure
            </h4>
            <p className="text-muted-foreground leading-relaxed">{codeStructure}</p>
          </div>

          {/* Impact & Results */}
          <div className="border-b border-primary/10 pb-6">
            <h4 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
              <span className="w-1 h-1 bg-primary rounded-full"></span>
              Impact & Results
            </h4>
            <p className="text-muted-foreground leading-relaxed">{impact}</p>
          </div>

          {/* Future Improvements */}
          <div className="pb-6">
            <h4 className="text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
              <span className="w-1 h-1 bg-primary rounded-full"></span>
              Future Improvements
            </h4>
            <p className="text-muted-foreground leading-relaxed">{futureImprovements}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-primary/10">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary hover:from-primary/90 hover:to-primary/80 text-primary-foreground rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
            >
              <Github size={20} className="group-hover:rotate-12 transition-transform" />
              View on GitHub
            </a>
            <a
              href={liveUrl}
              className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary/40 text-foreground rounded-lg font-semibold hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 group backdrop-blur-sm"
            >
              <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
              Learn More
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
