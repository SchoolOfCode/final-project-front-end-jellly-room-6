/// <reference types="cypress" />
context("Home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  describe("Landing Page", () => {
    it("Should clear cashe", () => {
      cy.exec("npm cache clear --force");
    });
    it("Should find description", () => {
      cy.get("h2").contains(
        "The fun, free way to learn maths and improve financial literacy."
      );
    });
    it("Should find Name of App", () => {
      cy.get("h1").contains("JELLLY");
    });
    it("Should find visible image", () => {
      cy.get("div").find("img").should("be.visible");
    });

    it("Should find Login button", () => {
      cy.get("[data-cy=login]").contains("Login");
      cy.get("[data-cy=get-started]").contains("Get Started").click();
    });
  });
});
