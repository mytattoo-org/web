import { useSignUp } from './logic'

import { signUpSchema } from './schema'

import GlobalProvider from 'components/providers/GlobalProvider'

import hasInputError from 'tests/jest/utils/hasInputError'
import typeAndVerify from 'tests/jest/utils/typeAndVerify'

import SignUp from '.'
import '@testing-library/jest-dom'
import { act, render, screen } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import userEvent from '@testing-library/user-event'
import * as React from 'react'

const fakeEmail = 'example@example.com'
const fakePassword = 'Password@1234'
const fakeUsername = 'username'

const fillForm = async () => {
  const confirmPasswordInput = screen.getByLabelText(/Confirmar senha/i)

  const emailInput = screen.getByRole('textbox', { name: 'E-mail' })
  const passwordInput = screen.getByLabelText('Senha')
  const usernameInput = screen.getByRole('textbox', {
    name: 'Nome de usuário'
  })

  await typeAndVerify(emailInput, fakeEmail)
  await typeAndVerify(usernameInput, fakeUsername)
  await typeAndVerify(passwordInput, fakePassword)
  await typeAndVerify(confirmPasswordInput, fakePassword)

  return { confirmPasswordInput, emailInput, passwordInput, usernameInput }
}

describe('useSignUp', () => {
  it('should has enabledButton disabled by default', () => {
    const { result } = renderHook(() => useSignUp(), {
      wrapper: GlobalProvider
    })

    expect(result.current.enableSubmit).toBe(false)
  })
})

describe('SignUp', () => {
  beforeEach(() => {
    render(
      <GlobalProvider>
        <SignUp />
      </GlobalProvider>
    )
  })

  describe('Submit Button', () => {
    it('should be disabled by default', () => {
      const signUpButton = screen.getByRole('button', { name: 'Cadastrar' })

      expect(signUpButton).toBeDisabled()
    })

    it('should be disabled when has an error and enable when dont', async () => {
      const { passwordInput } = await fillForm()

      const signUpButton = screen.getByRole('button', { name: 'Cadastrar' })

      expect(signUpButton).toBeEnabled()

      await act(async () => {
        await userEvent.type(passwordInput, '@')
      })

      expect(signUpButton).toBeDisabled()
    })
  })

  describe('Username', () => {
    let usernameInput: Element

    beforeEach(() => {
      usernameInput = screen.getByRole('textbox', { name: 'Nome de usuário' })
    })

    it(`should not be less than ${signUpSchema.username.min.value} characters`, async () => {
      await hasInputError({
        testValue: 'x',
        name: 'username',
        input: usernameInput,
        error: signUpSchema.username.min.error
      })
    })

    it(`should not be greater than ${signUpSchema.username.max.value} characters`, async () => {
      await hasInputError({
        name: 'username',
        input: usernameInput,
        error: signUpSchema.username.max.error,
        testValue: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
      })
    })

    it(`should match regex ${signUpSchema.username.matches.value}`, async () => {
      await hasInputError({
        name: 'username',
        input: usernameInput,
        testValue: '@X1@#X1',
        error: signUpSchema.username.matches.error
      })
    })

    it(`should be required`, async () => {
      await hasInputError({
        name: 'username',
        input: usernameInput,
        testingRequired: true,
        error: signUpSchema.username.required.error
      })
    })
  })

  describe('E-mail', () => {
    let emailInput: Element

    beforeEach(() => {
      emailInput = screen.getByRole('textbox', { name: 'E-mail' })
    })

    it(`should match regex ${signUpSchema.email.matches.value}`, async () => {
      await hasInputError({
        name: 'email',
        input: emailInput,
        testValue: 'xxxxxxx',
        error: signUpSchema.email.matches.error
      })
    })

    it(`should be required`, async () => {
      await hasInputError({
        name: 'email',
        input: emailInput,
        testingRequired: true,
        error: signUpSchema.email.required.error
      })
    })
  })

  describe('Password', () => {
    let passwordInput: Element

    beforeEach(() => {
      passwordInput = screen.getByLabelText('Senha')
    })

    it(`should not be less than ${signUpSchema.username.min.value} characters`, async () => {
      await hasInputError({
        testValue: 'x',
        name: 'password',
        input: passwordInput,
        error: signUpSchema.password.min.error
      })
    })

    it(`should not be greater than ${signUpSchema.password.max.value} characters`, async () => {
      await hasInputError({
        name: 'password',
        input: passwordInput,
        error: signUpSchema.password.max.error,
        testValue: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
      })
    })

    it(`should has a special character`, async () => {
      await hasInputError({
        name: 'password',
        input: passwordInput,
        testValue: 'xxxxxxxx',
        error: signUpSchema.password.matches[0].error
      })
    })

    it(`should has a uppercase character`, async () => {
      await hasInputError({
        name: 'password',
        input: passwordInput,
        testValue: 'xxxxxxx@',
        error: signUpSchema.password.matches[1].error
      })
    })

    it(`should has a lowercase character`, async () => {
      await hasInputError({
        name: 'password',
        input: passwordInput,
        testValue: 'XXXXXXX@',
        error: signUpSchema.password.matches[2].error
      })
    })

    it(`should has a number`, async () => {
      await hasInputError({
        name: 'password',
        testValue: 'xxxxxxX!',
        input: passwordInput,
        error: signUpSchema.password.matches[3].error
      })
    })

    it(`should be required`, async () => {
      await hasInputError({
        name: 'password',
        input: passwordInput,
        testingRequired: true,
        error: signUpSchema.password.required.error
      })
    })
  })

  describe('Confirm Password', () => {
    it(`should be equal password`, async () => {
      const passwordInput = screen.getByLabelText('Senha')
      const confirmPasswordInput = screen.getByLabelText('Confirmar senha')

      await typeAndVerify(passwordInput, 'Miguel@1234')

      await hasInputError({
        error: signUpSchema.confirmPassword.match.error,
        input: confirmPasswordInput,
        name: 'confirmPassword',
        testValue: 'Xxxxxx@1234'
      })
    })
  })
})
