(function() {
  'use strict';

  var headerConfig = {
    bindings: { projectName: '@' },
    templateUrl: 'src/components/header/header.tpl.html',
    controller: headerCtrl,
    controllerAs: 'vm'
  };

  function headerCtrl() {}

  angular.module('boilerplate.components')
    .component('pageHeader', headerConfig);

})();

