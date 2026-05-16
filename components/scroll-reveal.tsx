'use client'

import { useViewportObserver } from '@/hooks/use-viewport-observer'

interface ScrollRevealProps {
  children: React.ReactNode
  direction?: 'left' | 'right' | 'up' | 'down'
  delay?: number
  className?: string
}

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}: ScrollRevealProps) {
  const { ref, isVisible } = useViewportObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  })

  const animationClass = {
    left: 'scroll-in-left',
    right: 'scroll-in-right',
    up: 'scroll-in-up',
    down: 'scroll-in-down',
  }[direction]

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClass : 'opacity-0'}`}
      style={{
        animationDelay: isVisible ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  )
}
