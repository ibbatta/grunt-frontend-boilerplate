'use strict';

module.exports.tasks = {

  // BROWSER SYNC
  browserSync: {
    dev: {
      bsFiles: {
        src: 'app/**/*'
      },
      options: {
        watchTask: true,
        server: 'app/'
      }
    },
    dist: {
      bsFiles: {
        src: 'dist/static/**/*'
      },
      options: {
        watchTask: false,
        server: 'dist/static/'
      }
    }
  },

};

