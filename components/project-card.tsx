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
    <article className="group grid gap-7 border-b border-border p-5 last:border-b-0 hover:bg-surface sm:p-7 lg:grid-cols-[minmax(180px,0.7fr)_minmax(0,1.6fr)] lg:gap-12 lg:p-10 [content-visibility:auto] [contain-intrinsic-size:auto_520px]">
      <div className="flex justify-between gap-5 lg:block">
        <p className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, '0')}</p>
        <p className="max-w-44 text-right font-mono text-[0.68rem] leading-5 text-primary lg:mt-7 lg:text-left">{localize(project.category, language)}</p>
      </div>

      <div className={`grid gap-7 ${project.heroMedia ? 'xl:grid-cols-[minmax(0,1fr)_minmax(260px,0.82fr)] xl:items-start xl:gap-10' : ''}`}>
        <div>
          <h3 className="text-2xl font-medium tracking-[-0.04em] sm:text-3xl lg:text-4xl">
            <Link href={`/projects/${project.slug}`} className="rounded-sm group-hover:text-primary">{project.title}</Link>
          </h3>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">{localize(project.description, language)}</p>

          {project.proofPoints ? (
            <ul className="mt-6 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
              {project.proofPoints[language].map((point) => <li key={point} className="bg-surface-muted px-4 py-3 font-mono text-[0.7rem] leading-5 text-foreground">{point}</li>)}
            </ul>
          ) : null}

          <ul className="mt-6 flex flex-wrap gap-2" aria-label={language === 'en' ? 'Technologies' : 'Technologies'}>
            {project.technologies.slice(0, 6).map((technology) => <li key={technology} className="tech-tag">{technology}</li>)}
          </ul>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link href={`/projects/${project.slug}`} className="text-link text-primary">{t.projects.caseStudy}<ArrowRight size={15} aria-hidden="true" /></Link>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-link"><Github size={15} aria-hidden="true" />{t.projects.github}<ArrowUpRight size={12} aria-hidden="true" /></a>
          </div>
        </div>

        {project.heroMedia ? (
          <figure className="overflow-hidden rounded-lg border border-border bg-surface-muted">
            <Image
              src={project.heroMedia.src}
              alt={localize(project.heroMedia.alt, language)}
              width={project.heroMedia.width}
              height={project.heroMedia.height}
              sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1279px) calc(100vw - 96px), 34vw"
              className="aspect-[16/10] h-auto w-full object-cover object-top"
            />
          </figure>
        ) : null}
      </div>
    </article>
  )
}
