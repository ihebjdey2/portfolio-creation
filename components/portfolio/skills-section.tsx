import type { Language } from '@/lib/language-context'
import { localize, skillCategories } from '@/lib/portfolio-data'
import { translations } from '@/lib/translations'

export function SkillsSection({ language }: { language: Language }) {
  const t = translations[language]

  return (
    <section id="skills" className="section-rule scroll-mt-20">
      <div className="section-shell section-pad">
        <div className="grid gap-6 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] md:items-end">
          <div>
            <p className="section-kicker">02 / {t.skills.eyebrow}</p>
            <h2 className="section-title">{t.skills.title}</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground md:justify-self-end">{t.skills.subtitle}</p>
        </div>

        <div className="mt-10 grid border-l border-t border-border sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <article key={category.id} className="min-h-40 border-b border-r border-border bg-background/35 p-5 sm:p-6">
              <h3 className="font-mono text-xs font-medium text-primary">{localize(category.title, language)}</h3>
              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2.5">
                {category.skills.map((skill) => <li key={skill} className="text-sm text-muted-foreground">{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
