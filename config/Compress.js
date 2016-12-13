'use strict';

module.exports.tasks = {

  // COMPRESS
  compress: {
    dist: {
      options: {
        archive: 'boilerplate.tar.gz',
        mode: 'tgz',
        pretty: true
      },
      expand: true,
      cwd: 'dist/static/',
      src: ['**/*'],
      dest: '/'
    }
  },

};

