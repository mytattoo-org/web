import Button from './index'

import Plus from 'components/atoms/Icon/icons/Plus'

import GlobalProvider from 'components/providers/GlobalProvider'

import { render, screen } from '@testing-library/react'

describe('Button', () => {
  it('should be able to render with icon', () => {
    render(
      <GlobalProvider>
        <Button icon={<Plus />} />
      </GlobalProvider>
    )

    const button = screen.getByRole('button')
    const icon = screen.getByRole('img')

    expect(button).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })
})
