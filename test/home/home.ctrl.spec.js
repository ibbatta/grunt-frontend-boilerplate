describe('CONTROLLER: HomeCtrl', function() {

  describe('Describe HomeCtrl', function() {
    var vm;

    beforeEach(module('gruntWebapp'));

    beforeEach(inject(function($controller) {
      vm = $controller('HomeCtrl');
    }));

    it('should be created successfully', function () {
        expect(vm).toBeDefined();
    });
    
    it('shoud have test', function() {
      expect(vm.test).toBeNull();
    });

  });

});