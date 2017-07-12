'use strict';

describe('component: pageHeader', () => {

  let $componentController;
  const module = angular.mock.module;
  const componentBind = {
    projectName: 'Fake title'
  };

  beforeEach(module('boilerplate.theme.components'));

  beforeEach(inject(_$componentController_ => {
    $componentController = _$componentController_('pageHeader', null, componentBind);
  }));

  it('should set project name', () => {
    expect($componentController.projectName).toEqual(componentBind.projectName);
  });

});
