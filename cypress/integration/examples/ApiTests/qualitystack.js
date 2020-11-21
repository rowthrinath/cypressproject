/// <reference types="cypress" />

describe("Release API", function () {

  it("GET", function () {
    cy.request({
      method: "GET",
      url: Cypress.env("apiBaseUrl"),
    }).then(function (response) {
      var responseData = response.body;
      expect(response.status).equals(200);
      console.log(responseData);
      expect(responseData[0]).to.deep.equal({
        releaseid: 1,
        projectname: "Fourth Project",
        releasename: "Release One",
        releasestartdate: "2020-05-25T00:00:00",
        releaseenddate: "2020-05-31T00:00:00",
        description: "",
        releasecomments: "",
        attachments: "",
        createdby: "",
        modifiedby: "",
        createddate: "0001-01-01T00:00:30-00:01",
        modifieddate: "0001-01-01T00:00:30-00:01",
      });
    });
  });

  it("POST", function () {
    cy.request({
      method: "POST",
      url: "https://localhost:5002/api/release",
      body: {
        releaseid: Math.floor(Math.random() * 100),
        projectname: "1117 Project",
        releasename: "1117 One",
        releasestartdate: "2020-05-25T00:00:00",
        releaseenddate: "2020-05-31T00:00:00",
        description: "",
        releasecomments: "",
        attachments: "",
        createdby: "",
        modifiedby: "",
        createddate: "0001-01-01T00:00:30-00:01",
        modifieddate: "0001-01-01T00:00:30-00:01",
      }
    }).then(function (response) {
      expect(response.status).equals(201);
    });
  });
});
