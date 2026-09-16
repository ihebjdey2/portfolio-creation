import { ArrowUpRight } from 'lucide-react'
import type { Language } from '@/lib/language-context'

export function HeroSection({ language }: { language: Language }) {
  const isEnglish = language === 'en'
  const drivers = ['React', 'Next.js', 'Flutter', 'Node.js', 'Python', 'Docker', 'Applied AI', 'Unity']

  return (
    <section id="home" className="dashboard-home scroll-mt-6">
      <div className="dashboard-hero">
        <div className="min-w-0">
          <p className="section-kicker">{isEnglish ? 'Software engineer · Tunisia' : 'Ingénieur logiciel · Tunisie'}</p>
          <h1>{isEnglish ? 'Build it once. Run it everywhere.' : 'Concevoir une fois. Déployer partout.'}</h1>
          <p>{isEnglish ? 'I turn ambitious ideas into reliable web, mobile and AI-powered products.' : 'Je transforme des idées ambitieuses en produits web, mobile et IA fiables.'}</p>
        </div>
        <a href="#contact" className="dashboard-contact">
          {isEnglish ? 'Get in touch' : 'Me contacter'}<ArrowUpRight size={19} aria-hidden="true" />
        </a>
      </div>

      <div className="driver-strip" aria-label={isEnglish ? 'Core technologies' : 'Technologies principales'}>
        <div className="driver-label">
          <span>{isEnglish ? 'Daily drivers' : 'Outils clés'}</span>
          <strong>{isEnglish ? 'Tools I work with' : 'Mes technologies'}</strong>
        </div>
        <div className="driver-window">
          <ul>{drivers.concat(drivers).map((driver, index) => <li key={`${driver}-${index}`}>{driver}</li>)}</ul>
        </div>
      </div>
    </section>
  )
}
