(function() {
  'use strict';

  var sidebarConfig = {
    templateUrl: 'src/components/sidebar/sidebar.tpl.html',
    controller: sidebarCtrl,
    controllerAs: 'vm'
  };

  function sidebarCtrl() {}

  angular.module('boilerplate.components')
    .component('pageSidebar', sidebarConfig);

})();

