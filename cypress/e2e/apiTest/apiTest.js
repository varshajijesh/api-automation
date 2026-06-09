import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("Send a GET request to the endpoint", () => {

  const CATEGORY_ID = '6327';
  cy.request(
    'GET',
    `/v1/Categories/${CATEGORY_ID}/Details.json?catalogue=false`
  ).then((response) => {
    expect(response.status).to.equal(200);

    cy.writeFile('cypress/fixtures/example.json', response.body);
    cy.wrap(response).as("categoryResponse");

  });

  Then("Validate Name, CanRelist, Gallery promotion description", () => {

    cy.get("@categoryResponse").then((response) => {
      const { Name, CanRelist, Promotions } = response.body;

      //Acceptance criteria 1 : Validating Name
      expect(Name).to.eq("Carbon credits");

      //Acceptance criteria 2 : Validating CanRelist
      expect(CanRelist).to.eq(true);

       //Acceptance criteria 3 : Validating Gallery promotion description
      const promo = Promotions.find((g) => g.Name === "Gallery");
      expect(promo).to.exist;
      expect(promo.Description)
        .to.include("Good position in category");
    })
  });
});