(function() {
  'use strict';

  var footerConfig = {
    bindings: { author: '@', year: '@' },
    templateUrl: 'src/components/footer/footer.tpl.html',
    controller: footerCtrl,
    controllerAs: 'vm'
  };

  function footerCtrl() {}

  angular.module('boilerplate.components')
    .component('pageFooter', footerConfig);

})();

