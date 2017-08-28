module.exports = function (config) {
  var testWebpackConfig = require("./webpack.config.js")({ test: true, aot: false })

  var configuration = {
    basePath: "",
    frameworks: ["jasmine"],
    exclude: [],
    client: {
      captureConsole: true,
      mocha: {
        bail: true
      }
    },
    files: [
      { pattern: "./spec-bundle.js", watched: false }
    ],
    proxies: {
      "/assets/": "/base/src/assets/"
    },
    preprocessors: { "./spec-bundle.js": ["coverage", "webpack", "sourcemap"] },
    webpack: testWebpackConfig,
    coverageReporter: {
      type: "in-memory"
    },
    remapCoverageReporter: {
      "text-summary": null,
      lcovonly: "./coverage/lcov.info",
      json: "./coverage/coverage.json",
      html: "./coverage/html",
    },
    webpackMiddleware: {
      noInfo: true,
      stats: {
        chunks: false
      }
    },
    reporters: ["coverage", "remap-coverage"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_WARN,
    autoWatch: false,
    browsers: [
      "PhantomJS"
    ],
    singleRun: true,
    captureTimeout: 10000
  }

  config.set(configuration)
}