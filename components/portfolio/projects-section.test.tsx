import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProjectsSection } from '@/components/portfolio/projects-section'

describe('Portfolio overview', () => {
  it('keeps project previews accessible as links', () => {
    render(<ProjectsSection language="en" />)

    const previews = screen.getByLabelText('Animated project previews')
    expect(within(previews).getByRole('link', { name: /AgriDiagnose AI/ })).toHaveAttribute('href', '/projects/agridiagnose-ai')
    expect(within(previews).getAllByRole('link')).toHaveLength(5)
  })

  it('opens the skills matrix and changes its category', () => {
    render(<ProjectsSection language="en" />)

    fireEvent.click(screen.getByRole('button', { name: 'Explore skills matrix' }))
    const dialog = screen.getByRole('dialog', { name: 'Skills Matrix' })
    expect(within(dialog).getByRole('button', { name: 'AI / ML' })).toHaveAttribute('aria-pressed', 'true')

    fireEvent.click(within(dialog).getByRole('button', { name: 'Frontend' }))
    expect(within(dialog).getByRole('button', { name: 'Frontend' })).toHaveAttribute('aria-pressed', 'true')
    expect(within(dialog).getAllByText('Tailwind CSS')).toHaveLength(2)
  })
})
