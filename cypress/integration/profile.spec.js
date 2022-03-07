context("Profile page", () => {
  it("should successfully visit profile page", () => {
    cy.login().then((resp) => {
      // User is now logged in similar to https://github.com/auth0/nextjs-auth0
      cy.visit("http://localhost:3000/profile");
    });
  });
});
