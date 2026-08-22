import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AgriDiagnoseEvaluation } from './project-technical-details'

describe('AgriDiagnoseEvaluation', () => {
  it('exposes a keyboard-scrollable, labelled evaluation table', () => {
    render(<AgriDiagnoseEvaluation language="en" />)

    expect(
      screen.getByRole('region', { name: 'AgriDiagnose model evaluation results' }),
    ).toHaveAttribute('tabindex', '0')
    expect(
      screen.getByRole('table', { name: 'AgriDiagnose model evaluation results' }),
    ).toBeVisible()
    expect(screen.getAllByRole('columnheader')).toHaveLength(3)
    expect(screen.getAllByRole('rowheader')).toHaveLength(3)
  })
})
