import Tooltip from '../../molecules/Tooltip'
import GlobalProvider from '../../providers/GlobalProvider'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Tooltip', () => {
  it('should be able trigger and show message', async () => {
    render(
      <GlobalProvider>
        <Tooltip
          ariaName='test'
          trigger={<div>Trigger</div>}
          content={
            <div aria-label='message' role='alert'>
              Message
            </div>
          }
        />
      </GlobalProvider>
    )

    const trigger = screen.getByRole('button', { name: 'test tooltip trigger' })

    await userEvent.hover(trigger)

    const content = screen.getByRole('alert', { name: 'message' })

    expect(content.innerHTML).toBe('Message')
  })
})
