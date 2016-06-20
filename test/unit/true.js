// this is just a test to check general karma functionality

import 'aurelia-polyfills';

describe('karma es5', function() {
  it('runs', function() {
    expect(true).toBe(true);
  });
});

describe('karma es6', () => {
  it('runs', () => {
    expect(true).toBe(true);
  });
});
