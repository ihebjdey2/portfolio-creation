import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Message not sent',
  robots: { index: false, follow: false },
}

export default function ContactErrorPage() {
  return (
    <main className="section-shell flex min-h-screen items-center py-16 text-foreground">
      <div className="grid w-full gap-8 border-y border-border py-12 md:grid-cols-[0.45fr_1fr] md:items-start">
        <p className="font-mono text-sm text-destructive">
          Message not sent / <span lang="fr">Échec de l’envoi</span>
        </p>
        <div>
          <h1 className="text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
            The message could not be sent.
          </h1>
          <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
            Please return to the form and try again, or email me directly. /{' '}
            <span lang="fr">
              Revenez au formulaire et réessayez, ou envoyez-moi directement un e-mail.
            </span>
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="inline-flex min-h-11 items-center rounded-md bg-primary px-4 font-medium text-primary-foreground"
            >
              ← Try again / <span lang="fr">Réessayer</span>
            </Link>
            <a
              href="mailto:ihebjdey2@gmail.com"
              className="inline-flex min-h-11 items-center rounded-md border border-border px-4 font-medium hover:border-primary hover:text-primary"
            >
              Email / <span lang="fr">E-mail</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
