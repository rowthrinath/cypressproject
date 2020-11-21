/// <reference types="cypress" />

describe('test to check if the website UI works', () => {  
    // https://on.cypress.io/interacting-with-elements
    beforeEach(() => {
      cy.visit(Cypress.env("tplUrl"))
    });
  
    it('test contact form in testperfect limited website', () => {         
      cy.get('a').get('#navbarSupportedContent > ul > li:nth-child(3) > a').click()      
      cy.get('input').get('#name-form7-v').type('Rowthrinath')
      cy.get('input').get('#email-form7-v').type('info@testperfectlimited.com')
    })
  })
  