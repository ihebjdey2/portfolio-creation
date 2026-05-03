'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun, Globe } from 'lucide-react'
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
  const [mounted, setMounted] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage } = useLanguage()
  const t = translations[language]
  
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
  }

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="text-xl font-bold text-foreground">Portfolio</div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">Jdey Iheb</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav[item.name as keyof typeof t.nav]}
            </a>
          ))}
        </nav>

        {/* Desktop Controls */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Selector */}
          <div className="flex items-center gap-2 border border-border rounded-lg p-1">
            <button
              onClick={() => handleLanguageChange('en')}
              className={`px-3 py-1 rounded text-sm transition-colors ${
                language === 'en'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => handleLanguageChange('fr')}
              className={`px-3 py-1 rounded text-sm transition-colors ${
                language === 'fr'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              FR
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-border hover:bg-secondary transition-colors"
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
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-border bg-secondary/50 p-4 space-y-3">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav[item.name as keyof typeof t.nav]}
            </a>
          ))}

          {/* Mobile Language Selector */}
          <div className="pt-4 border-t border-border flex gap-2">
            <button
              onClick={() => {
                handleLanguageChange('en')
                setMobileMenuOpen(false)
              }}
              className={`flex-1 px-3 py-2 rounded text-sm transition-colors ${
                language === 'en'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-muted-foreground hover:text-foreground'
              }`}
            >
              English
            </button>
            <button
              onClick={() => {
                handleLanguageChange('fr')
                setMobileMenuOpen(false)
              }}
              className={`flex-1 px-3 py-2 rounded text-sm transition-colors ${
                language === 'fr'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-muted-foreground hover:text-foreground'
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
