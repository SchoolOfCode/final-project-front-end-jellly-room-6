context("Profile page", () => {
  it("should successfully visit profile page", () => {
    cy.login().then((resp) => {
      cy.visit("/profile");
    });
  });
  it("Should find visible logo", () => {
    cy.get("[data-cy=logo]").should("be.visible");
  });
  it("Should find username", () => {
    cy.get("[data-cy=username]").contains("user");
  });
  it("Should find user email", () => {
    cy.get("[data-cy=email]").contains("test@user.com");
  });

  it("Should find Statistics and Achievements of user", () => {
    cy.get("[data-cy=title]").contains("Statistics");
    cy.get("[data-cy=title]").contains("Achievements");
  });
});
