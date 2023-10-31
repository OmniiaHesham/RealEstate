/// <reference types="cypress" />
import { qase } from 'cypress-qase-reporter/dist/mocha';


  qase([1], it.only('should be able to login to REP', () => {
    cy.visit('/');
    cy.get('button').click();
    // Login Data
    cy.get('#id_user_identifier').type('dev@gt.com.sa');
    cy.get('#id_password').type('q9qcvzssqr');
    cy.get('#submit').click();
  }));

 

  



// after(() => {
//   const runName = "Test";
//   qase.createRun(Cypress.e2e('QASE_TEST_RUN_ID'), runName);
// });
//     //cy.get(':nth-child(5) > .MuiButtonBase-root').click();


