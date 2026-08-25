import { ArrowUpRight } from 'lucide-react'
import type { Language } from '@/lib/language-context'
import { socialLinks } from '@/lib/site-links'
import { translations } from '@/lib/translations'

export function Footer({ language }: { language: Language }) {
  return (
    <footer className="section-rule bg-background">
      <div className="section-shell grid gap-6 py-8 sm:grid-cols-2 sm:items-end lg:grid-cols-3">
        <div>
          <p className="text-sm font-semibold">Iheb Jdey</p>
          <p className="mt-1 font-mono text-[0.67rem] text-muted-foreground">Software Engineer</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm lg:justify-center">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-link">GitHub<ArrowUpRight size={12} aria-hidden="true" /></a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-link">LinkedIn<ArrowUpRight size={12} aria-hidden="true" /></a>
          <a href={socialLinks.email} className="text-link">Email</a>
        </div>
        <p className="font-mono text-[0.67rem] text-muted-foreground sm:text-right">{translations[language].footer.copyright}</p>
      </div>
    </footer>
  )
}
