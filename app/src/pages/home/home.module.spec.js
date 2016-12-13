'use strict';

describe('home module', function() {

  describe('home route', function() {

    var $state;

    beforeEach(module('boilerplate.pages'));

    beforeEach(inject(function(_$state_) {
      $state = _$state_.get('home');
    }));

    it('should map home state to home template', function() {
      expect($state.templateUrl).toEqual('src/pages/home/home.tpl.html');
    });

    it('should map home state to / url', function() {
      expect($state.url).toEqual('/');
    });

  });

});

