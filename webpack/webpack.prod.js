const path = require("path")
const glob = require("glob")
const webpack = require("webpack")
const CompressionPlugin = require("compression-webpack-plugin")
const BrotliPlugin = require("brotli-webpack-plugin")
const PurifyPlugin = require("@angular-devkit/build-optimizer").PurifyPlugin
const OptimizeJsPlugin = require("optimize-js-plugin")

module.exports = {
  "module": {
    "rules": [
      {
        "test": /\.js$/,
        "use": [
          {
            "loader": "@angular-devkit/build-optimizer/webpack-loader",
            "options": {
              "sourceMap": false
            }
          }
        ]
      },
      {
        "test": /\.ts$/,
        "use": [
          {
            "loader": "@angular-devkit/build-optimizer/webpack-loader",
            "options": {
              "sourceMap": false
            }
          },
          "@ngtools/webpack"
        ]
      }
    ]
  },
  "plugins": [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new PurifyPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      "mangle": {
        "keep_fnames": true,
        "screw_ie8": true
      },
      "compress": {
        "warnings" : false,
        "conditionals": true,
        "unused": true,
        "comparisons": true,
        "sequences": true,
        "dead_code": true,
        "evaluate": true,
        "if_return": true,
        "join_vars": true,
        "negate_iife": false,
        "screw_ie8": true,
        "pure_getters": true
      },
      "comments": false
    }),
    new OptimizeJsPlugin({
      "sourceMap": false
    }),
    new CompressionPlugin({
      "asset": "[path].gz[query]",
      "algorithm": "gzip",
      "test": /\.(js|css|svg)$/,
      "threshold": 1024,
      "minRatio": 0.8
    }),
    new BrotliPlugin({
      "asset": "[path].br[query]",
      "test": /\.(js|css|svg)$/,
      "threshold": 1024,
      "minRatio": 0.8
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ]
}