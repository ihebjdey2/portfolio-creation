import { describe, expect, it } from 'vitest'
import { projects } from '@/lib/portfolio-data'
import robots from './robots'
import sitemap from './sitemap'

const SITE_URL = 'https://ihebjdey.tn'

describe('crawl metadata', () => {
  it('publishes exactly the homepage and all project case studies', () => {
    const entries = sitemap()

    expect(entries).toHaveLength(projects.length + 1)
    expect(entries.map((entry) => entry.url)).toEqual([
      SITE_URL,
      ...projects.map((project) => `${SITE_URL}/projects/${project.slug}`),
    ])
  })

  it('allows public pages while keeping API routes out of the crawl plan', () => {
    expect(robots()).toEqual({
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
      sitemap: `${SITE_URL}/sitemap.xml`,
      host: SITE_URL,
    })
  })
})
