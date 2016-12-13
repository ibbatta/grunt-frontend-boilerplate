'use strict';

module.exports.tasks = {

  // BOWER CONCAT
  bower_concat: {
    build: {
      dest: 'build/js/_bower.concat.js',
      cssDest: 'build/css/_bower.concat.css',
      bowerOptions: {
        relative: true
      }
    }
  },

};

