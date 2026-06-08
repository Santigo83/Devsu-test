class PetPayload {
  newPet(status) {
    const petId = Date.now();

    return {
      id: petId,
      category: {
        id: 1,
        name: "dogs",
      },
      name: `Cypress Pet ${petId}`,
      photoUrls: ["https://example.com/pet-photo.jpg"],
      tags: [
        {
          id: 1,
          name: "automation",
        },
      ],
      status,
    };
  }

  withName(pet, name) {
    return {
      ...pet,
      name: `${name} ${pet.id}`,
    };
  }
}

export default new PetPayload();
