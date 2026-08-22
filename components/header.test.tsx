import { act, render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Header } from './header'

vi.mock('@/lib/language-context', () => ({
  useLanguage: () => ({ language: 'en', setLanguage: vi.fn() }),
}))

vi.mock('@/lib/theme-context', () => ({
  useTheme: () => ({ theme: 'light', toggleTheme: vi.fn() }),
}))

describe('Header navigation', () => {
  let desktopMatches = false
  let desktopListener: ((event: MediaQueryListEvent) => void) | undefined

  beforeEach(() => {
    desktopMatches = false
    desktopListener = undefined
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: vi.fn((query: string) => ({
        matches: query === '(min-width: 1024px)' ? desktopMatches : false,
        media: query,
        onchange: null,
        addEventListener: (
          eventName: string,
          listener: (event: MediaQueryListEvent) => void,
        ) => {
          if (query === '(min-width: 1024px)' && eventName === 'change') {
            desktopListener = listener
          }
        },
        removeEventListener: vi.fn(),
        addListener: vi.fn(),
        removeListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    })
  })

  afterEach(() => {
    document.body.style.overflow = ''
    document.body.style.pointerEvents = ''
    document.body.removeAttribute('data-scroll-locked')
  })

  it('keeps the primary links in document order', () => {
    render(<Header />)

    const navigation = screen.getByRole('navigation', {
      name: 'Primary navigation',
    })
    expect(
      within(navigation)
        .getAllByRole('link')
        .map((link) => link.textContent),
    ).toEqual(['Projects', 'Skills', 'Experience', 'About', 'Contact'])
    expect(screen.getByRole('link', { name: 'Skip to main content' })).toHaveAttribute(
      'href',
      '#main-content',
    )
  })

  it('contains focus in the mobile menu and restores it after Escape', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const trigger = screen.getByRole('button', { name: 'Open navigation menu' })
    await user.click(trigger)

    const dialog = screen.getByRole('dialog', { name: 'Primary navigation' })
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible()
    await waitFor(() => expect(document.body).toHaveAttribute('data-scroll-locked'))
    expect(dialog).toContainElement(document.activeElement as HTMLElement)

    for (let index = 0; index < 10; index += 1) {
      await user.tab()
      expect(dialog).toContainElement(document.activeElement as HTMLElement)
    }

    await user.keyboard('{Escape}')

    await waitFor(() => {
      expect(
        screen.queryByRole('navigation', { name: 'Mobile navigation' }),
      ).not.toBeInTheDocument()
      expect(document.body).not.toHaveAttribute('data-scroll-locked')
    })
    expect(trigger).toHaveFocus()
  })

  it('closes an open menu and releases scroll lock at the desktop breakpoint', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open navigation menu' }))
    await waitFor(() => expect(document.body).toHaveAttribute('data-scroll-locked'))

    act(() => {
      desktopMatches = true
      desktopListener?.({ matches: true } as MediaQueryListEvent)
    })

    await waitFor(() => {
      expect(
        screen.queryByRole('navigation', { name: 'Mobile navigation' }),
      ).not.toBeInTheDocument()
      expect(document.body).not.toHaveAttribute('data-scroll-locked')
    })
  })
})
