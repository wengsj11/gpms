const {
  override,
  fixBabelImports,
  disableEsLint,
  addWebpackAlias
} = require("customize-cra");
const path = require("path");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd", libraryDirectory: "es", style: 'css' // change importing css to less
  }),
  disableEsLint(),
  addWebpackAlias({
    [""]: path.resolve(__dirname, "src/")
  }),
);