import { beforeEach, describe, expect, it, vi } from 'vitest'
import { getContactEmailConfiguration } from '@/lib/resend'
import { POST } from './route'

vi.mock('@/lib/resend', () => ({
  getContactEmailConfiguration: vi.fn(),
}))

const API_URL = 'http://localhost:3000/api/contact'
const VALID_CONTACT = {
  name: 'Synthetic Tester',
  email: 'tester@example.com',
  message: 'This is a synthetic test message.',
}

const getConfigurationMock = vi.mocked(getContactEmailConfiguration)

function jsonRequest(body: unknown, headers: Record<string, string> = {}) {
  return new Request(API_URL, {
    method: 'POST',
    headers: {
      Origin: 'http://localhost:3000',
      'Content-Type': 'application/json',
      ...headers,
    },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  })
}

function formRequest(body: Record<string, string>) {
  return new Request(API_URL, {
    method: 'POST',
    headers: {
      Origin: 'http://localhost:3000',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(body),
  })
}

function configureDelivery(result: unknown = { data: { id: 'email_123' }, error: null }) {
  const send = vi.fn().mockResolvedValue(result)
  const configuration = {
    client: { emails: { send } },
    from: 'Portfolio <contact@example.com>',
    to: 'owner@example.com',
  } as unknown as NonNullable<ReturnType<typeof getContactEmailConfiguration>>

  getConfigurationMock.mockReturnValue(configuration)
  return send
}

describe('POST /api/contact', () => {
  beforeEach(() => {
    getConfigurationMock.mockReturnValue(null)
  })

  it('rejects unsupported media types before parsing', async () => {
    const request = new Request(API_URL, {
      method: 'POST',
      headers: {
        Origin: 'http://localhost:3000',
        'Content-Type': 'text/plain',
      },
      body: 'hello',
    })

    const response = await POST(request)

    expect(response.status).toBe(415)
    expect(response.headers.get('cache-control')).toBe('no-store')
  })

  it.each([null, [], 'text', 42])('rejects non-object JSON: %j', async (body) => {
    const response = await POST(jsonRequest(body))

    expect(response.status).toBe(400)
    await expect(response.json()).resolves.toEqual({ error: 'Invalid request.' })
  })

  it('rejects malformed JSON', async () => {
    const response = await POST(jsonRequest('{'))
    expect(response.status).toBe(400)
  })

  it('rejects missing and forged origins', async () => {
    const missingOrigin = jsonRequest(null)
    missingOrigin.headers.delete('origin')

    const forgedOrigin = jsonRequest(null, {
      Origin: 'https://evil.example',
      'X-Forwarded-Host': 'evil.example',
      'X-Forwarded-Proto': 'https',
    })

    expect((await POST(missingOrigin)).status).toBe(403)
    expect((await POST(forgedOrigin)).status).toBe(403)
  })

  it('enforces declared and streamed body limits', async () => {
    const declaredOversize = jsonRequest('{}', { 'Content-Length': '65537' })
    const streamedOversize = jsonRequest('x'.repeat(65537))

    expect((await POST(declaredOversize)).status).toBe(413)
    expect((await POST(streamedOversize)).status).toBe(413)
  })

  it('rejects invalid UTF-8 and control characters', async () => {
    const invalidUtf8 = new Request(API_URL, {
      method: 'POST',
      headers: {
        Origin: 'http://localhost:3000',
        'Content-Type': 'application/json',
      },
      body: new Uint8Array([0xc3, 0x28]),
    })
    const controlCharacter = jsonRequest({ ...VALID_CONTACT, name: 'Bad\nName' })

    expect((await POST(invalidUtf8)).status).toBe(400)
    expect((await POST(controlCharacter)).status).toBe(400)
  })

  it('silently accepts the honeypot without sending email', async () => {
    const send = configureDelivery()
    const response = await POST(
      jsonRequest({ ...VALID_CONTACT, website: 'bot.example' }),
    )

    expect(response.status).toBe(200)
    await expect(response.json()).resolves.toEqual({ ok: true })
    expect(send).not.toHaveBeenCalled()
  })

  it('returns 503 when Resend configuration is incomplete', async () => {
    const response = await POST(jsonRequest(VALID_CONTACT))

    expect(response.status).toBe(503)
    await expect(response.json()).resolves.toEqual({
      error: 'The email service is temporarily unavailable.',
    })
  })

  it('sends one email with fixed headers and returns no provider id', async () => {
    const send = configureDelivery()
    const response = await POST(jsonRequest(VALID_CONTACT))

    expect(response.status).toBe(200)
    await expect(response.json()).resolves.toEqual({ ok: true })
    expect(send).toHaveBeenCalledOnce()
    expect(send).toHaveBeenCalledWith(
      expect.objectContaining({
        from: 'Portfolio <contact@example.com>',
        to: 'owner@example.com',
        replyTo: 'tester@example.com',
        subject: 'New portfolio contact message',
      }),
    )
  })

  it('returns a generic 502 when the email provider rejects delivery', async () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    configureDelivery({ data: null, error: { name: 'validation_error' } })
    const response = await POST(jsonRequest(VALID_CONTACT))

    expect(response.status).toBe(502)
    expect(errorSpy).toHaveBeenCalledWith(
      'Resend rejected contact email:',
      'validation_error',
    )
    await expect(response.json()).resolves.toEqual({
      error: 'The message could not be sent. Please try again.',
    })
  })

  it('uses same-site Post/Redirect/Get for native form submissions', async () => {
    const failed = await POST(
      formRequest({ ...VALID_CONTACT, website: '' }),
    )
    const honeypot = await POST(
      formRequest({ ...VALID_CONTACT, website: 'bot.example' }),
    )

    expect(failed.status).toBe(303)
    expect(failed.headers.get('location')).toBe('/contact/error')
    expect(honeypot.status).toBe(303)
    expect(honeypot.headers.get('location')).toBe('/contact/success')
  })
})
