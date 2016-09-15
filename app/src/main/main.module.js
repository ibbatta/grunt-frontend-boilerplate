(function() {
  'use strict';

  angular.module('boilerplate.pages.main', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/main/main.tpl.html',
        controller: 'MainCtrl',
        controllerAs: 'mainCtrl'
      });

  }

})();

