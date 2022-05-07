import hasInputError from '../../../tests/jest/utils/hasInputError'
import GlobalProvider from '../../providers/GlobalProvider'
import SignIn from './index'

import { render, screen } from '@testing-library/react'

describe('SignIn', () => {
  beforeEach(() => {
    render(
      <GlobalProvider>
        <SignIn />
      </GlobalProvider>
    )
  })

  it('should be able to show username or email errors', async () => {
    const usernameOrEmailInput = screen.getByRole('textbox', {
      name: 'Nome de usuário ou E-mail'
    })

    await hasInputError({
      input: usernameOrEmailInput,
      ariaName: 'username or email',
      error: 'Informe um nome de usuário ou e-mail!'
    })
  })

  it('should be able to show password errors', async () => {
    const passwordInput = screen.getByLabelText('Senha')

    await hasInputError({
      input: passwordInput,
      ariaName: 'password',
      error: 'Informe uma senha!'
    })
  })
})
