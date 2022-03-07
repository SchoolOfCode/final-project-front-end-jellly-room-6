describe("Navbar", () => {
  context(" Resolution", () => {
    beforeEach(() => {
      cy.viewport(1800, 1300);
    });

    describe("When you visit home", () => {
      it("should navigate to home page", () => {
        cy.login().then((resp) => {
          cy.visit("http://localhost:3000/home");
        });
      });
      describe("Nav", () => {
        it("should navigate to Shop page", () => {
          cy.get("[data-cy=nav-item]").contains("Jelly Shop").click();
          cy.url().should("include", "http://localhost:3000/shop");
        });
      });
    });
  });
});
