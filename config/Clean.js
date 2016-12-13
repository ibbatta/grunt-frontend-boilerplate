'use strict';

module.exports.tasks = {

  // CLEAN
  clean: {
    log: '**/*.log',
    tmp: ['app/.tmp', '.grunt'],
    build: 'build/',
    dist: 'dist/',
    distTmp: 'dist/.tmp',
    sassCache: '.sass-cache',
    compressed: ['boilerplate.tar.gz', './boilerplate'],
    coverage: 'coverage/',
    bowerComponents: 'app/bower_components',
    annotated: '**/*.annotated.*',
  }

};

