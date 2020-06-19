
/// <reference types="cypress" />

context('Cypress.Commands', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/cypress-api')
    })



describe('Release API',function(){
it('GET', function(){

    cy.request({
        method : 'GET',
        url : 'https://localhost:5002/api/release',
    }).then(function(response){
        var data = response.body;
        expect(response.status).equals(200);
        cy.log (response.body);
        cy.log ("Request response",response.status);
        cy.log (data);

    });

});
});
});
