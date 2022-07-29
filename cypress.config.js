const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "gumshx",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
