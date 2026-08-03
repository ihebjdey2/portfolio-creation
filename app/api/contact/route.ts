import { NextResponse } from 'next/server'
import { getResendClient } from '@/lib/resend'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const DEFAULT_RECIPIENT = 'ihebjdey2@gmail.com'
const DEFAULT_SENDER = 'Portfolio Contact <onboarding@resend.dev>'

type ContactRequest = {
  name?: unknown
  email?: unknown
  message?: unknown
  website?: unknown
}

function cleanString(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

export async function POST(request: Request) {
  let body: ContactRequest

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const name = cleanString(body.name)
  const email = cleanString(body.email).toLowerCase()
  const message = cleanString(body.message)
  const website = cleanString(body.website)

  if (website) {
    return NextResponse.json({ ok: true })
  }

  if (
    name.length < 2 ||
    name.length > 100 ||
    !EMAIL_PATTERN.test(email) ||
    email.length > 254 ||
    message.length < 10 ||
    message.length > 5000
  ) {
    return NextResponse.json(
      { error: 'Please provide a valid name, email address, and message.' },
      { status: 400 },
    )
  }

  try {
    const { data, error } = await getResendClient().emails.send({
      from: process.env.CONTACT_FROM_EMAIL || DEFAULT_SENDER,
      to: process.env.CONTACT_TO_EMAIL || DEFAULT_RECIPIENT,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
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
      return NextResponse.json(
        { error: 'The message could not be sent. Please try again.' },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true, id: data?.id })
  } catch (error) {
    console.error(
      'Contact email failed:',
      error instanceof Error ? error.message : 'Unknown error',
    )
    return NextResponse.json(
      { error: 'The email service is not configured correctly.' },
      { status: 500 },
    )
  }
}
