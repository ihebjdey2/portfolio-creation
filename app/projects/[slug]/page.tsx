import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProjectCaseStudy } from '@/components/portfolio/project-case-study'
import { getProjectBySlug, getProjectNavigation, projects } from '@/lib/portfolio-data'

const siteUrl = 'https://ihebjdey.tn'
const shareImage = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'Iheb Jdey — Software Engineer portfolio',
}

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Project Not Found',
      robots: { index: false, follow: false },
    }
  }

  const projectUrl = `/projects/${project.slug}`

  return {
    title: project.title,
    description: project.description.en,
    keywords: project.technologies,
    alternates: { canonical: projectUrl },
    openGraph: {
      type: 'website',
      url: projectUrl,
      siteName: 'Iheb Jdey',
      locale: 'en_US',
      alternateLocale: 'fr_FR',
      title: `${project.title} | Iheb Jdey`,
      description: project.description.en,
      images: [shareImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Iheb Jdey`,
      description: project.description.en,
      images: [shareImage],
    },
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  const navigation = getProjectNavigation(slug)

  if (!project || !navigation) notFound()

  const projectUrl = `${siteUrl}/projects/${project.slug}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: project.title,
    description: project.description.en,
    url: projectUrl,
    codeRepository: project.githubUrl,
    programmingLanguage: project.technologies,
    author: {
      '@type': 'Person',
      name: 'Iheb Jdey',
      url: siteUrl,
    },
    inLanguage: ['en', 'fr'],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <ProjectCaseStudy project={project} navigation={navigation} />
    </>
  )
}
