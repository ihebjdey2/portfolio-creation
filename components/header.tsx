'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from '@/lib/theme-context'
import { useLanguage, Language } from '@/lib/language-context'
import { translations } from '@/lib/translations'

const navigation = [
  { name: 'about', href: '#about' },
  { name: 'experience', href: '#experience' },
  { name: 'projects', href: '#projects' },
  { name: 'skills', href: '#skills' },
  { name: 'cv', href: '#cv' },
  { name: 'contact', href: '#contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
  }

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(item => item.name)
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isNavItemActive = (itemName: string) => activeSection === itemName

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-background/30 backdrop-blur-xl supports-[backdrop-filter]:bg-background/20">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
            JI
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-foreground">Jdey Iheb</p>
            <p className="text-xs text-muted-foreground">Full-Stack Engineer</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 relative ${
                isNavItemActive(item.name)
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-primary/5'
              }`}
            >
              {t.nav[item.name as keyof typeof t.nav]}
              {isNavItemActive(item.name) && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"></span>
              )}
            </a>
          ))}
        </nav>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Selector - Premium */}
          <div className="flex items-center gap-1 p-1 rounded-lg bg-primary/5 border border-primary/20 hover:border-primary/40 transition-all duration-300">
            <button
              onClick={() => handleLanguageChange('en')}
              className={`px-3 py-1.5 rounded text-xs font-semibold transition-all duration-300 ${
                language === 'en'
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => handleLanguageChange('fr')}
              className={`px-3 py-1.5 rounded text-xs font-semibold transition-all duration-300 ${
                language === 'fr'
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              FR
            </button>
          </div>

          {/* Theme Toggle - Premium */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-primary/5 text-muted-foreground hover:text-primary transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-primary/5 text-foreground transition-all duration-300"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Premium Glass Effect */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-primary/10 bg-background/50 backdrop-blur-lg p-4 space-y-2 animate-fade-in">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                isNavItemActive(item.name)
                  ? 'bg-primary/15 text-primary border border-primary/30'
                  : 'text-muted-foreground hover:text-foreground hover:bg-primary/5'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav[item.name as keyof typeof t.nav]}
            </a>
          ))}

          {/* Mobile Language Selector */}
          <div className="pt-4 border-t border-primary/10 flex gap-2">
            <button
              onClick={() => {
                handleLanguageChange('en')
                setMobileMenuOpen(false)
              }}
              className={`flex-1 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${
                language === 'en'
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-card text-muted-foreground hover:text-foreground hover:bg-primary/5'
              }`}
            >
              English
            </button>
            <button
              onClick={() => {
                handleLanguageChange('fr')
                setMobileMenuOpen(false)
              }}
              className={`flex-1 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${
                language === 'fr'
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-card text-muted-foreground hover:text-foreground hover:bg-primary/5'
              }`}
            >
              Français
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}
