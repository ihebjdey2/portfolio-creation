'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

export default function NotFound() {
  const { language } = useLanguage()
  const t = translations[language].notFound

  return (
    <main className="section-shell flex min-h-screen items-center py-16 text-foreground">
      <div className="grid w-full gap-8 border-y border-border py-12 md:grid-cols-[0.45fr_1fr] md:items-start">
        <p className="font-mono text-sm text-primary">404</p>
        <div>
          <h1 className="text-4xl font-medium tracking-[-0.045em] sm:text-5xl">{t.title}</h1>
          <p className="mt-4 max-w-lg leading-7 text-muted-foreground">{t.description}</p>
          <Link href="/#projects" className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-4 font-medium text-primary-foreground"><ArrowLeft size={16} aria-hidden="true" />{t.back}</Link>
        </div>
      </div>
    </main>
  )
}
