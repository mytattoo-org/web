Cypress.Commands.add('signIn', () => {
  window.localStorage.setItem('@MyTattoo-token', 'fake-token')

  cy.intercept({ method: 'GET', url: '/user' }, { fixture: 'user.json' }).as(
    'user'
  )
})

Cypress.Commands.add('dataCy', value => {
  const finalQuery = value
    .split(' ')
    .map(value => `[data-cy=${value}] `)
    .reduce((prev, curr) => prev + curr)

  return cy.get(finalQuery)
})

export {}
