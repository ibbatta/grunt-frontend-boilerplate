'use strict';

module.exports.tasks = {

  // WIREDEP
  wiredep: {
    task: {
      directory: 'app/bower_components',
      src: ['app/index.html', './karma.conf.js'],
    }
  }

};

