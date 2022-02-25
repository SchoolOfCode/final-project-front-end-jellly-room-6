/// <reference types="cypress" />
context("Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Should find landing page", () => {
    cy.get("h1").contains("JELLLY");
    cy.get("h2").contains(
      "The fun, free way to learn maths and improve financial literacy."
    );
    cy.get(".login").contains("Login");
    cy.get("div[class={titleLogo}]").find("img").should("be.visible");
  });
});
