import { describe, expect, it } from 'vitest'
import { getProjectBySlug, getProjectNavigation, localize, projects } from './portfolio-data'

describe('portfolio project data', () => {
  it('contains exactly 14 unique project slugs', () => {
    const slugs = projects.map((project) => project.slug)

    expect(projects).toHaveLength(14)
    expect(new Set(slugs).size).toBe(14)
    expect(slugs.every((slug) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))).toBe(true)
  })

  it('keeps required English and French content complete', () => {
    for (const project of projects) {
      expect(project.title.trim()).not.toBe('')
      expect(project.category.en.trim()).not.toBe('')
      expect(project.category.fr.trim()).not.toBe('')
      expect(project.description.en.trim()).not.toBe('')
      expect(project.description.fr.trim()).not.toBe('')
      expect(project.caseStudy.overview.en.trim()).not.toBe('')
      expect(project.caseStudy.overview.fr.trim()).not.toBe('')
      expect(project.caseStudy.built.en.length).toBeGreaterThan(0)
      expect(project.caseStudy.built.fr.length).toBeGreaterThan(0)
      expect(project.caseStudy.technicalApproach.en.length).toBeGreaterThan(0)
      expect(project.caseStudy.technicalApproach.fr.length).toBeGreaterThan(0)
      expect(project.technologies.length).toBeGreaterThan(0)
    }
  })

  it('uses valid project-owned GitHub repository URLs', () => {
    for (const project of projects) {
      const repository = new URL(project.githubUrl)
      expect(repository.protocol).toBe('https:')
      expect(repository.hostname).toBe('github.com')
      expect(repository.pathname.toLowerCase()).toMatch(/^\/ihebjdey2\//)
    }
  })

  it('keeps media metadata safe and renderable', () => {
    for (const project of projects) {
      for (const media of [project.heroMedia, ...(project.media || [])].filter(
        (item) => item !== undefined,
      )) {
        expect(media.src).toMatch(/^\/projects\//)
        expect(media.width).toBeGreaterThan(0)
        expect(media.height).toBeGreaterThan(0)
        expect(media.alt.en.trim()).not.toBe('')
        expect(media.alt.fr.trim()).not.toBe('')
        if (media.kind === 'video' && media.poster) {
          expect(media.poster).toMatch(/^\/projects\//)
        }
      }
    }
  })

  it('looks up and localizes projects predictably', () => {
    const firstProject = projects[0]

    expect(getProjectBySlug(firstProject.slug)).toBe(firstProject)
    expect(getProjectBySlug('missing-project')).toBeUndefined()
    expect(localize(firstProject.description, 'en')).toBe(firstProject.description.en)
    expect(localize(firstProject.description, 'fr')).toBe(firstProject.description.fr)
  })

  it('builds compact, wrap-around project navigation data', () => {
    const firstProject = projects[0]
    const lastProject = projects.at(-1)
    const navigation = getProjectNavigation(firstProject.slug)

    expect(navigation).toEqual({
      previous: { slug: lastProject?.slug, title: lastProject?.title },
      next: { slug: projects[1].slug, title: projects[1].title },
    })
    expect(Object.keys(navigation?.previous ?? {})).toEqual(['slug', 'title'])
    expect(Object.keys(navigation?.next ?? {})).toEqual(['slug', 'title'])
    expect(getProjectNavigation('missing-project')).toBeUndefined()
  })
})
