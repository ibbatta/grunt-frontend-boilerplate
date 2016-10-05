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

  it('shoud set offCanvasActivate', function() {
    expect(controller.offCanvasActivate).toBe(false);
  });

  describe('showOffCanvas function', function() {
    it('should exist', function() {
      expect(controller.showOffCanvas).not.toEqual(null);
    });

    it('should toggle offCanvasActivate', function() {
      controller.showOffCanvas();

      expect(controller.offCanvasActivate).toBe(true);
    });
  });

});

