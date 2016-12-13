'use strict';

module.exports.tasks = {

  // CSSMIN
  cssmin: {
    options: {
      shorthandCompacting: false,
      roundingPrecision: -1
    },
    target: {
      files: {
        'dist/static/css/main.min.css': ['build/css/_bower.concat.css', 'build/css/main.css']
      }
    }
  }

};

