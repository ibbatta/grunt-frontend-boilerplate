'use strict';

module.exports.tasks = {

  // BOWER
  bower: {
    install: {
      options: {
        targetDir: 'app/bower_components',
        layout: 'byComponent',
        install: true,
        verbose: false,
        cleanTargetDir: true,
        cleanBowerDir: false
      }
    }
  }

};

