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

    // BOWER
    bower: {
      install: {
        options: {
          targetDir: 'app/public/',
          layout: 'byComponent',
          install: true,
          bowerOptions: {
            production: true
          }
        }
      }
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
          'app/tmp/css/main.css': 'app/index.scss'
        }
      }
    },

    // AUTOPREFIXER
    postcss: {
      options: {
        processors: [
          require('autoprefixer')()
        ]
      },
      dist: {
        src: 'app/tmp/css/main.css',
        dest: 'app/tmp/css/main.css'
      }
    },

    // MINIFY CSS
    cssmin: {
      build: {
        files: {
          'dist/css/main.min.css': 'tmp/css/main.css'
        }
      }
    },

    // MINIFY HTML
    htmlmin: { 
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: 'app/',
          src: '**/*.html',
          dest: 'dist/'
        }]
     }
    },

    // INJECTOR
    injector: {
      options: {
        template: 'app/index.html',
        min: true,
        relative: true
      },
      local_dependencies: {
        files: {
          'app/index.html': ['app/**/*.js', 'app/tmp/**/*.css', '!app/public/**/*', 'app/index.js', 'app/tmp/css/main.css'],
        }
      },

    },

    // WIREDEP
    wiredep: {
      task: {
        directory: 'app/public',
        src: ['app/index.html'],
      }
    },

    // WATCH
    watch: {
      options:{
        livereload: true
      },

      stylesheet: {
        files: ['app/index.scss'],
        tasks: ['sass', 'postcss', 'injector']
      },
      scripts: {
        files:['app/**/*.js', '!app/public/*'],
        tasks:['jshint', 'injector']
      },
      bower_components: {
        files: ['app/public/**/*'],
        tasks: ['wiredep']
      },
      views: {
        files: ['app/**/*.html']
      }
    },

    // EXPRESS SERVER
    express:{
      build:{
        options:{
          port:9001,
          bases:['app/'],
          livereload: true 
        }
      }
    },  

    // CLEAN
    clean: {
      tmp: {
        src: ['app/tmp']
      },
      dist: {
        src: ['app/dist']
      },
      bower: {
        src: ['app/public']
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
  grunt.registerTask('default', ['bower', 'server']);

  // Server task
  grunt.registerTask('server', ['jshint', 'express', 'sass', 'postcss', 'injector', 'wiredep', 'watch']);

  // Build task
  grunt.registerTask('build', ['jshint', 'uglify', 'sass', 'postcss', 'cssmin', 'injector', 'wiredep', 'htmlmin']);

};
