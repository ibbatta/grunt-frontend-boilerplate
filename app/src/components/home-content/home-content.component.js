(function() {
  'use strict';

  var homeContentConfig = {
    bindings: { projectName: '@' },
    templateUrl: 'src/components/home-content/home-content.tpl.html',
    controller: homeContentCtrl,
    controllerAs: 'vm'
  };

  function homeContentCtrl() {}

  angular.module('boilerplate.components')
    .component('homeContent', homeContentConfig);

})();

