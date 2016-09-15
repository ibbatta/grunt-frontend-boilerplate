(function() {
  'use strict';

  angular.module('boilerplate.pages.home')
    .controller('HomeCtrl', HomeCtrl);

  /** @ngInject */
  function HomeCtrl() {
    var vm = this;
    vm.showOffCanvas = showOffCanvas;
    vm.offCanvasActivate = false;

    function showOffCanvas() {
      vm.offCanvasActivate = !vm.offCanvasActivate;
      console.log('entro');
    }
  }

})();

