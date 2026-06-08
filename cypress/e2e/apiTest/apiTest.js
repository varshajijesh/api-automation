import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given ("Test first Request", ()=>{
    
  cy.request('GET', 'https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false') .then((response) => { 
    expect(response.status).to.equal(200); 
  
   cy.writeFile('cypress/fixtures/example.json', response.body);

    const body = response.body;

      expect(body.Name).to.eq("Carbon credits");

      expect(body.CanRelist).to.eq(true);
      
      const promo = body.Promotions.find((g) => g.Name === "Gallery");
       expect(promo).to.exist;
       expect(promo.Description)
        .to.include("Good position in category");
    cy.log ("PASSED");
  })
});