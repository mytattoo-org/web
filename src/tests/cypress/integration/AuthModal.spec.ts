describe('AuthModal', () => {
  it('should be able to open SignIn modal', () => {
    cy.visit('/')

    cy.dataCy('openSignInModal').click()
    cy.dataCy('signInModal').should('exist')
  })

  it('should be able to navigate between SignIn and SignUp modal', () => {
    cy.dataCy('signUpButton').click()

    cy.dataCy('signInModal').should('not.exist')
    cy.dataCy('signUpModal').should('exist')

    cy.dataCy('arrow').click()

    cy.dataCy('signInModal').should('exist')
    cy.dataCy('signUpModal').should('not.exist')
  })

  it('should be able to close SignIn modal', () => {
    cy.dataCy('close').click()
    cy.dataCy('signInModal').should('not.exist')
  })

  it('should be able to open SignUp modal', () => {
    cy.dataCy('openSignUpModal').click()
    cy.dataCy('signUpModal').should('exist')
  })

  it('should be able to close SignUp modal', () => {
    cy.dataCy('close').click()
    cy.dataCy('signUpModal').should('not.exist')
  })
})

export {}
