import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import PetApi from "../../../api/PetApi";
import PetPayload from "../../../api/PetPayload";

let pet;
let response;

Given("I have an updated pet with status {string}", (status) => {
  pet = PetPayload.newPet(status);

  PetApi.createPet(pet).then((createResponse) => {
    expect(createResponse.status).to.eq(200);

    pet = PetPayload.withName(pet, "Updated Cypress Pet");
    return PetApi.updatePet(pet);
  }).then((updateResponse) => {
    expect(updateResponse.status).to.eq(200);
  });
});

When("I send the find pets by status request for {string}", (status) => {
  PetApi.getPetsByStatus(status).then((apiResponse) => {
    response = apiResponse;
  });
});

Then("the find pets by status response should include the updated pet", () => {
  expect(response.status).to.eq(200);
  expect(response.body).to.be.an("array");

  const updatedPet = response.body.find((item) => item.id === pet.id);

  expect(updatedPet).to.exist;
  expect(updatedPet.name).to.eq(pet.name);
  expect(updatedPet.status).to.eq(pet.status);
});
