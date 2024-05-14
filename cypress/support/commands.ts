/// <reference types="cypress" />

Cypress.Commands.add("getBySel", (selector: string, ...args) => {
  return cy.get(`[data-testId=${selector}]`, ...args);
});
