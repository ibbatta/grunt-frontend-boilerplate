module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json
    pkg: grunt.file.readJSON('package.json'),

    // JSHINT
    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      all: ['Grunfile.js', 'src/**/*.js']
    },

    // UGLIFY
    uglify: {
      build: {
        files: {
          'dist/js/main.min.js': 'app/**/*.js'
        }
      }
    },

    // COMPILE SASS
    sass: {
      options: {
        noCache: true,
        update: true,
        sourcemap: 'none'
      },
      dist: {
        files: {
          'dist/css/main.css': 'app/index.scss'
        }
      }
    },

    // MINIFY CSS
    cssmin: {
      build: {
        files: {
          'dist/css/main.min.css': 'dist/css/main.css'
        }
      }
    },

    // WATCH
    watch: {
      options:{
        livereload: true
      },

      stylesheet: {
        files: ['app/index.scss'],
        tasks: ['sass', 'cssmin']
      },
      scripts: {
        files:['app/**/*.js'],
        tasks:['jshint', 'uglify']
      }
    },

    // EXPRESS SERVER
    express:{
      all:{
        options:{
          port:9001,
          hostname:'localhost',
          bases:['./app'],
          livereload: true 
        }
      }
    }
    

  });

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  require('load-grunt-tasks')(grunt);

  // ===========================================================================
  // RUN GRUNT TASKS ===========================================================
  // ===========================================================================
  grunt.registerTask('default', ['express', 'watch']);

};
