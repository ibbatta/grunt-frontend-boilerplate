'use strict';

module.exports.tasks = {

  // BOOTSTRAP LINT
  bootlint: {
    options: {
      relaxerror: ['E001', 'E013', 'W001', 'W002', 'W003', 'W005'],
      showallerrors: false,
      stoponerror: false,
      stoponwarning: false
    },
    files: ['app/**/*.html', '!app/bower_components/**']
  }

};

