(function() {
  'use strict';

  var headerConfig = {
    bindings: { projectName: '@' },
    templateUrl: 'src/components/header/header.tpl.html',
    controller: headerCtrl,
    controllerAs: 'vm'
  };

  function headerCtrl() {
    var vm = this;
    console.log('HEADER COMPONENT', vm);
  }

  angular.module('boilerplate.components')
    .component('mainHeader', headerConfig);

})();

