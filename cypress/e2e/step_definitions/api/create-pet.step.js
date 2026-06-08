import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import PetApi from "../../../api/PetApi";
import PetPayload from "../../../api/PetPayload";

let pet;
let response;

Given("I have a pet payload to create with status {string}", (status) => {
  pet = PetPayload.newPet(status);
});

When("I send the create pet request", () => {
  PetApi.createPet(pet).then((apiResponse) => {
    response = apiResponse;
  });
});

Then("the create pet response should be successful", () => {
  expect(response.status).to.eq(200);
  expect(response.body.id).to.eq(pet.id);
  expect(response.body.name).to.eq(pet.name);
  expect(response.body.status).to.eq(pet.status);
});
