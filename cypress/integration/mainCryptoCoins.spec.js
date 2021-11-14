/* eslint-disable no-undef */
/* eslint-disable jest/valid-expect */
// mainCryptoCoins.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Test main flow', () => {
  it('Visits the Weelo challenge', () => {
    cy.visit('/')
  })

  it('Check title page', () => {
    cy.title().should('include', 'Weelo Challenge')
  })

  it('Open detail coin', () => {
    cy.get(
      '[data-id="90"] > .MuiDataGrid-cell--withRenderer > div > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root'
    ).click()
  })
})
