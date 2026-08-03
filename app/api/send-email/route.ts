import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { readFileSync } from 'fs'
import { resolve } from 'path'

function getApiKey(): string | undefined {
  // Try to get from process.env first
  if (process.env.RESEND_API_KEY) {
    return process.env.RESEND_API_KEY
  }

  // Try to read from .env.development.local
  try {
    const envPath = resolve(process.cwd(), '.env.development.local')
    const envContent = readFileSync(envPath, 'utf-8')
    const match = envContent.match(/RESEND_API_KEY=(['\"]?)(.+?)\1/)
    if (match && match[2]) {
      return match[2].trim()
    }
  } catch (err) {
    // File not found or other error, continue
  }

  // Try to read from /vercel/share/.env.project (Vercel project env)
  try {
    const projectEnvPath = '/vercel/share/.env.project'
    const envContent = readFileSync(projectEnvPath, 'utf-8')
    const match = envContent.match(/RESEND_API_KEY=(['\"]?)(.+?)\1/)
    if (match && match[2]) {
      return match[2].trim()
    }
  } catch (err) {
    // File not found or other error
  }

  return undefined
}

export async function POST(request: NextRequest) {
  try {
    const apiKey = getApiKey()
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const resend = new Resend(apiKey)
    const { name, email, message } = await request.json()

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email to yourself (portfolio owner)
    const result = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'ihebjdey2@gmail.com',
      replyTo: email,
      subject: `New Portfolio Contact: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    if (result.error) {
      return NextResponse.json(
        { error: result.error.message },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
