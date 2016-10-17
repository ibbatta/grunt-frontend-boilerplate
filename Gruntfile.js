'use strict';

module.exports = function(grunt) {

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  require('load-grunt-tasks')(grunt);

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json
    pkg: grunt.file.readJSON('package.json'),

    // CLEAN
    clean: {
      log: '**/*.log',
      tmp: 'app/.tmp',
      build: 'build/',
      dist: 'dist/',
      distTmp: 'dist/.tmp',
      sassCache: '.sass-cache',
      compressed: ['boilerplate.tar.gz', './boilerplate'],
      coverage: 'coverage/',
      bowerComponents: 'app/bower_components',
      annotated: '**/*.annotated.*',
    },

    // BOWER
    bower: {
      install: {
        options: {
          targetDir: 'app/bower_components',
          layout: 'byComponent',
          install: true,
          verbose: false,
          cleanTargetDir: true,
          cleanBowerDir: false
        }
      }
    },

    // BOWER REQUIRE JS
    npmequirejs: {
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
        dest: 'build/js/_bower.concat.js',
        cssDest: 'build/css/_bower.concat.css',
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
      all: ['Grunfile.js', 'app/src/**/*.js', '!app/**/*.spec.js']
    },

    // BOOTSTRAP LINT
    bootlint: {
      options: {
        relaxerror: ['E001', 'E013', 'W001', 'W002', 'W003', 'W005'],
        showallerrors: false,
        stoponerror: false,
        stoponwarning: false
      },
      files: ['app/**/*.html', '!app/bower_components/**']
    },

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
    },

    // GENERATE SPRITE
    sprite: {
      all: {
        src: 'app/assets/spritesheet/**/*.png',
        dest: 'app/.tmp/sprite/sprite.png',
        destCss: 'app/.tmp/css/sprite.css',
        cssOpts: {
          cssSelector: function(sprite) {
            return '.sprite_icon-' + sprite.name;
          }
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
        directory: 'app/bower_components',
        src: ['app/index.html'],
      }
    },

    // INJECTOR
    injector: {
      js: {
        options: {
          template: 'app/index.html',
          min: true,
          relative: true
        },
        files: {
          'app/index.html': ['app/index.js', 'app/src/**/*.module.js', 'app/src/**/*.ctrl.js', 'app/src/**/*.js', '!app/**/*.spec.js'],
        }
      },
      css: {
        options: {
          template: 'app/index.html',
          min: true,
          relative: true
        },
        files: {
          'app/index.html': ['app/.tmp/css/sprite.css', 'app/.tmp/css/main.css']
        }
      }
    },

    // WATCH
    watch: {
      stylesheet: {
        files: ['app/**/*.scss'],
        tasks: ['devStyle', 'injector:css']
      },
      scripts: {
        files: ['app/**/*.js'],
        tasks: ['devScript', 'injector:js']
      },
      bower: {
        files: ['app/bower_components/**'],
        tasks: ['wiredep']
      },
      imgSprite: {
        files: ['app/assets/spritesheet/**'],
        tasks: ['sprite', 'injector:css']
      },
      html: {
        files: ['app/**/*.html', '!app/bower_components'],
        tasks: ['bootlint']
      }
    },

    // CONCAT
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['build/js/_bower.concat.js', 'build/js/index.annotated.js', 'build/**/*.module.annotated.js', 'build/**/*.ctrl.annotated.js', 'build/**/*.annotated.js', 'build/**/*.js'],
        dest: 'dist/.tmp/js/main.concat.js'
      },
    },

    // UGLIFY
    uglify: {
      options: {
        mangle: false,
      },
      dist: {
        files: {
          'dist/static/js/main.min.js': ['dist/.tmp/js/main.concat.js']
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
          'dist/static/css/main.min.css': ['build/css/_bower.concat.css', 'build/css/sprite.css', 'build/css/main.css']
        }
      }
    },

    // IMAGEMIN
    imagemin: {
      img: {
        files: [{
          expand: true,
          cwd: 'app/',
          src: 'assets/img/**/*.{gif,GIF,jpg,JPG,png,PNG}',
          dest: 'dist/static/'
        }]
      },
      sprite: {
        files: [{
          expand: true,
          cwd: 'app/.tmp/',
          src: 'sprite/**/*.{gif,GIF,jpg,JPG,png,PNG}',
          dest: 'dist/static/'
        }]
      },
    },

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
    },

    //USEMIN
    // --> usemin prepare
    useminPrepare: {
      html: 'dist/static/index.html',
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
      html: ['dist/static/index.html'],
      options: {
        root: 'app',
        dest: 'dist/static'
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
        cwd: 'dist/static/',
        src: ['**/*'],
        dest: '/'
      }
    },

    // BROWSER SYNC
    browserSync: {
      dev: {
        bsFiles: {
          src: 'app/**/*'
        },
        options: {
          watchTask: true,
          server: 'app/'
        }
      },
      dist: {
        bsFiles: {
          src: 'dist/static/**/*'
        },
        options: {
          watchTask: false,
          server: 'dist/static/'
        }
      }
    },

    // NG ANNOTATE
    ngAnnotate: {
      options: {
        singleQuotes: true
      },
      app: {
        files: [{
          expand: true,
          src: ['app/**/*.js', '!**/*.annotated.js', '!app/**/*.spec.js'],
          ext: '.annotated.js',
          extDot: 'last'
        }],
      }
    },

    // CHANGELOG
    changelog: {
      sample: {
        options: {
          fileHeader: '### CHANGELOGS',
          dest: 'CHANGELOG.md',
          logArguments: [
            '--pretty=* %h - %ad: %s',
            '--no-merges',
            '--date=short'
          ],
          template: '{{> features}}',
          featureRegex: /^(.*)$/gim,
          partials: {
            features: '{{#if features}}{{#each features}}{{> feature}}{{/each}}{{else}}{{> empty}}{{/if}}\n',
            feature: '- {{this}} {{this.date}}\n'
          }
        }
      }
    },

  });

  // ===========================================================================
  // RUN GRUNT TASKS ===========================================================
  // ===========================================================================
  grunt.registerTask('default', ['clean', 'bower', 'dev']);

  grunt.registerTask('devStyle', ['sass:dev', 'postcss:dev']); // Style task
  grunt.registerTask('devScript', ['jshint']); // Script task
  grunt.registerTask('optimizeScript', ['concat', 'uglify']); // Script optimizer
  grunt.registerTask('optimizeStyle', ['cssmin', 'imagemin']); // Style optimizer

  // Server task
  grunt.registerTask('dev', ['bootlint', 'sprite', 'devScript', 'devStyle', 'wiredep', 'injector', 'browserSync:dev', 'watch']);

  // Build task
  grunt.registerTask('build', ['clean', 'bower', 'devStyle', 'sprite', 'wiredep', 'injector', 'ngAnnotate', 'copy:build', 'bower_concat']);

  // Dist task
  grunt.registerTask('dist', ['build', 'useminPrepare', 'optimizeScript', 'optimizeStyle', 'clean:distTmp', 'copy:dist', 'usemin', 'compress', 'browserSync:dist', 'clean:annotated']);

};

