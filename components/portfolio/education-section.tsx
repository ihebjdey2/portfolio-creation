import type { Language } from '@/lib/language-context'
import { education, localize } from '@/lib/portfolio-data'
import { translations } from '@/lib/translations'

export function EducationSection({ language }: { language: Language }) {
  const t = translations[language]

  return (
    <section className="section-rule">
      <div className="section-shell py-14 sm:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(180px,0.65fr)_minmax(0,1.6fr)] lg:gap-12">
          <div>
            <p className="section-kicker">04 / {t.education.eyebrow}</p>
            <h2 className="text-3xl font-medium tracking-[-0.04em]">{t.education.title}</h2>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {education.map((item) => (
              <article key={item.institution} className="grid gap-3 py-6 sm:grid-cols-[1fr_auto] sm:gap-8">
                <div>
                  <h3 className="text-lg font-medium">{item.institution}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{localize(item.degree, language)}</p>
                  {item.specialization ? <p className="mt-3 max-w-xl text-sm leading-6 text-foreground">{localize(item.specialization, language)}</p> : null}
                </div>
                <p className="font-mono text-xs text-primary sm:text-right">{item.period}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
