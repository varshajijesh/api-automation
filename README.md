# Cypress API Test - Carbon Credits

## Overview
This project automates validation of a public API using Cypress.

API under test:
https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false
---

## Acceptance Criteria Validated

1. Name = "Carbon credits"
2. CanRelist = true
3. Promotions array contains:
   - Name = "Gallery"
   - Description contains "Good position in category"
---

## Tech Stack
- Cypress - version 15.7.0
- JavaScript (Node.js)
---

## How to Run

### Install dependencies 
npm init -y  - This creates a package.json file.
npm install cypress --save-dev - install cypress
npm install cypress-cucumber-preprocessor --save-dev - install cucumber

### Run tests (headless)
npm test

### Open Cypress UI
npx cypress open
---

## Test Approach

- Uses `cy.request()` for API validation
- Validates HTTP status code
- Extracts JSON response body
- Uses array `.find()` for Promotions validation
- Clean assertions per acceptance criteria
