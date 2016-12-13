'use strict';

module.exports.tasks = {

  // JSHINT
  jshint: {
    options: {
      jshintrc: '.jshintrc',
      reporter: require('jshint-stylish')
    },
    all: ['Grunfile.js', 'app/src/**/*.js', '!app/**/*.spec.js']
  }

};

