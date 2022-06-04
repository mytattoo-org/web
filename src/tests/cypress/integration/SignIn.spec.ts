import readUsers from 'tests/fakes/readUser'
import signIn from 'tests/fakes/signIn'

describe('SignIn', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.dataCy('openSignInModal').click()
  })

  it('should be able to signIn', () => {
    cy.dataCy('usernameOrEmail').type(signIn.request.usernameOrEmail)
    cy.dataCy('password').type(signIn.request.password)

    cy.dataCy('passwordField eye').click()
    cy.get('#password[type="text"]')

    cy.dataCy('passwordField closedEye').click()
    cy.get('#password[type="password"]')

    cy.dataCy('signInSubmit').click()

    cy.intercept(
      { method: 'POST', url: `http://localhost:3001/auth/sign-in` },
      req => req.reply(signIn.response)
    ).as('sign-in')

    cy.intercept(
      {
        method: 'GET',
        url: `http://localhost:3001/users/${readUsers.request.id}`
      },
      req => req.reply(readUsers.response())
    ).as('users')

    cy.dataCy('feedback').contains('Sucesso')
    cy.dataCy('feedback').contains(
      readUsers.response().user?.username as string
    )

    cy.dataCy('signInModal').should('not.exist')
  })
})
