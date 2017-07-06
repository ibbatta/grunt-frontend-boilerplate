'use strict';

describe('pages module', () => {

  var urlRouterProvider;

  beforeEach(() => {
    module('ui.router', $urlRouterProvider => {
      urlRouterProvider = $urlRouterProvider;
      spyOn(urlRouterProvider, 'otherwise');
    });
    module('boilerplate.pages');
    inject();
  });

  it('should set default route', () => {
    expect(urlRouterProvider.otherwise).toHaveBeenCalledWith('/');
  });

});
