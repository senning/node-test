var path = require("path");
var webpack = require("webpack");

module.exports = {
  context: path.join(__dirname, "views"),
  entry: "client",
  output: {
      path: path.join(__dirname, "views", "assets"),
      filename: "app.js"
  },
  module: {
      loaders: [
          { test: /\.jsx$/, loader: "jsx-loader?harmony"}
      ]
  },
  resolve: {
      // You can now require('file') instead of require('file.coffee')
      extensions: ["", ".js", ".jsx"],
      root: [path.join(__dirname, "views")],
      modulesDirectories: ["node_modules"]
  },
  devtool: "sourcemap"
}