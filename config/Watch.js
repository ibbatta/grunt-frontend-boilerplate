'use strict';

module.exports.tasks = {

  // WATCH
  watch: {
    stylesheet: {
      files: ['app/**/*.scss'],
      tasks: ['devStyle', 'injector:dev']
    },
    scripts: {
      files: ['app/**/*.js'],
      tasks: ['devScript', 'karma', 'concat:dev', 'babel:dev', 'injector:dev']
    },
    bower: {
      files: ['app/bower_components/**'],
      tasks: ['wiredep', 'karma']
    },
    img: {
      files: ['app/assets/**'],
      tasks: ['copy:img']
    },
    html: {
      files: ['app/**/*.html', '!app/bower_components'],
      tasks: ['bootlint']
    }
  }

};

