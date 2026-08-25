import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ProjectsSection } from '@/components/portfolio/projects-section'

function swipe(element: HTMLElement, from: number, to: number) {
  const dispatchPointerEvent = (type: 'pointerdown' | 'pointerup', clientX: number) => {
    const event = new Event(type, { bubbles: true, cancelable: true })
    Object.defineProperties(event, {
      clientX: { value: clientX },
      isPrimary: { value: true },
      pointerId: { value: 1 },
      pointerType: { value: 'touch' },
    })
    fireEvent(element, event)
  }

  dispatchPointerEvent('pointerdown', from)
  dispatchPointerEvent('pointerup', to)
}

describe('ProjectsSection mobile interaction', () => {
  it('moves to the next and previous project with horizontal pointer swipes', () => {
    render(<ProjectsSection language="en" />)

    const carousel = screen.getByRole('region', { name: 'Selected projects' })
    expect(screen.getByText(/^01 \/ \d+$/)).toBeInTheDocument()

    swipe(carousel, 240, 120)
    expect(screen.getByText(/^02 \/ \d+$/)).toBeInTheDocument()

    swipe(carousel, 120, 240)
    expect(screen.getByText(/^01 \/ \d+$/)).toBeInTheDocument()
  })

  it('ignores short horizontal movements', () => {
    render(<ProjectsSection language="en" />)

    const carousel = screen.getByRole('region', { name: 'Selected projects' })
    swipe(carousel, 180, 160)

    expect(screen.getByText(/^01 \/ \d+$/)).toBeInTheDocument()
  })
})
