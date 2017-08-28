const ngtools = require("@ngtools/webpack")
const webpackMerge = require("webpack-merge")
const commonPartial = require("./webpack/webpack.common")
const devPartial = require("./webpack/webpack.dev")
const prodPartial = require("./webpack/webpack.prod")
const testPartial = require("./webpack/webpack.test")
const { getAotPlugin } = require("./webpack/webpack.aot")

module.exports = function (options, webpackOptions) {
  options = options || {}

  console.log(`Running build for ${options.client ? "client" : "test"} with ${options.aot ? "AoT" : "JiT"} compilation`)

  let clientConfig = webpackMerge(commonPartial, {
    entry: options.aot ? {
      "main": "./src/main.ts",
      "polyfills": "./src/polyfills.ts",
      "styles": "./src/styles.css",
      "webworker": "./src/main.worker.aot.ts"
    } : commonPartial.entry,

    plugins: [
      getAotPlugin("client", !!options.aot)
    ]
  })

  let testConfig = webpackMerge(commonPartial, testPartial, {
    plugins: [
      getAotPlugin("test", !!options.aot)
    ]
  })

  if (options.aot) {
    clientConfig = webpackMerge(clientConfig, prodPartial)
  } else {
    clientConfig = webpackMerge(clientConfig, devPartial)
    testConfig = webpackMerge(testConfig, devPartial)
  }

  const configs = []
  if (options.client) {
    configs.push(clientConfig)
  } else if (options.test) {
    configs.push(testConfig)
  }

  return configs
}