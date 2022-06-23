import GlobalProvider from '../../providers/GlobalProvider'

import Tooltip from '.'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Tooltip', () => {
  it('should be able trigger and show message', async () => {
    const expectedMessage = 'Expected message'

    render(
      <GlobalProvider>
        <Tooltip
          ariaName='test'
          content={expectedMessage}
          trigger={<div>Trigger</div>}
        />
      </GlobalProvider>
    )

    const trigger = screen.getByRole('button', { name: 'test tooltip trigger' })

    await userEvent.hover(trigger)

    const content = screen.getByRole('alert', { name: 'Tooltip content' })

    expect(content.innerHTML).toBe(expectedMessage)
  })
})
