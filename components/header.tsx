'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, Moon, Sun } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useLanguage, type Language } from '@/lib/language-context'
import { useTheme } from '@/lib/theme-context'
import { translations } from '@/lib/translations'

const navigation = [
  { name: 'projects', href: '/#projects' },
  { name: 'skills', href: '/#skills' },
  { name: 'experience', href: '/#experience' },
  { name: 'about', href: '/#about' },
  { name: 'contact', href: '/#contact' },
] as const

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)
      for (const item of navigation) {
        const element = document.getElementById(item.name)
        if (!element) continue
        const rect = element.getBoundingClientRect()
        if (rect.top <= 140 && rect.bottom >= 140) {
          setActiveSection(item.name)
          return
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1024px)')
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMobileMenuOpen(false)
    }

    desktopQuery.addEventListener('change', closeOnDesktop)
    return () => desktopQuery.removeEventListener('change', closeOnDesktop)
  }, [])

  const changeLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage)
    setMobileMenuOpen(false)
  }

  const themeLabel = language === 'en' ? 'Toggle color theme' : 'Changer le thème'
  const menuLabel = mobileMenuOpen
    ? language === 'en' ? 'Close navigation menu' : 'Fermer le menu'
    : language === 'en' ? 'Open navigation menu' : 'Ouvrir le menu'
  const navigationLabel = language === 'en' ? 'Primary navigation' : 'Navigation principale'

  return (
    <header className={`sticky top-0 z-50 border-b transition-colors ${isScrolled || mobileMenuOpen ? 'border-border bg-background/92 backdrop-blur-xl' : 'border-transparent bg-background/70 backdrop-blur-sm'}`}>
      <a
        href="#main-content"
        className="fixed left-4 top-2 z-[100] -translate-y-20 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background shadow-lg focus:translate-y-0"
      >
        {language === 'en' ? 'Skip to main content' : 'Aller au contenu principal'}
      </a>
      <div className="section-shell flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <Link href="/" className="group min-w-0 rounded-sm" aria-label="Iheb Jdey — Home">
          <span className="block truncate text-sm font-semibold tracking-[-0.02em] group-hover:text-primary">Iheb Jdey</span>
          <span className="hidden font-mono text-[0.65rem] text-muted-foreground sm:block">Software Engineer</span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label={navigationLabel}>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              aria-current={activeSection === item.name ? 'location' : undefined}
              className={`relative rounded-md px-3 py-2 text-sm ${activeSection === item.name ? 'text-foreground after:absolute after:inset-x-3 after:-bottom-[1.15rem] after:h-px after:bg-primary' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {t.nav[item.name]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <div className="flex rounded-md border border-border bg-surface/70 p-0.5" role="group" aria-label={language === 'en' ? 'Language' : 'Langue'}>
            {(['en', 'fr'] as const).map((item) => (
              <button key={item} type="button" onClick={() => changeLanguage(item)} aria-pressed={language === item} className={`min-h-8 rounded px-2 text-[0.68rem] font-semibold ${language === item ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground'}`}>
                {item.toUpperCase()}
              </button>
            ))}
          </div>
          <button type="button" onClick={toggleTheme} className="grid size-9 place-items-center rounded-md border border-border bg-surface/70 text-muted-foreground hover:text-foreground" aria-label={themeLabel}>
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a href={language === 'fr' ? '/api/resume/fr' : '/api/resume/en'} className="inline-flex min-h-9 items-center gap-1.5 rounded-md bg-foreground px-3.5 text-sm font-medium text-background hover:bg-primary hover:text-primary-foreground">
            {t.nav.resume}<ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <button type="button" onClick={toggleTheme} className="grid size-11 place-items-center rounded-md text-muted-foreground hover:bg-surface-muted hover:text-foreground" aria-label={themeLabel}>
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <button type="button" className="grid size-11 place-items-center rounded-md hover:bg-surface-muted" aria-label={menuLabel} aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation">
                <Menu size={22} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="top"
              closeLabel={language === 'en' ? 'Close navigation menu' : 'Fermer le menu'}
              aria-describedby={undefined}
              className="h-dvh border-x-0 border-t-0 p-0 shadow-none lg:hidden"
            >
              <SheetTitle className="sr-only">{navigationLabel}</SheetTitle>
              <nav id="mobile-navigation" className="h-full overflow-y-auto bg-background px-5 pb-8 pt-16" aria-label={language === 'en' ? 'Mobile navigation' : 'Navigation mobile'}>
                <div className="mx-auto flex max-w-lg flex-col">
                  {navigation.map((item, index) => (
                    <a key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className="flex min-h-14 items-center justify-between border-b border-border text-lg font-medium">
                      {t.nav[item.name]}<span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                    </a>
                  ))}
                  <a href={language === 'fr' ? '/api/resume/fr' : '/api/resume/en'} className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-foreground px-5 font-medium text-background">
                    {t.nav.resume}<ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                  <div className="mt-4 grid grid-cols-2 gap-2" role="group" aria-label={language === 'en' ? 'Language' : 'Langue'}>
                    <button type="button" onClick={() => changeLanguage('en')} aria-pressed={language === 'en'} className={`min-h-12 rounded-md border text-sm font-medium ${language === 'en' ? 'border-foreground bg-foreground text-background' : 'border-border bg-surface'}`}>English</button>
                    <button type="button" onClick={() => changeLanguage('fr')} aria-pressed={language === 'fr'} className={`min-h-12 rounded-md border text-sm font-medium ${language === 'fr' ? 'border-foreground bg-foreground text-background' : 'border-border bg-surface'}`}>Français</button>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

    </header>
  )
}
