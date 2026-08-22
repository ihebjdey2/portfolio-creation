import { ProjectCard } from '@/components/project-card'
import type { Language } from '@/lib/language-context'
import { projects } from '@/lib/portfolio-data'
import { translations } from '@/lib/translations'

export function ProjectsSection({ language }: { language: Language }) {
  const t = translations[language]

  return (
    <section id="projects" className="section-rule scroll-mt-20">
      <div className="section-shell section-pad">
        <div className="grid gap-6 pb-10 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] md:items-end lg:pb-14">
          <div>
            <p className="section-kicker">01 / {t.projects.eyebrow}</p>
            <h2 className="section-title">{t.projects.title}</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground md:justify-self-end">{t.projects.subtitle}</p>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-surface/55">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} language={language} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
