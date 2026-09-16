import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { Header } from './header'

const setLanguage = vi.fn()
const toggleTheme = vi.fn()

vi.mock('@/lib/language-context', () => ({
  useLanguage: () => ({ language: 'en', setLanguage }),
}))

vi.mock('@/lib/theme-context', () => ({
  useTheme: () => ({ theme: 'light', toggleTheme }),
}))

describe('Header navigation', () => {
  beforeEach(() => {
    setLanguage.mockClear()
    toggleTheme.mockClear()
  })

  it('keeps the desktop primary links in document order', () => {
    render(<Header />)

    const navigation = screen.getByRole('navigation', { name: 'Primary navigation' })
    expect(within(navigation).getAllByRole('link').map((link) => link.textContent)).toEqual([
      'Home',
      'Projects',
      'Skills',
      'Experience',
      'About',
      'Contact',
    ])
    expect(within(navigation).getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'location')
    expect(screen.getByRole('link', { name: 'Skip to main content' })).toHaveAttribute('href', '#main-content')
  })

  it('provides a persistent five-item mobile navigation', () => {
    render(<Header />)

    const navigation = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(within(navigation).getAllByRole('link').map((link) => link.textContent)).toEqual([
      'Home',
      'Projects',
      'Experience',
      'About',
      'Contact',
    ])
  })

  it('exposes theme and language controls without opening a menu', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Switch to French' }))
    expect(setLanguage).toHaveBeenCalledWith('fr')

    const themeButtons = screen.getAllByRole('button', { name: 'Toggle color theme' })
    await user.click(themeButtons[0])
    expect(toggleTheme).toHaveBeenCalledTimes(1)
  })
})
