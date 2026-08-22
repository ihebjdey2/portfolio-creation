'use client'

import { createContext, useContext, useEffect, useSyncExternalStore } from 'react'

export type Language = 'en' | 'fr'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LANGUAGE_STORAGE_KEY = 'language'
const LANGUAGE_CHANGE_EVENT = 'portfolio-language-change'
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

function getLanguageSnapshot(): Language {
  return localStorage.getItem(LANGUAGE_STORAGE_KEY) === 'fr' ? 'fr' : 'en'
}

function getServerLanguageSnapshot(): Language {
  return 'en'
}

function subscribeToLanguage(onStoreChange: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (!event.key || event.key === LANGUAGE_STORAGE_KEY) onStoreChange()
  }

  window.addEventListener('storage', handleStorage)
  window.addEventListener(LANGUAGE_CHANGE_EVENT, onStoreChange)
  return () => {
    window.removeEventListener('storage', handleStorage)
    window.removeEventListener(LANGUAGE_CHANGE_EVENT, onStoreChange)
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(
    subscribeToLanguage,
    getLanguageSnapshot,
    getServerLanguageSnapshot,
  )

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = (lang: Language) => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang)
    window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT))
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
