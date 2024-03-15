const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {},
    viewportHeight: 1080,
    viewportWidth: 1920,
    baseUrl: "https://pokemonbattle.me/"
  },
});