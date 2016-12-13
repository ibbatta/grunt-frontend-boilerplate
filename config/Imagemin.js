'use strict';

module.exports.tasks = {

  // IMAGEMIN
  imagemin: {
    img: {
      files: [{
        expand: true,
        cwd: 'app/',
        src: 'assets/img/**/*.{gif,GIF,jpg,JPG,png,PNG}',
        dest: 'dist/static/'
      }]
    }
  },

};

