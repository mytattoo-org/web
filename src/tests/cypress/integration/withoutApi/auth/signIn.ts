import readUsers from 'tests/fakes/readUser'
import signIn from 'tests/fakes/signIn'

describe('SignIn', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('nav button').contains('Entrar').click()
  })

  it('should be able to signIn', () => {
    cy.get('input[id="usernameOrEmail"]').type(signIn.request.usernameOrEmail)
    cy.get('input[id="password"]').type(signIn.request.password)

    cy.get('button[type="submit"]').contains('Entrar').click()

    const api = Cypress.env('api')

    cy.intercept(
      { method: 'POST', url: `${api}/auth/sign-in` },
      signIn.response
    ).as('sign-in')

    cy.intercept(
      {
        method: 'GET',
        url: `${api}/users/${readUsers.request.id}`
      },
      readUsers.response(true)
    ).as('users')

    cy.get('html').contains('Sucesso')
    cy.get('html').contains(readUsers.response(true).user?.username as string)
  })
})
