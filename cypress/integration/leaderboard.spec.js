/// <reference types="cypress" />

const users = [
  {
    user_id: 18,
    username: "jellylord",
    xp: 590,
    beans: 260,
  },
];
context("Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/leaderboard");
  });

  it("Should find leaderboard page", () => {
    cy.getCookie("accessToken").should("exist");
    cy.get("h1").contains("Leaderboard");
    // cy.get("div").find("p").contains("jellylord");
  });
});
