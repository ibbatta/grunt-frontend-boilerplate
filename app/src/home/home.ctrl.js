(function() {
  'use strict';

  angular.module('boilerplate.pages.home')
    .controller('HomeCtrl', HomeCtrl);

  /** @ngInject */
  function HomeCtrl() {
    var vm = this;
    console.log('HOME CTRL', vm);
  }

})();

