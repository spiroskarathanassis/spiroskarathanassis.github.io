const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "../../dist/website"),
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dist/website'
    : '/'
}