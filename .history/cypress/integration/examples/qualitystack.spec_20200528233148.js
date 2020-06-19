
/// <reference types='cypress' />

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
        expect(response.status).equals(200);
        expect(response.body).to.have.any.keys('releaseid')
        
        // expect(response.body).to.deep.contains({
        //     'releaseid' : 1
        // });
    });

});
})
})
