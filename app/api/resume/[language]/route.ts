import { readFile } from 'node:fs/promises'
import path from 'node:path'

const resumes = {
  en: 'Jdey-Iheb-CV-English.pdf',
  fr: 'Jdey-Iheb-CV-French.pdf',
} as const

export const runtime = 'nodejs'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ language: string }> },
) {
  const { language } = await params
  const filename = resumes[language as keyof typeof resumes]

  if (!filename) {
    return Response.json({ error: 'Resume not found' }, { status: 404 })
  }

  try {
    const file = await readFile(path.join(process.cwd(), 'public', 'cv', filename))

    return new Response(file, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Cache-Control': 'public, max-age=3600, s-maxage=86400',
      },
    })
  } catch {
    return Response.json({ error: 'Resume file is unavailable' }, { status: 404 })
  }
}
