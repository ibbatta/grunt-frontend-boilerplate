(function() {
  'use strict';

  var footerConfig = {
    bindings: {},
    templateUrl: 'src/components/footer.tpl.html',
    controller: footerCtrl,
    controllerAs: 'vm'
  };

  function footerCtrl() {
    var vm = this;
    console.log('FOOTER COMPONENT', vm);
  }

  angular.module('boilerplate.components')
    .component('main-footer', footerConfig);

})();

