import createUser from 'tests/fakes/createUser'
import signIn from 'tests/fakes/signIn'

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

    cy.get('[data-cy="feedback"]').contains('Sucesso')
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

    cy.get('form > button[data-cy="signIn"]').click()

    cy.get('[data-cy="feedback"]').contains('Sucesso')
    cy.get('[data-cy="feedback"]').contains(signIn.request.usernameOrEmail)
  })
})
