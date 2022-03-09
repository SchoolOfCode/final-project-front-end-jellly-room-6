/// <reference types="cypress" />
context("Home page", () => {
  it("should successfully log into our app and visit home page", () => {
    cy.login().then((resp) => {
      cy.visit("/home");
    });
  });
  it("should get scroller", () => {
    cy.get("[data-cy=scroller]").should("be.visible");
  })

  it("should display category name", () => {
    cy.get("[data-cy=category]").contains("Addition");
  })

  it("should get jar of beans image", () => {
    cy.get("[data-cy=jarofbeans]").should("be.visible");
  })

  it("should get jelly avatar image", () => {
    cy.get("[data-cy=jellyavatar]").should("be.visible");
  })

});

