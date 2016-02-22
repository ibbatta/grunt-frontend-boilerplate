describe('ROUTES: home', function() {

  describe('Describe hme route', function() {
    var state;

    beforeEach(module('gruntWebapp'));

    beforeEach(inject(function($state) {
      state = $state.get('home');
    }));

    it('should map home state to home template', function () {
        expect(state.templateUrl).toEqual('templates/home/home.tpl.html');
    });
    
    it('should map home state to / url', function () {
        expect(state.url).toEqual('/');
    });

  });

});