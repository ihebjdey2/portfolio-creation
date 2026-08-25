import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight, Github } from 'lucide-react'
import type { Language } from '@/lib/language-context'
import type { Project } from '@/lib/portfolio-data'
import { localize } from '@/lib/portfolio-data'
import { translations } from '@/lib/translations'

export function ProjectCard({ project, language, index }: { project: Project; language: Language; index: number }) {
  const t = translations[language]
  return (
    <article className="group grid gap-8 border-b border-border p-5 last:border-b-0 hover:bg-surface sm:p-8 lg:grid-cols-[5rem_minmax(0,1fr)] lg:gap-8 lg:p-10 [content-visibility:auto] [contain-intrinsic-size:auto_520px]">
      <div className="flex items-start justify-between lg:block"><p className="font-display text-3xl tracking-[-0.07em] text-primary/80">{String(index + 1).padStart(2, '0')}</p><p className="mt-8 hidden max-w-32 font-mono text-[0.65rem] uppercase leading-5 tracking-[0.12em] text-muted-foreground lg:block">{localize(project.category, language)}</p></div>
      <div className="flex min-w-0 flex-col gap-8">
        <div className="flex min-h-[25rem] flex-col">
          <div className="mb-5 flex min-h-4 items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground lg:hidden"><span>{localize(project.category, language)}</span><span className="text-primary">/</span><span>Case study</span></div>
          <h3 className="min-h-[3.8rem] font-display text-3xl font-medium leading-[0.95] tracking-[-0.06em] sm:min-h-[4.8rem] sm:text-4xl lg:min-h-[5.8rem] lg:text-5xl"><Link href={`/projects/${project.slug}`} className="rounded-sm group-hover:text-primary">{project.title}</Link></h3>
          <p className="mt-5 min-h-[4.5rem] max-w-3xl text-sm leading-6 text-muted-foreground sm:min-h-[5.25rem] sm:text-base sm:leading-7">{localize(project.description, language)}</p>
          <div className="mt-7 min-h-[5.8rem]">{project.proofPoints ? <ul className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">{project.proofPoints[language].map((point) => <li key={point} className="bg-surface-muted px-4 py-3 font-mono text-[0.68rem] leading-5 text-foreground">{point}</li>)}</ul> : null}</div>
          <ul className="mt-auto flex min-h-8 flex-wrap gap-2" aria-label={language === 'en' ? 'Technologies' : 'Technologies'}>{project.technologies.slice(0, 6).map((technology) => <li key={technology} className="tech-tag">{technology}</li>)}</ul>
          <div className="mt-8 flex min-h-6 flex-wrap gap-x-6 gap-y-3 text-sm"><Link href={`/projects/${project.slug}`} className="text-link text-primary">{t.projects.caseStudy}<ArrowRight size={15} aria-hidden="true" /></Link><a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-link"><Github size={15} aria-hidden="true" />{t.projects.github}<ArrowUpRight size={12} aria-hidden="true" /></a></div>
        </div>
        {project.heroMedia ? <figure className="overflow-hidden border border-border bg-surface-muted"><Image src={project.heroMedia.src} alt={localize(project.heroMedia.alt, language)} width={project.heroMedia.width} height={project.heroMedia.height} sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1279px) calc(100vw - 96px), 34vw" className="aspect-[16/10] h-auto w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]" /></figure> : null}
      </div>
    </article>
  )
}
