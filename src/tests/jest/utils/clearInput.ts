import { act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const clearInput = async (input: Element) => {
  const length = input.getAttribute('value')?.length

  await act(async () => {
    if (length)
      for (let x = 0; x < length; x++)
        await userEvent.type(input, '{backspace}')
  })

  expect(input).toHaveValue('')
}

export default clearInput
