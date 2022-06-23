import createUser from 'tests/fakes/createUser'

describe('SignUp', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.dataCy('openSignUpModal').click()
  })

  it('should be able to register', () => {
    cy.dataCy('username').type(createUser.request.username)
    cy.dataCy('email').type(createUser.request.email)
    cy.dataCy('password').type(createUser.request.password)
    cy.dataCy('confirmPassword').type(createUser.request.password)

    cy.dataCy('signUpSubmit').click()

    const api = Cypress.env('api')

    cy.intercept({ method: 'POST', url: `${api}/users` }, req =>
      req.reply(createUser.response)
    ).as('createUser')

    cy.dataCy('feedback').contains('Sucesso')
    cy.dataCy('signUpModal').should('not.exist')
    cy.dataCy('signInModal').should('exist')
  })
})
