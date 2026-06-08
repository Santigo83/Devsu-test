import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import PetApi from "../../../api/PetApi";
import PetPayload from "../../../api/PetPayload";

let pet;
let response;

Given("I have an existing pet to update", () => {
  pet = PetPayload.newPet("available");

  PetApi.createPet(pet).then((apiResponse) => {
    expect(apiResponse.status).to.eq(200);
  });
});

When("I send the update pet request with name {string}", (petName) => {
  pet = PetPayload.withName(pet, petName);

  PetApi.updatePet(pet).then((apiResponse) => {
    response = apiResponse;
  });
});

Then("the update pet response should be successful", () => {
  expect(response.status).to.eq(200);
  expect(response.body.id).to.eq(pet.id);
  expect(response.body.name).to.eq(pet.name);
  expect(response.body.status).to.eq(pet.status);
});
