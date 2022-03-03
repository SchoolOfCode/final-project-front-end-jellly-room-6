context("Login", () => {
  it("should successfully log into our app", () => {
    cy.login().then((resp) => {
      // User is now logged in similar to https://github.com/auth0/nextjs-auth0
      cy.visit("http://localhost:3000/profile");
    });
  });
});
