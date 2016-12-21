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
        src: ['app/**/*.js', '!app/bower_components', '!**/*.annotated.js', '!app/**/*.spec.js'],
        ext: '.annotated.js',
        extDot: 'last'
      }],
    }
  }

};

