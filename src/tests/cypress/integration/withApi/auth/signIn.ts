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

    cy.get('html').contains('Sucesso')
    cy.get('html').contains(signIn.request.usernameOrEmail)
  })
})
