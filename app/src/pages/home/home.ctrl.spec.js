'use strict';

describe('home controller', function() {

  var $controller;

  beforeEach(module('boilerplate.pages'));

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_('HomeCtrl');
  }));

  it('should be created successfully', function() {
    expect($controller).toBeDefined();
  });

});

