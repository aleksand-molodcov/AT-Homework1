const assert = require('assert');
const {facktorial} = require('./src/index.js');

it('should return facktorial of number', () => {
  assert.strictEqual(facktorial('3'), 6);
});

it('should return facktorial of number', () => {
  assert.strictEqual(facktorial('4'), 24);
});

it('should return facktorial of number', () => {
  assert.strictEqual(facktorial('5'), 120);
});
