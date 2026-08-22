import { Resend } from 'resend'

type ContactEmailConfiguration = {
  client: Resend
  from: string
  to: string
}

export function getContactEmailConfiguration(): ContactEmailConfiguration | null {
  const apiKey = process.env.RESEND_API_KEY?.trim()
  const from = process.env.CONTACT_FROM_EMAIL?.trim()
  const to = process.env.CONTACT_TO_EMAIL?.trim()

  if (!apiKey || !from || !to) return null

  return {
    client: new Resend(apiKey),
    from,
    to,
  }
}
