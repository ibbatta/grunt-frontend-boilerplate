'use strict';

module.exports.tasks = {

  // COPY
  copy: {
    options: {
      encoding: 'utf-8'
    },
    build: {
      files: [
        { expand: true, cwd: 'app', src: ['index.html'], dest: 'build/' },
        { expand: true, cwd: 'app', src: ['index.annotated.js'], dest: 'build/js' },
        { expand: true, cwd: 'app/src', src: ['**/*.html'], dest: 'build/src' },
        { expand: true, cwd: 'app/src', src: ['**/*.annotated.js'], dest: 'build/js' },
        { expand: true, cwd: 'app/.tmp', src: ['css/**/*.css'], dest: 'build/' },
        { expand: true, cwd: 'app/', src: ['favicon.*'], dest: 'build/' },
      ]
    },
    dist: {
      files: [
        { expand: true, cwd: 'build', src: ['favicon.*'], dest: 'dist/static/' },
        { expand: true, cwd: 'build', src: ['**/*.html'], dest: 'dist/static/' },
      ]
    }
  }

};

