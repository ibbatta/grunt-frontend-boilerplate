'use strict';

describe('home controller', function() {
  var controller;

  beforeEach(module('boilerplate.pages'));

  beforeEach(inject(function($controller) {
    controller = $controller('HomeCtrl');
  }));

  it('should be created successfully', function() {
    expect(controller).toBeDefined();
  });

});

