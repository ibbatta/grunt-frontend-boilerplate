(function() {
  'use strict';

  angular.module('boilerplate.pages.home', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'src/pages/home/home.tpl.html',
        controller: 'HomeCtrl',
        controllerAs: 'homeCtrl'
      });

  }

})();

