class InventoryPage {
  title() {
    return cy.get(".title").contains("Products");
  }

  addToCartButtons() {
    return cy.get('[data-test^="add-to-cart"]');
  }

  cartButton() {
    return cy.get('[data-test="shopping-cart-link"]');
  }

  addFirstTwoProductsToCart() {
    this.addToCartButtons().eq(0).click();
    this.addToCartButtons().eq(0).click();
  }

  goToCart() {
    this.cartButton().click();
  }
}

export default new InventoryPage();
