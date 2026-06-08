import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CartPage from "../../pages/CartPage";
import CheckoutPage from "../../pages/CheckoutPage";
import InventoryPage from "../../pages/InventoryPage";

When("I add the first two products to the cart", () => {
  InventoryPage.addFirstTwoProductsToCart();
});

When("I go to the cart", () => {
  InventoryPage.goToCart();
  cy.url().should("include", "/cart.html");
});

When(
  "I complete checkout with first name {string}, last name {string} and postal code {string}",
  (firstName, lastName, postalCode) => {
    CartPage.goToCheckout();
    CheckoutPage.completeCheckout(firstName, lastName, postalCode);
  }
);

Then("I should see the successful order message", () => {
  CheckoutPage.completeHeader().should("have.text", "Thank you for your order!");
});
