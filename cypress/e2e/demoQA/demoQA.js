import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";



Given ("Demo QA homepage", ()=>{

    cy.visit("https://demo.guru99.com/test/newtours/")
    cy.xpath("(//a[contains(text(),'Selenium')])[1]").click()
    cy.xpath("//a[text()='Radio & Checkbox Demo']").click()
    cy.get('input[value="Option 2"]').check().should('be.checked');
    cy.get('input[value="checkbox2"]').uncheck().should('not.be.checked');
    cy.get('input[value="checkbox2"]').check().should('be.checked');
    cy.get('input[type="checkbox"]').check(["checkbox1",]).should('be.checked');

})


