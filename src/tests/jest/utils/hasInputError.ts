import typeAndVerify from './typeAndVerify'

import { act, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

interface IHasInputErrorParams {
  name: string
  error: string
  input: Element
  testValue?: string
  testingRequired?: boolean
}

const hasInputError = async ({
  input,
  error,
  testValue,
  testingRequired
}: IHasInputErrorParams) => {
  await act(async () => {
    if (testValue)
      testingRequired
        ? await userEvent.click(input)
        : await typeAndVerify(input, testValue)
  })

  await act(async () => {
    await userEvent.keyboard('{Tab}')
  })

  await act(async () => {
    await userEvent.click(screen.getByRole(''))
  })

  expect(screen.getByRole('tooltip')).toHaveTextContent(error)
}

export default hasInputError
