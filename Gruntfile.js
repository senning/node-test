//Start the grunt module
module.exports = function(grunt) {

    //load task runners in to grunt for:
    //webpack
    grunt.loadNpmTasks("grunt-webpack");

    //automatic running on file change (watch)
    grunt.loadNpmTasks('grunt-contrib-watch');

    //pull in modules for webpack and path finding
    var webpack = require("webpack");
    var path = require("path");

    //pull in the webpack configuration file
    var webpackConfig = require("./webpack.config.js");

    //Configure grunt
    grunt.initConfig({
      //Webpack task config
      webpack: {
        //general options
        options: webpackConfig,

        //additional options for the "dev" variation
        dev: {},

        //additional options for the "build" variation
        build: {
          plugins: [
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin()
          ]
        }
      },

      //Watch task config
      watch: {
        //config for the "app" variation
        app: {
          //folder to watch
          files: ["assets/*"],

          //tasks to run
          tasks: ["webpack:dev"],

          //Additional options
          options: {
            spawn: false
          }
        }
      }
    });


    //Stuff that runs when calling "grunt" on command line
    grunt.registerTask("default", ["webpack:dev"]);

    //Stuff that runs when calling "grunt dev" on command line
    grunt.registerTask("dev", ["webpack:dev", "watch:app"]);

    //Stuff that runs when calling "grunt build" on command line
    grunt.registerTask("build", ["webpack:build"])
};