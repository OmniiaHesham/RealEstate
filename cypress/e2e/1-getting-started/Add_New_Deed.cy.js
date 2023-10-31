/// <reference types="cypress" />
import { qase } from 'cypress-qase-reporter/dist/mocha';


  qase([7], 
    
    it('Adding a new deed', () => {
    cy.visit('/');
    cy.get('button').click();
    // Login Data
    cy.get('#id_user_identifier').type('dev@gt.com.sa');
    cy.get('#id_password').type('q9qcvzssqr');
    cy.get('#submit').click();
    //Click on ادارة البيانات
    cy.get(':nth-child(3) > .MuiBox-root > .MuiListItemText-root > .MuiTypography-root').click();
    // click on اضافة الصكوك
    cy.get('[href="/dashboard/data-management/add-deeds"] > .MuiListItem-root > .MuiTypography-root').click();
    // click on اضافة صك واحد
    cy.get('.rtl-1er1brk > a > .MuiButtonBase-root').click();
    //Deed data
    //رقم الهوية
    cy.get(':nth-child(1) > .rtl-1lqk5ed > .MuiInputBase-root > .MuiInputBase-input').type("1012577589");
    //رقم الصك 
    cy.get(':nth-child(2) > .rtl-1lqk5ed > .MuiInputBase-root > .MuiInputBase-input').type("910104051370");
    //Portfolio
    cy.get(':nth-child(3) > .rtl-1lqk5ed > .rtl-b62m3t-container > .rtl-brpdd2 > .rtl-1wy0on6 > .rtl-1d98x2t').click();
    cy.get('#react-select-2-option-5').click();
    //نوع الهوية
    cy.get(':nth-child(4) > .rtl-1lqk5ed > .rtl-b62m3t-container > .rtl-brpdd2 > .rtl-1wy0on6 > .rtl-1d98x2t').click();
    cy.get('#react-select-3-option-0').click();
    // Add Deed
    cy.get('.rtl-15jcc4p > .MuiButtonBase-root').click();
    // Make sure that the deed added successfully 
    // Rest of your test logic
  }));
