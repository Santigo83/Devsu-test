import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import PetApi from "../../../api/PetApi";
import PetPayload from "../../../api/PetPayload";

let pet;
let response;

Given("I have an existing pet to get by id", () => {
  pet = PetPayload.newPet("available");

  PetApi.createPet(pet).then((apiResponse) => {
    expect(apiResponse.status).to.eq(200);
  });
});

When("I send the get pet by id request", () => {
  PetApi.getPetById(pet.id).then((apiResponse) => {
    response = apiResponse;
  });
});

Then("the get pet by id response should match the pet", () => {
  expect(response.status).to.eq(200);
  expect(response.body.id).to.eq(pet.id);
  expect(response.body.name).to.eq(pet.name);
  expect(response.body.status).to.eq(pet.status);
});
