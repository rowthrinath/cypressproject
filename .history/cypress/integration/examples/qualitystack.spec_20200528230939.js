import { ObjectSchema, versionSchemas } from '@cypress/schema-tools'

/// <reference types="cypress" />

context('Cypress.Commands', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/cypress-api')
    })


    describe('JSON:API tests.', () => {

        it('Agents JSON:API tests.', () => {
            cy.expectValidJsonWithMinimumLength('/jsonapi/node/agent?_format=json&include=field_agent_containers,field_agent_containers.field_cont_storage_conditions&page[limit]=18', 6);
            cy.expectValidJsonWithMinimumLength('/jsonapi/node/agent?_format=json&include=field_agent_containers,field_agent_containers.field_cont_storage_conditions&page[limit]=18&page[offset]=72', 0);
        });
        
        it('Episodes JSON:API tests.', () => {
            cy.expectValidJsonWithMinimumLength('/jsonapi/node/episode?fields[file--file]=uri,url&filter[field_episode_podcast.nid][value]=4976&include=field_episode_podcast,field_episode_audio,field_episode_audio.field_media_audio_file,field_episode_audio.thumbnail,field_image,field_image.image', 6);
        });
    
    });


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
