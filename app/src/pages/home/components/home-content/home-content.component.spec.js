'use strict';

describe('component: homeContent', function() {

  var $componentController;

  beforeEach(module('boilerplate.pages'));

  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_('homeContent', null);
  }));

  it('should set projectName', function() {
    expect($componentController).toBeDefined();
  });
});

