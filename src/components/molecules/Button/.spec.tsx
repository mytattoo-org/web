import GlobalProvider from '../../providers/GlobalProvider'
import Button from './index'

import { render, screen } from '@testing-library/react'

describe('Button', () => {
  it('should be able to render', () => {
    render(
      <GlobalProvider>
        <Button />
      </GlobalProvider>
    )

    const button = screen.getByRole('button')

    expect(button).toBeInTheDocument()
  })
})
