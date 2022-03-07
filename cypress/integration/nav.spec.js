// describe("Navbar", () => {
//   context(" Resolution", () => {
//     beforeEach(() => {
//       cy.viewport(1100, 700);
//     });
//   });

describe("When you visit home", () => {
  it("should navigate to home page", () => {
    cy.login().then((resp) => {
      cy.visit("http://localhost:3000/home");
    });
  });
  // describe("Nav", () => {
  //   it("should navigate to Shop page", () => {
  //     cy.get("[data-cy=nav-item]")
  //       .contains("http://localhost:3000/shop")
  //       .click();
  //     cy.url().should("include", "http://localhost:3000/shop");
  //   });
  // });
});
//});
