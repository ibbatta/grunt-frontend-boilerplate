describe('CONTROLLER: HomeCtrl', function() {

  describe('Describe HomeCtrl', function() {
    var vm;

    beforeEach(module('gruntWebapp'));

    beforeEach(inject(function($controller) {
      vm = $controller('HomeCtrl');
    }));

    it('expect description', function() {
      expect(vm.test).toBeNull();
    });

  });

});