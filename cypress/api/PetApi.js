class PetApi {
  constructor() {
    this.baseUrl = "https://petstore.swagger.io/v2";
    this.headers = {
      api_key: "special-key",
    };
  }

  createPet(pet) {
    return cy.request({
      method: "POST",
      url: `${this.baseUrl}/pet`,
      headers: this.headers,
      body: pet,
    });
  }

  getPetById(petId) {
    return cy.request({
      method: "GET",
      url: `${this.baseUrl}/pet/${petId}`,
      headers: this.headers,
    });
  }

  updatePet(pet) {
    return cy.request({
      method: "PUT",
      url: `${this.baseUrl}/pet`,
      headers: this.headers,
      body: pet,
    });
  }

  getPetsByStatus(status) {
    return cy.request({
      method: "GET",
      url: `${this.baseUrl}/pet/findByStatus`,
      headers: this.headers,
      qs: {
        status,
      },
    });
  }
}

export default new PetApi();
