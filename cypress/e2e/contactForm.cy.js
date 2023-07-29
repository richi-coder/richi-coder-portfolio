describe('template spec', () => {
  // Using my github account
  beforeEach('first visit /contact', () => {
    cy.visit('/contact')
  })

  it('passes', () => {

    // cy.contains('Github', {
    //   timeout: 60000
    // }).click()
    cy.contains('Hello richiCoder!', {
      timeout: 120000
    })
    cy.contains("Let's go", {
      timeout: 30000
    }).click()

    // Full Name
    cy.checkBackAndTitle('Your full name')
    cy.typeInput('mister cypress testing')
    cy.clickNext()

    // Company
    cy.checkBackAndTitle('The company you work in')
    cy.typeInput('cypress testing')
    cy.clickNext()

    // Position at
    cy.checkBackAndTitle('Your position at cypress testing')
    cy.typeInput('testing developer')
    cy.clickNext()

    // Website
    cy.checkBackAndTitle('cypress testing website')
    cy.typeInput('cypress.io')
    cy.clickNext()

    // Location
    cy.checkBackAndTitle('cypress testing is located in')
    cy.typeInput('cypressLand')
    cy.clickNext()

    // Email
    cy.checkBackAndTitle('Your email at cypress testing')
    cy.typeInput('cypress@cypress.com')
    cy.clickNext()

    // Telephone
    cy.checkBackAndTitle('Your telephone (with prefix)')
    cy.typeInput('+16505551234')
    cy.clickNext()

    // How to contact
    cy.checkBackAndTitle('How should I contact you?')
    cy.typeInput('by Cypress Email')
    cy.clickNext()

    // When to contact
    cy.checkBackAndTitle('When should I contact you?')
    cy.typeInput('2023-08-05')
    cy.clickNext()

    // Telephone code
    cy.get('[data-cy="back-button"]', {
      timeout: 60000
    })
    cy.contains('Send code to my phone!').click()
    cy.contains('Sending code to your phone!')
    cy.contains(`Enter code sent to ${Cypress.env('FIREBASE_TELEPHONE')}`, {
      timeout: 120000
    })
    cy.get('[data-cy="tel_code"]', {
      timeout: 120000
    }).type(Cypress.env('FIREBASE_CODE'))
    cy.get('[data-cy="tel_code"]').should('have.value', Cypress.env('FIREBASE_CODE'))
    cy.contains('Succeeded!', {
      timeout: 60000
    })
    cy.contains('Thank you very much!')
    cy.contains('DOWNLOAD RESUME') 

  })
})