
/// <reference types="cypress" />

describe('Release API',function(){
it('GET', function(){

    cy.request({
        method : 'GET',
        url : 'https://localhost:5002/api/release',
    }).then(function(response){
        var responseData = response.body;
        expect(response.status).equals(200);
        cy.log (response.body);
        cy.log ("Request response",response.status);
        cy.log ("Request response data",responseData);
        expect(responseData).to.deep.equal({'releaseid' : 1});

    });

});
});

