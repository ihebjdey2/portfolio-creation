'use client'

import { Header } from '@/components/header'
import { HeroSection } from '@/components/portfolio/hero-section'
import { ProjectsSection } from '@/components/portfolio/projects-section'
import { useLanguage } from '@/lib/language-context'

export default function Home() {
  const { language } = useLanguage()

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="portfolio-dashboard-page bg-background text-foreground">
        <HeroSection language={language} />
        <ProjectsSection language={language} />
      </main>
    </>
  )
}
