
/// <reference types="cypress" />

describe('Release API',function(){
it('GET', function(){

    cy.request({
        method : 'GET',
        url : 'https://localhost:5002/api/release',
    }).then(function(response){
        var responseData = response.body;
        expect(response.status).equals(200);
        console.log(responseData);
        expect(responseData[0]).to.deep.equal({
            releaseid: 1,
            'projectname': 'Fourth Project',
            'releasename': 'Release One',
            'releasestartdate' : '2020-05-25T00:00:00',
            'releaseenddate' : '2020-05-3T00:00:00' 

    });

});
});
});
