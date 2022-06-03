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

export {}
