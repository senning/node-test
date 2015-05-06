//Require webpack and path
var path = require("path");
var webpack = require("webpack");

//The webpack module
module.exports = {
  //Where to look
  context: path.join(__dirname, "views"),

  //The JS file which defines the client
  entry: "client",

  //Where to put the compiled file
  output: {
      path: path.join(__dirname, "views", "assets"),
      filename: "app.js"
  },

  //For JSX (React) files, transpile Harmony (ES6)
  module: {
      loaders: [
          { test: /\.jsx$/, loader: "jsx-loader?harmony"}
      ]
  },

  //Files and modules to include
  resolve: {
      // You can now require('file') instead of require('file.coffee')
      extensions: ["", ".js", ".jsx"],
      root: [path.join(__dirname, "views")],
      modulesDirectories: ["node_modules"]
  },
  devtool: "sourcemap"
}