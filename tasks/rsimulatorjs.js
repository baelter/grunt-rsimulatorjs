/*
 * grunt-rsimulatorjs
 * https://github.com/baelter/grunt-rsimulatorjs
 *
 * Copyright (c) 2013 Anders Bälter
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks
    grunt.registerMultiTask('rsimulatorjs', 'Start rsimulatorjs', function () {
        var rsimulatorjsServer = require('rsimulatorjs-server'),
            route,
            options = this.options({
                simulator: {
                    port: 9005,
                    rootPath: './mocked-rest-api',
                    useRootRelativePath: true
                }
            }),
            serverOptions = {
                simulatorConfig: options.simulator
            };
            if (options.proxy) {
                serverOptions.proxyConfig = {
                    port: options.proxy.port || 9004,
                    options: {
                        pathnameOnly: options.proxy.pathnameOnly || true,
                        router: options.proxy.router
                    }
                }
            }
            serverOptions.logLevel = options.logLevel;
        grunt.verbose.writeln('Grunt-rsimulatorjs options: ', JSON.stringify(options));
        rsimulatorjsServer(serverOptions);
        grunt.log.ok('Started rsimulator on ' + serverOptions.simulatorConfig.port);
        if (serverOptions.proxyConfig) {
            grunt.log.ok(' with proxy on ' + serverOptions.proxyConfig.port + ' with the following routes:');

            for(route in serverOptions.proxyConfig.options.router) {
                grunt.log.ok(route + ' : ' + serverOptions.proxyConfig.options.router[route]);
            }
        }
    });
};
