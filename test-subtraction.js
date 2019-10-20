const assert = require('assert');
const {subtraction} = require('./src/index.js');

it('should subtract 2 numbers and return 8', () => {
  assert.strictEqual(subtraction('16', '8'), '8');
});

it('should subtract 2 numbers and return 10', () => {
  assert.strictEqual(subtraction('160', '60'), '100');
});

it('should subtract 2 numbers and return 5', () => {
  assert.strictEqual(subtraction('50', '15'), '35');
});

it('should subtract 2 numbers and return 6', () => {
  assert.strictEqual(subtraction('36', '6'), '30');
});