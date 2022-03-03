context("Logging in", () => {
  it("should successfully log in", () => {
    cy.login().then(() => {
      cy.visit("http://localhost:3000/profile");

      cy.request("/api/me").then(({ body: user }) => {
        expect(user).to.exist;
      });
    });
  });
});
