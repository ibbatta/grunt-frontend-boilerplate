'use strict';

module.exports.tasks = {

  // NG ANNOTATE
  ngAnnotate: {
    options: {
      singleQuotes: true
    },
    app: {
      files: [{
        expand: true,
        src: ['app/**/*.js', '!**/*.annotated.js', '!app/**/*.spec.js'],
        ext: '.annotated.js',
        extDot: 'last'
      }],
    }
  }

};

