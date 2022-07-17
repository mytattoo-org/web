describe('AuthModal', () => {
  it('should be able to toggle filters', () => {
    cy.visit('/')

    cy.dataCy('filters').should('be.visible')
    cy.dataCy('toggleFilters').click()
    cy.dataCy('filters').should('not.exist')
    cy.dataCy('toggleFilters').click()
    cy.dataCy('filters').should('be.visible')
  })

  it('should be able to toggle suggestions', () => {
    cy.visit('/')

    cy.dataCy('suggestions').should('be.visible')
    cy.dataCy('toggleSuggestions').click()
    cy.dataCy('suggestions').should('not.exist')
    cy.dataCy('toggleSuggestions').click()
    cy.dataCy('suggestions').should('be.visible')
  })
})

export {}
