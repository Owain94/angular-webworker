const path = require("path");

module.exports = {
  "devtool": "inline-source-map",
  "resolve": {
    "extensions": [
      ".ts",
      ".js"
    ],
    "modules": [
      "./node_modules"
    ]
  },
  "module": {
    "rules": [
      {
        "enforce": "post",
        "test": /\.(js|ts)$/,
        "loader": "istanbul-instrumenter-loader",
        "include": path.join(process.cwd(), "src"),
        "exclude": [
          /\.(e2e|spec)\.ts$/,
          /node_modules/
        ]
      }
    ]
  },
  "node": {
    "process": false
  }
}
