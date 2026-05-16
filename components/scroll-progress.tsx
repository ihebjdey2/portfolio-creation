'use client'

import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 h-1 bg-background z-[100]">
      {/* Gradient progress bar */}
      <div
        className="h-full bg-gradient-to-r from-primary via-accent to-primary transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
      {/* Glow effect */}
      <div
        className="absolute top-0 h-full w-1 bg-primary blur-md opacity-50"
        style={{ left: `${scrollProgress}%`, transform: 'translateX(-50%)' }}
      />
    </div>
  )
}
