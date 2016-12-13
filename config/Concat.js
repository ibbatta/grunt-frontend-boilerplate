'use strict';

module.exports.tasks = {

  // CONCAT
  concat: {
    options: {
      separator: ';',
    },
    dev: {
      src: ['app/index.js', 'app/src/**/*.module.js', 'app/src/**/*.ctrl.js', 'app/src/**/*.js', '!app/**/*.spec.js'],
      dest: 'app/.tmp/js/main.concat.js'
    },
    dist: {
      src: ['build/js/_bower.concat.js', 'build/js/index.annotated.js', 'build/**/*.module.annotated.js', 'build/**/*.ctrl.annotated.js', 'build/**/*.annotated.js', 'build/**/*.js'],
      dest: 'dist/.tmp/js/main.concat.js'
    },
  }

};

