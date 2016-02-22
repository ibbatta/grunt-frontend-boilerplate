describe('config', function() {

    var urlRouterProvider;
    
    beforeEach(function () {
        module('ui.router', function ($urlRouterProvider) {
            urlRouterProvider = $urlRouterProvider;
            spyOn(urlRouterProvider, 'otherwise');
        });
        module('gruntWebapp');
        inject();
    });
    
    it('should set default route', function() {
        expect(urlRouterProvider.otherwise).toHaveBeenCalledWith('/');
    });
  
});