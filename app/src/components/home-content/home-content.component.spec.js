'use strict';

describe('component: homeContent', function() {
  var component;
  var projectName = 'Fake project';

  beforeEach(module('boilerplate.components'));

  beforeEach(inject(function(_$componentController_) {
    component = _$componentController_('homeContent', null, { projectName: projectName });
  }));

  it('should set projectName', function() {
    expect(component.projectName).toEqual(projectName);
  });
});

