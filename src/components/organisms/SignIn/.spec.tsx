import hasInputError from '../../../tests/jest/utils/hasInputError'
import GlobalProvider from '../../providers/GlobalProvider'
import SignIn from './index'
import { signInSchema } from './schemas'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

let passwordInput: HTMLElement
let submitButton: HTMLElement
let usernameOrEmailInput: HTMLElement
let unmountSignIn: () => void

describe('SignIn', () => {
  beforeEach(() => {
    const { unmount } = render(
      <GlobalProvider>
        <SignIn />
      </GlobalProvider>
    )

    unmountSignIn = unmount
    passwordInput = screen.getByLabelText('Senha')
    submitButton = screen.getByRole('button', { name: 'Entrar' })
    usernameOrEmailInput = screen.getByRole('textbox', {
      name: 'Nome de usuário ou E-mail'
    })
  })

  afterEach(() => {
    unmountSignIn()
  })

  it('should be able to submit', async () => {
    await userEvent.type(usernameOrEmailInput, 'InSTinToS')
    await userEvent.type(passwordInput, 'InSTinToS@1234')

    expect(usernameOrEmailInput).toHaveValue('InSTinToS')
    expect(passwordInput).toHaveValue('InSTinToS@1234')
    expect(submitButton).toBeEnabled()
  })

  it('should has submit button starting disabled', () => {
    expect(submitButton).toBeDisabled()
  })

  it('should be able to show username or email errors', async () => {
    await hasInputError({
      input: usernameOrEmailInput,
      ariaName: 'username or email',
      error: signInSchema.usernameOrEmail.required.error
    })
  })

  it('should be able to show password errors', async () => {
    await hasInputError({
      input: passwordInput,
      ariaName: 'password',
      error: signInSchema.password.required.error
    })
  })
})
