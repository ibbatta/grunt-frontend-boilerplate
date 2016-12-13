'use strict';

module.exports.tasks = {

  // BOWER REQUIRE JS
  npmequirejs: {
    build: {
      rjsConfig: 'config.js',
      options: {
        transitive: true,
        excludeDev: true
      }
    }
  }

};

