'use strict';

describe('component: pageSidebar', function() {
  var component;

  beforeEach(module('boilerplate.components'));

  beforeEach(inject(function(_$componentController_) {
    component = _$componentController_('pageSidebar', null, {});
  }));

  it('should create component successfully', function() {
    expect(component).not.toBeNull();
  });
});

