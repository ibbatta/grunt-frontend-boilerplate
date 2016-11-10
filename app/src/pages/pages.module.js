(function() {
  'use strict';

  angular.module('boilerplate.pages', [
      'ui.router',
      'boilerplate.pages.home'
    ])
    .config(themeConfig);

  /** @ngInject */
  function themeConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }

})();

