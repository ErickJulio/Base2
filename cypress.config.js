const { defineConfig } = require("cypress");
require('dotenv/config');


module.exports = defineConfig({

  defaultCommandTimeout: 10000, // aumentar o tempo limite padrão
  pageLoadTimeout: 30000, // aumentar o tempo limite de carregamento da página, se necessário
  screenshotOnRunFailure: false,
  retries: 3,
  e2e: {
    setupNodeEvents(on, config) {


    },
    "password": process.env.PASSWORD,
    "user": process.env.USER,
    "url": process.env.URL

  },
});
