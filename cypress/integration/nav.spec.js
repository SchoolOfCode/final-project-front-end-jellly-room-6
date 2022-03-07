describe("Navbar", () => {
  context(" Resolution", () => {
    beforeEach(() => {
      cy.viewport(1800, 1300);
    });

    describe("When you visit home", () => {
      it("should navigate to home page", () => {
        cy.visit("http://localhost:3000/home");
      });
      describe("Nav", () => {
        it("should navigate to Shop page", () => {
          cy.get("[data-cy=nav-item]").contains("Jelly Shop").click();
          cy.url().should("include", "http://localhost:3000/shop");
        });
      });
    });
  });

  context("Iphone 12 Pro resolution", () => {
    beforeEach(() => {
      cy.viewport(390, 840);
    });

    describe("When you visit home", () => {
      it("Should visit home page", () => {
        cy.visit("http://localhost:3000/home");
      });

      describe("Menu", () => {
        it("Should open the menu", () => {
          cy.get("[data-cy=nav-cntr]").click();
        });

        describe("nav", () => {
          it("Should navigate to About page", () => {
            cy.get("[data-cy=nav-cntr]").contains("Jelly Shop").click();
            cy.url().should("include", "http://localhost:3000/shop");
          });
        });
      });
    });
  });
});
