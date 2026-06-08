# Automatizacion Cypress

Proyecto de automatizacion con Cypress y Cucumber usando Gherkin.

Incluye pruebas E2E para SauceDemo y pruebas API para Swagger Petstore.

## Requisitos

- Node.js instalado
- npm instalado
- Acceso a internet para ejecutar pruebas contra:
  - `https://www.saucedemo.com/`
  - `https://petstore.swagger.io/v2`

## Instalacion

Desde la raiz del proyecto ejecutar:

```bash
npm install
```

## Ejecucion de pruebas

### Abrir Cypress en modo interactivo

```bash
npm run cy:open
```

### Ejecutar todas las pruebas

```bash
npm run cy:run
```

### Ejecutar pruebas smoke

Ejecuta los escenarios marcados con `@smoke`.

```bash
npm run cy:run:tags
```

### Ejecutar pruebas API

Ejecuta los escenarios marcados con `@api`.

```bash
npm run cy:run:api
```

## Estructura del proyecto

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

## Patron de diseno

### Pruebas E2E

Las pruebas web usan Page Object Model.

- `pages/`: contiene las acciones y elementos de cada pagina.
- `features/`: contiene los escenarios en Gherkin.
- `step_definitions/`: conecta los pasos Gherkin con los page objects.

### Pruebas API

Las pruebas API mantienen responsabilidades separadas.

- `PetApi.js`: contiene los metodos HTTP.
- `PetPayload.js`: construye los cuerpos de las solicitudes.
- `features/api/`: contiene un feature por caso de prueba.
- `step_definitions/api/`: contiene un archivo de steps por feature.

## Flujo API cubierto

Las pruebas API validan:

- Crear una mascota con `POST /pet`
- Consultar una mascota por id con `GET /pet/{petId}`
- Actualizar una mascota con `PUT /pet`
- Consultar mascotas por status con `GET /pet/findByStatus`

El id de la mascota se genera de forma dinamica usando `Date.now()` para evitar datos quemados y conflictos con ejecuciones anteriores.

## Artefactos de ejecucion

Cypress puede generar archivos locales durante la ejecucion, por ejemplo:

- screenshots
- videos
- downloads

Estos archivos pueden aparecer en carpetas como:

```text
cypress/screenshots
cypress/videos
cypress/downloads
```
