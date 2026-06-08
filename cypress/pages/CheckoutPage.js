class CheckoutPage {
  firstNameInput() {
    return cy.get('[data-test="firstName"]');
  }

  lastNameInput() {
    return cy.get('[data-test="lastName"]');
  }

  postalCodeInput() {
    return cy.get('[data-test="postalCode"]');
  }

  continueButton() {
    return cy.get('[data-test="continue"]');
  }

  finishButton() {
    return cy.get('[data-test="finish"]');
  }

  completeHeader() {
    return cy.get('[data-test="complete-header"]');
  }

  fillInformation(firstName, lastName, postalCode) {
    this.firstNameInput().type(firstName);
    this.lastNameInput().type(lastName);
    this.postalCodeInput().type(postalCode);
  }

  continueCheckout() {
    this.continueButton().click();
  }

  finishCheckout() {
    this.finishButton().click();
  }

  completeCheckout(firstName, lastName, postalCode) {
    this.fillInformation(firstName, lastName, postalCode);
    this.continueCheckout();
    this.finishCheckout();
  }
}

export default new CheckoutPage();
