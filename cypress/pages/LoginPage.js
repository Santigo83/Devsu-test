class LoginPage {
  visit() {
    cy.visit("https://www.saucedemo.com/");
  }

  usernameInput() {
    return cy.get('[data-test="username"]');
  }

  passwordInput() {
    return cy.get('[data-test="password"]');
  }

  loginButton() {
    return cy.get('[data-test="login-button"]');
  }

  errorMessage() {
    return cy.get('[data-test="error"]');
  }

  login(username, password) {
    this.usernameInput().clear().type(username);
    this.passwordInput().clear().type(password, { log: false });
    this.loginButton().click();
  }
}

export default new LoginPage();
