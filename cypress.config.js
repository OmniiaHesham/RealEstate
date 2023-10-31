const { defineConfig } = require("cypress");

module.exports = defineConfig({
e2e: {
    baseUrl :"https://rep.dev.geotech.run/" ,
    viewportWidth : 1440,
    viewportHeight : 900, 
    "chromeWebSecurity": false ,
    "defaultCommandTimeout": 10000,
    "pageLoadTimeout": 30000,
    "requestTimeout": 30000,
    includeShadowDom: true,
   "reporter": "cypress-qase-reporter",
  
  "reporterOptions": {
    "apiToken": "6f6170e8d3436053690fc4f9323df9aa0b9514fa27d0110f0e4f2c7de44df1a0",
    "projectCode": "REP",
    //"runId": 4,     
    "logging": true,
    "debug": true, 
  },
  
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
