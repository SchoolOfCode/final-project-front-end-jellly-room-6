context("Profile page", () => {
  it("should successfully visit profile page", () => {
    cy.login().then((resp) => {
      cy.visit("/profile");
    });
  });
});
