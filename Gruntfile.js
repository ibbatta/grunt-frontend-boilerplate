module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json
    pkg: grunt.file.readJSON('package.json'),

    // CLEAN
    clean: {
      tmp: 'app/.tmp',
      build: 'build/',
      dist: 'dist/',
      distTmp: 'dist/.tmp'
    },

    // BOWER
    bower: {
      install: {
        options: {
          targetDir: 'app/vendors',
          layout: 'byComponent',
          install: true,
          verbose: false,
          cleanTargetDir: true,
          cleanBowerDir: false,
          bowerOptions: {

          }
        }
      }
    },

    // BOWER REQUIRE JS
    bowerRequirejs: {
      build: {
        rjsConfig: 'config.js',
        options: {
          transitive: true,
          excludeDev: true
        }
      }
    },

    // BOWER CONCAT
    bower_concat: {
      build: {
        dest: 'build/.tmp/js/_bower.js',
        cssDest: 'build/.tmp/css/_bower.css',
        dependencies: {
          'bootstrap-sass': 'jquery',
        },
        bowerOptions: {
          relative: true
        }
      }
    },

    // JSHINT
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: ['Grunfile.js', 'app/**/*.js', '!app/vendors/**']
    },

    // SASS
    sass: {
      dev: {
        options: {
          sourcemap: 'none'
        },
        files: {
          'app/.tmp/css/index.css': 'app/index.scss'
        }
      }
    },

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
    },

    // WIREDEP
    wiredep: {
      task: {
        directory: 'app/vendors',
        src: ['app/index.html'],
      }
    },
    
    // INJECTOR
    injector: {
      dev: {
        options: {
          template: 'app/index.html',
          min: true,
          relative: true
        },
        files: {
          'app/index.html': ['app/index.js', 'app/**/*.js', 'app/.tmp/css/index.css', '!app/vendors/**'],
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
        tasks: ['devStyle', 'injector']
      },
      scripts: {
        files:['app/**/*.js', '!app/vendors/**'],
        tasks:['devScript', 'injector']
      },
      bower: {
        files: ['app/vendors/**'],
        tasks: ['wiredep']
      },
      all: {
        files: ['app/**/*'],
        tasks: ['devStyle', 'devScript', 'injector']
      }
    },

    // EXPRESS SERVER
    express:{
      dev:{
        options:{
          port:9001,
          bases:['app/'],
          livereload: true 
        }
      },
      dist:{
        options:{
          port:9003,
          bases:['dist/'],
          livereload: true 
        }
      }
    },  

  });

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  require('load-grunt-tasks')(grunt);

  // ===========================================================================
  // RUN GRUNT TASKS ===========================================================
  // ===========================================================================
  grunt.registerTask('default', ['clean', 'bower', 'server']);

  grunt.registerTask('devStyle', ['sass:dev', 'postcss:dev']); // Style task
  grunt.registerTask('devScript', ['jshint']); // Script task

  // Server task
  grunt.registerTask('server', ['express', 'devScript', 'devStyle', 'wiredep', 'injector:dev', 'watch']);

  // Build task
  grunt.registerTask('build', []);

};
