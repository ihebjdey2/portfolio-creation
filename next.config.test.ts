import { describe, expect, it } from 'vitest'
import nextConfig from './next.config.mjs'

describe('security response headers', () => {
  it('applies the baseline browser security policy to every route', async () => {
    const rules = await nextConfig.headers?.()
    const headers = Object.fromEntries(
      (rules?.[0]?.headers ?? []).map(({ key, value }) => [key, value]),
    )

    expect(rules?.[0]?.source).toBe('/:path*')
    expect(headers).toMatchObject({
      'Content-Security-Policy': expect.stringContaining("frame-ancestors 'none'"),
      'Permissions-Policy': expect.stringContaining('camera=()'),
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Strict-Transport-Security': 'max-age=31536000',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
    })
  })
})
