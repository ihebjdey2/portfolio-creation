import { NextResponse } from 'next/server'
import { getContactEmailConfiguration } from '@/lib/resend'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const CONTROL_CHARACTER_PATTERN = /[\u0000-\u001f\u007f]/
const MAX_BODY_BYTES = 64 * 1024
const JSON_MEDIA_TYPE = 'application/json'
const FORM_MEDIA_TYPE = 'application/x-www-form-urlencoded'
const SITE_ORIGIN = 'https://ihebjdey.tn'
const RESPONSE_HEADERS = {
  'Cache-Control': 'no-store',
  Vary: 'Origin',
  'X-Content-Type-Options': 'nosniff',
}

type ContactRequest = Record<string, unknown>
type ResponseMode = 'json' | 'form'

type BodyReadResult =
  | { ok: true; value: string }
  | { ok: false; status: 400 | 413; error: string }

function cleanString(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function isRecord(value: unknown): value is ContactRequest {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function getMediaType(request: Request) {
  return request.headers.get('content-type')?.split(';', 1)[0]?.trim().toLowerCase()
}

function normalizeOrigin(value: string) {
  try {
    const url = new URL(value)
    return url.protocol === 'http:' || url.protocol === 'https:' ? url.origin : null
  } catch {
    return null
  }
}

function normalizeVercelOrigin(value: string | undefined) {
  if (!value) return null
  return normalizeOrigin(value.includes('://') ? value : `https://${value}`)
}

function isLoopbackHostname(hostname: string) {
  return hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '[::1]'
}

function isAllowedOrigin(request: Request) {
  const suppliedOrigin = normalizeOrigin(request.headers.get('origin') || '')
  if (!suppliedOrigin) return false

  const requestUrl = new URL(request.url)
  const suppliedUrl = new URL(suppliedOrigin)

  const configuredOrigins = (process.env.CONTACT_ALLOWED_ORIGINS || '')
    .split(',')
    .map((origin) => normalizeOrigin(origin.trim()))
    .filter((origin): origin is string => Boolean(origin))

  const allowedOrigins = [
    SITE_ORIGIN,
    normalizeVercelOrigin(process.env.VERCEL_URL),
    normalizeVercelOrigin(process.env.VERCEL_BRANCH_URL),
    normalizeVercelOrigin(process.env.VERCEL_PROJECT_PRODUCTION_URL),
    ...configuredOrigins,
  ].filter((origin): origin is string => Boolean(origin))

  if (
    process.env.NODE_ENV !== 'production' &&
    isLoopbackHostname(requestUrl.hostname) &&
    isLoopbackHostname(suppliedUrl.hostname) &&
    requestUrl.protocol === suppliedUrl.protocol &&
    requestUrl.port === suppliedUrl.port
  ) {
    return true
  }

  return new Set(allowedOrigins).has(suppliedOrigin)
}

async function readLimitedBody(request: Request): Promise<BodyReadResult> {
  const contentLength = request.headers.get('content-length')

  if (contentLength !== null) {
    const declaredLength = Number(contentLength)
    if (!Number.isSafeInteger(declaredLength) || declaredLength < 0) {
      return { ok: false, status: 400, error: 'Invalid request.' }
    }
    if (declaredLength > MAX_BODY_BYTES) {
      return { ok: false, status: 413, error: 'The request is too large.' }
    }
  }

  if (!request.body) return { ok: true, value: '' }

  const reader = request.body.getReader()
  const chunks: Uint8Array[] = []
  let totalBytes = 0

  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      totalBytes += value.byteLength
      if (totalBytes > MAX_BODY_BYTES) {
        await reader.cancel()
        return { ok: false, status: 413, error: 'The request is too large.' }
      }
      chunks.push(value)
    }
  } catch {
    return { ok: false, status: 400, error: 'Invalid request.' }
  }

  const bytes = new Uint8Array(totalBytes)
  let offset = 0
  for (const chunk of chunks) {
    bytes.set(chunk, offset)
    offset += chunk.byteLength
  }

  try {
    return {
      ok: true,
      value: new TextDecoder('utf-8', { fatal: true }).decode(bytes),
    }
  } catch {
    return { ok: false, status: 400, error: 'Invalid request.' }
  }
}

function jsonResponse(body: object, status = 200) {
  return NextResponse.json(body, { status, headers: RESPONSE_HEADERS })
}

function redirectResponse(pathname: string) {
  return new NextResponse(null, {
    status: 303,
    headers: {
      ...RESPONSE_HEADERS,
      Location: pathname,
    },
  })
}

function successResponse(mode: ResponseMode) {
  return mode === 'form'
    ? redirectResponse('/contact/success')
    : jsonResponse({ ok: true })
}

function errorResponse(
  mode: ResponseMode,
  status: number,
  error: string,
) {
  return mode === 'form'
    ? redirectResponse('/contact/error')
    : jsonResponse({ error }, status)
}

function parseBody(rawBody: string, mediaType: string): unknown {
  if (mediaType === JSON_MEDIA_TYPE) return JSON.parse(rawBody)
  return Object.fromEntries(new URLSearchParams(rawBody))
}

export async function POST(request: Request) {
  const mediaType = getMediaType(request)
  if (mediaType !== JSON_MEDIA_TYPE && mediaType !== FORM_MEDIA_TYPE) {
    return jsonResponse({ error: 'Unsupported content type.' }, 415)
  }

  const mode: ResponseMode = mediaType === FORM_MEDIA_TYPE ? 'form' : 'json'

  if (!isAllowedOrigin(request)) {
    return jsonResponse({ error: 'Forbidden.' }, 403)
  }

  const bodyResult = await readLimitedBody(request)
  if (!bodyResult.ok) {
    return errorResponse(mode, bodyResult.status, bodyResult.error)
  }

  let body: unknown
  try {
    body = parseBody(bodyResult.value, mediaType)
  } catch {
    return errorResponse(mode, 400, 'Invalid request.')
  }

  if (!isRecord(body)) {
    return errorResponse(mode, 400, 'Invalid request.')
  }

  const name = cleanString(body.name)
  const email = cleanString(body.email).toLowerCase()
  const message = cleanString(body.message)
  const website = cleanString(body.website)

  if (website) return successResponse(mode)

  if (
    name.length < 2 ||
    name.length > 100 ||
    CONTROL_CHARACTER_PATTERN.test(name) ||
    !EMAIL_PATTERN.test(email) ||
    email.length > 254 ||
    CONTROL_CHARACTER_PATTERN.test(email) ||
    message.length < 10 ||
    message.length > 5000
  ) {
    return errorResponse(
      mode,
      400,
      'Please provide a valid name, email address, and message.',
    )
  }

  const emailConfiguration = getContactEmailConfiguration()
  if (!emailConfiguration) {
    return errorResponse(
      mode,
      503,
      'The email service is temporarily unavailable.',
    )
  }

  try {
    const { error } = await emailConfiguration.client.emails.send({
      from: emailConfiguration.from,
      to: emailConfiguration.to,
      replyTo: email,
      subject: 'New portfolio contact message',
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    })

    if (error) {
      console.error('Resend rejected contact email:', error.name)
      return errorResponse(
        mode,
        502,
        'The message could not be sent. Please try again.',
      )
    }

    return successResponse(mode)
  } catch (error) {
    console.error(
      'Contact email failed:',
      error instanceof Error ? error.name : 'Unknown error',
    )
    return errorResponse(
      mode,
      502,
      'The message could not be sent. Please try again.',
    )
  }
}
