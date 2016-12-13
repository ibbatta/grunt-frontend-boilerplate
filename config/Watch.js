'use strict';

module.exports.tasks = {

  // WATCH
  watch: {
    stylesheet: {
      files: ['app/**/*.scss'],
      tasks: ['devStyle', 'injector:css']
    },
    scripts: {
      files: ['app/**/*.js'],
      tasks: ['devScript', 'injector:js', 'karma']
    },
    bower: {
      files: ['app/bower_components/**'],
      tasks: ['wiredep', 'karma']
    },
    html: {
      files: ['app/**/*.html', '!app/bower_components'],
      tasks: ['bootlint']
    }
  }

};

