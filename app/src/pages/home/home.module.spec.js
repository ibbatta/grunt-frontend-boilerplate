'use strict';

describe('home module', function() {

  describe('home route', function() {

    let $state;

    beforeEach(module('boilerplate.pages'));

    beforeEach(inject(_$state_ => {
      $state = _$state_.get('home');
    }));

    it('should map home state to home template', () => {
      expect($state.templateUrl).toEqual('src/pages/home/home.tpl.html');
    });

    it('should map home state to / url', () => {
      expect($state.url).toEqual('/');
    });

  });

});
