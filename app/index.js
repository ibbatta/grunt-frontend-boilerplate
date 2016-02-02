angular
    .module('gruntWebapp', [
        'ui.router',
        'ngAnimate'
    ])
    .controller('MainCtrl', MainCtrl)
    .config(function($stateProvider, $urlRouterProvider) {
     
      $urlRouterProvider.otherwise("/");
      
      $stateProvider     
        .state('home', {
          url: "/",
          templateUrl: "view/home/home.tpl.html",
          controller: HomeCtrl,
          controllerAs: 'home'
        });

    });


function MainCtrl($scope){
    
    var vm = this;

    vm.templateUrl = {
      header: 'view/header/header.tpl.html',
      footer: 'view/footer/footer.tpl.html'
    }

}