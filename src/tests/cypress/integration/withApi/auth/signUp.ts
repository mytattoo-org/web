import createUser from 'tests/fakes/createUser'

describe('SignUp', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('nav button').contains('Registrar').click()
  })

  it('should be able to register', () => {
    cy.get('input[id="username"]').type(createUser.request.username)
    cy.get('input[id="email"]').type(createUser.request.email)
    cy.get('input[id="password"]').type(createUser.request.password)
    cy.get('input[id="confirmPassword"]').type(createUser.request.password)

    cy.get('button[type="submit"]').contains('Cadastrar').click()

    cy.get('html').contains('Sucesso')
    cy.get('input[id="usernameOrEmail"]')
  })
})
