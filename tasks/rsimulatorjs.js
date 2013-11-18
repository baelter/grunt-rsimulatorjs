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
                },
                proxy: {
                    port : 9004,
                    pathnameOnly : true,
                    router : {
                        '/service' : '127.0.0.1:' + 9005,
                        '' : '127.0.0.1:' + 9001
                    }
                }
            }),
            serverOptions = {
                simulatorConfig: options.simulator,
                proxyConfig: {
                    port: options.proxy.port || 9004,
                    options: {
                        pathnameOnly: options.proxy.pathnameOnly || true,
                        router: options.proxy.router
                    }
                }
            };
        grunt.verbose.writeln('Grunt-rsimulatorjs options: ', JSON.stringify(options));
        rsimulatorjsServer(serverOptions);
        grunt.log.ok('Started rsimulator on ' + serverOptions.simulatorConfig.port + ' with proxy on ' + serverOptions.proxyConfig.port + ' with the following routes:');
        for(route in serverOptions.proxyConfig.options.router) {
            grunt.log.ok(route + ' : ' + serverOptions.proxyConfig.options.router[route]);
        }
    });

};
