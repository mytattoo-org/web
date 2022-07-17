import GlobalProvider from 'components/providers/GlobalProvider'

import Button from '.'
import { mount } from 'cypress/react'

describe('Button', () => {
  it('should be able to enable and disable', () => {
    const expectedText = 'Test'

    mount(
      <GlobalProvider>
        <Button data-cy='Button'>{expectedText}</Button>
      </GlobalProvider>
    )

    cy.get('[data-cy=Button]').contains(expectedText)
  })
})

export {}
