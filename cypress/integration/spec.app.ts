describe("Structure", () => {
  it("should have the heading, form, and search input", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // The new page should contain an h1 with "Search"
    cy.get("h1").contains("Search");

    // Check the existence of the search form and inner input
    cy.get("form[role=search]")
      .should("exist")
      .within(($form) => {
        cy.get("input[name=search]").should("exist");
      });
  });
});
