'use client'

import { Header } from '@/components/header'
import { AboutSection } from '@/components/portfolio/about-section'
import { ContactSection } from '@/components/portfolio/contact-section'
import { EducationSection } from '@/components/portfolio/education-section'
import { ExperienceSection } from '@/components/portfolio/experience-section'
import { Footer } from '@/components/portfolio/footer'
import { HeroSection } from '@/components/portfolio/hero-section'
import { ProjectsSection } from '@/components/portfolio/projects-section'
import { SkillsSection } from '@/components/portfolio/skills-section'
import { useLanguage } from '@/lib/language-context'

export default function Home() {
  const { language } = useLanguage()

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="bg-background text-foreground">
        <HeroSection language={language} />
        <ProjectsSection language={language} />
        <SkillsSection language={language} />
        <ExperienceSection language={language} />
        <EducationSection language={language} />
        <AboutSection language={language} />
        <ContactSection language={language} />
      </main>
      <Footer language={language} />
    </>
  )
}
