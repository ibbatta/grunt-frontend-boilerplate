(function() {
  'use strict';

  var footerConfig = {
    bindings: { author: '@', year: '@' },
    templateUrl: 'src/components/footer/footer.tpl.html',
    controller: footerCtrl,
    controllerAs: 'vm'
  };

  function footerCtrl() {
    var vm = this;
    console.log('FOOTER COMPONENT', vm);
  }

  angular.module('boilerplate.components')
    .component('mainFooter', footerConfig);

})();

