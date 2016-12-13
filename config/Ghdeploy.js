'use strict';

module.exports = function(grunt) {

  return {
    tasks: {
      // PUBLISH GH-PAGES
      ghDeploy: {
        options: {
          repository: 'https://github.com/ibbatta/grunt-frontend-boilerplate.git',
          branch: 'gh-pages',
          deployPath: 'dist/static/',
          message: 'GRUNT AUTO DEPLOYMENT ' + grunt.template.today()
        }
      }
    }
  };

};

