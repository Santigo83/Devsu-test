Feature: Create pet in Swagger Petstore

  As an API tester
  I want to create a pet
  So that I can validate the pet creation endpoint

  @api
  Scenario: Create a pet successfully
    Given I have a pet payload to create with status "available"
    When I send the create pet request
    Then the create pet response should be successful
