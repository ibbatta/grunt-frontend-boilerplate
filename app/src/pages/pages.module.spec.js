'use strict';

describe('pages module', () => {

  let urlRouterProvider;
  const module = angular.mock.module;

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
