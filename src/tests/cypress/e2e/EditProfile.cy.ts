describe('EditProfile', () => {
  it('should be able to edit-profile', () => {
    const newUser = 'newUsername'
    const bio = 'This is my bio'
    const newPassword = 'Miguel@12345'
    const password = 'Miguel@1234'
    const shortBio = 'This is my short bio'
    const newEmail = 'newEmail@newEmail.com'

    cy.intercept(
      { method: 'PATCH', url: 'http://localhost:3001/users' },
      { fixture: 'updatedUser.json' }
    ).as('updatedUser')

    cy.visit('/')
    cy.signIn()
    cy.get('[data-cy="openSignInModal"] > span').should('not.exist')
    cy.dataCy('edit-profile').click()
    cy.url().should('be.equal', 'http://localhost:3000/edit-profile')

    cy.dataCy('artist').click()
    cy.dataCy('username').type(`{selectAll}{del}${newUser}`)
    cy.dataCy('email').type(`{selectAll}{del}${newEmail}`)
    cy.dataCy('new_password').type(newPassword).blur()
    cy.dataCy('confirmNewPassword').type(newPassword)
    cy.dataCy('short_bio').type(shortBio)
    cy.dataCy('bio').type(bio)

    cy.dataCy('save').click()
    cy.dataCy('passwordModal').should('exist')
    cy.dataCy('password').type(password)
    cy.dataCy('submitEditProfile').click()

    cy.dataCy('feedback').contains('Sucesso')

    cy.dataCy('bio').contains(bio)
    cy.dataCy('email').should('have.value', newEmail)
    cy.dataCy('new_password').should('have.value', '')
    cy.dataCy('username').should('have.value', newUser)
    cy.dataCy('short_bio').should('not.have.value')
    cy.dataCy('confirmNewPassword').should('not.exist')
  })

  it('should not be able to open edit-profile path if is not authenticated', () => {
    cy.visit('/edit-profile')

    cy.url().should('be.equal', 'http://localhost:3000/')
  })
})

export {}
