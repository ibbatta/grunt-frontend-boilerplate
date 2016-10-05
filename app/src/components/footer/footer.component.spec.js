'use strict';

describe('component: pageFooter', function() {
  var component;
  var author = 'Fake author';
  var year = '2016';

  beforeEach(module('boilerplate.components'));

  beforeEach(inject(function(_$componentController_) {
    component = _$componentController_('pageFooter', null, { author: author, year: year });
  }));

  it('should set author', function() {
    expect(component.author).toEqual(author);
  });

  it('should set year', function() {
    expect(component.year).toEqual(year);
  });
});

