'use strict';

describe('home controller', () => {

  let $controller;
  const module = angular.mock.module;

  beforeEach(module('boilerplate.pages'));

  beforeEach(inject(_$controller_ => {
    $controller = _$controller_('HomeCtrl');
  }));

  it('should be created successfully', () => {
    expect($controller).toBeDefined();
  });

});
