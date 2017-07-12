'use strict';

module.exports.tasks = {

  // BROWSERIFY
  browserify: {
    dev: {
      options: {
        transform: [
          ['babelify', {
            presets: ['latest', 'es2015']
          }]
        ]
      },
      files: {
        'app/.tmp/js/main.concat.js': 'app/.tmp/js/main.concat.js'
      },
      browserifyOptions: {
        debug: true
      }
    },
    dist: {
      options: {
        transform: [
          ['babelify', {
            presets: ['latest', 'es2015']
          }]
        ]
      },
      files: {
        'dist/.tmp/js/main.concat.js': 'dist/.tmp/js/main.concat.js'
      },
      browserifyOptions: {
        debug: false
      },
    }
  },

};
