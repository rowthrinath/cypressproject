
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
        expect(response.body).to.have.any.keys('releaseid': 1,
        'projectname' : 'Fourth Project',
        'releasename' : 'Release One',
        'releasestartdate' : '2020-05-25T00:00:00',
        'releaseenddate' : '2020-05-31T00:00:00')
        
        // expect(response.body).to.deep.contains({
        //     'releaseid' : 1
        // });
    });

});
})
})
