'use strict';

module.exports.tasks = {

  // SASS
  sass: {
    dev: {
      options: {
        sourceMap: false
      },
      files: {
        'app/.tmp/css/main.css': 'app/index.scss'
      }
    }
  }

};

