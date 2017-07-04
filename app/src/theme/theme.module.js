(function() {
  'use strict';

  angular.module('boilerplate.theme', [
      'boilerplate.theme.components'
    ])
    .run(themeRun);

  /** @ngInject */
  function themeRun($rootScope, $timeout) {
    $timeout(function() {
      $rootScope.$themeFinishLoading = true;
    }, 0);

  }

})();
