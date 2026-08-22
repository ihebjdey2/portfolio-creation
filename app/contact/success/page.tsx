import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Message sent',
  robots: { index: false, follow: false },
}

export default function ContactSuccessPage() {
  return (
    <main className="section-shell flex min-h-screen items-center py-16 text-foreground">
      <div className="grid w-full gap-8 border-y border-border py-12 md:grid-cols-[0.45fr_1fr] md:items-start">
        <p className="font-mono text-sm text-primary">
          Message sent / <span lang="fr">Message envoyé</span>
        </p>
        <div>
          <h1 className="text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
            Thank you for getting in touch.
          </h1>
          <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
            Your message was sent. I will reply as soon as possible. /{' '}
            <span lang="fr">
              Votre message a bien été envoyé. Je vous répondrai dès que possible.
            </span>
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-flex min-h-11 items-center rounded-md bg-primary px-4 font-medium text-primary-foreground"
          >
            ← Back to the portfolio / <span lang="fr">Retour au portfolio</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
