import createUser from 'tests/fakes/createUser'
import readUsers from 'tests/fakes/readUser'
import signIn from 'tests/fakes/signIn'

describe('SignIn', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('button[data-cy="signIn"]').click()
  })

  it('should be able to signIn', () => {
    cy.get('#usernameOrEmail').type(signIn.request.usernameOrEmail)
    cy.get('#password').type(signIn.request.password)

    cy.get('[data-cy="passwordField"] [data-cy="eye"]').click()
    cy.get('#password[type="text"]')

    cy.get('[data-cy="passwordField"] [data-cy="closedEye"]').click()
    cy.get('#password[type="password"]')

    cy.get('form > button[data-cy="signIn"]').click()

    cy.intercept(
      { method: 'POST', url: `http://localhost:3001/auth/sign-in` },
      req => req.reply(signIn.response)
    ).as('sign-in')

    cy.wait('@sign-in')

    cy.intercept(
      {
        method: 'GET',
        url: `http://localhost:3001/users/${readUsers.request.id}`
      },
      req => req.reply(readUsers.response(true))
    ).as('users')

    cy.get('[data-cy="feedback"]').contains('Sucesso')
    cy.get('[data-cy="feedback"]').contains(
      readUsers.response(true).user?.username as string
    )

    cy.get('form[data-cy="signIn"]').should('not.exist')
  })
})

describe('SignUp', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('button[data-cy="signUp"]').click()
  })

  it('should be able to register', () => {
    cy.get('#username').type(createUser.request.username)
    cy.get('#email').type(createUser.request.email)
    cy.get('#password').type(createUser.request.password)
    cy.get('#confirmPassword').type(createUser.request.password)

    cy.get('form button[data-cy="signUp"]').click()

    const api = Cypress.env('api')

    cy.intercept({ method: 'POST', url: `${api}/users` }, req =>
      req.reply(createUser.response)
    ).as('createUser')

    cy.get('[data-cy="feedback"]').contains('Sucesso')
    cy.get('form[data-cy="signUp"]').should('not.exist')
    cy.get('form[data-cy="signIn"]').should('exist')
  })
})
