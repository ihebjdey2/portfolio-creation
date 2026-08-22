import type { Language } from '@/lib/language-context'
import { profile } from '@/lib/portfolio-data'
import { translations } from '@/lib/translations'

export function AboutSection({ language }: { language: Language }) {
  const t = translations[language]

  return (
    <section id="about" className="section-rule scroll-mt-20">
      <div className="section-shell section-pad grid gap-8 lg:grid-cols-[minmax(180px,0.65fr)_minmax(0,1.6fr)] lg:gap-12">
        <div>
          <p className="section-kicker">05 / {t.about.eyebrow}</p>
          <h2 className="section-title">{t.about.title}</h2>
        </div>
        <div className="max-w-3xl space-y-5 text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
          {profile.about[language].map((paragraph, index) => <p key={paragraph} className={index === 0 ? 'text-foreground' : undefined}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  )
}
