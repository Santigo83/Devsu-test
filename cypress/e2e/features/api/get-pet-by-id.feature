Feature: Get pet by id in Swagger Petstore

  As an API tester
  I want to get a pet by id
  So that I can validate the pet query endpoint

  @api
  Scenario: Get a pet by id successfully
    Given I have an existing pet to get by id
    When I send the get pet by id request
    Then the get pet by id response should match the pet
