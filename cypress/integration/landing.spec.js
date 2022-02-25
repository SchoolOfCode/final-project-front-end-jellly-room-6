/// <reference types="cypress" />
context("Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Should find landing page", () => {
    cy.get("h2").contains(
      "The fun, free way to learn maths and improve financial literacy."
    );
    cy.get("h1").contains("JELLLY");
    cy.get(".login").contains("Login");
    cy.get(".large").contains("Get Started");
    cy.get("div").find("img").should("be.visible");
  });
});
