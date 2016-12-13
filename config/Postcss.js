'use strict';

module.exports.tasks = {

  // POSTCSS
  postcss: {
    dev: {
      options: {
        map: false,
        processors: [
          require('autoprefixer')()
        ],
      },
      src: 'app/.tmp/css/*.css'
    }
  }

};

