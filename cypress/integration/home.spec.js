/// <reference types="cypress" />
context("Home page", () => {
  it("should successfully log into our app and visit home page", () => {
    cy.login().then((resp) => {
      cy.visit("/home");
    });
  });
});
