import createUser from 'tests/fakes/createUser'
import readUsers from 'tests/fakes/readUser'
import signIn from 'tests/fakes/signIn'

describe('AuthModal', () => {
  it('should be able to open SignIn modal', () => {
    cy.visit('/')

    cy.get('button[data-cy="signIn"]').click()
    cy.get('form[data-cy="signIn"]').should('exist')
  })

  it('should be able to navigate between SignIn and SignUp modal', () => {
    cy.get('form > [data-cy="signUp"]').click()
    cy.get('form[data-cy="signIn"]').should('not.exist')
    cy.get('form[data-cy="signUp"]').should('exist')

    cy.get('button[data-cy="back"]').click()
    cy.get('form[data-cy="signIn"]').should('exist')
    cy.get('form[data-cy="signUp"]').should('not.exist')
  })

  it('should be able to close SignIn modal', () => {
    cy.get('button[data-cy="close"]').click()
    cy.get('form[data-cy="signIn"]').should('not.exist')
  })

  it('should be able to open SignUp modal', () => {
    cy.visit('/')

    cy.get('button[data-cy="signUp"]').click()
    cy.get('form[data-cy="signUp"]').should('exist')
  })

  it('should be able to close SignUp modal', () => {
    cy.get('button[data-cy="close"]').click()
    cy.get('form[data-cy="signUp"]').should('not.exist')
  })
})

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
    cy.get('[data-cy="loading"]')

    const api = Cypress.env('api')

    cy.intercept(
      { method: 'POST', url: `${api}/auth/sign-in` },
      signIn.response
    ).as('sign-in')

    cy.intercept(
      { method: 'GET', url: `${api}/users/${readUsers.request.id}` },
      readUsers.response(true)
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

    cy.get('.loadingWrapper')

    const api = Cypress.env('api')

    cy.intercept(
      { method: 'POST', url: `${api}/users` },
      createUser.response
    ).as('createUser')

    cy.get('[data-cy="feedback"]').contains('Sucesso')
    cy.get('form[data-cy="signUp"]').should('not.exist')
    cy.get('form[data-cy="signIn"]').should('exist')
  })
})
