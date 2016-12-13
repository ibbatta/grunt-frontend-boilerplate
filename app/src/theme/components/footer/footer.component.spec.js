'use strict';

describe('component: pageFooter', function() {

  var $componentController;
  var componentBind = { author: 'Fake author', year: '2016' };

  beforeEach(module('boilerplate.theme.components'));

  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_('pageFooter', null, { author: componentBind.author, year: componentBind.year });
  }));

  it('should set author', function() {
    expect($componentController.author).toEqual(componentBind.author);
  });

  it('should set year', function() {
    expect($componentController.year).toEqual(componentBind.year);
  });
});

