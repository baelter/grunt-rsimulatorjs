/*
 * grunt-rsimulatorjs
 * https://github.com/baelter/grunt-rsimulatorjs
 *
 * Copyright (c) 2013 Anders Bälter
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    rsimulatorjs: {
      default_options: {
        options: {
        }
      },
      custom_options: {
          options: {
              simulator: {
                  port: 9005,
                  rootPath: './mocked-rest-api',
                  useRootRelativePath: true
              },
              proxy: {
                  port: 8001,
                  router : {
                      '/public-rest' : '127.0.0.1:' + 9005,
                      '/secure-rest' : '127.0.0.1:' + 9005,
                      '/public' : '127.0.0.1:9001',
                      '' : '127.0.0.1:9001'
                  }
              }
          }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'rsimulatorjs', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
