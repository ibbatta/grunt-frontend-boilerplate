'use strict';

(() => {

  let headerConfig = {
    bindings: {
      projectName: '@'
    },
    templateUrl: 'src/theme/components/header/header.tpl.html',
    controller: headerCtrl,
    controllerAs: 'vm'
  };

  function headerCtrl() {}

  angular.module('boilerplate.theme.components')
    .component('pageHeader', headerConfig);

})();
