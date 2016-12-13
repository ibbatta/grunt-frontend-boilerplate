'use strict';

module.exports.tasks = {

  //USEMIN
  // --> usemin prepare
  useminPrepare: {
    html: 'dist/static/index.html',
    options: {
      flow: {
        html: {
          steps: {
            js: ['concat', 'uglify'],
            css: ['cssmin']
          },
          post: {}
        }
      }
    }
  },

  // --> usemin
  usemin: {
    html: ['dist/static/index.html'],
    options: {
      root: 'app',
      dest: 'dist/static'
    }
  },

};

