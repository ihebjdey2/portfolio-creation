'use client'

import { createContext, useContext, useEffect, useSyncExternalStore } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: (origin?: HTMLElement) => void
}

const THEME_STORAGE_KEY = 'theme'
const THEME_CHANGE_EVENT = 'portfolio-theme-change'
const DARK_MODE_QUERY = '(prefers-color-scheme: dark)'
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function getThemeSnapshot(): Theme {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme
  return window.matchMedia(DARK_MODE_QUERY).matches ? 'dark' : 'light'
}

function getServerThemeSnapshot(): Theme {
  return 'light'
}

function subscribeToTheme(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia(DARK_MODE_QUERY)
  const handleStorage = (event: StorageEvent) => {
    if (!event.key || event.key === THEME_STORAGE_KEY) onStoreChange()
  }

  window.addEventListener('storage', handleStorage)
  window.addEventListener(THEME_CHANGE_EVENT, onStoreChange)
  mediaQuery.addEventListener('change', onStoreChange)
  return () => {
    window.removeEventListener('storage', handleStorage)
    window.removeEventListener(THEME_CHANGE_EVENT, onStoreChange)
    mediaQuery.removeEventListener('change', onStoreChange)
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document.documentElement.style.colorScheme = theme
  }, [theme])

  const toggleTheme = (origin?: HTMLElement) => {
    const nextTheme = getThemeSnapshot() === 'dark' ? 'light' : 'dark'
    const root = document.documentElement
    const applyTheme = () => {
      root.classList.toggle('dark', nextTheme === 'dark')
      root.style.colorScheme = nextTheme
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme)
      window.dispatchEvent(new Event(THEME_CHANGE_EVENT))
    }

    if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      applyTheme()
      return
    }

    const bounds = origin?.getBoundingClientRect()
    const x = bounds ? bounds.left + bounds.width / 2 : window.innerWidth / 2
    const y = bounds ? bounds.top + bounds.height / 2 : window.innerHeight / 2
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    )

    root.style.setProperty('--theme-sweep-x', `${x}px`)
    root.style.setProperty('--theme-sweep-y', `${y}px`)
    root.style.setProperty('--theme-sweep-radius', `${radius}px`)
    root.dataset.themeSweep = 'on'
    document.startViewTransition(applyTheme).finished.finally(() => {
      delete root.dataset.themeSweep
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
