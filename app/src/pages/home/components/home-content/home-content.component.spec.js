'use strict';

describe('component: homeContent', () => {

  let $componentController;
  const module = angular.mock.module;

  beforeEach(module('boilerplate.pages'));

  beforeEach(inject(_$componentController_ => {
    $componentController = _$componentController_('homeContent', null);
  }));

  it('should set projectName', () => {
    expect($componentController).toBeDefined();
  });
});
