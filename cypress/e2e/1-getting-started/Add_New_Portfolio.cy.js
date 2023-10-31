
/// <reference types="cypress" />
import { qase } from 'cypress-qase-reporter/dist/mocha';


qase([5],
    
    
    it.only('Add new portfolio', () => {
      //Visit the website
    cy.visit('/');
    //Click on  تسجيل الدخول / تسجيل عضوية جديدة button
    cy.get('button').click();
    // Login Data
    cy.get('#id_user_identifier').type('dev@gt.com.sa');
    cy.get('#id_password').type('q9qcvzssqr');
    //Click on Sbmit Button
    cy.get('#submit').click();
    //Click on ادارة البيانات
    cy.get('.MuiList-padding > :nth-child(3)').click();
    //Click on ادارة المحافظ
    cy.get('[href="/dashboard/data-management/portfolios"] > .MuiListItem-root > .MuiTypography-root').click();
    // Click on اضافة محفظة جديدة 
    cy.get('.MuiButtonBase-root > .MuiTypography-root').click();
    //Insert اسم المحفظة 
    cy.get('.MuiInputBase-input').type("Automated_Portfolio10");
    // Select  مدير المحفظة
    cy.get('.rtl-1d98x2t').click();
    cy.get('#react-select-2-option-0').click();
    //Click on انشاء المحفظة 
    cy.get('.rtl-15jcc4p > .MuiButtonBase-root').click();
    // Rest of your test logic
  }));