import type { IHasInputErrorParams } from './types'

import { act, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const hasInputError = async ({
  input,
  error,
  ariaName,
  testingValue
}: IHasInputErrorParams) => {
  await act(async () => {
    await userEvent.click(input)

    testingValue && (await userEvent.type(input, testingValue))

    await userEvent.tab()
  })

  const errorTooltipTrigger = screen.getByRole('button', {
    name: `${ariaName} tooltip trigger`
  })

  await act(async () => {
    await userEvent.hover(errorTooltipTrigger)
  })

  const errorTooltipMessage = screen.getByRole('alert', {
    name: `${ariaName} error message`
  })

  expect(errorTooltipMessage.innerHTML).toBe(error)
}

export default hasInputError
