'use strict';

describe('home module', function() {

  describe('home route', function() {
    var state;

    beforeEach(module('boilerplate.pages'));

    beforeEach(inject(function($state) {
      state = $state.get('home');
    }));

    it('should map home state to home template', function() {
      expect(state.templateUrl).toEqual('src/home/home.tpl.html');
    });

    it('should map home state to / url', function() {
      expect(state.url).toEqual('/');
    });

  });

});

