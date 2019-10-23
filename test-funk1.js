const assert = require('assert');
const {funk1} = require('./src/index.js');

it('should return sum of all keys in object', () => {
  assert.strictEqual(funk1({first: 1, second: 2, third: 3}), 6);
});

it('should return sum of all keys in object', () => {
  assert.strictEqual(funk1({first: 5, second: 5, third: 1}), 11);
});

it('should return sum of all keys in object', () => {
  assert.strictEqual(funk1({first: 4, second: 2, third: 3}), 9);
});

it('should return sum of all keys in object', () => {
  assert.strictEqual(funk1({first: 2, second: 5, third: 3}), 10);
});

it('should return sum of all keys in object', () => {
  assert.strictEqual(funk1({first: 6, second: 2, third: 3}), 11);
});