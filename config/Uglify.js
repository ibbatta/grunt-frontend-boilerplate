'use strict';

module.exports.tasks = {

  // UGLIFY
  uglify: {
    options: {
      mangle: false,
    },
    dist: {
      files: {
        'dist/static/js/main.min.js': ['dist/.tmp/js/main.concat.js']
      }
    }
  },

};

