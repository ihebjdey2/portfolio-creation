import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ContactSection } from './contact-section'

function contactResponse({
  ok,
  body,
  redirected = false,
}: {
  ok: boolean
  body: unknown
  redirected?: boolean
}) {
  return {
    ok,
    redirected,
    json: vi.fn().mockResolvedValue(body),
  } as unknown as Response
}

async function fillContactForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText('Name'), 'Synthetic Tester')
  await user.type(screen.getByLabelText('Email'), 'tester@example.com')
  await user.type(
    screen.getByLabelText('Message'),
    'This is a synthetic component test message.',
  )
}

describe('ContactSection', () => {
  const fetchMock = vi.fn<typeof fetch>()

  beforeEach(() => {
    vi.stubGlobal('fetch', fetchMock)
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('has a progressive-enhancement form target', () => {
    render(<ContactSection language="en" />)

    const form = screen.getByRole('form', { name: 'Contact form' })
    expect(form).toHaveAttribute('action', '/api/contact')
    expect(form).toHaveAttribute('method', 'post')
    expect(form).toHaveAttribute(
      'enctype',
      'application/x-www-form-urlencoded',
    )
  })

  it('clears fields only after an explicit JSON success result', async () => {
    const user = userEvent.setup()
    fetchMock.mockResolvedValue(
      contactResponse({ ok: true, body: { ok: true } }),
    )
    render(<ContactSection language="en" />)
    await fillContactForm(user)

    await user.click(screen.getByRole('button', { name: 'Send message' }))

    expect(await screen.findByText('Your message was sent successfully.')).toBeVisible()
    expect(screen.getByLabelText('Name')).toHaveValue('')
    expect(screen.getByLabelText('Email')).toHaveValue('')
    expect(screen.getByLabelText('Message')).toHaveValue('')
  })

  it('preserves fields when delivery fails', async () => {
    const user = userEvent.setup()
    fetchMock.mockResolvedValue(
      contactResponse({ ok: false, body: { error: 'Unavailable' } }),
    )
    render(<ContactSection language="en" />)
    await fillContactForm(user)

    await user.click(screen.getByRole('button', { name: 'Send message' }))

    expect(
      await screen.findByText('The message could not be sent. Please try again.'),
    ).toBeVisible()
    expect(screen.getByLabelText('Name')).toHaveValue('Synthetic Tester')
    expect(screen.getByLabelText('Email')).toHaveValue('tester@example.com')
    expect(screen.getByLabelText('Message')).toHaveValue(
      'This is a synthetic component test message.',
    )
  })

  it('rejects a redirected or non-JSON 200 response', async () => {
    const user = userEvent.setup()
    fetchMock.mockResolvedValue({
      ok: true,
      redirected: true,
      json: vi.fn().mockRejectedValue(new SyntaxError('HTML response')),
    } as unknown as Response)
    render(<ContactSection language="en" />)
    await fillContactForm(user)

    await user.click(screen.getByRole('button', { name: 'Send message' }))

    expect(
      await screen.findByText('The message could not be sent. Please try again.'),
    ).toBeVisible()
  })

  it('blocks concurrent duplicate submissions', async () => {
    const user = userEvent.setup()
    let resolveRequest: ((response: Response) => void) | undefined
    fetchMock.mockReturnValue(
      new Promise<Response>((resolve) => {
        resolveRequest = resolve
      }),
    )
    render(<ContactSection language="en" />)
    await fillContactForm(user)

    const form = screen.getByRole('form', { name: 'Contact form' })
    await user.click(screen.getByRole('button', { name: 'Send message' }))
    fireEvent.submit(form)

    expect(fetchMock).toHaveBeenCalledOnce()

    await act(async () => {
      resolveRequest?.(contactResponse({ ok: true, body: { ok: true } }))
    })
    await waitFor(() => expect(form).toHaveAttribute('aria-busy', 'false'))
  })
})
