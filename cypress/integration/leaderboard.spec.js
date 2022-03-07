/// <reference types="cypress" />
context("Leaderboard page", () => {
  it("should successfully visit leaderboard page", () => {
    cy.login().then((resp) => {
      cy.visit("/leaderboard");
      cy.get("h1").contains("Leaderboard");
    });
  });
});
