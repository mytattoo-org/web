import { act } from '@testing-library/react-hooks'
import userEvent from '@testing-library/user-event'

const typeAndVerify = async (input: Element, value: string) => {
  await act(async () => {
    await userEvent.type(input, value)
  })

  expect(input).toHaveValue(value)
}

export default typeAndVerify
