import readUsers from 'tests/cypress/fakes/readUser'
import signIn from 'tests/cypress/fakes/signIn'

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

    cy.intercept({ method: 'POST', url: `/auth/sign-in` }, req =>
      req.reply(signIn.response)
    ).as('sign-in')

    cy.intercept(
      { method: 'GET', url: `/users/${readUsers.request.id}` },
      req => req.reply(readUsers.response())
    ).as('users')

    cy.wait(['@users', '@sign-in']).debug()

    cy.dataCy('feedback').contains('Sucesso')
    cy.dataCy('feedback').contains(
      readUsers.response().user?.username as string
    )

    cy.dataCy('signInModal').should('not.exist')
  })
})
