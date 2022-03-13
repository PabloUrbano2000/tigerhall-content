declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Visits the homepage with the given parameters.
     * @example cy.visitHome('?keywords=test')
     */
    visitHome(params?: string): Chainable<null>;
    /**
     * Performs a search with the given parameters
     * and makes sure the results are rendered.
     * @param keywords keywords to search
     * @param success
     * @example cy.searchByParam('test', true)
     */
    searchByParam(keywords: string, success: boolean): Chainable<null>;
    /**
     * Types the given text into the search input and
     * perform a search, then makes sure the results are rendered.
     * @param keywords keywords to search
     * @param success
     */
    searchByInput(keywords: string, success: boolean): Chainable<null>;
    /**
     * Checks that the given quantity of content cards have been rendered.
     * @param quantity quantity of content cards to evaluate
     * @param success
     * @example cy.renderCards(4, true)
     */
    renderCards(quantity: number, success: boolean): Chainable<null>;
  }
}
