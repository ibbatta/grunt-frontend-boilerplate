(function() {
  'use strict';

  var headerConfig = {
    bindings: {},
    templateUrl: 'src/components/header.tpl.html',
    controller: headerCtrl,
    controllerAs: 'vm'
  };

  function headerCtrl() {
    var vm = this;
    console.log('HEADER COMPONENT', vm);
  }

  angular.module('boilerplate.components')
    .component('main-header', headerConfig);

})();

