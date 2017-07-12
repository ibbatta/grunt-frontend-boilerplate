'use strict';

module.exports.tasks = {

  // KARMA TEST
  karma: {
    unit: {
      configFile: './karma.conf.js',
      browsers: ['PhantomJS'],
      background: false,
      singleRun: true
    }
  },

};
