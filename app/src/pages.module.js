(function() {
  'use strict';

  angular.module('boilerplate.pages', [
      'ui.router',
      'boilerplate.pages.main'
    ])
    .config(themeConfig)
    .run(themeRun);

  /** @ngInject */
  function themeConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }

  /** @ngInject */
  function themeRun($rootScope, $timeout) {
    $timeout(function() {
      $rootScope.$themeFinishLoading = true;
    }, 0);
  }

})();

