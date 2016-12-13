'use strict';

module.exports.tasks = {

  //INJECTOR
  injector: {
    dev: {
      options: {
        template: 'app/index.html',
        min: true,
        relative: true
      },
      files: {
        'app/index.html': ['app/.tmp/js/main.concat.js', 'app/.tmp/css/main.css']
      }
    },
    dist: {
      options: {
        template: 'app/index.html',
        min: true,
        relative: true
      },
      files: {
        'app/index.html': ['app/index.js', 'app/src/**/*.module.js', 'app/src/**/*.ctrl.js', 'app/src/**/*.js', '!app/**/*.spec.js', 'app/.tmp/css/main.css']
      }
    }
  }

};

