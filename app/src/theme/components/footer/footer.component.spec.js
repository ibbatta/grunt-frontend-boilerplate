'use strict';

describe('component: pageFooter', () => {

  let $componentController;
  const componentBind = {
    author: 'Fake author',
    year: '2016'
  };

  beforeEach(module('boilerplate.theme.components'));

  beforeEach(inject(_$componentController_ => {
    $componentController = _$componentController_('pageFooter', null, {
      author: componentBind.author,
      year: componentBind.year
    });
  }));

  it('should set author', () => {
    expect($componentController.author).toEqual(componentBind.author);
  });

  it('should set year', () => {
    expect($componentController.year).toEqual(componentBind.year);
  });
});
