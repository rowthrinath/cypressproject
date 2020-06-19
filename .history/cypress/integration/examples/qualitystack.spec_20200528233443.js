
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
        expect(response.body).to.have.all.keys('releaseid', 1);
        expect(response.body).to.have.all.keys('projectname', 'Fourth Project');
        expect(response.body).to.have.all.keys('releasename', 'Release One')
         
        // expect(response.body).to.deep.contains({
        //     'releaseid' : 1
        // });
    });

});
})
})
