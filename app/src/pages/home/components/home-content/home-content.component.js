'use strict';

(() => {

  const homeContentConfig = {
    templateUrl: 'src/pages/home/components/home-content/home-content.tpl.html',
    controller: homeContentCtrl,
    controllerAs: 'vm'
  };

  function homeContentCtrl() {}

  angular.module('boilerplate.pages.home')
    .component('homeContent', homeContentConfig);

})();
