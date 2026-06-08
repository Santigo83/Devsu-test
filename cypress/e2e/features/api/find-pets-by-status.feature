Feature: Find pets by status in Swagger Petstore

  As an API tester
  I want to find pets by status
  So that I can validate the pet search endpoint

  @api
  Scenario: Find an updated pet by status
    Given I have an updated pet with status "available"
    When I send the find pets by status request for "available"
    Then the find pets by status response should include the updated pet
