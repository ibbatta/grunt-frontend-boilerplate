'use strict';

module.exports.tasks = {

  // INJECTOR
  injector: {
    js: {
      options: {
        template: 'app/index.html',
        min: true,
        relative: true
      },
      files: {
        'app/index.html': ['app/index.js', 'app/src/**/*.module.js', 'app/src/**/*.ctrl.js', 'app/src/**/*.js', '!app/**/*.spec.js'],
      }
    },
    css: {
      options: {
        template: 'app/index.html',
        min: true,
        relative: true
      },
      files: {
        'app/index.html': ['app/.tmp/css/main.css']
      }
    }
  },

};

