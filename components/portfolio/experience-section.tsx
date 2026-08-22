import type { Language } from '@/lib/language-context'
import { experiences, localize } from '@/lib/portfolio-data'
import { translations } from '@/lib/translations'

export function ExperienceSection({ language }: { language: Language }) {
  const t = translations[language]

  return (
    <section id="experience" className="section-rule scroll-mt-20">
      <div className="section-shell section-pad">
        <p className="section-kicker">03 / {t.experience.eyebrow}</p>
        <h2 className="section-title">{t.experience.title}</h2>

        <div className="mt-10 border-t border-border lg:mt-14">
          {experiences.map((experience) => (
            <article key={`${experience.company}-${experience.period}`} className="grid gap-5 border-b border-border py-8 lg:grid-cols-[minmax(180px,0.65fr)_minmax(0,1.6fr)] lg:gap-12 lg:py-10">
              <div>
                <p className="font-mono text-xs text-primary">{experience.period}</p>
                <p className="mt-2 text-sm font-medium">{experience.company}</p>
              </div>
              <div>
                <h3 className="text-xl font-medium tracking-[-0.025em] sm:text-2xl">{localize(experience.role, language)}</h3>
                {experience.project ? <p className="mt-1 font-mono text-xs text-muted-foreground">{experience.project}</p> : null}
                <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">{localize(experience.summary, language)}</p>
                <ul className="mt-5 max-w-3xl space-y-2.5">
                  {experience.highlights[language].slice(0, 3).map((highlight) => <li key={highlight} className="grid grid-cols-[12px_1fr] gap-2 text-sm leading-6 text-muted-foreground"><span className="mt-2 size-1 rounded-full bg-primary" aria-hidden="true" />{highlight}</li>)}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => <li key={technology} className="tech-tag">{technology}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
