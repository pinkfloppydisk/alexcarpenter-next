/// <reference types="cypress" />

context('Work page', () => {
  beforeEach(() => {
    cy.visit('/work');
  });

  it('should render header', () => {
    cy.get('h1').should('be.visible');
  });
});
