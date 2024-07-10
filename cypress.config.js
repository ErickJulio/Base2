const { defineConfig } = require("cypress");
require('dotenv/config');


module.exports = defineConfig({

  defaultCommandTimeout: 10000,
  pageLoadTimeout: 30000,
  retries: 3,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); 


    },
    "password": process.env.PASSWORD,
    "user": process.env.USER,
    "url": process.env.URL

  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/mocha",
    overwrite: false,
    html: true,
    json: false

  }
});
