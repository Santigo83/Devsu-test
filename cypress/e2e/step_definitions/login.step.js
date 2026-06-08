import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";
import InventoryPage from "../../pages/InventoryPage";

Given("I am on the SauceDemo login page", () => {
  LoginPage.visit();
});

When("I login with username {string} and password {string}", (username, password) => {
  LoginPage.login(username, password);
});

Then("I should be redirected to the inventory page", () => {
  cy.url().should("include", "/inventory.html");
  InventoryPage.title().should("be.visible");
});

Then("I should see an error message", () => {
  LoginPage.errorMessage().should("be.visible");
});
