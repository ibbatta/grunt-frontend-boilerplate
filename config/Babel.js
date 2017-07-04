'use strict';

module.exports.tasks = {

  // BABEL

  babel: {
    dev: {
      options: {
        sourceMap: false,
        presets: ['es2015']
      },
      files: {
        'app/.tmp/js/main.concat.js': 'app/.tmp/js/main.concat.js'
      }
    },
    dist: {
      options: {
        sourceMap: true,
        presets: ['es2015']
      },
      files: {
        'dist/.tmp/js/main.concat.js': 'dist/.tmp/js/main.concat.js'
      }
    }
  }

};
