import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Github } from 'lucide-react'
import type { Language } from '@/lib/language-context'
import type { Project } from '@/lib/portfolio-data'
import { localize } from '@/lib/portfolio-data'
import { translations } from '@/lib/translations'

export function ProjectCard({ project, language, index }: { project: Project; language: Language; index: number }) {
  const t = translations[language]
  const featured = index === 0

  return (
    <article className={`project-slide-card group ${featured ? 'project-slide-card-featured' : ''}`}>
      <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-10 rounded-[inherit]" aria-label={`${t.projects.caseStudy}: ${project.title}`} />
      <div className="relative z-0 flex h-full min-h-0 flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">{String(index + 1).padStart(2, '0')}</div>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="relative z-20 grid size-10 shrink-0 place-items-center rounded-full border border-border bg-surface text-muted-foreground hover:border-primary hover:text-primary" aria-label={`${project.title} on GitHub`}><Github size={17} aria-hidden="true" /></a>
        </div>

        <div className="project-slide-copy mt-5 min-w-0">
          <p className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-primary">{localize(project.category, language)}</p>
          <h3 className="mt-2 font-display text-xl font-bold leading-tight tracking-[-0.045em] sm:text-2xl">{project.title}</h3>
          <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">{localize(project.description, language)}</p>
        </div>

        <ul className="project-slide-tech mt-4 flex flex-wrap gap-1.5" aria-label={language === 'en' ? 'Technologies' : 'Technologies'}>
          {project.technologies.slice(0, 3).map((technology) => <li key={technology} className="tech-tag">{technology}</li>)}
        </ul>

        <div className="project-slide-action mt-auto flex items-end justify-between gap-3 pt-5">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:text-primary">{t.projects.caseStudy}<ArrowUpRight size={14} aria-hidden="true" /></span>
        </div>

        {project.heroMedia ? (
          <div className="project-slide-media">
            <Image src={project.heroMedia.src} alt="" width={project.heroMedia.width} height={project.heroMedia.height} loading={featured ? 'eager' : 'lazy'} sizes={featured ? '(max-width: 767px) calc(100vw - 72px), 34vw' : '(max-width: 767px) calc(100vw - 72px), 22vw'} className="aspect-[16/10] size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]" />
          </div>
        ) : null}
      </div>
    </article>
  )
}
