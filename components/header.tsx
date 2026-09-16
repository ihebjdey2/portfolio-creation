'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  BriefcaseBusiness,
  Download,
  FolderKanban,
  Github,
  Home,
  Layers3,
  Linkedin,
  Mail,
  Moon,
  Sun,
  UserRound,
} from 'lucide-react'
import { useLanguage, type Language } from '@/lib/language-context'
import { useTheme } from '@/lib/theme-context'
import { socialLinks } from '@/lib/site-links'
import { translations } from '@/lib/translations'

const navigation = [
  { name: 'home', href: '/#home', icon: Home },
  { name: 'projects', href: '/#projects', icon: FolderKanban },
  { name: 'skills', href: '/#skills', icon: Layers3 },
  { name: 'experience', href: '/#experience', icon: BriefcaseBusiness },
  { name: 'about', href: '/#about', icon: UserRound },
  { name: 'contact', href: '/#contact', icon: Mail },
] as const

const mobileNavigation = navigation.filter((item) => item.name !== 'skills')

export function Header() {
  const [activeSection, setActiveSection] = useState('home')
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation
        .map((item) => ({ name: item.name, element: document.getElementById(item.name) }))
        .filter((item): item is { name: typeof navigation[number]['name']; element: HTMLElement } => Boolean(item.element))

      const current = [...sections].reverse().find(({ element }) => element.getBoundingClientRect().top <= 180)
      setActiveSection(current?.name ?? 'home')
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const changeLanguage = (nextLanguage: Language) => setLanguage(nextLanguage)
  const labelFor = (name: typeof navigation[number]['name']) => {
    if (name === 'home') return language === 'en' ? 'Home' : 'Accueil'
    return t.nav[name]
  }
  const themeLabel = language === 'en' ? 'Toggle color theme' : 'Changer le thème'

  return (
    <>
      <a href="#main-content" className="fixed left-4 top-2 z-[100] -translate-y-20 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background shadow-lg focus:translate-y-0">
        {language === 'en' ? 'Skip to main content' : 'Aller au contenu principal'}
      </a>

      <aside className="portfolio-rail" aria-label={language === 'en' ? 'Profile and navigation' : 'Profil et navigation'}>
        <div>
          <Link href="/#home" className="group block rounded-2xl" aria-label="Iheb Jdey — Home">
            <div className="mx-auto size-[6.75rem] overflow-hidden rounded-full border border-border bg-surface p-1.5 shadow-[0_18px_45px_-28px_rgba(13,31,61,0.55)]">
              <Image src="/profile.jpg" alt="Iheb Jdey" width={256} height={256} priority className="size-full rounded-full object-cover object-top" />
            </div>
            <div className="mt-5 text-center">
              <p className="font-display text-xl font-bold tracking-[-0.04em] group-hover:text-primary">Iheb Jdey</p>
              <p className="mt-1 text-sm text-muted-foreground">Software Engineer</p>
            </div>
          </Link>

          <div className="mt-5 flex justify-center gap-2">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="rail-icon"><Github size={18} aria-hidden="true" /></a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="rail-icon"><Linkedin size={18} aria-hidden="true" /></a>
            <a href={socialLinks.email} aria-label="Email Iheb Jdey" className="rail-icon"><Mail size={18} aria-hidden="true" /></a>
            <button type="button" onClick={(event) => toggleTheme(event.currentTarget)} aria-label={themeLabel} className="rail-icon">{theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}</button>
          </div>
        </div>

        <nav className="mt-5 border-t border-border pt-5" aria-label={language === 'en' ? 'Primary navigation' : 'Navigation principale'}>
          {navigation.map((item) => {
            const Icon = item.icon
            const active = activeSection === item.name
            return (
              <a key={item.name} href={item.href} aria-current={active ? 'location' : undefined} className={`rail-link ${active ? 'rail-link-active' : ''}`}>
                <Icon size={19} aria-hidden="true" />
                <span>{labelFor(item.name)}</span>
              </a>
            )
          })}
        </nav>

        <div className="mt-auto border-t border-border pt-5">
          <a href={language === 'fr' ? '/api/resume/fr' : '/api/resume/en'} className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground hover:-translate-y-0.5 hover:brightness-105">
            <Download size={16} aria-hidden="true" />{t.nav.resume}
          </a>
          <div className="mt-3 grid grid-cols-2 gap-2" role="group" aria-label={language === 'en' ? 'Language' : 'Langue'}>
            {(['en', 'fr'] as const).map((item) => <button key={item} type="button" onClick={() => changeLanguage(item)} aria-pressed={language === item} className={`min-h-10 rounded-lg border text-xs font-bold ${language === item ? 'border-foreground bg-foreground text-background' : 'border-border bg-surface text-muted-foreground hover:text-foreground'}`}>{item.toUpperCase()}</button>)}
          </div>
          <p className="mt-4 text-center font-mono text-[0.62rem] text-muted-foreground">© 2026 Iheb Jdey</p>
        </div>
      </aside>

      <header className="mobile-profile-bar">
        <Link href="/#home" className="flex min-w-0 items-center gap-3 rounded-xl">
          <Image src="/profile.jpg" alt="" width={48} height={48} className="size-11 rounded-full border border-border object-cover object-top" />
          <span className="min-w-0"><strong className="block truncate text-sm">Iheb Jdey</strong><small className="block truncate text-[0.68rem] text-muted-foreground">Software Engineer</small></span>
        </Link>
        <div className="flex items-center gap-1">
          <button type="button" onClick={() => changeLanguage(language === 'en' ? 'fr' : 'en')} className="grid size-11 place-items-center rounded-full border border-border bg-surface text-[0.68rem] font-bold" aria-label={language === 'en' ? 'Switch to French' : 'Passer en anglais'}>{language === 'en' ? 'FR' : 'EN'}</button>
          <button type="button" onClick={(event) => toggleTheme(event.currentTarget)} className="grid size-11 place-items-center rounded-full border border-border bg-surface" aria-label={themeLabel}>{theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}</button>
        </div>
      </header>

      <nav className="mobile-bottom-nav" aria-label={language === 'en' ? 'Mobile navigation' : 'Navigation mobile'}>
        {mobileNavigation.map((item) => {
          const Icon = item.icon
          const active = activeSection === item.name
          return <a key={item.name} href={item.href} aria-current={active ? 'location' : undefined} className={active ? 'mobile-nav-active' : ''}><Icon size={19} aria-hidden="true" /><span>{labelFor(item.name)}</span></a>
        })}
      </nav>
    </>
  )
}
