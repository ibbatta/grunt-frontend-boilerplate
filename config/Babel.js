'use strict';

module.exports.tasks = {

  // BABEL

  babel: {
    compile: {
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

