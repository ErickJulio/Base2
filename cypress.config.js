const { defineConfig } = require("cypress");
require('dotenv/config');


module.exports = defineConfig({

  defaultCommandTimeout: 10000,
  pageLoadTimeout: 30000,
  retries: 3,
  e2e: {
    setupNodeEvents(on, config) {
      (on); 


    },
    "password": process.env.PASSWORD,
    "user": process.env.USER,
    "url": process.env.URL

  },
});
