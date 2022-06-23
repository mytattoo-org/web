Cypress.Commands.add('dataCy', value => {
  const finalQuery = value
    .split(' ')
    .map(value => `[data-cy=${value}] `)
    .reduce((prev, curr) => prev + curr)

  return cy.get(finalQuery)
})

export {}
