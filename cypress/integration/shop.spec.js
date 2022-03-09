context("The Shop page", () => {
it("should display the page title", () => {
    cy.visit("/shop")
    cy.get("[data-cy=title]").contains("The Jellly Shop");
  })

it("should display the skin category title", () => {
    cy.get("[data-cy=skincolor]").contains("Purple");
  })

it("should get shop item image", () => {
    cy.get("[data-cy=shopItemImg]").should("be.visible");
  })

}); 