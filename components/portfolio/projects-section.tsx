'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { ProjectCard } from '@/components/project-card'
import type { Language } from '@/lib/language-context'
import { projects } from '@/lib/portfolio-data'
import { translations } from '@/lib/translations'

export function ProjectsSection({ language }: { language: Language }) {
  const t = translations[language]
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [dragStart, setDragStart] = useState<number | null>(null)
  const touchStart = useRef<number | null>(null)

  const move = useCallback((direction: 'next' | 'previous' | number) => {
    setActiveIndex((current) => {
      if (typeof direction === 'number') return direction
      const next = direction === 'next' ? current + 1 : current - 1
      return Math.max(0, Math.min(next, projects.length - 1))
    })
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = window.setInterval(() => move('next'), 6500)
    return () => window.clearInterval(timer)
  }, [isPaused, move])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') move('previous')
      if (event.key === 'ArrowRight') move('next')
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [move])

  const handlePointerDown = (clientX: number) => setDragStart(clientX)
  const handlePointerUp = (clientX: number) => {
    if (dragStart === null) return
    const distance = clientX - dragStart
    if (Math.abs(distance) > 50) move(distance < 0 ? 'next' : 'previous')
    setDragStart(null)
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
            <div className="flex shrink-0 gap-2">
              <button type="button" onClick={() => move('previous')} disabled={activeIndex === 0} aria-label="Previous project" className="grid size-11 place-items-center rounded-full border border-border text-foreground hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"><ArrowLeft aria-hidden="true" /></button>
              <button type="button" onClick={() => move('next')} disabled={activeIndex === projects.length - 1} aria-label="Next project" className="grid size-11 place-items-center rounded-full border border-border text-foreground hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"><ArrowRight aria-hidden="true" /></button>
            </div>
          </div>
        </div>

        <div
          className="project-carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label={language === 'en' ? 'Selected projects' : 'Projets sélectionnés'}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => { setIsPaused(false); setDragStart(null) }}
          onMouseDown={(event) => handlePointerDown(event.clientX)}
          onMouseUp={(event) => handlePointerUp(event.clientX)}
          onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null; setIsPaused(true) }}
          onTouchEnd={(event) => { if (touchStart.current !== null) handlePointerUp(event.changedTouches[0]?.clientX ?? touchStart.current); touchStart.current = null; setIsPaused(false) }}
        >
          {projects.map((project, index) => {
            const offset = index - activeIndex
            return (
              <div key={project.slug} className="project-carousel-slide" data-active={index === activeIndex} data-offset={offset} aria-hidden={index !== activeIndex}>
                <ProjectCard project={project} language={language} index={index} />
              </div>
            )
          })}
        </div>
        <div className="mt-6 flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground">
          <span>{String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
          <div className="flex gap-1.5" role="tablist" aria-label="Choose project">{projects.map((project, index) => <button key={project.slug} type="button" role="tab" aria-selected={index === activeIndex} aria-label={`Show ${project.title}`} onClick={() => move(index)} className={`h-1.5 w-8 transition-colors ${index === activeIndex ? 'bg-primary' : 'bg-border'}`} />)}</div>
        </div>
      </div>
    </section>
  )
}
