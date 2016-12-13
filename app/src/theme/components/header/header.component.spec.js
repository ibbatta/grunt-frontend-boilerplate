'use strict';

describe('component: pageHeader', function() {

  var $componentController;
  var componentBind = { projectName: 'Fake title' };

  beforeEach(module('boilerplate.theme.components'));

  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_('pageHeader', null, componentBind);
  }));

  it('should set project name', function() {
    expect($componentController.projectName).toEqual(componentBind.projectName);
  });

});

