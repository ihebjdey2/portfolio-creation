'use client'

import { useRef, useState } from 'react'
import { ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import type { Language } from '@/lib/language-context'
import { socialLinks } from '@/lib/site-links'
import { translations } from '@/lib/translations'

type ContactStatus = 'idle' | 'submitting' | 'success' | 'error'
const initialForm = { name: '', email: '', message: '', website: '' }

function isSuccessfulContactResponse(value: unknown): value is { ok: true } {
  return typeof value === 'object' && value !== null && 'ok' in value && value.ok === true
}

export function ContactSection({ language }: { language: Language }) {
  const t = translations[language]
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState<ContactStatus>('idle')
  const submissionInFlight = useRef(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
    if (status === 'success' || status === 'error') setStatus('idle')
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (submissionInFlight.current) return

    submissionInFlight.current = true
    setStatus('submitting')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
        cache: 'no-store',
        credentials: 'same-origin',
      })
      const result: unknown = await response.json().catch(() => null)
      if (!response.ok || response.redirected || !isSuccessfulContactResponse(result)) {
        throw new Error('Contact request failed')
      }
      setForm(initialForm)
      setStatus('success')
    } catch {
      setStatus('error')
    } finally {
      submissionInFlight.current = false
    }
  }

  const inputClass = 'min-h-12 w-full rounded-md border border-muted-foreground/70 bg-background px-3.5 text-sm placeholder:text-muted-foreground hover:border-muted-foreground focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/25'

  return (
    <section id="contact" className="section-rule scroll-mt-20 bg-surface/50">
      <div className="section-shell section-pad">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(420px,1.2fr)] lg:gap-20">
          <div>
            <p className="section-kicker">06 / {t.contact.eyebrow}</p>
            <h2 className="section-title max-w-md">{t.contact.title}</h2>
            <p className="section-intro">{t.contact.subtitle}</p>
            <p className="mt-7 font-mono text-xs text-muted-foreground">{t.contact.location}</p>

            <div className="mt-8 flex flex-col items-start gap-3 text-sm">
              {/* The route handler returns a PDF attachment, so client-side page navigation is not appropriate. */}
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/api/resume/en" className="text-link"><Download size={15} aria-hidden="true" />{t.contact.englishCv}<ArrowUpRight size={12} aria-hidden="true" /></a>
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/api/resume/fr" className="text-link"><Download size={15} aria-hidden="true" />{t.contact.frenchCv}<ArrowUpRight size={12} aria-hidden="true" /></a>
              <a href={socialLinks.email} className="text-link"><Mail size={15} aria-hidden="true" />Email</a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-link"><Linkedin size={15} aria-hidden="true" />LinkedIn<ArrowUpRight size={12} aria-hidden="true" /></a>
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-link"><Github size={15} aria-hidden="true" />GitHub<ArrowUpRight size={12} aria-hidden="true" /></a>
            </div>
          </div>

          <form
            action="/api/contact"
            method="post"
            encType="application/x-www-form-urlencoded"
            onSubmit={handleSubmit}
            aria-busy={status === 'submitting'}
            className="rounded-xl border border-border bg-background/85 p-5 surface-shadow sm:p-7"
            aria-label={language === 'en' ? 'Contact form' : 'Formulaire de contact'}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium">{t.contact.name}</label>
                <input id="contact-name" type="text" name="name" required minLength={2} maxLength={100} autoComplete="name" value={form.name} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium">{t.contact.email}</label>
                <input id="contact-email" type="email" name="email" required maxLength={254} autoComplete="email" value={form.email} onChange={handleChange} className={inputClass} />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="contact-message" className="mb-2 block text-sm font-medium">{t.contact.message}</label>
              <textarea id="contact-message" name="message" required minLength={10} maxLength={5000} rows={6} value={form.message} onChange={handleChange} className={`${inputClass} resize-y py-3`} />
            </div>
            <div className="sr-only" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" type="text" name="website" tabIndex={-1} aria-hidden="true" autoComplete="off" value={form.website} onChange={handleChange} /></div>
            <button type="submit" disabled={status === 'submitting'} className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-primary px-6 font-medium text-primary-foreground hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60">
              {status === 'submitting' ? t.contact.sending : t.contact.send}<ArrowUpRight size={16} aria-hidden="true" />
            </button>
            <div aria-live="polite" className="mt-3 min-h-6 text-sm">
              {status === 'success' ? <p className="text-emerald-700 dark:text-emerald-400">{t.contact.success}</p> : null}
              {status === 'error' ? <p className="text-destructive">{t.contact.error}</p> : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
