var path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'sinon-chai'],
    files: [
      'src/components/**/*.spec.js',
    ],

    preprocessors: {
      // add webpack as preprocessor
      'src/components/**/!(*.spec).{js,jsx}': ['webpack', 'sourcemap', 'coverage'],
      'src/components/**/*.spec.js': ['webpack', 'sourcemap']
    },

    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      resolve:{
        extensions : ['', '.js', '.jsx', '.coffee', '.json']
      },
      module: {
        preLoaders: [
          {
            test: /\.jsx?$/,
            loader: 'babel',
            exclude: path.resolve(__dirname, 'node_modules'),
            query: {
              presets: ["es2015", "react", "stage-0"]
            }
          },
          {
            test: /\.jsx?$/,
            loader: 'isparta',
            exclude: path.resolve(__dirname, 'node_modules') }
        ],
        loaders: [
          {
            test: /\.json$/,
            loader: 'json'
          }
        ]
      },
      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        'react/addons': true
      }
    },

    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },

    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-sinon-chai',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-mocha-reporter',
      'karma-coverage'
    ],

    coverageReporter: {
      watermarks: {
        statements: [ 50, 75 ],
        functions: [ 50, 75 ],
        branches: [ 50, 75 ],
        lines: [ 50, 75 ]
      },
      reporters: [
        { type: 'text' },
        { type: 'text-summary' },
        { type: 'lcov' }
      ]
    },

    babelPreprocessor: {
      options: {
        presets: ["es2015", "react", "stage-0"]
      }
    },
    reporters: ['mocha', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
};