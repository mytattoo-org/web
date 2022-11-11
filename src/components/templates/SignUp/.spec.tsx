import hasInputError from '../../../tests/jest/utils/hasInputError'
import GlobalProvider from '../../providers/GlobalProvider'
import SignUp from './index'
import { signUpSchema } from './schemas'

import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

let emailInput: HTMLElement
let submitButton: HTMLElement
let passwordInput: HTMLElement
let usernameInput: HTMLElement
let confirmPasswordInput: HTMLElement
let unmountSignIn: () => void

describe('SignUp', () => {
  beforeEach(() => {
    const { unmount } = render(
      <GlobalProvider>
        <SignUp />
      </GlobalProvider>
    )

    unmountSignIn = unmount
    usernameInput = screen.getByRole('textbox', { name: 'Nome de usuário' })
    emailInput = screen.getByRole('textbox', { name: 'E-mail' })
    passwordInput = screen.getByLabelText('Senha')
    confirmPasswordInput = screen.getByLabelText('Confirmar senha')
    submitButton = screen.getByRole('button', { name: 'Cadastrar' })
  })

  afterEach(() => {
    unmountSignIn()
  })

  it('should be able to submit', async () => {
    await act(async () => {
      await userEvent.type(usernameInput, 'InSTinToS')
      await userEvent.type(passwordInput, 'InSTinToS@1234')
      await userEvent.type(emailInput, 'InSTinToS@gmail.com')
      await userEvent.type(confirmPasswordInput, 'InSTinToS@1234')
    })

    expect(usernameInput).toHaveValue('InSTinToS')
    expect(passwordInput).toHaveValue('InSTinToS@1234')
    expect(emailInput).toHaveValue('InSTinToS@gmail.com')
    expect(confirmPasswordInput).toHaveValue('InSTinToS@1234')

    userEvent.tab()

    await waitFor(() => expect(submitButton).toBeEnabled())
  })

  it('should has submit button starting disabled', () => {
    expect(submitButton).toBeDisabled()
  })

  it('should be able to show username errors', async () => {
    await hasInputError({
      input: usernameInput,
      ariaName: 'username',
      error: signUpSchema.username.required.error
    })

    await hasInputError({
      testingValue: 'In',
      input: usernameInput,
      ariaName: 'username',
      error: signUpSchema.username.min.error
    })

    await hasInputError({
      input: usernameInput,
      ariaName: 'username',
      testingValue: 'Lorem ipsum dolor si ',
      error: signUpSchema.username.max.error
    })

    await hasInputError({
      input: usernameInput,
      ariaName: 'username',
      testingValue: 'InSTinToS@',
      error: signUpSchema.username.matches.error
    })
  })

  it('should be able to show email errors', async () => {
    await hasInputError({
      ariaName: 'email',
      input: emailInput,
      error: signUpSchema.email.required.error
    })

    await hasInputError({
      ariaName: 'email',
      input: emailInput,
      error: signUpSchema.email.matches.error,
      testingValue: '*InSTinToS@gmail.com'
    })

    await hasInputError({
      ariaName: 'email',
      input: emailInput,
      error: signUpSchema.email.email.error,
      testingValue: 'InSTinToS'
    })
  })

  it('should be able to show password errors', async () => {
    await hasInputError({
      input: passwordInput,
      ariaName: 'password',
      error: signUpSchema.password.required.error
    })

    await hasInputError({
      input: passwordInput,
      ariaName: 'password',
      error: signUpSchema.password.max.error,
      testingValue: 'Lorem ipsum dolor si Lorem ipsum dolor si'
    })

    await hasInputError({
      testingValue: 'In',
      input: passwordInput,
      ariaName: 'password',
      error: signUpSchema.password.min.error
    })

    await hasInputError({
      input: passwordInput,
      ariaName: 'password',
      testingValue: 'InSTinToS1234',
      error: signUpSchema.password.matches[0].error
    })

    await hasInputError({
      input: passwordInput,
      ariaName: 'password',
      testingValue: 'instintos@1234',
      error: signUpSchema.password.matches[1].error
    })

    await hasInputError({
      input: passwordInput,
      ariaName: 'password',
      testingValue: 'INSTINTOS@1234',
      error: signUpSchema.password.matches[2].error
    })

    await hasInputError({
      input: passwordInput,
      ariaName: 'password',
      testingValue: 'InSTinToS@',
      error: signUpSchema.password.matches[3].error
    })
  })

  it('should be able to show confirm password errors', async () => {
    await hasInputError({
      input: confirmPasswordInput,
      ariaName: 'confirm password',
      error: signUpSchema.confirmPassword.required.error
    })

    userEvent.type(passwordInput, 'InSTinToS@1234')

    await hasInputError({
      input: confirmPasswordInput,
      testingValue: 'Miguel@1234',
      ariaName: 'confirm password',
      error: signUpSchema.confirmPassword.match.error
    })
  })
})
