describe("tests", () => {
  it("checks if Rick and Morty page is loaded", () => {
    cy.visit("/home/1");
  });
  it("checks if Morty data is fetched", () => {
    cy.visit("/home/1");
    cy.contains("Morty Smith");
  });
  it("checks if Morty inner page renders correctly", () => {
    cy.visit("/home/1");
    cy.contains("Morty Smith").click();
    cy.contains("Name: Morty Smith");
  });
  it("checks if next page click in characters' page works correctly", () => {
    cy.visit("/home/1");
    cy.contains("Morty Smith").click();
    cy.contains(">").click();
    cy.contains("Name: Summer Smith");
  });
});
