const { AotPlugin } = require("@ngtools/webpack")
const { webpack } = require("webpack")

const tsConfig = {
  test: "./tsconfig.spec.json",
  client: "./tsconfig.app.json",
}

const tsConfigAot = {
  test: "./tsconfig.spec.json",
  client: "./tsconfig.app.aot.json",
}

function getAotPlugin(platform, aot) {
  return new AotPlugin({
    "tsConfigPath": aot ? tsConfigAot[platform] : tsConfig[platform],
    "skipCodeGeneration": !aot
  })
}

module.exports = {
  getAotPlugin
}
