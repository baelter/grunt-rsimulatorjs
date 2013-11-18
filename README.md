# grunt-rsimulatorjs

> Grunt plugin for rsimulatorjs-server

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-rsimulatorjs --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-rsimulatorjs');
```

## The "rsimulatorjs" task

### Overview
In your project's Gruntfile, add a section named `rsimulatorjs` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  rsimulatorjs: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.simulator
Type: `Object`
Default value:
`simulator: {
     port: 9005,
     rootPath: './mocked-rest-api',
     useRootRelativePath: true
}`

#### options.proxy
Type: `Object`
Default value:
`proxy: {
     port : 9004,
     pathnameOnly : true,
     router : {
         '/service' : '127.0.0.1:' + 9005,
         '' : '127.0.0.1:' + 9001
     }
}`

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_