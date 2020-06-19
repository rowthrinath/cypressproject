
/// <reference types="cypress" />

describe('Release API',function(){
it('GET', function(){

    cy.request({
        method : 'GET',
        url : 'https://localhost:5002/api/release',
    }).then(function(response){
        var responseData = response.body;
        expect(response.status).equals(200);
        cy.log(responseData)
        expect(responseData).to.have.deep.equal({'releaseid': 1}, {'releasename':''},{ 'projectname': '' });

    });

});
});

