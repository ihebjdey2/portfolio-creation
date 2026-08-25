'use client'

import { useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { ProjectCard } from '@/components/project-card'
import type { Language } from '@/lib/language-context'
import { projects } from '@/lib/portfolio-data'
import { translations } from '@/lib/translations'

export function ProjectsSection({ language }: { language: Language }) {
  const t = translations[language]
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const move = (direction: 'next' | 'previous') => {
    const nextIndex = direction === 'next'
      ? Math.min(activeIndex + 1, projects.length - 1)
      : Math.max(activeIndex - 1, 0)
    const track = trackRef.current
    const card = track?.children[nextIndex] as HTMLElement | undefined
    card?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    setActiveIndex(nextIndex)
  }

  return (
    <section id="projects" className="section-rule scroll-mt-20">
      <div className="section-shell section-pad">
        <div className="flex flex-col gap-8 pb-10 md:flex-row md:items-end md:justify-between lg:pb-14">
          <div>
            <p className="section-kicker">01 / {t.projects.eyebrow}</p>
            <h2 className="section-title">{t.projects.title}</h2>
          </div>
          <div className="flex items-end justify-between gap-6 md:max-w-2xl">
            <p className="text-base leading-7 text-muted-foreground">{t.projects.subtitle}</p>
            <div className="hidden shrink-0 gap-2 sm:flex">
              <button type="button" onClick={() => move('previous')} disabled={activeIndex === 0} aria-label="Previous project" className="grid size-11 place-items-center rounded-full border border-border text-foreground transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"><ArrowLeft aria-hidden="true" /></button>
              <button type="button" onClick={() => move('next')} disabled={activeIndex === projects.length - 1} aria-label="Next project" className="grid size-11 place-items-center rounded-full border border-border text-foreground transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"><ArrowRight aria-hidden="true" /></button>
            </div>
          </div>
        </div>

        <div ref={trackRef} className="flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {projects.map((project, index) => (
            <div key={project.slug} className="w-[min(86vw,680px)] shrink-0 snap-start">
              <ProjectCard project={project} language={language} index={index} />
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground">
          <span>{String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
          <span className="sm:hidden">Swipe to explore</span>
          <div className="flex gap-1.5" aria-hidden="true">{projects.map((project, index) => <span key={project.slug} className={`h-1 w-8 transition-colors ${index === activeIndex ? 'bg-primary' : 'bg-border'}`} />)}</div>
        </div>
      </div>
    </section>
  )
}
