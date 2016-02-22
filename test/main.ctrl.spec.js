describe('CONTROLLER: MainCtrl', function() {

  describe('Describe MainCtrl', function() {
    var vm;

    beforeEach(module('gruntWebapp'));

    beforeEach(inject(function($controller) {
      vm = $controller('MainCtrl');
    }));

    it('should be created successfully', function () {
        expect(vm).toBeDefined();
    });
    
    it('shoud have templateUrl', function() {
      expect(vm.templateUrl).toEqual({
          header: 'templates/header/header.tpl.html',
          footer: 'templates/footer/footer.tpl.html'
      });
    });

  });

});