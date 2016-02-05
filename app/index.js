(function() {
  'use strict';

  angular
    .module('gruntWebapp', [
        'ui.router',
        'ui.bootstrap'
    ])
    .controller('MainCtrl', MainCtrl)
    .config(config);

  // CONFIG
  function config($stateProvider, $urlRouterProvider){
   
    $urlRouterProvider.otherwise('/');
    
    $stateProvider     
      .state('home', {
        url: '/',
        templateUrl: 'templates/home/home.tpl.html',
        controller: 'HomeCtrl',
        controllerAs: 'vm'
      });

  }

  // MAIN CONTROLLER
  function MainCtrl(){
      
    var vm = this;

    vm.templateUrl = {
      header: 'templates/header/header.tpl.html',
      footer: 'templates/footer/footer.tpl.html'
    };

  }

})();