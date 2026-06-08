Feature: Update pet in Swagger Petstore

  As an API tester
  I want to update a pet
  So that I can validate the pet update endpoint

  @api
  Scenario: Update a pet name successfully
    Given I have an existing pet to update
    When I send the update pet request with name "Updated Cypress Pet"
    Then the update pet response should be successful
