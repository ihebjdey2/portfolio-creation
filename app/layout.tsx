import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/lib/theme-context'
import { LanguageProvider } from '@/lib/language-context'
import { ScrollProgress } from '@/components/scroll-progress'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

const siteUrl = 'https://ihebjdey.tn'
const siteName = 'Iheb Jdey'
const siteTitle = 'Iheb Jdey | Software Engineer'
const siteDescription = 'Software Engineer building full-stack, mobile and applied AI applications with experience across backend systems, Flutter, React, Node.js and intelligent software.'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: siteName,
      url: siteUrl,
      image: `${siteUrl}/profile.jpg`,
      jobTitle: 'Software Engineer',
      sameAs: [
        'https://github.com/ihebjdey2',
        'https://www.linkedin.com/in/jdey-iheb',
      ],
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'ESPRIT',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: `${siteName} Portfolio`,
      description: siteDescription,
      inLanguage: ['en', 'fr'],
      publisher: { '@id': `${siteUrl}/#person` },
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: `${siteName} Portfolio`,
  authors: [{ name: siteName, url: '/' }],
  creator: siteName,
  publisher: siteName,
  keywords: ['Software Engineer', 'Full-Stack Developer', 'Mobile Developer', 'Applied AI', 'React', 'Next.js', 'Flutter', 'Node.js'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'fr_FR',
    url: '/',
    siteName,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f8fa' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} bg-background`} suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
          }}
        />
        <ThemeProvider>
          <LanguageProvider>
            <ScrollProgress />
            {children}
            {process.env.VERCEL === '1' && <Analytics />}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
