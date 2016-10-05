'use strict';

describe('pages module', function() {

  var urlRouterProvider;

  beforeEach(function() {
    module('ui.router', function($urlRouterProvider) {
      urlRouterProvider = $urlRouterProvider;
      spyOn(urlRouterProvider, 'otherwise');
    });
    module('boilerplate.pages');
    inject();
  });

  it('should set default route', function() {
    expect(urlRouterProvider.otherwise).toHaveBeenCalledWith('/');
  });

});

