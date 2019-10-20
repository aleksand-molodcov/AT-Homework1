const assert = require('assert');
const {stepen} = require('./src/index.js');

it('should produce a number to a power', () => {
  assert.strictEqual(stepen('2', '3'), 8);
});

it('should produce a number to a power', () => {
  assert.strictEqual(stepen('5', '4'), 625);
});

it('should produce a number to a power', () => {
  assert.strictEqual(stepen('4', '2'), 16);
});

it('should produce a number to a power', () => {
  assert.strictEqual(stepen('3', '3'), 27);
});
