'use strict';

module.exports.tasks = {

  // CONCAT
  concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['build/js/_bower.concat.js', 'build/js/index.annotated.js', 'build/**/*.module.annotated.js', 'build/**/*.ctrl.annotated.js', 'build/**/*.annotated.js', 'build/**/*.js'],
      dest: 'dist/.tmp/js/main.concat.js'
    },
  }

};

