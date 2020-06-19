/// <reference types="cypress" />

describe('Release API',function(){
if('GET', function(){

    cy.request({
        method : 'GET',
        url : 'https://localhost:5002/api/release',
    }).then(function(response){
        expect(response.body).have.property('url');
    });

});
})

