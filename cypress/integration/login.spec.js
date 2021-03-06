context("Logging in", () => {
  it("should login", () => {
    cy.login().then(() => {
      // Now run your test...
      cy.request("/api/auth/me").then(({ body: user }) => {
        expect(user.email).to.equal(Cypress.env("auth0Username"));
      });
      cy.visit("/profile");
    });
  });
});
