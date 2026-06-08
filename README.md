# Cypress Automation Project | Proyecto de Automatización Cypress

## Overview | Descripción

**English**

Automation project built with Cypress, Cucumber, and Gherkin.

The project includes:

* End-to-End (E2E) tests for SauceDemo.
* API tests for Swagger Petstore.

**Español**

Proyecto de automatización desarrollado con Cypress, Cucumber y Gherkin.

Incluye:

* Pruebas End-to-End (E2E) para SauceDemo.
* Pruebas de API para Swagger Petstore.

---

## Requirements | Requisitos

**English**

* Node.js installed
* npm installed
* Internet access to execute tests against:

  * https://www.saucedemo.com/
  * https://petstore.swagger.io/v2

**Español**

* Node.js instalado
* npm instalado
* Acceso a internet para ejecutar pruebas contra:

  * https://www.saucedemo.com/
  * https://petstore.swagger.io/v2

---

## Installation | Instalación

From the project root execute:

Desde la raíz del proyecto ejecutar:

```bash
npm install
```

---

## Test Execution | Ejecución de Pruebas

### Open Cypress in Interactive Mode | Abrir Cypress en modo interactivo

```bash
npm run cy:open
```

### Run All Tests | Ejecutar todas las pruebas

```bash
npm run cy:run
```

### Run Smoke Tests | Ejecutar pruebas Smoke

Runs scenarios tagged with `@smoke`.

Ejecuta los escenarios marcados con `@smoke`.

```bash
npm run cy:run:tags
```

### Run API Tests | Ejecutar pruebas API

Runs scenarios tagged with `@api`.

Ejecuta los escenarios marcados con `@api`.

```bash
npm run cy:run:api
```

---

## Project Structure | Estructura del Proyecto

```text
cypress/
  api/
    PetApi.js
    PetPayload.js
  e2e/
    features/
      purchase-flow.feature
      api/
        create-pet.feature
        get-pet-by-id.feature
        update-pet.feature
        find-pets-by-status.feature
    step_definitions/
      login.step.js
      purchase.step.js
      api/
        create-pet.step.js
        get-pet-by-id.step.js
        update-pet.step.js
        find-pets-by-status.step.js
  pages/
    LoginPage.js
    InventoryPage.js
    CartPage.js
    CheckoutPage.js
  support/
    commands.js
    e2e.js
```

---

## Design Pattern | Patrón de Diseño

### E2E Tests | Pruebas E2E

The web automation follows the Page Object Model (POM) pattern.

La automatización web utiliza el patrón Page Object Model (POM).

* `pages/`: page elements and actions.
* `features/`: Gherkin scenarios.
* `step_definitions/`: connects Gherkin steps with page objects.

### API Tests | Pruebas API

API automation follows a separation of responsibilities approach.

La automatización API mantiene una separación clara de responsabilidades.

* `PetApi.js`: HTTP methods and endpoint interactions.
* `PetPayload.js`: request body builders.
* `features/api/`: feature files for each test scenario.
* `step_definitions/api/`: step definitions for each feature.

---

## API Test Coverage | Cobertura de Pruebas API

The API suite validates:

* Create a pet using `POST /pet`
* Retrieve a pet by ID using `GET /pet/{petId}`
* Update a pet using `PUT /pet`
* Find pets by status using `GET /pet/findByStatus`

La suite de API valida:

* Crear una mascota con `POST /pet`
* Consultar una mascota por ID con `GET /pet/{petId}`
* Actualizar una mascota con `PUT /pet`
* Consultar mascotas por estado con `GET /pet/findByStatus`

A dynamic pet ID is generated using `Date.now()` to avoid hardcoded data and execution conflicts.

Se genera un ID dinámico utilizando `Date.now()` para evitar datos quemados y conflictos entre ejecuciones.

---

## Execution Artifacts | Artefactos de Ejecución

Cypress may generate local artifacts during execution, including:

* Screenshots
* Videos
* Downloads

Cypress puede generar artefactos locales durante la ejecución, incluyendo:

* Capturas de pantalla
* Videos
* Descargas

```text
cypress/screenshots
cypress/videos
cypress/downloads
```
