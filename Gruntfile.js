'use strict';

module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json
    pkg: grunt.file.readJSON('package.json'),

    // CLEAN
    clean: {
      log: '**/*.log',
      tmp: './app/.tmp',
      build: './build/',
      dist: './dist/',
      distTmp: './dist/.tmp',
      sassCache: '.sass-cache',
      compressed: ['boilerplate.tar.gz', './boilerplate'],
      coverage: 'coverage/',
      bowerComponents: './app/bower_components',
    },

    // BOWER
    bower: {
      install: {
        options: {
          targetDir: './app/bower_components',
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
        dest: './build/js/_bower.concat.js',
        cssDest: './build/css/_bower.concat.css',
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
      all: ['Grunfile.js', './app/src/**/*.js', '!./app/**/*.spec.js']
    },

    // SASS
    sass: {
      dev: {
        options: {
          sourceMap: false
        },
        files: {
          './app/.tmp/css/main.css': './app/index.scss'
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
        src: './app/.tmp/css/*.css'
      }
    },

    // WIREDEP
    wiredep: {
      task: {
        directory: './app/bower_components',
        src: ['./app/index.html'],
      }
    },

    // INJECTOR
    injector: {
      dev: {
        options: {
          template: './app/index.html',
          min: true,
          relative: true
        },
        files: {
          './app/index.html': ['./app/index.js', './app/src/**/*.module.js', './app/src/**/*.ctrl.js', './app/src/**/*.js', './app/.tmp/css/main.css'],
        }
      }
    },

    // WATCH
    watch: {
      options: {
        livereload: true
      },
      stylesheet: {
        files: ['./app/index.scss'],
        tasks: ['devStyle', 'injector']
      },
      scripts: {
        files: ['./app/**/*.js'],
        tasks: ['devScript', 'injector']
      },
      bower: {
        files: ['./app/bower_components/**'],
        tasks: ['wiredep']
      },
      all: {
        files: ['./app/**/*'],
        tasks: ['devStyle', 'devScript', 'injector']
      }
    },

    // CONCAT
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['./build/js/_bower.concat.js', './build/js/index.js', './build/**/*.module.js', './build/**/*.ctrl.js', './build/**/*.js'],
        dest: './dist/.tmp/js/main.concat.js'
      },
    },

    // UGLIFY
    uglify: {
      options: {
        mangle: false,
      },
      dist: {
        files: {
          './dist/static/js/main.min.js': ['./dist/.tmp/js/main.concat.js']
        }
      }
    },

    // CSSMIN
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          './dist/static/css/main.min.css': ['./build/css/_bower.concat.css', './build/css/main.css']
        }
      }
    },

    // COPY
    copy: {
      options: {
        encoding: 'utf-8'
      },
      build: {
        files: [
          { expand: true, cwd: 'app', src: ['index.html'], dest: './build/' },
          { expand: true, cwd: 'app', src: ['index.js'], dest: './build/js' },
          { expand: true, cwd: 'app/src', src: ['**/*.html'], dest: './build/src' },
          { expand: true, cwd: 'app/src', src: ['**/*.js'], dest: './build/js' },
          { expand: true, cwd: './app/.tmp', src: ['css/**/*.css'], dest: './build/' },
        ]
      },
      dist: {
        files: [
          { expand: true, cwd: 'build', src: ['images/**/*'], dest: './dist/static/' },
          { expand: true, cwd: 'build', src: ['**/*.html'], dest: './dist/static/' },
        ]
      }
    },

    //USEMIN
    // --> usemin prepare
    useminPrepare: {
      html: './dist/static/index.html',
      options: {
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglify'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // --> usemin
    usemin: {
      html: ['./dist/static/index.html'],
      options: {
        root: 'app',
        dest: './dist/static'
      }
    },

    // COMPRESS
    compress: {
      dist: {
        options: {
          archive: 'boilerplate.tar.gz',
          mode: 'tgz',
          pretty: true
        },
        expand: true,
        cwd: './dist/static/',
        src: ['**/*'],
        dest: '/'
      }
    },

    // BROWSER SYNC
    browserSync: {
      dev: {
        bsFiles: {
          src: './app/**/*'
        },
        options: {
          watchTask: true,
          server: './app/'
        }
      },
      dist: {
        bsFiles: {
          src: './dist/static/**/*'
        },
        options: {
          watchTask: false,
          server: './dist/static/'
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
  grunt.registerTask('default', ['clean', 'bower', 'dev']);

  grunt.registerTask('devStyle', ['sass:dev', 'postcss:dev']); // Style task
  grunt.registerTask('devScript', ['jshint']); // Script task
  grunt.registerTask('optimizeScript', ['concat', 'uglify']); // Script optimizer
  grunt.registerTask('optimizeStyle', ['cssmin']); // Style optimizer

  // Server task
  grunt.registerTask('dev', ['devScript', 'devStyle', 'wiredep', 'injector:dev', 'browserSync:dev', 'watch']);

  // Build task
  grunt.registerTask('build', ['clean', 'bower', 'devStyle', 'wiredep', 'injector:dev', 'copy:build', 'bower_concat']);

  // Dist task
  grunt.registerTask('dist', ['build', 'useminPrepare', 'optimizeScript', 'optimizeStyle', 'clean:distTmp', 'copy:dist', 'usemin', 'compress', 'browserSync:dist']);

};

