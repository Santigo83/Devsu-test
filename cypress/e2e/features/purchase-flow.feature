Feature: Purchase flow in SauceDemo

  As a registered user
  I want to complete a purchase
  So that I can validate the checkout flow

  Background:
    Given I am on the SauceDemo login page

  @smoke
  Scenario: Successful login and complete checkout with valid credentials
    When I login with username "standard_user" and password "secret_sauce"
    Then I should be redirected to the inventory page
    When I add the first two products to the cart
    And I go to the cart
    And I complete checkout with first name "Juan", last name "Perez" and postal code "110111"
    Then I should see the successful order message

  @negative
  Scenario: Unsuccessful login with invalid credentials
    When I login with username "standard_user" and password "wrong_password"
    Then I should see an error message
