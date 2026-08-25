import Image from 'next/image'
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import type { Language } from '@/lib/language-context'
import { localize, profile } from '@/lib/portfolio-data'
import { socialLinks } from '@/lib/site-links'
import { translations } from '@/lib/translations'

export function HeroSection({ language }: { language: Language }) {
  const t = translations[language]
  return (
    <section className="section-shell flex min-h-[calc(100svh-4rem)] items-center py-16 lg:min-h-[calc(100svh-4.5rem)] lg:py-20">
      <div className="w-full">
        <div className="mb-10 flex items-center justify-between gap-4 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground sm:mb-16">
          <span className="inline-flex items-center gap-3"><i className="eyebrow-dot" aria-hidden="true" /> Available for select projects</span>
          <span className="hidden sm:block">Based in Tunisia / Working worldwide</span>
        </div>
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)] lg:gap-20">
          <div className="max-w-5xl">
            <p className="section-kicker">{t.hero.eyebrow}</p>
            <h1 className="font-display text-[clamp(3.9rem,11.5vw,10.5rem)] font-medium leading-[0.82] tracking-[-0.085em]">{profile.name.split(' ')[0]}<br /><span className="hero-outline transition-colors">{profile.name.split(' ').slice(1).join(' ')}</span></h1>
            <p className="mt-9 max-w-3xl text-xl font-medium leading-snug tracking-[-0.03em] sm:text-3xl lg:text-4xl">{localize(profile.role, language)}</p>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">{localize(profile.introduction, language)}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#projects" className="btn-primary">{t.hero.viewProjects}<ArrowDown size={16} aria-hidden="true" /></a>
              <a href={language === 'fr' ? '/api/resume/fr' : '/api/resume/en'} className="btn-quiet">{t.hero.resume}<ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-link"><Github size={16} aria-hidden="true" />GitHub<ArrowUpRight size={12} aria-hidden="true" /></a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-link"><Linkedin size={16} aria-hidden="true" />LinkedIn<ArrowUpRight size={12} aria-hidden="true" /></a>
              <a href={socialLinks.email} className="text-link"><Mail size={16} aria-hidden="true" />Email</a>
            </div>
          </div>
          <div className="relative mx-auto w-[min(64vw,300px)] lg:mb-2 lg:w-full">
            <div className="absolute -inset-3 translate-x-3 translate-y-3 border border-primary/60" aria-hidden="true" />
            <figure className="surface-shadow relative overflow-hidden border border-border bg-surface p-2">
              <Image src="/profile.jpg" alt={language === 'en' ? 'Portrait of Iheb Jdey' : 'Portrait de Iheb Jdey'} width={640} height={800} sizes="(max-width: 1023px) 300px, 360px" priority className="aspect-[4/5] w-full object-cover object-center" />
            </figure>
            <p className="mt-4 text-right font-mono text-[0.67rem] text-muted-foreground">Software engineer · 2026</p>
          </div>
        </div>
      </div>
    </section>
  )
}
