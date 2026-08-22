import Image from 'next/image'
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import type { Language } from '@/lib/language-context'
import { localize, profile } from '@/lib/portfolio-data'
import { socialLinks } from '@/lib/site-links'
import { translations } from '@/lib/translations'

export function HeroSection({ language }: { language: Language }) {
  const t = translations[language]

  return (
    <section className="section-shell flex min-h-[calc(100svh-4rem)] items-center py-16 sm:py-20 lg:min-h-[calc(100svh-4.5rem)] lg:py-24">
      <div className="grid w-full items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(280px,390px)] lg:gap-20">
        <div className="max-w-3xl">
          <p className="section-kicker">{t.hero.eyebrow}</p>
          <h1 className="text-[clamp(3.4rem,10vw,7.5rem)] font-medium leading-[0.88] tracking-[-0.07em]">{profile.name}</h1>
          <p className="mt-7 max-w-2xl text-xl font-medium leading-snug tracking-[-0.025em] text-foreground sm:text-2xl lg:text-3xl">{localize(profile.role, language)}</p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">{localize(profile.introduction, language)}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#projects" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-5 font-medium text-primary-foreground hover:-translate-y-0.5 hover:opacity-90">
              {t.hero.viewProjects}<ArrowDown size={16} aria-hidden="true" />
            </a>
            <a href={language === 'fr' ? '/api/resume/fr' : '/api/resume/en'} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-border bg-surface/60 px-5 font-medium hover:border-foreground/40 hover:bg-surface">
              {t.hero.resume}<ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-link"><Github size={16} aria-hidden="true" />GitHub<ArrowUpRight size={12} aria-hidden="true" /></a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-link"><Linkedin size={16} aria-hidden="true" />LinkedIn<ArrowUpRight size={12} aria-hidden="true" /></a>
            <a href={socialLinks.email} className="text-link"><Mail size={16} aria-hidden="true" />Email</a>
          </div>
        </div>

        <div className="relative mx-auto w-[min(78vw,350px)] lg:w-full">
          <div className="absolute -inset-3 translate-x-4 translate-y-4 rounded-[1.35rem] border border-border bg-surface-muted" aria-hidden="true" />
          <div className="surface-shadow relative overflow-hidden rounded-[1.2rem] border border-border bg-surface p-2">
            <Image
              src="/profile.jpg"
              alt={language === 'en' ? 'Portrait of Iheb Jdey' : 'Portrait de Iheb Jdey'}
              width={640}
              height={800}
              sizes="(max-width: 1023px) 350px, 390px"
              priority
              className="aspect-[4/5] w-full rounded-[0.85rem] object-cover object-center"
            />
          </div>
          <p className="relative mt-5 text-right font-mono text-[0.67rem] text-muted-foreground">Tunisia · 2026</p>
        </div>
      </div>
    </section>
  )
}
