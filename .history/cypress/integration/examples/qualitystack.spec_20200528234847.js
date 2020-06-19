
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
        var data =JSON.parse(response);
        expect(response.status).equals(200);
        expect(data.to.have.any.keys('releaseid' , 1));
        expect(response.body).to.have.any.keys('releasename' , 1);
        expect(response.body).to.deep.equal({
            'releaseid' : 1 ,
            'releasename' : 'Release One'
        });

    });

});
});
});
