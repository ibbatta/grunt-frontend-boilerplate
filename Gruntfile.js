'use strict';

module.exports = function(grunt) {

  var path = require('path');
  var options = {
    pkg: grunt.file.readJSON('package.json'),
    configPath: path.join(process.cwd(), 'config')
  };

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  require('load-grunt-tasks')(grunt);
  var configs = require('load-grunt-configs')(grunt, options);

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig(configs);

  // ===========================================================================
  // RUN GRUNT TASKS ===========================================================
  // ===========================================================================

  // Default
  grunt.registerTask('default', ['clean', 'bower', 'dev']);

  // Style task
  grunt.registerTask('devStyle', ['sass:dev', 'postcss:dev']);

  // Script task
  grunt.registerTask('devScript', ['jshint']);

  // Script optimizer
  grunt.registerTask('optimizeScript', ['concat:dist', 'babel:dist', 'uglify']);

  // Style optimizer
  grunt.registerTask('optimizeStyle', ['cssmin', 'imagemin']);

  // Server task
  grunt.registerTask('dev', ['bootlint', 'devScript', 'devStyle', 'concat:dev', 'babel:dev', 'wiredep', 'injector:dev', 'karma', 'browserSync:dev', 'watch']);

  // Build task
  grunt.registerTask('build', ['clean', 'bower', 'devStyle', 'wiredep', 'injector:dist', 'ngAnnotate', 'copy:build', 'bower_concat']);

  // Dist task
  grunt.registerTask('dist', ['build', 'useminPrepare', 'optimizeScript', 'optimizeStyle', 'clean:distTmp', 'copy:dist', 'usemin', 'compress', 'clean:annotated', 'browserSync:dist']);

  // Upload github-page
  grunt.registerTask('gh-page', ['build', 'useminPrepare', 'optimizeScript', 'optimizeStyle', 'clean:distTmp', 'copy:dist', 'usemin', 'compress', 'clean:annotated', 'ghDeploy']);

};

