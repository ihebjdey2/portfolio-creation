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
  const dragStart = useRef<number | null>(null)
  const didSwipe = useRef(false)

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

  const handlePointerDown = (clientX: number) => {
    dragStart.current = clientX
    didSwipe.current = false
    setIsPaused(true)
  }

  const handlePointerUp = (clientX: number) => {
    if (dragStart.current === null) return
    const distance = clientX - dragStart.current
    if (Math.abs(distance) > 45) {
      didSwipe.current = true
      move(distance < 0 ? 'next' : 'previous')
      window.setTimeout(() => { didSwipe.current = false }, 0)
    }
    dragStart.current = null
    setIsPaused(false)
  }

  return (
    <section id="projects" className="section-rule scroll-mt-20">
      <div className="section-shell section-pad">
        <div className="editorial-grid items-end pb-10 lg:pb-14">
          <div>
            <p className="section-kicker">01 / {t.projects.eyebrow}</p>
            <h2 className="section-title">{t.projects.title}</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground">{t.projects.subtitle}</p>
        </div>

        <div
          className="project-carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label={language === 'en' ? 'Selected projects' : 'Projets sélectionnés'}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => { setIsPaused(false); dragStart.current = null }}
          onPointerDown={(event) => {
            if (event.isPrimary === false) return
            event.currentTarget.setPointerCapture?.(event.pointerId)
            handlePointerDown(event.clientX)
          }}
          onPointerUp={(event) => {
            if (event.isPrimary === false) return
            handlePointerUp(event.clientX)
            event.currentTarget.releasePointerCapture?.(event.pointerId)
          }}
          onPointerCancel={() => { dragStart.current = null; setIsPaused(false) }}
          onClickCapture={(event) => {
            if (!didSwipe.current) return
            event.preventDefault()
            event.stopPropagation()
          }}
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
        <div className="mx-auto mt-6 grid w-full max-w-[64rem] grid-cols-[1fr_auto] items-center gap-4 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground sm:grid-cols-[auto_minmax(0,1fr)_auto]">
          <span>{String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
          <div className="hidden max-w-full justify-center gap-1.5 overflow-hidden sm:flex" role="tablist" aria-label="Choose project">{projects.map((project, index) => <button key={project.slug} type="button" role="tab" aria-selected={index === activeIndex} aria-label={`Show ${project.title}`} onClick={() => move(index)} className={`h-1.5 w-4 shrink-0 transition-colors sm:w-6 ${index === activeIndex ? 'bg-primary' : 'bg-border'}`} />)}</div>
          <div className="flex shrink-0 gap-2">
            <button type="button" onClick={() => move('previous')} disabled={activeIndex === 0} aria-label="Previous project" className="grid size-11 place-items-center rounded-full border border-border text-foreground hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"><ArrowLeft aria-hidden="true" /></button>
            <button type="button" onClick={() => move('next')} disabled={activeIndex === projects.length - 1} aria-label="Next project" className="grid size-11 place-items-center rounded-full border border-border text-foreground hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-30"><ArrowRight aria-hidden="true" /></button>
          </div>
        </div>
      </div>
    </section>
  )
}
