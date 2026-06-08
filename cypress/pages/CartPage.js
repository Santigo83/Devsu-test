class CartPage {
  checkoutButton() {
    return cy.get('[data-test="checkout"]');
  }

  goToCheckout() {
    this.checkoutButton().click();
  }
}

export default new CartPage();
