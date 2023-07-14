const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addVariant, e }) => {
  addVariant("ow", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => `.${e(`ow${separator}${className}`)}`);
  });
});
