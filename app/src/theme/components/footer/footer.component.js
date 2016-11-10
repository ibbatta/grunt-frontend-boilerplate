(function() {
  'use strict';

  var footerConfig = {
    bindings: { author: '@', year: '@' },
    templateUrl: 'src/theme/components/footer/footer.tpl.html',
    controller: footerCtrl,
    controllerAs: 'vm'
  };

  function footerCtrl() {}

  angular.module('boilerplate.theme.components')
    .component('pageFooter', footerConfig);

})();

