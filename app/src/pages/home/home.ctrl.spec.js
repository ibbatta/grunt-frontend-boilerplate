'use strict';

describe('home controller', () => {

  let $controller;

  beforeEach(module('boilerplate.pages'));

  beforeEach(inject(_$controller_ => {
    $controller = _$controller_('HomeCtrl');
  }));

  it('should be created successfully', () => {
    expect($controller).toBeDefined();
  });

});
