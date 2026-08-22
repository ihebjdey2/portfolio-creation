import { describe, expect, it } from 'vitest'
import { GET } from './route'

function resumeRequest(language: string) {
  return GET(new Request(`http://localhost:3000/api/resume/${language}`), {
    params: Promise.resolve({ language }),
  })
}

describe('GET /api/resume/[language]', () => {
  it.each([
    ['en', 'Jdey-Iheb-CV-English.pdf'],
    ['fr', 'Jdey-Iheb-CV-French.pdf'],
  ])('returns the %s résumé as a PDF attachment', async (language, filename) => {
    const response = await resumeRequest(language)

    expect(response.status).toBe(200)
    expect(response.headers.get('content-type')).toBe('application/pdf')
    expect(response.headers.get('content-disposition')).toBe(
      `attachment; filename="${filename}"`,
    )
    expect((await response.arrayBuffer()).byteLength).toBeGreaterThan(100_000)
  })

  it('returns 404 for an unsupported language', async () => {
    const response = await resumeRequest('de')

    expect(response.status).toBe(404)
    await expect(response.json()).resolves.toEqual({ error: 'Resume not found' })
  })
})
