/// <reference types="cypress" />
/// <reference types="../support/index" />
// ***********************************************

describe("Structure", () => {
  it("should have a form and search input", () => {
    cy.visitHome();

    // The new page should contain an h1 with "Search"
    cy.get("h1").contains("Search");

    // Check the existence of the search form and inner input
    cy.get("form[role=search]").find("input[name=search]").should("exist");
  });
});

describe("Semantic HTML", () => {
  it("should have basic semantic HTML elements", () => {
    cy.visitHome();

    cy.get("h1").should("exist");
    cy.get("h2").should("exist");
    cy.get("h3").should("exist");
    cy.get("header").should("exist");
    cy.get("main").should("exist");
    cy.get("section").should("exist");
    cy.get("article").should("exist");
  });
});

describe("Search by URL", () => {
  it("should get results with no ?keywords param", () => {
    cy.visitHome();

    // The search input is still empty
    cy.get("input[name=search]").should("not.have.value");

    // The URL has no ?keywords param
    cy.url().should("not.include", "?keywords=");

    // More than 4 content cards have been rendered
    cy.renderCards(4, true);
  });

  it("should get results with a word as ?keywords param", () => {
    cy.searchByParam("test", true);
  });

  it("should get results with a phrase as ?keywords param", () => {
    cy.searchByParam("how+to", true);
  });

  it("should get results with numbers as ?keywords param", () => {
    cy.searchByParam("100", true);
  });

  it("should get no results with crazy ?keywords param", () => {
    cy.searchByParam(
      "das+asgdsgasg+gf+sdg+dsf54gdf+g54dsf5+g4dsf+g54dsfg5+4dsgf+54gd+f",
      false
    );
  });
});

describe("Search by Input", () => {
  it("should get results with no Value", () => {
    // Start from the index page
    cy.visitHome();

    // The search input is still empty
    cy.get("input[name=search]").should("not.have.value");

    // The URL has no value on ?keywords param
    cy.url().should("not.include", "?keywords=");

    // More than 4 content cards have been rendered
    cy.renderCards(4, true);
  });

  it("should get results with a word as Value", () => {
    cy.searchByInput("test", true);
  });

  it("should get results with a phrase as Value", () => {
    cy.searchByInput("how to", true);
  });

  it("should get results with numbers as Value", () => {
    cy.searchByInput("100", true);
  });

  it("should get no results with crazy Value", () => {
    cy.searchByInput(
      "das asgdsgasg gf sdg dsf54gdf g54dsf5 g4dsf g54dsfg5 4dsgf 54gd f",
      false
    );
  });
});
