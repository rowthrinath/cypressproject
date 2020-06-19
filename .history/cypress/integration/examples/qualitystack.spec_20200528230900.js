import { ObjectSchema, versionSchemas } from '@cypress/schema-tools'

/// <reference types="cypress" />

context('Cypress.Commands', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/cypress-api')
    })


    Cypress.Commands.add('expectValidJsonWithMinimumLength', (url, length) => {
        return cy.request({
            method: 'GET',
            url: 'https://localhost:5002/api/release',
            followRedirect: false,
            headers: {
                'accept': 'application/json'
            }
        })
        .then((response) => {
            // Parse JSON the body.
            let body = JSON.parse(response.body);
            expect(response.status).to.eq(200);
            expect(response.headers['content-type']).to.eq('application/vnd.api+json');
            cy.log(body);
            expect(response.body).to.not.be.null;
            expect(body.data).to.have.length.of.at.least(length);
    
            // Ensure certain properties are present.
            body.data.forEach(function (item) {
                expect(item).to.have.all.keys('type', 'id', 'attributes', 'relationships', 'links');
                ['changed', 'created', 'default_langcode', 'langcode', 'moderation_state', 'nid', 'path', 'promote', 'revision_log', 'revision_timestamp', 'status', 'sticky', 'title', 'uuid', 'vid'].forEach((key) => {
                    expect(item['attributes']).to.have.property(key);
                });
            });
        });
    
    });



// describe('Release API',function(){
// it('GET', function(){

//     cy.request({
//         method : 'GET',
//         url : 'https://localhost:5002/api/release',
//     }).then(function(response){
//         expect(response.body).all.keys 
//         // expect(response.body).to.deep.contains({
//         //     'releaseid' : 1
//         // });
//     });

// });
// })
// })
