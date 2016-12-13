'use strict';

describe('component: pageHeader', function() {
  var component;
  var projectName = 'Fake project';

  beforeEach(module('boilerplate.theme.components'));

  beforeEach(inject(function(_$componentController_) {
    component = _$componentController_('pageHeader', null, { projectName: projectName });
  }));

  it('should set projectName', function() {
    expect(component.projectName).toEqual(projectName);
  });
});
