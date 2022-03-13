// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("visitHome", (params = "") => {
  cy.visit(`http://localhost:3000/${params}`);
});

Cypress.Commands.add("renderCards", (quantity = 1, success) => {
  // More than 4 content cards have been rendered
  if (success) {
    cy.get("article").should("have.length.greaterThan", quantity);
  } else {
    cy.get("article").should("not.exist");
  }
});

Cypress.Commands.add("searchByParam", (keywords, success) => {
  // Start from the index page with a ?keywords param
  cy.visitHome(`?keywords=${keywords}`);

  // The search input has the value of the ?keywords param
  cy.get("input[name=search]").should(
    "have.value",
    decodeURIComponent(keywords).replace(/\+/g, " ")
  );

  // The URL has the ?keywords param
  cy.url().should("include", `?keywords=${keywords}`);

  // More than 4 content cards have been rendered
  cy.renderCards(4, success);
});

Cypress.Commands.add("searchByInput", (keywords, success) => {
  // Start from the index page
  cy.visitHome();

  // Type keywords in the search input
  cy.get("form").within(() => {
    cy.get("input[name=search]").type(keywords, { delay: 50 });
  });

  cy.intercept("/graphql").as("contentRequest");
  cy.wait("@contentRequest").then((interception) => {
    const { response } = interception;
    if (success) {
      expect(response.body.data.contentCards.edges.length).to.be.greaterThan(2);
    }
  });

  // The URL has the ?keywords param
  cy.url().should(
    "include",
    `?keywords=${encodeURIComponent(keywords).replace(/%20/g, "+")}`
  );

  // More than 4 content cards have been rendered
  cy.renderCards(4, success);
});
