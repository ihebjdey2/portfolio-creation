'use client'

import { useRef, useEffect, useState } from 'react'

interface ParallaxSectionProps {
  children: React.ReactNode
  offset?: number
  direction?: 'up' | 'down'
  className?: string
}

export function ParallaxSection({
  children,
  offset = 50,
  direction = 'up',
  className = '',
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const scrollY = window.scrollY
      const elementTop = ref.current.offsetTop
      const windowHeight = window.innerHeight
      const elementHeight = ref.current.offsetHeight

      // Calculate if element is in viewport
      const isInViewport =
        elementTop < scrollY + windowHeight && elementTop + elementHeight > scrollY

      if (isInViewport) {
        // Calculate parallax amount based on scroll position
        const distance = scrollY - (elementTop - windowHeight)
        const speed = direction === 'up' ? offset : -offset
        const parallax = (distance * speed) / 100
        setTransform(parallax)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [offset, direction])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translateY(${transform}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {children}
    </div>
  )
}
