context("Leaderboard page", () => {
  it("should successfully visit Leaderboard page", () => {
    cy.login().then((resp) => {
      cy.visit("/leaderboard");
    });
  });
});
